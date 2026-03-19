import { ShieldCheck, TreePine, Lightbulb, BookOpen, Palette, Volleyball, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const facilities = [
  { icon: ShieldCheck, label: "Safe Classrooms", desc: "Child-proof & air-conditioned", color: "from-[#FF9AA2] to-[#FFB7B2]", rotate: "-2deg" },
  { icon: TreePine, label: "Play Area", desc: "Spacious outdoor playground", color: "from-[#B5EAD7] to-[#C7CEEA]", rotate: "1deg" },
  { icon: Lightbulb, label: "STEM Zones", desc: "Sensory exploration areas", color: "from-[#FFDAC1] to-[#FF9AA2]", rotate: "-1deg" },
  { icon: BookOpen, label: "Story Time", desc: "Cozy reading corner", color: "from-[#E2F0CB] to-[#B5EAD7]", rotate: "2deg" },
  { icon: Palette, label: "Art Studio", desc: "For creative expression", color: "from-[#C7CEEA] to-[#B5EAD7]", rotate: "-2deg" },
  { icon: Volleyball, label: "Outdoor Games", desc: "Organized group play", color: "from-[#FFB7B2] to-[#FFDAC1]", rotate: "1deg" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="py-24 bg-white relative">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-2">
          <Sparkles size={18} className="text-sunshine animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-[#133a5d]">World Class Amenities</span>
        </div>
        <h2 className="text-5xl md:text-6xl text-[#133a5d] font-black font-fredoka tracking-tight">
          School <span className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-8">Facilities</span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-bold opacity-80">
          Everything your child needs to learn, play, and grow in a safe environment.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {facilities.map((f, i) => (
          <div
            key={f.label}
            className={cn(
              "group p-8 text-center transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br border-4 border-white shadow-sticker",
              f.color,
              i % 2 === 0 ? "rounded-[2.5rem] rounded-tr-none" : "rounded-[2.5rem] rounded-tl-none"
            )}
            style={{ transform: `rotate(${f.rotate})` }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-inner-lg group-hover:scale-110 transition-transform duration-500">
              <f.icon size={32} className="text-primary" />
            </div>
            <h3 className="font-fredoka text-[#133a5d] text-base md:text-2xl font-black mb-2 tracking-tight">{f.label}</h3>
            <p className="text-sm md:text-base text-[#133a5d]/70 font-bold leading-tight">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
