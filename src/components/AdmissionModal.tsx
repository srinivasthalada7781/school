import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        parentName: "",
        childName: "",
        childAge: "",
        phone: "",
        email: "",
        program: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, program: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from("admissions").insert([
                {
                    parent_name: formData.parentName,
                    child_name: formData.childName,
                    child_age: formData.childAge,
                    phone: formData.phone,
                    email: formData.email,
                    program: formData.program,
                },
            ]);

            if (error) {
                console.error("Supabase Error:", error);
                throw new Error(error.message);
            }

            toast({
                title: "Application Submitted!",
                description: "Thank you for applying to Genesis International. We will contact you soon.",
            });

            setFormData({
                parentName: "",
                childName: "",
                childAge: "",
                phone: "",
                email: "",
                program: "",
            });
            onClose();
        } catch (error: any) {
            toast({
                title: "Submission Failed",
                description: "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[480px] rounded-[2.5rem] border-[6px] border-white shadow-sticker p-0 overflow-hidden bg-[#FDFBF2]">
                <div className="bg-primary/10 p-8 pb-6 relative">
                    <div className="absolute top-4 right-8 opacity-20 animate-pulse">
                        <Sparkles size={40} className="text-sunshine" />
                    </div>
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-fredoka font-black text-[#133a5d] leading-none">
                            Start the <span className="text-primary">Journey!</span>
                        </DialogTitle>
                        <DialogDescription className="text-slate-500 font-bold mt-2">
                            Fill out this quick form and let's get your little learner started.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid gap-2">
                        <Label htmlFor="parentName" className="font-fredoka text-sm font-black text-[#133a5d] uppercase tracking-widest pl-1">Parent's Name</Label>
                        <Input id="parentName" name="parentName" className="rounded-2xl border-white shadow-inner-lg h-12 font-bold" value={formData.parentName} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="childName" className="font-fredoka text-sm font-black text-[#133a5d] uppercase tracking-widest pl-1">Child's Name</Label>
                        <Input id="childName" name="childName" className="rounded-2xl border-white shadow-inner-lg h-12 font-bold" value={formData.childName} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="childAge" className="font-fredoka text-sm font-black text-[#133a5d] uppercase tracking-widest pl-1">Age</Label>
                            <Input id="childAge" name="childAge" type="number" step="0.5" className="rounded-2xl border-white shadow-inner-lg h-12 font-bold" value={formData.childAge} onChange={handleChange} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="program" className="font-fredoka text-sm font-black text-[#133a5d] uppercase tracking-widest pl-1">Program</Label>
                            <Select onValueChange={handleSelectChange} required>
                                <SelectTrigger className="rounded-2xl border-white shadow-inner-lg h-12 font-bold bg-white">
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-2 border-primary/10">
                                    <SelectItem value="Tender Hearts">Tender Hearts (1-2 yrs)</SelectItem>
                                    <SelectItem value="Little Hearts">Little Hearts (2-3 yrs)</SelectItem>
                                    <SelectItem value="Nursery">Nursery (3-4 yrs)</SelectItem>
                                    <SelectItem value="LKG">LKG (4-5 yrs)</SelectItem>
                                    <SelectItem value="UKG">UKG (5-6 yrs)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone" className="font-fredoka text-sm font-black text-[#133a5d] uppercase tracking-widest pl-1">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" className="rounded-2xl border-white shadow-inner-lg h-12 font-bold" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <Button type="submit" className="kid-button w-full mt-4 h-14 bg-primary text-xl" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit Application"}
                        <Heart size={20} className="ml-2 fill-current" />
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
