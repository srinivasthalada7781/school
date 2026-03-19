import { Button } from "@/components/ui/button";
import { Star, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("absolute animate-bounce-gentle", className)}>
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden pt-40 md:pt-48 pb-20 bg-gradient-hero">
      {/* Dynamic Background Shapes */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-sunshine/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-12 w-96 h-96 bg-sky/10 rounded-full blur-3xl animate-blob animation-delayed" />
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-rose/10 rounded-full blur-3xl animate-blob animation-slow" />

      {/* Floating Decorative Icons */}
      <FloatingIcon className="top-40 left-[10%] text-sunshine md:block hidden">
        <Star size={40} className="fill-current opacity-20 rotate-12" />
      </FloatingIcon>
      <FloatingIcon className="top-60 right-[15%] text-rose md:block hidden">
        <Heart size={32} className="fill-current opacity-20 -rotate-12" />
      </FloatingIcon>
      <FloatingIcon className="bottom-40 left-[15%] text-mint md:block hidden">
        <Sparkles size={36} className="opacity-20 rotate-45" />
      </FloatingIcon>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-10 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md text-primary border-2 border-white px-8 py-3 rounded-full text-sm font-black tracking-widest uppercase shadow-sticker">
              <Sparkles size={20} className="text-sunshine animate-pulse" />
              Admissions Open 2026-27
            </div>

            <div className="space-y-4">
              <h1 className="flex flex-col gap-2 md:gap-4 leading-[1.1]">
                <span className="font-luckiest text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-[0_8px_0_rgba(19,58,93,0.1)] tracking-normal">
                  Empowering
                </span>
                <span className="relative inline-block">
                  <span className="font-fredoka font-black text-5xl md:text-7xl lg:text-8xl uppercase text-secondary drop-shadow-[0_5px_0_rgba(19,58,93,0.1)]">
                    Genesis
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 md:h-5 bg-sunshine/30 -rotate-1 rounded-full -z-10" />
                </span>
                <span className="font-fredoka font-black text-2xl md:text-4xl lg:text-5xl uppercase text-[#133a5d] opacity-90 tracking-widest">
                  International School
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/80 font-bold max-w-2xl mx-auto lg:mx-0 leading-relaxed md:pt-4">
                Where academic excellence meets <span className="text-primary italic">creative exploration</span>. We nurture every child to become a confident learner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
              <Button size="lg" className="kid-button bg-primary hover:bg-primary/90 text-white text-xl" asChild>
                <a href="#admissions">Enroll Today</a>
              </Button>
              <Button size="lg" className="kid-button bg-white text-primary border-4 border-primary/10 text-xl hover:bg-white hover:border-primary/20" asChild>
                <a href="#about">Our Story</a>
              </Button>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sunshine/20 via-sky/20 to-rose/20 rounded-[4rem] rotate-3 blur-2xl opacity-50 group-hover:rotate-6 transition-transform duration-700" />
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-8 border-white shadow-premium transform -rotate-2 group-hover:rotate-0 transition-all duration-700">
              <img
                src="/pictures/group photo 2.png"
                alt="Happy students at Genesis"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Playful Floating Badge */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white rounded-full p-4 shadow-sticker border-4 border-mint/20 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-all duration-500 z-20">
              <div className="text-center font-fredoka">
                <span className="block text-3xl font-black text-primary leading-none">10+</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none">Years of excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
