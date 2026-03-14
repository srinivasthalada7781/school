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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-soft transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-28 px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-in zoom-in spin-in-12 duration-700 ease-out">
            <img
              src="/pictures/Genesis Stem Final Logo.png"
              alt="Genesis International Montessori and STEM School Logo"
              className="h-full w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-primary', 'rounded-xl');
                const icon = document.createElement('div');
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
              }}
            />
          </div>
          <div className="flex flex-col text-[#133a5d]">
            <span className="text-xl tracking-tighter leading-none">
              <span className="font-genesis font-black">GENESIS</span>{" "}
              <span className="font-international font-bold">INTERNATIONAL</span>
            </span>
            <span className="text-[12px] uppercase tracking-[0.1em] font-normal font-montessori">MONTESSORI and STEM SCHOOL</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
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
          <Button variant="hero" size="sm" className="ml-4 rounded-full px-6 shadow-soft font-fredoka" asChild>
            <a href="#admissions">Admissions Open</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground w-12 h-12 flex items-center justify-center rounded-xl bg-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
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
