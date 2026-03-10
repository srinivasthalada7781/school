import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from "lucide-react";
import { AdmissionModal } from "./AdmissionModal";

const steps = [
  "Fill out the online enquiry form",
  "Visit the school for a campus tour",
  "Submit required documents",
  "Complete the registration process",
];

const AdmissionsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="admissions" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-sunshine/20 text-sunshine-foreground px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles size={16} className="text-sunshine" />
            2026-27 Admissions Now Open
          </div>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Give Your Child the <span className="text-secondary">Best Start</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join the GENESIS INTERNATIONAL MONTESSORI AND STEM SCHOOL family! Our admission process is simple and friendly. We're here to help every step of the way.
          </p>
          <div className="glass-card p-8 text-left max-w-md mx-auto">
            <h3 className="font-fredoka text-foreground mb-4 text-center">How to Enroll</h3>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <Button variant="hero" size="lg" className="rounded-full px-10 text-lg" onClick={() => setIsModalOpen(true)}>
            <Sparkles size={18} className="mr-2" />
            Apply for Admission
          </Button>

          <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;

