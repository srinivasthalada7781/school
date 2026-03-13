from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates

import chromadb
from sentence_transformers import SentenceTransformer

import threading
import re
from rapidfuzz import process


CHROMA_PATH = "chroma_db"
COLLECTION_NAME = "genesis_school_faq"


app = FastAPI(title="Genesis School Chatbot")

templates = Jinja2Templates(directory="templates")

client = chromadb.PersistentClient(path=CHROMA_PATH)
collection = client.get_or_create_collection(name=COLLECTION_NAME)


model = None
model_loading = False


GREETINGS = {
    "hi","hello","hey","hii","helo",
    "good morning","good afternoon","good evening",
    "assalamualaikum","salam"
}


TOPIC_HINTS = {
    "fee":["fee","fees","payment","amount","cost","installment"],
    "admission":["admission","apply","join","enroll","documents","seat"],
    "transport":["transport","bus","pickup","drop","route"],
    "timings":["timing","timings","time","start","end"],
    "activities":["activity","activities","sports","music","dance","art"],
    "curriculum":["curriculum","stem","montessori","robotics","coding"],
    "contact":["contact","phone","number","website","email"],
    "facilities":["facility","facilities","lab","library","playground"]
}


# Load FAQ questions for spelling correction
def load_faq_questions():
    data = collection.get()
    if data and "metadatas" in data:
        return [item["question"] for item in data["metadatas"]]
    return []


faq_questions = load_faq_questions()


def correct_spelling(query):

    if not faq_questions:
        return query

    match, score, _ = process.extractOne(query, faq_questions)

    if score > 70:
        return match

    return query


def load_model_in_background():
    global model, model_loading

    try:
        model = SentenceTransformer("all-MiniLM-L6-v2")
        print("Model loaded successfully")

    except Exception as e:
        print("MODEL ERROR:",e)

    finally:
        model_loading = False


def ensure_model_loading():

    global model_loading

    if model is None and not model_loading:

        model_loading = True

        thread = threading.Thread(
            target=load_model_in_background,
            daemon=True
        )

        thread.start()


def is_greeting(text):

    return text.strip().lower() in GREETINGS



def normalize_query(query):

    q = query.lower().strip()

    if any(w in q for w in ["fee","fees","payment","cost","amount"]):
        q += " fee structure school fee admission fee"

    if any(w in q for w in ["admission","join","apply","enroll"]):
        q += " admission process documents apply school"

    if any(w in q for w in ["bus","transport","pickup","drop"]):
        q += " transport bus facility route safety"

    if any(w in q for w in ["time","timing","timings"]):
        q += " school timings start end"

    if any(w in q for w in ["activity","activities","sports","music","dance"]):
        q += " extracurricular activities sports art"

    return q



def split_questions(user_query):

    parts = re.split(r'\?+|\band\b|,', user_query)

    return [p.strip() for p in parts if p.strip()]



def detect_topics(text):

    text = text.lower()

    found = set()

    for topic,keywords in TOPIC_HINTS.items():

        if any(k in text for k in keywords):
            found.add(topic)

    return found



def topic_boost(user_query, metadata):

    user_topics = detect_topics(user_query)

    faq_text = metadata.get("question","")+" "+metadata.get("answer","")

    faq_topics = detect_topics(faq_text)

    return len(user_topics.intersection(faq_topics))



def search_single_question(user_query):

    if model is None:

        return {
            "answer":"Assistant is preparing. Please try again shortly.",
            "matched_question":None,
            "matched_faqs":[]
        }


    user_query = correct_spelling(user_query)

    normalized_query = normalize_query(user_query)


    query_embedding = model.encode(
        [normalized_query],
        convert_to_numpy=True
    ).tolist()[0]


    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=5
    )


    metadatas = results.get("metadatas",[[]])[0]
    distances = results.get("distances",[[]])[0]


    if not metadatas:

        return {
            "answer":"Sorry, I couldn't find that information.",
            "matched_question":None,
            "matched_faqs":[]
        }


    ranked = []


    for i,meta in enumerate(metadatas):

        dist = distances[i]

        boost = topic_boost(user_query,meta)

        adjusted = dist - (boost*0.08)

        ranked.append({
            "meta":meta,
            "dist":dist,
            "score":adjusted
        })


    ranked.sort(key=lambda x:x["score"])


    best = ranked[0]


    matched_faqs = []


    for item in ranked[:5]:

        m = item["meta"]

        matched_faqs.append({
            "question":m.get("question"),
            "answer":m.get("answer")
        })


    return {
        "answer":best["meta"]["answer"],
        "matched_question":best["meta"]["question"],
        "matched_faqs":matched_faqs
    }



def get_best_answer(user_query):

    try:

        if is_greeting(user_query):

            return {
                "answer":"Hello! I am the Genesis School Assistant. How can I help you today?",
                "matched_question":None,
                "matched_faqs":[]
            }


        ensure_model_loading()


        if model is None:

            return {
                "answer":"Assistant is starting. Please try again shortly.",
                "matched_question":None,
                "matched_faqs":[]
            }


        questions = split_questions(user_query)


        if len(questions) == 1:

            return search_single_question(questions[0])


        answers = []
        related = []
        seen=set()


        for q in questions[:3]:

            result = search_single_question(q)

            answers.append(result["answer"])


            for r in result["matched_faqs"]:

                if r["question"] not in seen:

                    related.append(r)
                    seen.add(r["question"])


        final_answer="\n\n".join(answers)


        return {
            "answer":final_answer,
            "matched_question":None,
            "matched_faqs":related[:6]
        }


    except Exception as e:

        print("ERROR:",e)

        return {
            "answer":"Something went wrong. Please try again.",
            "matched_question":None,
            "matched_faqs":[]
        }



@app.get("/",response_class=HTMLResponse)
async def home(request:Request):

    return templates.TemplateResponse(
        "index.html",
        {"request":request}
    )



@app.post("/chat")
async def chat(message:str=Form(...)):

    result = get_best_answer(message)

    return JSONResponse(result)