import os
import pandas as pd
import chromadb
from sentence_transformers import SentenceTransformer

CSV_PATH = "data/school_faq.csv"
CHROMA_PATH = "chroma_db"
COLLECTION_NAME = "genesis_school_faq"

def main():
    if not os.path.exists(CSV_PATH):
        raise FileNotFoundError(f"CSV file not found: {CSV_PATH}")

    df = pd.read_csv(CSV_PATH)

    if "Question" not in df.columns or "Answer" not in df.columns:
        raise ValueError("CSV must contain Question and Answer columns.")

    df["Question"] = df["Question"].astype(str).str.strip()
    df["Answer"] = df["Answer"].astype(str).str.strip()

    df = df[(df["Question"] != "") & (df["Answer"] != "")]
    df = df[~df["Question"].str.lower().str.contains("questions|question|category", na=False)]
    df = df.reset_index(drop=True)

    client = chromadb.PersistentClient(path=CHROMA_PATH)

    try:
        client.delete_collection(name=COLLECTION_NAME)
    except:
        pass

    collection = client.get_or_create_collection(name=COLLECTION_NAME)

    model = SentenceTransformer("all-MiniLM-L6-v2")

    documents = []
    metadatas = []
    ids = []

    for i, row in df.iterrows():
        question = row["Question"]
        answer = row["Answer"]

        # richer text for embeddings
        text_for_embedding = f"School FAQ\nQuestion: {question}\nAnswer: {answer}"

        documents.append(text_for_embedding)
        metadatas.append({
            "question": question,
            "answer": answer
        })
        ids.append(f"faq-{i}")

    embeddings = model.encode(documents, convert_to_numpy=True).tolist()

    collection.add(
        ids=ids,
        documents=documents,
        metadatas=metadatas,
        embeddings=embeddings
    )

    print(f"Uploaded {len(ids)} records successfully.")

if __name__ == "__main__":
    main()