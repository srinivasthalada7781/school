import { Heart, Baby, Book, Pencil, GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const programsData = [
  {
    title: "Tender Hearts",
    subtitle: "(1 - 2 yrs Toddler) Day Care",
    icon: Heart,
    color: "from-[#FF9AA2] to-[#FFB7B2]",
    shadow: "shadow-[#FF9AA2]/20",
    border: "border-[#FF9AA2]/50",
    lineColor: "bg-[#FF9AA2]",
  },
  {
    title: "Little Hearts",
    subtitle: "(2 - 3 yrs Play Group)",
    icon: Baby,
    color: "from-[#B5EAD7] to-[#C7CEEA]",
    shadow: "shadow-[#B5EAD7]/20",
    border: "border-[#B5EAD7]/50",
    lineColor: "bg-[#B5EAD7]",
  },
  {
    title: "Nursery",
    subtitle: "(3 - 4 yrs)",
    icon: Book,
    color: "from-[#FFDAC1] to-[#FF9AA2]",
    shadow: "shadow-[#FFDAC1]/20",
    border: "border-[#FFDAC1]/50",
    lineColor: "bg-[#FFDAC1]",
  },
  {
    title: "LKG",
    subtitle: "(4 - 5 yrs)",
    icon: Pencil,
    color: "from-[#E2F0CB] to-[#B5EAD7]",
    shadow: "shadow-[#E2F0CB]/20",
    border: "border-[#E2F0CB]/50",
    lineColor: "bg-[#E2F0CB]",
  },
  {
    title: "UKG",
    subtitle: "(5 - 6 yrs)",
    icon: GraduationCap,
    color: "from-[#C7CEEA] to-[#B5EAD7]",
    shadow: "shadow-[#C7CEEA]/20",
    border: "border-[#C7CEEA]/50",
    lineColor: "bg-[#C7CEEA]",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full shadow-sticker mb-6 border-2 border-primary/10">
            <Sparkles className="w-6 h-6 text-sunshine animate-pulse" />
            <span className="text-sm font-black tracking-widest uppercase text-primary">Explore Our World</span>
          </div>
          <h2 className="text-5xl md:text-7xl text-[#133a5d] font-black mb-6 font-fredoka tracking-tight">
            Our Learning <span className="text-secondary relative inline-block">
              Stages
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-sunshine opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-bold opacity-80">
            Nurturing young minds through specialized stages of development and play.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-full space-y-12 relative overflow-visible">
            {/* Central connected wavy line for desktop (hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-2 bg-slate-100 rounded-full -translate-x-1/2 z-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-primary/20 via-secondary/20 to-rose/20" />
            </div>

            {programsData.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={program.title} className={cn(
                  "relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 group",
                  isEven ? 'md:flex-row-reverse' : ''
                )}>

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-4rem)] flex",
                    isEven ? 'justify-start' : 'justify-end'
                  )}>
                    <div className={cn(
                      "bg-gradient-to-br p-10 md:p-12 w-full shadow-[0_12px_0_0_rgba(0,0,0,0.05)] border-4 border-white transition-all duration-500 hover:scale-105 active:scale-95",
                      program.color,
                      isEven ? "rounded-[3rem] rounded-tr-none rotate-1 hover:rotate-0" : "rounded-[3rem] rounded-tl-none -rotate-1 hover:rotate-0"
                    )}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="md:hidden w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[#133a5d] font-fredoka">
                          {program.title}
                        </h3>
                      </div>
                      <p className="text-lg font-black text-[#133a5d]/60 uppercase tracking-widest leading-none">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Icon / Node (Desktop only) */}
                  <div className="shrink-0 relative hidden md:flex items-center justify-center">
                    <div className={cn(
                      "w-24 h-24 rounded-[2rem] bg-white flex items-center justify-center shadow-sticker border-4 border-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 z-10",
                      isEven ? "rotate-6" : "-rotate-6"
                    )}>
                      <Icon size={40} className="text-primary drop-shadow-sm" />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
