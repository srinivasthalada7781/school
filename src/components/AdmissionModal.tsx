import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

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
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-primary">Apply for Admission</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and our admissions team will get in touch with you.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid gap-2">
                        <Label htmlFor="parentName">Parent's Name</Label>
                        <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="childName">Child's Name</Label>
                        <Input id="childName" name="childName" value={formData.childName} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="childAge">Child's Age</Label>
                            <Input id="childAge" name="childAge" type="number" step="0.5" value={formData.childAge} onChange={handleChange} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="program">Program</Label>
                            <Select onValueChange={handleSelectChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
