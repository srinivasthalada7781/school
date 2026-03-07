import { Button } from "@/components/ui/button";
import { Star, Heart, Sparkles } from "lucide-react";
import kidsPlaying from "@/assets/kids-playing.png";
import heroBg from "@/assets/hero-bg.png";

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-30 animate-blob ${className}`} />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="School Environment"
          className="w-full h-full object-cover"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground font-black drop-shadow-sm">
              Empowering <br />
              <span className="text-primary relative inline-block">
                Little Learners
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary rounded-full" />
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

          <div className="flex items-center gap-12 pt-12 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">15+</span>
              <span className="text-xs uppercase tracking-[0.3em] font-black opacity-70">Years Excellence</span>
            </div>
            <div className="w-px h-12 bg-foreground/20" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">500+</span>
              <span className="text-xs uppercase tracking-[0.3em] font-black opacity-70">Happy Students</span>
            </div>
            <div className="w-px h-12 bg-foreground/20" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">100%</span>
              <span className="text-xs uppercase tracking-[0.3em] font-black opacity-70">Child Safety</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
