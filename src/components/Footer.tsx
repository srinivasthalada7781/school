import { Facebook, Twitter, Instagram, Linkedin, Youtube, GraduationCap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[#0f172a] text-white py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
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
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter leading-none">GENESIS INTERNATIONAL</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Montessori School</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-medium">Nurturing young minds with academic excellence, professional care, and a future-ready curriculum since 2010.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-fredoka mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-70">
            {["About", "Programs", "Facilities", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block hover:opacity-100 transition-opacity">{l}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-fredoka mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p>Arasavalli Junction</p>
            <p>Srikakulam, AP 532001</p>
            <p>+91 98765 43210</p>
            <p>admissions@genesis-montessori.in</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-fredoka mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm opacity-60">
        <p>© 2026 Genesis International Montessori School. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
