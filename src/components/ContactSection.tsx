import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">Get in <span className="text-primary">Touch</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">We'd love to hear from you! Visit us or send a message.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info + Map */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-light flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-sky" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Location</p>
                  <a
                    href="https://maps.app.goo.gl/J29K2A9g32m4eFQZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-medium block"
                  >
                    Arasavalli Junction, Srikakulam, AP 532001
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-mint" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-rose" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">admissions@genesis-montessori.in</p>
                </div>
              </div>
            </div>
            {/* Map iframe */}
            <div className="rounded-2xl overflow-hidden shadow-soft h-64 bg-muted flex items-center justify-center">
              <iframe
                title="Genesis International Montessori School Location"
                src="https://maps.google.com/maps?q=GENESIS+International+Montessori+School,+Arasavalli,+Srikakulam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <h3 className="font-fredoka text-foreground text-lg">Send us a Message</h3>
            {(["name", "email", "phone"] as const).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required={field !== "phone"}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            ))}
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
            />
            <Button variant="hero" className="w-full rounded-xl" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
