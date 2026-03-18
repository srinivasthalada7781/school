import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, GraduationCap, Home, Info, BookOpen, Warehouse, Image, Sparkles, Phone, Pencil, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* Top Row: Logo (Overlapping) and School Name (Centered) */}
        <div className="relative flex items-center justify-center pt-6 pb-4 border-b border-border/40">
          {/* Logo on the left */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <a href="#home" className="group block">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/pictures/Genesis Stem Final Logo.png"
                  alt="Genesis International Montessori and STEM School Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-primary', 'rounded-xl', 'p-2');
                    const icon = document.createElement('div');
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                    e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
                  }}
                />
              </div>
            </a>
          </div>

          {/* Centered School Name */}
          <div className="flex flex-col items-center text-[#133a5d] text-center max-w-[90%] md:max-w-[80%]">
            <div className="flex items-center justify-center gap-x-2 text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-none mb-1">
              <span className="font-genesis font-black">GENESIS</span>
              <span className="font-international font-bold uppercase">INTERNATIONAL</span>
            </div>
            <div className="text-[10px] md:text-xs lg:text-sm font-nunito font-normal tracking-wide opacity-90 mt-1 lowercase">
              montessori & stem school
            </div>
          </div>
        </div>

        {/* Bottom Row: Navigation Links (Right Aligned) */}
        <div className="flex items-center justify-end h-16 relative">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 pr-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-6 py-2 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                style={{ transform: `rotate(${l.rotate})` }}
              >
                <div className={`absolute inset-0 ${l.color} transition-all duration-300 shadow-sm`}
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
                <span className="relative text-sm font-fredoka font-bold text-[#133a5d] transition-colors tracking-wide">
                  {l.label}
                </span>
              </a>
            ))}
            <Button variant="hero" size="sm" className="ml-6 rounded-full px-8 shadow-soft font-fredoka" asChild>
              <a href="#admissions">Admissions Open</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden w-full flex justify-between items-center py-2">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Navigation</span>
            <button className="text-foreground w-10 h-10 flex items-center justify-center rounded-xl bg-muted" onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border/50 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-center p-4 rounded-2xl text-lg font-fredoka font-bold shadow-soft transition-all active:scale-95",
                  l.color
                )}
                style={{ transform: `rotate(${l.rotate})` }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button variant="hero" className="w-full h-14 text-xl font-fredoka rounded-2xl mt-4 shadow-premium" size="lg" asChild>
            <a href="#admissions">Admissions Open</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
