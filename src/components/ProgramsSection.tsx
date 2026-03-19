import { Baby, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const programs = [
  {
    icon: Baby,
    title: "Nursery",
    age: "Age 3+ years",
    desc: "A gentle introduction to the school environment with sensory play, music, and basic social skills.",
    color: "from-[#FF9AA2] to-[#FFB7B2]",
    iconBg: "bg-white text-[#FF9AA2]",
    shadow: "shadow-[#FF9AA2]/20",
  },
  {
    icon: BookOpen,
    title: "LKG",
    age: "Age 4+ years",
    desc: "Building foundational literacy and numeracy through interactive games, stories, and creative activities.",
    color: "from-[#B5EAD7] to-[#C7CEEA]",
    iconBg: "bg-white text-[#567a6e]",
    shadow: "shadow-[#B5EAD7]/20",
  },
  {
    icon: GraduationCap,
    title: "UKG",
    age: "Age 5+ years",
    desc: "Preparing children for primary school with structured learning, reading readiness, and teamwork.",
    color: "from-[#FFDAC1] to-[#FFB7B2]",
    iconBg: "bg-white text-[#d19c7a]",
    shadow: "shadow-[#FFDAC1]/20",
  },
];

const ProgramsSection = () => (
  <section id="programs" className="py-24 bg-background relative overflow-hidden">
    {/* Subtle patterns/decorations */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Our Educational Paths</h4>
        <h2 className="text-4xl md:text-5xl text-foreground font-black font-fredoka">
          Specialized <span className="text-secondary underline decoration-dotted decoration-primary/30 underline-offset-8">Programs</span>
        </h2>
        <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          A progressive curriculum tailored to meet the developmental milestones of every stage in your child's early education journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {programs.map((p, i) => (
          <div
            key={p.title}
            className={cn(
              "group relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] border-4 border-white",
              p.color,
              p.shadow
            )}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className={cn(
              "w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner-lg group-hover:scale-110 transition-transform duration-500",
              p.iconBg
            )}>
              <p.icon size={48} />
            </div>

            <h3 className="text-3xl font-fredoka text-[#133a5d] mb-2 drop-shadow-sm">{p.title}</h3>
            <p className="text-sm font-bold text-[#133a5d] mb-4 tracking-tighter bg-white/40 px-3 py-1 rounded-full inline-block">{p.age}</p>
            <p className="text-[#133a5d]/80 mb-8 leading-relaxed font-bold">{p.desc}</p>

            <Button variant="ghost" className="p-0 text-[#133a5d] font-black hover:bg-transparent group/btn flex items-center gap-2 group-hover:gap-3 transition-all" asChild>
              <a href="#admissions">
                Explore More <ArrowRight size={20} className="transition-all" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
