import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const images = [
  { src: "/pictures/playing.png", alt: "Kids playing together", span: "md:col-span-2 md:row-span-2", rotate: "-1deg" },
  { src: "/pictures/class.png", alt: "Kids learning in class", span: "", rotate: "2deg" },
  { src: "/pictures/extra c1.png", alt: "Art and craft activities", span: "", rotate: "-2deg" },
  { src: "/pictures/event1.png", alt: "School celebration", span: "md:col-span-2", rotate: "1deg" },
  { src: "/pictures/group.png", alt: "Outdoor games", span: "", rotate: "-1deg" },
  { src: "/pictures/study2.png", alt: "Story time with teacher", span: "", rotate: "2deg" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-gradient-to-b from-white to-[#FDFBF2] relative overflow-hidden">
    {/* Decorative Blobs */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-secondary/10 shadow-sm mb-2">
          <Sparkles size={18} className="text-secondary animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-[#133a5d]">Glimpses of Joy</span>
        </div>
        <h2 className="text-5xl md:text-7xl text-[#133a5d] font-black font-fredoka tracking-tight">
          Photo <span className="text-secondary relative">
            Gallery
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-bold opacity-80">
          Capturing the wonderful moments of learning and laughter at Genesis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "group relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-white shadow-sticker transition-all duration-700 bg-white",
              img.span,
              "hover:scale-[1.03] hover:rotate-0 hover:z-20 active:scale-95 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)]"
            )}
            style={{
              transform: `rotate(${img.rotate})`,
              transitionDelay: `${i * 50}ms`
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white text-sm md:text-lg font-fredoka p-6 drop-shadow-lg">
                {img.alt}
              </p>
            </div>

            {/* Corner Accent for even images */}
            {i % 2 === 0 && (
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles size={20} className="text-white fill-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
