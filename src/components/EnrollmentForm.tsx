
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

interface EnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guardianName: '',
    previousSchool: '',
    desiredGrade: '',
    statement: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, desiredGrade: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Application submitted successfully! We'll contact you soon.", {
      description: "Thank you for your interest in our school."
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      guardianName: '',
      previousSchool: '',
      desiredGrade: '',
      statement: ''
    });
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for Admission</DialogTitle>
          <DialogDescription>
            Fill in the form below to apply for admission to our school. We'll review your application and contact you.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input 
              id="fullName" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guardianName">Parent/Guardian Name</Label>
            <Input 
              id="guardianName" 
              name="guardianName" 
              value={formData.guardianName} 
              onChange={handleChange} 
              placeholder="Enter parent/guardian name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
            <Input 
              id="previousSchool" 
              name="previousSchool" 
              value={formData.previousSchool} 
              onChange={handleChange} 
              placeholder="Enter your previous school"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="desiredGrade">Desired Class/Grade</Label>
            <Select onValueChange={handleSelectChange} value={formData.desiredGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Select a grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Grade 1</SelectItem>
                <SelectItem value="2">Grade 2</SelectItem>
                <SelectItem value="3">Grade 3</SelectItem>
                <SelectItem value="4">Grade 4</SelectItem>
                <SelectItem value="5">Grade 5</SelectItem>
                <SelectItem value="6">Grade 6</SelectItem>
                <SelectItem value="7">Grade 7</SelectItem>
                <SelectItem value="8">Grade 8</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
                <SelectItem value="12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="statement">Personal Statement</Label>
            <Textarea 
              id="statement" 
              name="statement" 
              value={formData.statement} 
              onChange={handleChange} 
              placeholder="Tell us why you want to join our school (optional)"
              className="min-h-[100px]"
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
