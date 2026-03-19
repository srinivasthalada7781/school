import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Priya Sharma", child: "Mother of Aarav, Nursery", text: "Genesis International has been a blessing for our family. My son wakes up excited to go to school every day! The teachers are so caring and patient.", color: "from-[#FF9AA2] to-[#FFB7B2]" },
  { name: "Rahul Verma", child: "Father of Ananya, LKG", text: "The way they blend learning with play is wonderful. Ananya has become so confident and creative since joining. Highly recommended!", color: "from-[#B5EAD7] to-[#C7CEEA]" },
  { name: "Sneha Patel", child: "Mother of Kabir, UKG", text: "We love the safe environment and the personal attention each child receives. The school feels like a second home for our kids.", color: "from-[#FFDAC1] to-[#FF9AA2]" },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/5 px-6 py-2 rounded-full border border-secondary/10 mb-2">
            <Sparkles size={18} className="text-secondary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#133a5d]">Parent Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-[#133a5d] font-black font-fredoka tracking-tight">
            What <span className="text-secondary underline decoration-dotted decoration-secondary/30 underline-offset-8">Parents Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className={cn(
            "bg-gradient-to-br p-10 md:p-16 rounded-[4rem] text-center relative transition-all duration-700 border-4 border-white shadow-sticker transform",
            t.color,
            idx % 2 === 0 ? "rotate-1" : "-rotate-1"
          )}>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Quote size={40} className="text-primary fill-primary/10" />
            </div>

            <p className="text-[#133a5d] leading-relaxed text-xl md:text-3xl font-bold mb-8 italic drop-shadow-sm">
              "{t.text}"
            </p>

            <div className="space-y-1">
              <p className="font-fredoka text-3xl font-black text-[#133a5d]">{t.name}</p>
              <p className="text-lg font-black text-[#133a5d]/60 uppercase tracking-widest">{t.child}</p>
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sticker hover:scale-110 active:scale-95 transition-all border-4 border-white"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={next}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sticker hover:scale-110 active:scale-95 transition-all border-4 border-white"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={cn(
                  "h-3 rounded-full transition-all duration-500",
                  i === idx ? "w-12 bg-primary" : "w-3 bg-primary/20 hover:bg-primary/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
