import { Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  {
    title: "Classroom Learning",
    desc: "Interactive learning sessions and engaging activities.",
    src: "/videos/class.mp4",
    color: "from-[#FF9AA2] to-[#FFB7B2]",
    rotate: "-1deg"
  },
  {
    title: "Sports & Play",
    desc: "Exploring their competitive and creative side.",
    src: "/videos/extracirucular.mp4",
    color: "from-[#B5EAD7] to-[#C7CEEA]",
    rotate: "1deg"
  },
  {
    title: "Celebrations",
    desc: "Highlights from our festivals and special events.",
    src: "/videos/celebrations.mp4",
    color: "from-[#FFDAC1] to-[#FF9AA2]",
    rotate: "-1deg"
  },
];

const SchoolLifeVideo = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-2">
          <Sparkles size={18} className="text-primary animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-[#133a5d]">Genesis in Motion</span>
        </div>
        <h2 className="text-5xl md:text-6xl text-[#133a5d] font-black font-fredoka tracking-tight">
          School <span className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-8">Life</span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-bold opacity-80">
          Watch our students in action — real moments from our vibrant school culture.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {videos.map((v, i) => (
          <div
            key={v.title}
            className={cn(
              "group p-6 rounded-[3.5rem] border-4 border-white shadow-sticker transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br",
              v.color
            )}
            style={{ transform: `rotate(${v.rotate})` }}
          >
            <div className="aspect-[9/16] rounded-[2.5rem] bg-black/20 relative overflow-hidden border-4 border-white/50 shadow-inner-lg">
              <video
                src={v.src}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border-2 border-white/50">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            <div className="pt-6 px-2 text-center">
              <h3 className="font-fredoka text-2xl font-black text-[#133a5d] mb-2">{v.title}</h3>
              <p className="text-[#133a5d]/70 font-bold leading-tight">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolLifeVideo;
