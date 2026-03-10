import { Play } from "lucide-react";

const videos = [
  {
    title: "Classroom Learning",
    desc: "Interactive learning sessions and engaging activities with our dedicated teachers.",
    src: "/videos/class.mp4"
  },
  {
    title: "Sports Day Highlights",
    desc: "Kids exploring their competitive and creative side with sports and outdoor play.",
    src: "/videos/extracirucular.mp4"
  },
  {
    title: "Events & Celebrations",
    desc: "Highlights from our annual days, festivals, and special school events.",
    src: "/videos/celebrations.mp4"
  },
];

const SchoolLifeVideo = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">School <span className="text-primary">Life</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Watch our students in action — real moments from our vibrant school culture.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="glass-card overflow-hidden group">
            <div className="aspect-[9/16] bg-muted relative overflow-hidden">
              <video
                src={v.src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-fredoka text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolLifeVideo;
