export interface ChatMessage {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export interface FAQItem {
    question: string;
    answer: string;
    keywords: string[];
    category: string;
}


export const FAQ_DATA: FAQItem[] = [
    {
        "category": "Curriculum",
        "question": "What is Genesis International Montessori STEM School?",
        "answer": "Genesis International Montessori & STEM School is a progressive educational institution that combines Montessori learning with STEM education. The school focuses on developing creativity, critical thinking, practical skills, and strong academic foundations for children.",
        "keywords": [
            "what",
            "genesis",
            "international",
            "montessori",
            "stem",
            "school?"
        ]
    },
    {
        "category": "General",
        "question": "Where is the school located?",
        "answer": "The school is located at: Visakha A Colony, Near Arch, Opposite SBI, Peddapadu Road, Srikakulam Town, Andhra Pradesh, India.",
        "keywords": [
            "where",
            "school",
            "located?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "What curriculum does the school follow?",
        "answer": "The school follows a blended curriculum integrating Montessori education and STEM-based learning. The academic framework aligns with ICSE standards while also meeting State Board recognition requirements.",
        "keywords": [
            "what",
            "curriculum",
            "does",
            "school",
            "follow?"
        ]
    },
    {
        "category": "General",
        "question": "Is the school affiliated with any board?",
        "answer": "The school follows an ICSE-oriented curriculum and is working towards formal board recognition under appropriate education authorities.",
        "keywords": [
            "school",
            "affiliated",
            "with",
            "board?"
        ]
    },
    {
        "category": "General",
        "question": "When was the school established?",
        "answer": "Genesis International Montessori & STEM School was established with the vision of providing innovative and holistic education for modern learners.",
        "keywords": [
            "when",
            "school",
            "established?"
        ]
    },
    {
        "category": "General",
        "question": "What makes this school different from other schools?",
        "answer": "The school integrates Montessori learning, STEM education, robotics, AI exposure, practical activities, and creative learning environments to help children become future-ready learners.",
        "keywords": [
            "what",
            "makes",
            "this",
            "school",
            "different",
            "from",
            "other",
            "schools?"
        ]
    },
    {
        "category": "General",
        "question": "What is the vision and mission of the school?",
        "answer": "The vision of Genesis School is to nurture confident, creative, and responsible individuals through holistic education that blends academic excellence with practical life skills.",
        "keywords": [
            "what",
            "vision",
            "mission",
            "school?"
        ]
    },
    {
        "category": "General",
        "question": "What grades or classes does the school offer?",
        "answer": "Genesis School offers programs from Day Care and Pre-Primary up to Class 7.",
        "keywords": [
            "what",
            "grades",
            "classes",
            "does",
            "school",
            "offer?"
        ]
    },
    {
        "category": "General",
        "question": "Is the school co-educational?",
        "answer": "Yes, Genesis School is a co-educational institution welcoming both boys and girls.",
        "keywords": [
            "school",
            "co-educational?"
        ]
    },
    {
        "category": "General",
        "question": "What languages are taught at the school?",
        "answer": "English is the medium of instruction. Telugu and Hindi are taught as languages, and foreign languages such as Spanish or German may also be introduced.",
        "keywords": [
            "what",
            "languages",
            "taught",
            "school?"
        ]
    },
    {
        "category": "Admissions",
        "question": "What is the admission process?",
        "answer": "Parents can visit the school office, collect the admission form, submit required documents, and complete the admission procedure with the guidance of the school administration.",
        "keywords": [
            "what",
            "admission",
            "process?"
        ]
    },
    {
        "category": "Admissions",
        "question": "When do admissions open?",
        "answer": "Admissions typically open before the beginning of each academic year. Parents are encouraged to contact the school office for the latest updates.",
        "keywords": [
            "when",
            "admissions",
            "open?"
        ]
    },
    {
        "category": "Admissions",
        "question": "What documents are required for admission?",
        "answer": "Required documents usually include: Birth Certificate, Passport-size photographs, Aadhaar card, Previous school records, and Parent ID proof.",
        "keywords": [
            "what",
            "documents",
            "required",
            "admission?"
        ]
    },
    {
        "category": "Admissions",
        "question": "Is there an entrance test for admission?",
        "answer": "For higher classes, the school may conduct a simple assessment to understand the child's academic level.",
        "keywords": [
            "there",
            "entrance",
            "test",
            "admission?"
        ]
    },
    {
        "category": "General",
        "question": "Is there an interview for parents or students?",
        "answer": "Yes. The school may conduct a brief interaction with parents and students to understand the child's learning needs.",
        "keywords": [
            "there",
            "interview",
            "parents",
            "students?"
        ]
    },
    {
        "category": "Admissions",
        "question": "What is the minimum age for admission?",
        "answer": "Age requirements follow standard educational guidelines. Parents can contact the school office for the specific age criteria.",
        "keywords": [
            "what",
            "minimum",
            "admission?"
        ]
    },
    {
        "category": "Admissions",
        "question": "How can I apply for admission?",
        "answer": "Parents can apply by visiting the school office or contacting the school administration.",
        "keywords": [
            "apply",
            "admission?"
        ]
    },
    {
        "category": "Admissions",
        "question": "Is there an online admission form?",
        "answer": "Admission enquiries can be made through the school website or by contacting the school office.",
        "keywords": [
            "there",
            "online",
            "admission",
            "form?"
        ]
    },
    {
        "category": "Fees",
        "question": "Is there an admission fee?",
        "answer": "Fee details are available at the school office. Parents are requested to visit the office for complete information.",
        "keywords": [
            "there",
            "admission",
            "fee?"
        ]
    },
    {
        "category": "Admissions",
        "question": "How long does the admission process take?",
        "answer": "Once documents are submitted and the form is completed, the admission process can usually be completed within a short time.",
        "keywords": [
            "long",
            "does",
            "admission",
            "process",
            "take?"
        ]
    },
    {
        "category": "General",
        "question": "Can I schedule a campus visit?",
        "answer": "Yes. Parents are welcome to visit the campus and meet the school administration.",
        "keywords": [
            "schedule",
            "campus",
            "visit?"
        ]
    },
    {
        "category": "Admissions",
        "question": "Are mid-year admissions allowed?",
        "answer": "Mid-year admissions may be allowed depending on seat availability.",
        "keywords": [
            "mid-year",
            "admissions",
            "allowed?"
        ]
    },
    {
        "category": "Fees",
        "question": "What is the fee structure?",
        "answer": "Detailed fee information is available at the school office. Parents are requested to visit the office for complete fee details.",
        "keywords": [
            "what",
            "structure?"
        ]
    },
    {
        "category": "Fees",
        "question": "Is there an admission fee?",
        "answer": "Yes. Admission fee details are provided at the school office.",
        "keywords": [
            "there",
            "admission",
            "fee?"
        ]
    },
    {
        "category": "Fees",
        "question": "What are the annual fees?",
        "answer": "Annual fee details can be obtained from the school administration.",
        "keywords": [
            "what",
            "annual",
            "fees?"
        ]
    },
    {
        "category": "General",
        "question": "Are there any additional charges?",
        "answer": "Certain activities or services may involve additional charges. Please contact the school office for details.",
        "keywords": [
            "there",
            "additional",
            "charges?"
        ]
    },
    {
        "category": "Fees",
        "question": "Is the fee refundable?",
        "answer": "Fee policies are explained during the admission process.",
        "keywords": [
            "refundable?"
        ]
    },
    {
        "category": "Fees",
        "question": "What payment methods are accepted?",
        "answer": "Parents can pay fees through approved payment methods as specified by the school office.",
        "keywords": [
            "what",
            "payment",
            "methods",
            "accepted?"
        ]
    },
    {
        "category": "Fees",
        "question": "Can fees be paid in installments?",
        "answer": "Installment options may be available. Please contact the school office for details.",
        "keywords": [
            "fees",
            "paid",
            "installments?"
        ]
    },
    {
        "category": "General",
        "question": "Is there any sibling discount?",
        "answer": "Currently, the school does not offer sibling discounts.",
        "keywords": [
            "there",
            "sibling",
            "discount?"
        ]
    },
    {
        "category": "General",
        "question": "Are scholarships available?",
        "answer": "Scholarship programs may be announced in the future.",
        "keywords": [
            "scholarships",
            "available?"
        ]
    },
    {
        "category": "Fees",
        "question": "Is transport included in the fee?",
        "answer": "Transport is a separate service and not included in the school fee.",
        "keywords": [
            "transport",
            "included",
            "fee?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "Does the school follow Montessori education?",
        "answer": "Yes. The school integrates Montessori methods especially in early childhood education.",
        "keywords": [
            "does",
            "school",
            "follow",
            "montessori",
            "education?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "What is the STEM program?",
        "answer": "STEM stands for Science, Technology, Engineering, and Mathematics. It encourages practical learning and innovation.",
        "keywords": [
            "what",
            "stem",
            "program?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "How does the school integrate STEM into learning?",
        "answer": "Students participate in hands-on activities such as robotics, experiments, and creative projects.",
        "keywords": [
            "does",
            "school",
            "integrate",
            "stem",
            "into",
            "learning?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "Are practical activities included in the curriculum?",
        "answer": "Yes. Practical learning is a key part of the Genesis learning approach.",
        "keywords": [
            "practical",
            "activities",
            "included",
            "curriculum?"
        ]
    },
    {
        "category": "General",
        "question": "How are students assessed?",
        "answer": "Students are evaluated through continuous assessments, projects, and activities.",
        "keywords": [
            "students",
            "assessed?"
        ]
    },
    {
        "category": "General",
        "question": "Are exams or only continuous evaluation?",
        "answer": "Yes. Exams and continuous assessments are conducted depending on the grade level.",
        "keywords": [
            "exams",
            "only",
            "continuous",
            "evaluation?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school offer project-based learning?",
        "answer": "Yes. Students participate in project-based learning activities to build practical understanding.",
        "keywords": [
            "does",
            "school",
            "offer",
            "project-based",
            "learning?"
        ]
    },
    {
        "category": "General",
        "question": "Are coding or robotics taught?",
        "answer": "Yes. Robotics and basic technology exposure are part of the learning program.",
        "keywords": [
            "coding",
            "robotics",
            "taught?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "What subjects are taught?",
        "answer": "Subjects include English, Mathematics, Science, Social Studies, Languages, and STEM activities.",
        "keywords": [
            "what",
            "subjects",
            "taught?"
        ]
    },
    {
        "category": "Timings",
        "question": "What are the school timings?",
        "answer": "School timings are from 8:30 AM to 3:30 PM.",
        "keywords": [
            "what",
            "school",
            "timings?"
        ]
    },
    {
        "category": "Timings",
        "question": "What time does school start and end?",
        "answer": "The school starts at 8:30 AM and ends at 3:30 PM.",
        "keywords": [
            "what",
            "time",
            "does",
            "school",
            "start",
            "end?"
        ]
    },
    {
        "category": "General",
        "question": "Are there half-day programs?",
        "answer": "Certain early childhood programs may have flexible timings.",
        "keywords": [
            "there",
            "half-day",
            "programs?"
        ]
    },
    {
        "category": "General",
        "question": "Are after-school programs available?",
        "answer": "Additional programs may be offered based on student interest.",
        "keywords": [
            "after-school",
            "programs",
            "available?"
        ]
    },
    {
        "category": "Timings",
        "question": "What are the holiday timings?",
        "answer": "The school follows a standard academic calendar for holidays.",
        "keywords": [
            "what",
            "holiday",
            "timings?"
        ]
    },
    {
        "category": "General",
        "question": "What facilities are available?",
        "answer": "Facilities include Montessori activity rooms, STEM learning areas, Robotics labs, Computer lab, Library, Playground, and CCTV security.",
        "keywords": [
            "what",
            "facilities",
            "available?"
        ]
    },
    {
        "category": "Facilities",
        "question": "Does the school have science labs?",
        "answer": "Yes, STEM learning areas and practical labs are available.",
        "keywords": [
            "does",
            "school",
            "have",
            "science",
            "labs?"
        ]
    },
    {
        "category": "Facilities",
        "question": "Are there computer labs?",
        "answer": "Yes, the school provides computer lab facilities.",
        "keywords": [
            "there",
            "computer",
            "labs?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school have a library?",
        "answer": "Yes, the school has a library.",
        "keywords": [
            "does",
            "school",
            "have",
            "library?"
        ]
    },
    {
        "category": "General",
        "question": "Are there sports facilities?",
        "answer": "Yes, sports facilities including a playground and sand pit are available.",
        "keywords": [
            "there",
            "sports",
            "facilities?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school have smart classrooms?",
        "answer": "Yes. Smart classroom technology is used in teaching.",
        "keywords": [
            "does",
            "school",
            "have",
            "smart",
            "classrooms?"
        ]
    },
    {
        "category": "Facilities",
        "question": "Is there a playground?",
        "answer": "Yes, the school has a playground.",
        "keywords": [
            "there",
            "playground?"
        ]
    },
    {
        "category": "General",
        "question": "Are there activity rooms?",
        "answer": "Yes, there are dedicated activity rooms for Montessori learning.",
        "keywords": [
            "there",
            "activity",
            "rooms?"
        ]
    },
    {
        "category": "Facilities",
        "question": "Is there CCTV security?",
        "answer": "Yes. The school maintains CCTV surveillance across the campus.",
        "keywords": [
            "there",
            "cctv",
            "security?"
        ]
    },
    {
        "category": "General",
        "question": "Is there a medical room?",
        "answer": "The school ensures a safe environment and monitors student health.",
        "keywords": [
            "there",
            "medical",
            "room?"
        ]
    },
    {
        "category": "Transport",
        "question": "Does the school provide transport?",
        "answer": "Yes, transport is available for students living far away or for working parents.",
        "keywords": [
            "does",
            "school",
            "provide",
            "transport?"
        ]
    },
    {
        "category": "Transport",
        "question": "Which areas does the transport cover?",
        "answer": "Transport routes depend on student demand. Please enquire at the office.",
        "keywords": [
            "which",
            "areas",
            "does",
            "transport",
            "cover?"
        ]
    },
    {
        "category": "Fees",
        "question": "What are the transport fees?",
        "answer": "Transport fees are separate and available at the school office.",
        "keywords": [
            "what",
            "transport",
            "fees?"
        ]
    },
    {
        "category": "Transport",
        "question": "Is the transport safe?",
        "answer": "Yes. Student safety is a priority in all transport services.",
        "keywords": [
            "transport",
            "safe?"
        ]
    },
    {
        "category": "Transport",
        "question": "Are buses GPS tracked?",
        "answer": "Safety measures are monitored to ensure student security.",
        "keywords": [
            "buses",
            "tracked?"
        ]
    },
    {
        "category": "Transport",
        "question": "Are there bus attendants?",
        "answer": "Safety protocols include supervision during transit.",
        "keywords": [
            "there",
            "attendants?"
        ]
    },
    {
        "category": "General",
        "question": "What qualifications do teachers have?",
        "answer": "Teachers are qualified educators trained in modern teaching methods.",
        "keywords": [
            "what",
            "qualifications",
            "teachers",
            "have?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "Are teachers trained in Montessori?",
        "answer": "Yes. Teachers involved in early education are trained in Montessori learning methods.",
        "keywords": [
            "teachers",
            "trained",
            "montessori?"
        ]
    },
    {
        "category": "General",
        "question": "What is the student-teacher ratio?",
        "answer": "The student-teacher ratio is approximately 1:15, ensuring personalized attention.",
        "keywords": [
            "what",
            "student-teacher",
            "ratio?"
        ]
    },
    {
        "category": "General",
        "question": "How experienced are the teachers?",
        "answer": "Teachers are qualified educators with experience in modern and Montessori methods.",
        "keywords": [
            "experienced",
            "teachers?"
        ]
    },
    {
        "category": "General",
        "question": "How does the school support training?",
        "answer": "The school encourages continuous professional development for teachers.",
        "keywords": [
            "does",
            "school",
            "support",
            "training?"
        ]
    },
    {
        "category": "General",
        "question": "What safety measures are in place?",
        "answer": "The school maintains strong safety measures including CCTV surveillance and security guards.",
        "keywords": [
            "what",
            "safety",
            "measures",
            "place?"
        ]
    },
    {
        "category": "General",
        "question": "Is the school campus secure?",
        "answer": "Yes. The school ensures a safe and monitored learning environment.",
        "keywords": [
            "school",
            "campus",
            "secure?"
        ]
    },
    {
        "category": "Facilities",
        "question": "Are there CCTV cameras?",
        "answer": "Yes. The school maintains CCTV surveillance across the campus.",
        "keywords": [
            "there",
            "cctv",
            "cameras?"
        ]
    },
    {
        "category": "General",
        "question": "How does the school ensure safety?",
        "answer": "Safety is ensured through CCTV, security guards, and secure access protocols.",
        "keywords": [
            "does",
            "school",
            "ensure",
            "safety?"
        ]
    },
    {
        "category": "General",
        "question": "Are staff background checks conducted?",
        "answer": "Yes, safety protocols include staff monitoring and secure hiring.",
        "keywords": [
            "staff",
            "background",
            "checks",
            "conducted?"
        ]
    },
    {
        "category": "General",
        "question": "What emergency procedures are followed?",
        "answer": "The school follows established safety and emergency protocols.",
        "keywords": [
            "what",
            "emergency",
            "procedures",
            "followed?"
        ]
    },
    {
        "category": "General",
        "question": "What extracurricular activities are offered?",
        "answer": "Activities include robotics projects, art and craft, music, dance, and cultural celebrations.",
        "keywords": [
            "what",
            "extracurricular",
            "activities",
            "offered?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school offer sports programs?",
        "answer": "Yes, sports programs and playground activities are offered.",
        "keywords": [
            "does",
            "school",
            "offer",
            "sports",
            "programs?"
        ]
    },
    {
        "category": "General",
        "question": "Are cultural events conducted?",
        "answer": "Yes. Cultural events and celebrations are conducted regularly.",
        "keywords": [
            "cultural",
            "events",
            "conducted?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school conduct field trips?",
        "answer": "Yes. The school conducts field trips and learning experiences.",
        "keywords": [
            "does",
            "school",
            "conduct",
            "field",
            "trips?"
        ]
    },
    {
        "category": "General",
        "question": "Are competitions organized?",
        "answer": "Yes. Educational competitions are organized to encourage student growth.",
        "keywords": [
            "competitions",
            "organized?"
        ]
    },
    {
        "category": "General",
        "question": "Are there art and music classes?",
        "answer": "Yes, art and craft, music, and dance are part of the curriculum.",
        "keywords": [
            "there",
            "music",
            "classes?"
        ]
    },
    {
        "category": "General",
        "question": "How can parents communicate?",
        "answer": "Parents can communicate through WhatsApp groups, school ERP, or by visiting the school.",
        "keywords": [
            "parents",
            "communicate?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school have a parent portal?",
        "answer": "Yes, parents can track progress and communicate through the school ERP.",
        "keywords": [
            "does",
            "school",
            "have",
            "parent",
            "portal?"
        ]
    },
    {
        "category": "General",
        "question": "How often are meetings held?",
        "answer": "Regular parent-teacher meetings are conducted to discuss student progress.",
        "keywords": [
            "often",
            "meetings",
            "held?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school send progress reports?",
        "answer": "Yes, progress reports are shared to keep parents updated.",
        "keywords": [
            "does",
            "school",
            "send",
            "progress",
            "reports?"
        ]
    },
    {
        "category": "General",
        "question": "How can parents track progress?",
        "answer": "Parents can track progress through the school ERP and teacher communication.",
        "keywords": [
            "parents",
            "track",
            "progress?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school provide meals?",
        "answer": "Currently, the school does not provide meals.",
        "keywords": [
            "does",
            "school",
            "provide",
            "meals?"
        ]
    },
    {
        "category": "General",
        "question": "Is there a cafeteria?",
        "answer": "Students are encouraged to bring healthy meals from home.",
        "keywords": [
            "there",
            "cafeteria?"
        ]
    },
    {
        "category": "General",
        "question": "Are healthy meals provided?",
        "answer": "Currently, the school does not provide meals.",
        "keywords": [
            "healthy",
            "meals",
            "provided?"
        ]
    },
    {
        "category": "General",
        "question": "Can students bring lunch from home?",
        "answer": "Yes. Students should bring their lunch from home.",
        "keywords": [
            "students",
            "bring",
            "lunch",
            "from",
            "home?"
        ]
    },
    {
        "category": "General",
        "question": "Are digital learning tools used?",
        "answer": "Yes. The school uses digital tools and smart boards to enhance learning.",
        "keywords": [
            "digital",
            "learning",
            "tools",
            "used?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school use smart boards?",
        "answer": "Yes. Smart classroom technology is used in teaching.",
        "keywords": [
            "does",
            "school",
            "smart",
            "boards?"
        ]
    },
    {
        "category": "General",
        "question": "Are tablets or laptops used?",
        "answer": "Technology concepts are introduced through digital platforms.",
        "keywords": [
            "tablets",
            "laptops",
            "used?"
        ]
    },
    {
        "category": "General",
        "question": "Is coding taught to students?",
        "answer": "Yes. Students are introduced to coding and technology as part of the STEM program.",
        "keywords": [
            "coding",
            "taught",
            "students?"
        ]
    },
    {
        "category": "General",
        "question": "When are the school holidays?",
        "answer": "Holidays follow standard academic schedules. Contact the office for the current list.",
        "keywords": [
            "when",
            "school",
            "holidays?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school follow summer vacation?",
        "answer": "Yes. The school follows a summer vacation schedule.",
        "keywords": [
            "does",
            "school",
            "follow",
            "summer",
            "vacation?"
        ]
    },
    {
        "category": "General",
        "question": "When does the academic year start?",
        "answer": "The academic year generally begins in June.",
        "keywords": [
            "when",
            "does",
            "academic",
            "year",
            "start?"
        ]
    },
    {
        "category": "General",
        "question": "When does the academic year end?",
        "answer": "The academic year typically ends in April.",
        "keywords": [
            "when",
            "does",
            "academic",
            "year",
            "end?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school support special needs?",
        "answer": "Personalized attention with a 1:15 ratio helps support diverse learning needs.",
        "keywords": [
            "does",
            "school",
            "support",
            "special",
            "needs?"
        ]
    },
    {
        "category": "General",
        "question": "Are counseling services available?",
        "answer": "The school focus is on holistic development and personalized support.",
        "keywords": [
            "counseling",
            "services",
            "available?"
        ]
    },
    {
        "category": "General",
        "question": "Is there support for slow learners?",
        "answer": "The small student-teacher ratio allows for individualized support.",
        "keywords": [
            "there",
            "support",
            "slow",
            "learners?"
        ]
    },
    {
        "category": "General",
        "question": "How can I contact the school?",
        "answer": "Phone: 9703033531, 9493093300. Website: genesisedu.in",
        "keywords": [
            "contact",
            "school?"
        ]
    },
    {
        "category": "General",
        "question": "What is the school phone number?",
        "answer": "9703033531, 9493093300",
        "keywords": [
            "what",
            "school",
            "phone",
            "number?"
        ]
    },
    {
        "category": "General",
        "question": "What is the school email address?",
        "answer": "Information is available on the website: genesisedu.in",
        "keywords": [
            "what",
            "school",
            "email",
            "address?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school have a website?",
        "answer": "Yes, the website is genesisedu.in",
        "keywords": [
            "does",
            "school",
            "have",
            "website?"
        ]
    },
    {
        "category": "General",
        "question": "Can I visit the school campus?",
        "answer": "Yes. Parents are welcome to visit and interact with the administration.",
        "keywords": [
            "visit",
            "school",
            "campus?"
        ]
    },
    {
        "category": "General",
        "question": "How do I schedule a meeting?",
        "answer": "You can schedule a meeting by contacting the school office.",
        "keywords": [
            "schedule",
            "meeting?"
        ]
    },
    {
        "category": "General",
        "question": "How do I join this school?",
        "answer": "Visit the school office and complete the admission process.",
        "keywords": [
            "join",
            "this",
            "school?"
        ]
    },
    {
        "category": "Fees",
        "question": "What is the fee for kindergarten?",
        "answer": "Please visit the school office for detailed fee information.",
        "keywords": [
            "what",
            "kindergarten?"
        ]
    },
    {
        "category": "Transport",
        "question": "Is transport available near my area?",
        "answer": "Contact the school office to check transport availability.",
        "keywords": [
            "transport",
            "available",
            "near",
            "area?"
        ]
    },
    {
        "category": "General",
        "question": "Does the school teach robotics?",
        "answer": "Yes. Robotics and STEM activities are part of the learning program.",
        "keywords": [
            "does",
            "school",
            "teach",
            "robotics?"
        ]
    },
    {
        "category": "Curriculum",
        "question": "Is Montessori education available?",
        "answer": "Yes. Montessori methods are used especially in early childhood education.",
        "keywords": [
            "montessori",
            "education",
            "available?"
        ]
    },
    {
        "category": "General",
        "question": "What activities does the school offer?",
        "answer": "Robotics, arts, sports, creative learning, STEM projects, and cultural activities.",
        "keywords": [
            "what",
            "activities",
            "does",
            "school",
            "offer?"
        ]
    },
    {
        "category": "General",
        "question": "Can my child join mid-year?",
        "answer": "Mid-year admissions may be allowed based on seat availability.",
        "keywords": [
            "child",
            "join",
            "mid-year?"
        ]
    }
];

export const SUGGESTIONS = [
    "Admission Process",
    "Fee Structure",
    "School Location",
    "STEM Program",
    "School Timings",
    "Contact Details"
];
