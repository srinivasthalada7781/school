import { Facebook, Instagram, Youtube, Twitter, Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => (
  <footer className="relative bg-[#0f172a] text-white pt-32 pb-12 overflow-hidden">
    {/* Wavy Top Border */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
      </svg>
    </div>

    {/* Floating Decorations */}
    <div className="absolute top-40 left-10 opacity-10 animate-pulse">
      <Star size={60} className="text-sunshine fill-sunshine" />
    </div>
    <div className="absolute bottom-20 right-10 opacity-10 animate-bounce-gentle">
      <Heart size={50} className="text-rose fill-rose" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        {/* Logo & About */}
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <div className="w-20 h-20 bg-white rounded-3xl p-3 shadow-sticker flex items-center justify-center -rotate-3">
              <img
                src="/pictures/Genesis Stem Final Logo.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-fredoka font-black tracking-tight leading-none text-white">
                GENESIS
              </span>
              <span className="text-sm font-fredoka font-black uppercase tracking-widest text-primary mt-1">
                INTERNATIONAL SCHOOL
              </span>
            </div>
          </div>
          <p className="text-gray-400 font-bold leading-relaxed">
            Nurturing young minds with a future-ready curriculum and professional care since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-fredoka text-2xl font-black mb-8 text-secondary">School Life</h4>
          <ul className="space-y-4">
            {["About", "Programs", "Facilities", "Gallery", "Activities"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-gray-400 font-bold hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:w-4 transition-all" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-fredoka text-2xl font-black mb-8 text-sunshine">Stay in Touch</h4>
          <div className="space-y-6 text-gray-400 font-bold">
            <div className="flex items-start gap-3">
              <div className="text-slate-500 mt-1">📍</div>
              <p>Visakha A colony, Near Arch, Opposite SBI, Peddapadu Road, Srikakulam, AP 532001</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-slate-500 mt-1">📞</div>
              <p>+91 97030 33531<br />+91 83283 73123</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-slate-500 mt-1">✉️</div>
              <p>genesissrikakulam@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social & Apply */}
        <div className="space-y-8">
          <div>
            <h4 className="font-fredoka text-2xl font-black mb-8 text-mint">Join Our Community</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/genesissrikakulam" },
                { Icon: Instagram, href: "https://www.instagram.com/genesissrikakulam" },
                { Icon: Youtube, href: "https://youtube.com/@genesissrikakulam" },
                { Icon: Twitter, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-2 border border-white/10 hover:border-primary shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <a
            href="#admissions"
            className="kid-button bg-sunshine text-[#133a5d] inline-flex items-center gap-2"
          >
            <Sparkles size={18} />
            Apply Now 2026-27
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-bold text-sm">
        <p>© 2026 Genesis International Montessori and STEM School.</p>
        <div className="flex items-center gap-2">
          <span>Designed with ❤️ by</span>
          <span className="font-fredoka text-primary uppercase tracking-widest text-xs">Edu Alt Tech</span>
        </div>
      </div>
    </div>
  </footer>
);

const Star = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default Footer;
