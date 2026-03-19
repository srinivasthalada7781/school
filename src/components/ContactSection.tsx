import { MapPin, Phone, Mail, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("messages").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          message: form.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you! We'll get back to you soon.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Supabase Error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FDFBF2] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-primary/10 shadow-sm mb-2">
            <Sparkles size={18} className="text-primary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#133a5d]">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-[#133a5d] font-black font-fredoka tracking-tight">
            Get in <span className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-8">Touch</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto font-bold opacity-80">
            We'd love to hear from you! Visit our campus or send us a friendly message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact info + Map */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border-4 border-white shadow-sticker -rotate-1 hover:rotate-0 transition-transform duration-500 space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center shrink-0 shadow-inner-lg">
                  <MapPin size={28} className="text-sky" />
                </div>
                <div>
                  <p className="font-fredoka text-xl font-black text-[#133a5d] mb-1">Our Location</p>
                  <a
                    href="https://www.google.com/maps/search/Genesis+International+Montessori+School+Visakha+A+colony+Srikakulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#133a5d]/70 font-bold hover:text-primary transition-colors leading-tight block"
                  >
                    Visakha A colony, Near Arch, Opposite SBI, Peddapadu Road, Srikakulam
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-mint/10 flex items-center justify-center shrink-0 shadow-inner-lg">
                  <Phone size={28} className="text-mint" />
                </div>
                <div>
                  <p className="font-fredoka text-xl font-black text-[#133a5d] mb-1">Call Us</p>
                  <p className="text-lg text-[#133a5d]/70 font-bold">+91 97030 33531<br />+91 83283 73123</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-rose/10 flex items-center justify-center shrink-0 shadow-inner-lg">
                  <Mail size={28} className="text-rose" />
                </div>
                <div>
                  <p className="font-fredoka text-xl font-black text-[#133a5d] mb-1">Email Us</p>
                  <p className="text-lg text-[#133a5d]/70 font-bold">genesissrikakulam@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map iframe */}
            <div className="rounded-[3rem] overflow-hidden border-4 border-white shadow-sticker h-72 bg-white relative group rotate-1">
              <iframe
                title="Genesis International Montessori and STEM School Location"
                src="https://maps.google.com/maps?q=Genesis+International+Montessori+School,+Visakha+A+colony,+Srikakulam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-12 rounded-[3.5rem] border-4 border-white shadow-sticker space-y-6 rotate-1 hover:rotate-0 transition-all duration-500"
          >
            <div className="mb-4">
              <h3 className="font-fredoka text-3xl font-black text-[#133a5d]">Send a Message</h3>
              <p className="text-[#133a5d]/60 font-bold mt-1">We typically reply within 24 hours!</p>
            </div>

            <div className="space-y-4">
              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field} className="relative group">
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required={field !== "phone"}
                    className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF2] border-2 border-transparent text-[#133a5d] font-bold placeholder:text-slate-400 focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-lg"
                  />
                </div>
              ))}
              <textarea
                placeholder="What's on your mind?..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#FDFBF2] border-2 border-transparent text-[#133a5d] font-bold placeholder:text-slate-400 focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-lg resize-none"
              />
            </div>

            <Button size="lg" className="kid-button w-full bg-primary hover:bg-primary/90 text-white text-xl h-16" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
