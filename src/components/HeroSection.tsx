import { Button } from "@/components/ui/button";
import { Star, Heart, Sparkles } from "lucide-react";

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-30 animate-blob ${className}`} />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-64 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-x-0 bottom-0 top-28 z-0">
        <img
          src="/pictures/group photo 2.png"
          alt="School Environment"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md text-foreground border border-white/40 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm">
            <Sparkles size={16} className="text-secondary" />
            Admissions Open 2026-27
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight text-[#133a5d] drop-shadow-sm">
              <span className="font-black">Empowering</span> <br />
              <span className="relative inline-block mt-2">
                <span className="font-genesis font-black uppercase tracking-tight">Genesis</span>{" "}
                <span className="text-xl md:text-2xl lg:text-3xl font-nunito font-normal block md:inline-block md:ml-4 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-2xl border border-white/40 shadow-sm mt-4 md:mt-0 align-middle whitespace-nowrap">
                  Montessori & STEM School
                </span>
                <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-secondary rounded-full hidden md:block" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Where academic excellence meets creative exploration. We nurture every child to become a confident, lifelong learner in a safe and inspiring environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button size="lg" className="rounded-full px-12 h-14 text-xl font-bold shadow-premium bg-primary hover:bg-primary/90 transition-all hover:-translate-y-1" asChild>
              <a href="#admissions">
                Enroll Today
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-xl font-bold border-2 border-white bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all" asChild>
              <a href="#about">
                Our Philosophy
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
