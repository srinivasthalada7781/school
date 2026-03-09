import { Heart, Baby, Book, Pencil, GraduationCap, Sparkles } from "lucide-react";

const programsData = [
  {
    title: "Tender Hearts",
    subtitle: "(1 - 2 yrs Toddler) Day Care",
    icon: Heart,
    color: "bg-amber-400 text-amber-950",
    shadow: "shadow-amber-400/50",
    border: "border-amber-400",
    lineColor: "bg-amber-400",
  },
  {
    title: "Little Hearts",
    subtitle: "(2 - 3 yrs Play Group)",
    icon: Baby,
    color: "bg-emerald-500 text-emerald-950",
    shadow: "shadow-emerald-500/50",
    border: "border-emerald-500",
    lineColor: "bg-emerald-500",
  },
  {
    title: "Nursery",
    subtitle: "(3 - 4 yrs)",
    icon: Book,
    color: "bg-blue-500 text-blue-950",
    shadow: "shadow-blue-500/50",
    border: "border-blue-500",
    lineColor: "bg-blue-500",
  },
  {
    title: "LKG",
    subtitle: "(4 - 5 yrs)",
    icon: Pencil,
    color: "bg-red-500 text-red-100",
    shadow: "shadow-red-500/50",
    border: "border-red-500",
    lineColor: "bg-red-500",
  },
  {
    title: "UKG",
    subtitle: "(5 - 6 yrs)",
    icon: GraduationCap,
    color: "bg-red-600 text-red-100",
    shadow: "shadow-red-600/50",
    border: "border-red-600",
    lineColor: "bg-red-600",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center space-x-2 bg-white px-6 py-2 rounded-full shadow-sm mb-4 border border-slate-100">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-slate-600">Explore</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-slate-800 font-black mb-4 tracking-tight drop-shadow-sm">
            Our <span className="text-primary relative inline-block">
              Programs
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Nurturing young minds through specialized stages of development and learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full space-y-6 relative">
            {/* Central connected vertical line for desktop (hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1.5 bg-slate-200 rounded-full -translate-x-1/2 z-0" />

            {programsData.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={program.title} className={`relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 group ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`bg-white rounded-3xl p-6 md:p-8 w-full shadow-soft hover:${program.shadow} transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:${program.border}`}>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Icon / Node */}
                  <div className="shrink-0 relative hidden md:flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 z-10 relative`}>
                      <Icon size={32} className="drop-shadow-sm" />
                    </div>
                    {/* Connecting line to center */}
                    <div className={`absolute top-1/2 w-8 h-1.5 ${program.lineColor} rounded-full ${isEven ? 'right-full' : 'left-full'} -translate-y-1/2 z-0 opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;
