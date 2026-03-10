import { Shield, BookOpen, Smile, Heart } from "lucide-react";
const values = [
  { icon: Shield, label: "Safety First", desc: "Secure campus with trained staff", color: "bg-sky-light text-sky" },
  { icon: BookOpen, label: "Joyful Learning", desc: "Play-based curriculum", color: "bg-mint-light text-mint" },
  { icon: Smile, label: "Fun Every Day", desc: "Activities that spark joy", color: "bg-sunshine text-sunshine-foreground" },
  { icon: Heart, label: "Loving Care", desc: "Warm and nurturing environment", color: "bg-rose-light text-rose" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] rotate-3 group-hover:rotate-1 transition-transform" />
          <img
            src="/pictures/study1.png"
            alt="Children learning in a modern classroom"
            className="relative w-full rounded-[2rem] shadow-premium z-10 transform group-hover:scale-[1.02] transition-all duration-500"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-[2rem] flex items-center justify-center shadow-lg z-20 animate-bounce-gentle">
            <BookOpen className="text-white" size={40} />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">About Our Institution</h4>
            <h2 className="text-4xl md:text-5xl text-foreground font-black leading-tight">
              A Legacy of <span className="text-secondary">Excellence</span> in Early Education
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              GENESIS INTERNATIONAL MONTESSORI AND STEM SCHOOL has been a beacon of nurturing and innovation for over a decade. We combine traditional values with modern pedagogical approaches to create a holistic learning environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Our curriculum is designed to spark curiosity, foster independence, and build a strong foundation for future academic success through play-based and Montessori methodologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            {values.map((v) => (
              <div key={v.label} className="flex items-start gap-4 p-4 rounded-2xl bg-background hover:shadow-soft transition-all border border-border/50">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center shrink-0 shadow-sm font-bold`}>
                  <v.icon size={24} />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-foreground">{v.label}</p>
                  <p className="text-sm text-muted-foreground leading-tight font-medium">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
