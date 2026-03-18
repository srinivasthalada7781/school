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
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between py-6 md:py-8 min-h-[100px] md:min-h-[120px]">
          {/* Logo on the left */}
          <div className="flex-shrink-0 group">
            <a href="#home" className="block">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
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
          <div className="flex flex-col items-center text-[#133a5d] text-center flex-1 mx-4">
            <div className="flex items-center justify-center gap-x-2 text-xl md:text-3xl lg:text-4xl tracking-tighter leading-none mb-1">
              <span className="font-genesis font-black uppercase">Genesis</span>
              <span className="font-international font-bold uppercase transition-all">International</span>
            </div>
            <div className="text-xl md:text-3xl lg:text-4xl font-nunito font-normal tracking-wide opacity-90 mt-1 lowercase">
              montessori & stem school
            </div>
          </div>

          {/* Hamburger Menu on the right */}
          <div className="flex-shrink-0">
            <button
              className="text-[#133a5d] w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-muted/50 hover:bg-muted transition-all active:scale-90 group"
              onClick={() => setOpen(!open)}
            >
              <div className={cn("w-6 md:w-8 h-1 bg-current transition-all duration-300 rounded-full", open && "rotate-45 translate-y-2.5")} />
              <div className={cn("w-6 md:w-8 h-1 bg-current transition-all duration-300 rounded-full", open && "opacity-0")} />
              <div className={cn("w-6 md:w-8 h-1 bg-current transition-all duration-300 rounded-full", open && "-rotate-45 -translate-y-2.5")} />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu (Universal for Desktop & Mobile) */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-border/50 p-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-3xl text-lg md:text-xl font-fredoka font-bold shadow-soft transition-all hover:-translate-y-2 active:scale-95 text-[#133a5d]",
                    l.color
                  )}
                  style={{ transform: `rotate(${l.rotate})` }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button variant="hero" className="w-full md:w-auto h-16 px-16 text-2xl font-fredoka rounded-3xl shadow-premium" size="lg" asChild>
                <a href="#admissions">Admissions Open 2026-27</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
