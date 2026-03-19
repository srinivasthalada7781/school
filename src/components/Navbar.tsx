import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", color: "bg-[#FF9AA2]", rotate: "-2deg" },
  { label: "About", href: "#about", color: "bg-[#FFB7B2]", rotate: "3deg" },
  { label: "Programs", href: "#programs", color: "bg-[#FFDAC1]", rotate: "-1deg" },
  { label: "Facilities", href: "#facilities", color: "bg-[#E2F0CB]", rotate: "2deg" },
  { label: "Gallery", href: "#gallery", color: "bg-[#B5EAD7]", rotate: "-3deg" },
  { label: "Activities", href: "#activities", color: "bg-[#C7CEEA]", rotate: "1deg" },
  { label: "Contact", href: "#contact", color: "bg-[#FF9AA2]", rotate: "-2deg" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-7xl mx-auto",
      scrolled ? "top-2" : "top-4"
    )}>
      <div className={cn(
        "kid-glass transition-all duration-500 overflow-hidden border-2 border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
        open ? "rounded-[2rem] md:rounded-[3rem]" : "rounded-full"
      )}>
        <div className="container mx-auto px-6">
          {/* Main Navbar Row */}
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo on the left */}
            <div className="flex-shrink-0 group relative">
              <a href="#home" className="block">
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 active:scale-95 bg-white rounded-full p-2 shadow-soft border-2 border-primary/10">
                  <img
                    src="/pictures/Genesis Stem Final Logo.png"
                    alt="Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </a>
            </div>

            {/* School Name */}
            <div className="flex flex-col items-center text-[#133a5d] text-center flex-1 mx-4">
              <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-3 gap-y-0.5 leading-none mb-0.5">
                <span className="font-fredoka text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary drop-shadow-sm">Genesis</span>
                <span className="font-fredoka text-lg md:text-2xl lg:text-3xl font-black uppercase text-secondary drop-shadow-sm">International</span>
              </div>
              <div className="hidden md:block text-xs md:text-sm lg:text-base font-fredoka font-bold tracking-widest opacity-70 uppercase">
                Montessori & Stem School
              </div>
            </div>

            {/* Hamburger Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#admissions"
                className="hidden lg:block kid-button bg-sunshine text-sunshine-foreground text-sm uppercase tracking-wider border-b-4 border-sunshine-foreground/20"
              >
                Apply Now
              </a>
              <button
                className="text-[#133a5d] w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-all active:scale-90 group border border-white/50"
                onClick={() => setOpen(!open)}
              >
                <div className={cn("w-6 md:w-8 h-1 bg-primary transition-all duration-300 rounded-full", open && "rotate-45 translate-y-2.5")} />
                <div className={cn("w-6 md:w-8 h-1 bg-primary transition-all duration-300 rounded-full", open && "opacity-0")} />
                <div className={cn("w-6 md:w-8 h-1 bg-primary transition-all duration-300 rounded-full", open && "-rotate-45 -translate-y-2.5")} />
              </button>
            </div>
          </div>

          {/* Expanded Menu */}
          <div className={cn(
            "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "max-h-[600px] pb-10 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4 pt-4 border-t border-white/20">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "kid-sticker text-xs md:text-sm font-fredoka font-black px-6 py-3 text-[#133a5d] uppercase tracking-tight whitespace-nowrap bg-white/60 hover:bg-white transition-all shadow-sticker",
                    l.color
                  )}
                  style={{
                    transform: open ? `rotate(${l.rotate})` : 'rotate(0deg) scale(0.8)',
                    transitionDelay: `${i * 50}ms`
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="lg:hidden kid-button bg-sunshine text-sunshine-foreground text-sm uppercase font-black tracking-tight"
              >
                Admissions Open 2026-27
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
