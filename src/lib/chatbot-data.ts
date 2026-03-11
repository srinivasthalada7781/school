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
    // General Information
    {
        category: "General",
        question: "What is Genesis International Montessori & STEM School?",
        answer: "Genesis is a premier educational institution focusing on developing creativity, critical thinking, practical skills, and a strong academic foundation for children.",
        keywords: ["what is", "about", "who is", "genesis", "school", "education"]
    },
    {
        category: "General",
        question: "Where is the school located?",
        answer: "The school is located at Visakha A colony, Near Arch, Opposite SBI, Peddapadu Road, Srikakulam, Andhra Pradesh, India.",
        keywords: ["location", "address", "where", "srikakulam", "place", "area", "map", "colony"]
    },
    {
        category: "General",
        question: "What curriculum does the school follow?",
        answer: "The school follows an ICSE-oriented curriculum and is working towards formal board recognition under appropriate education authorities.",
        keywords: ["curriculum", "syllabus", "icse", "board", "cbse", "study"]
    },
    {
        category: "General",
        question: "What makes this school different?",
        answer: "We help children become future-ready learners by combining excellence with practical life skills and Montessori methods.",
        keywords: ["different", "unique", "special", "why choose", "benefits"]
    },
    {
        category: "General",
        question: "Is the school co-educational?",
        answer: "Yes, Genesis School is a co-educational institution welcoming both boys and girls.",
        keywords: ["co-ed", "boys and girls", "gender", "coeducational"]
    },
    {
        category: "General",
        question: "What grades are offered?",
        answer: "Genesis School offers programs from Day Care and Pre-Primary up to Class 7.",
        keywords: ["grades", "classes", "standard", "primary", "daycare", "class 7"]
    },

    // Admissions
    {
        category: "Admissions",
        question: "What is the admission process?",
        answer: "The process involves guidance from the school administration. Parents can visit the school office to start the process.",
        keywords: ["admission process", "how to join", "enrollment", "steps"]
    },
    {
        category: "Admissions",
        question: "When do admissions open?",
        answer: "Admissions for the current academic year are open! Please contact the school office for immediate assistance.",
        keywords: ["admission open", "when to apply", "registration open"]
    },
    {
        category: "Admissions",
        question: "What documents are required for admission?",
        answer: "Standard documents like proof of age (birth certificate), previous school records (if any), and identity proof are required.",
        keywords: ["documents", "records", "certificates", "id proof", "papers"]
    },
    {
        category: "Admissions",
        question: "Is there an entrance test?",
        answer: "For higher classes, the school may conduct a simple assessment to understand the child's academic level.",
        keywords: ["entrance test", "exam", "assessment", "admission test", "interview"]
    },
    {
        category: "Admissions",
        question: "What is the minimum age for admission?",
        answer: "Age requirements follow standard educational guidelines. Please contact the office for specific age criteria for each grade.",
        keywords: ["minimum age", "age limit", "criteria"]
    },

    // Fee Related
    {
        category: "Fees",
        question: "What is the fee structure?",
        answer: "Detailed information about the fee structure is available at the school office. Please visit us for complete details.",
        keywords: ["fee structure", "cost", "price", "how much", "fees"]
    },
    {
        category: "Fees",
        question: "Can fees be paid in installments?",
        answer: "Yes, installment options may be available. Please consult the school office for payment schedules.",
        keywords: ["installments", "payment plan", "monthly pay", "parts"]
    },
    {
        category: "Fees",
        question: "Is the fee refundable?",
        answer: "Fee policies are explained during the admission process. Generally, certain components may be non-refundable.",
        keywords: ["refundable", "money back", "refund"]
    },

    // Curriculum & STEM
    {
        category: "STEM",
        question: "What is the STEM program?",
        answer: "STEM stands for Science, Technology, Engineering, and Mathematics. It encourages practical learning and innovation.",
        keywords: ["what is stem", "science", "technology", "engineering", "maths"]
    },
    {
        category: "STEM",
        question: "Are practical activities included?",
        answer: "Yes, practical learning is a key part of the Genesis learning approach, with hands-on activities in robotics and labs.",
        keywords: ["practical", "activities", "hands-on", "robotics", "labs"]
    },
    {
        category: "Curriculum",
        question: "What subjects are taught?",
        answer: "Subjects include English, Mathematics, Science, Social Studies, Languages, and STEM activities.",
        keywords: ["subjects", "what they teach", "courses"]
    },

    // Facilities
    {
        category: "Facilities",
        question: "What facilities are available?",
        answer: "We have STEM labs, computer labs, a library, sports facilities, a playground, sand pit, and smart classrooms.",
        keywords: ["facilities", "labs", "library", "playground", "sports", "smart class"]
    },
    {
        category: "Facilities",
        question: "Is there CCTV security?",
        answer: "Yes, the school maintains CCTV surveillance across the campus to ensure student safety.",
        keywords: ["cctv", "security", "camera", "safety"]
    },
    {
        category: "Facilities",
        question: "Is there a medical room?",
        answer: "Yes, the school ensures a safe environment and monitors student health.",
        keywords: ["medical", "doctor", "nurse", "first aid", "health"]
    },

    // Transport
    {
        category: "Transport",
        question: "Is transport available?",
        answer: "Yes, transport is available for students living far away or for working parents. Routes depend on student demand.",
        keywords: ["transport", "bus", "van", "pickup", "drop", "commute"]
    },
    {
        category: "Transport",
        question: "Are buses GPS tracked?",
        answer: "Safety measures are monitored to ensure student security during transport.",
        keywords: ["gps", "tracking", "bus safety"]
    },

    // Timings
    {
        category: "Timings",
        question: "What are the school timings?",
        answer: "School timings are from 8:30 AM to 3:30 PM. For specific grade timings, contact the office.",
        keywords: ["timings", "hours", "school hours", "time", "closing", "opening"]
    },
    {
        category: "Timings",
        question: "What are the holiday timings?",
        answer: "The school follows a standard academic calendar for holidays.",
        keywords: ["holidays", "vacation", "calendar", "leaves"]
    },

    // Contact
    {
        category: "Contact",
        question: "How can I contact the school?",
        answer: "Phone: 9703033531, 8428373123. Email: genesissrikakulam@gmail.com. Website: genesisschool.in",
        keywords: ["contact", "phone", "email", "call", "number", "mobile", "whatsapp"]
    },
    {
        category: "Contact",
        question: "Can I visit the school campus?",
        answer: "Yes, parents are welcome to visit and interact with the administration. Please schedule a meeting if possible.",
        keywords: ["visit", "campus tour", "meet", "appointment"]
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
