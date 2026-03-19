import { cn } from "@/lib/utils";

const values = [
  { label: "Safety First", desc: "Secure campus with trained staff", color: "from-[#FF9AA2] to-[#FFB7B2]", rotate: "-2deg", dotColor: "bg-[#FF9AA2]" },
  { label: "Joyful Learning", desc: "Play-based curriculum", color: "from-[#B5EAD7] to-[#C7CEEA]", rotate: "2deg", dotColor: "bg-[#B5EAD7]" },
  { label: "Fun Every Day", desc: "Activities that spark joy", color: "from-[#FFDAC1] to-[#FF9AA2]", rotate: "-1deg", dotColor: "bg-[#FFDAC1]" },
  { label: "Loving Care", desc: "Warm and nurturing environment", color: "from-[#E2F0CB] to-[#B5EAD7]", rotate: "3deg", dotColor: "bg-[#E2F0CB]" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform" />
          <img
            src="/pictures/study1.png"
            alt="Children learning in a modern classroom"
            className="relative w-full rounded-[3rem] shadow-premium z-10 transform group-hover:scale-[1.02] transition-all duration-500"
          />
        </div>

        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">About Our Institution</h4>
            <h2 className="text-4xl md:text-5xl text-foreground font-black leading-tight font-fredoka">
              A Legacy of <span className="text-secondary underline decoration-wavy decoration-sunshine/50 underline-offset-8">Excellence</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {values.map((v) => (
              <div
                key={v.label}
                className={cn(
                  "relative flex flex-col gap-4 p-8 rounded-[2.5rem] transition-all hover:scale-105 hover:rotate-0 bg-gradient-to-br shadow-[0_12px_0_0_rgba(0,0,0,0.05)] border-4 border-white",
                  v.color
                )}
                style={{ transform: `rotate(${v.rotate})` }}
              >
                {/* Decorative Dots */}
                <div className={cn("absolute top-4 right-4 w-4 h-4 rounded-full opacity-40", v.dotColor)} />
                <div className={cn("absolute bottom-6 left-6 w-3 h-3 rounded-full opacity-30", v.dotColor)} />

                <p className="font-fredoka text-2xl text-[#133a5d] tracking-tight leading-none drop-shadow-sm">{v.label}</p>
                <p className="text-sm md:text-base text-[#133a5d]/80 leading-snug font-bold">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
