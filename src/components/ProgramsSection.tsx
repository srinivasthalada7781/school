import { Baby, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Baby,
    title: "Nursery",
    age: "Age 3+ years",
    desc: "A gentle introduction to the school environment with sensory play, music, and basic social skills.",
    color: "from-sky-light to-sky/20",
    iconBg: "bg-sky text-primary-foreground",
  },
  {
    icon: BookOpen,
    title: "LKG",
    age: "Age 4+ years",
    desc: "Building foundational literacy and numeracy through interactive games, stories, and creative activities.",
    color: "from-mint-light to-mint/20",
    iconBg: "bg-mint text-accent-foreground",
  },
  {
    icon: GraduationCap,
    title: "UKG",
    age: "Age 5+ years",
    desc: "Preparing children for primary school with structured learning, reading readiness, and teamwork.",
    color: "from-rose-light to-rose/20",
    iconBg: "bg-rose text-secondary-foreground",
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
        <h2 className="text-4xl md:text-5xl text-foreground font-black">
          Specialized <span className="text-secondary">Programs</span>
        </h2>
        <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          A progressive curriculum tailored to meet the developmental milestones of every stage in your child's early education journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {programs.map((p, i) => (
          <div
            key={p.title}
            className="group relative bg-white p-10 rounded-3xl border border-border/50 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-3"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 rounded-tr-3xl rounded-bl-[4rem] transition-all group-hover:scale-110 ${p.iconBg}`} />

            <div className={`w-20 h-20 rounded-2xl ${p.iconBg} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              <p.icon size={40} />
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2">{p.title}</h3>
            <p className="text-sm font-bold text-primary mb-4 tracking-tighter">{p.age}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed font-medium">{p.desc}</p>

            <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent group/btn flex items-center gap-2 group-hover:gap-3 transition-all" asChild>
              <a href="#admissions">
                Program Details <ArrowRight size={18} className="transition-all" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
