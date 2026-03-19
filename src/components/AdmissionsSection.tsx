import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, GraduationCap } from "lucide-react";
import { AdmissionModal } from "./AdmissionModal";
import { cn } from "@/lib/utils";

const steps = [
  "Fill out the online enquiry form",
  "Visit the school for a campus tour",
  "Submit required documents",
  "Complete the registration process",
];

const AdmissionsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="admissions" className="py-24 bg-[#FDFBF2] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary border-2 border-white px-8 py-3 rounded-full text-sm font-black tracking-widest uppercase shadow-sticker">
            <Sparkles size={20} className="text-sunshine animate-pulse" />
            2026-27 Admissions Now Open
          </div>

          <h2 className="text-5xl md:text-7xl text-[#133a5d] font-black font-fredoka tracking-tight leading-tight">
            Give Your Child the <span className="text-secondary underline decoration-dotted decoration-secondary/30 underline-offset-8">Best Start</span>
          </h2>

          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-bold opacity-80 leading-relaxed">
            Join the <span className="text-primary">Genesis</span> family! Our process is simple, friendly, and designed to welcome your little ones.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center pt-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white p-10 md:p-12 rounded-[3.5rem] border-4 border-white shadow-sticker text-left transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={32} className="text-primary" />
                  </div>
                  <h3 className="font-fredoka text-3xl font-black text-[#133a5d]">How to Enroll</h3>
                </div>
                <div className="space-y-6">
                  {steps.map((s, i) => (
                    <div key={i} className="flex items-start gap-4 group/step">
                      <div className="w-8 h-8 rounded-full bg-mint text-mint-foreground flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/step:scale-110 transition-transform">
                        <CheckCircle size={18} className="text-white" />
                      </div>
                      <p className="text-lg text-[#133a5d]/70 font-bold leading-tight group-hover/step:text-primary transition-colors">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 md:items-start text-center md:text-left">
              <div className="bg-white p-8 rounded-[2.5rem] border-4 border-white shadow-sticker rotate-2 hover:rotate-0 transition-all">
                <p className="text-[#133a5d] font-bold text-lg mb-4 italic">"We're here to help every step of the way. Let's start this journey together!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-secondary/20 overflow-hidden">
                    <img src="/pictures/Genesis Stem Final Logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="text-left">
                    <p className="font-fredoka font-black text-primary leading-none">Genesis Team</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Support Office</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="kid-button bg-primary hover:bg-primary/90 text-white text-2xl w-full md:w-auto h-20 px-12"
                onClick={() => setIsModalOpen(true)}
              >
                <Sparkles size={24} className="mr-3 text-sunshine animate-pulse" />
                Apply Today!
              </Button>
            </div>
          </div>

          <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;

