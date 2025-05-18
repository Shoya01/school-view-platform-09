
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Award, Book, MapPin, Building, Shield, Save } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const TeacherProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('personal');

  // Mock data for profile
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'Jane Smith',
    email: currentUser?.email || 'jane.smith@example.edu',
    phone: '(123) 456-7890',
    subject: 'Mathematics',
    department: 'Science & Mathematics',
    employeeId: 'TCH-10045',
    joinDate: '2019-08-15',
    address: '123 Teacher Lane, Academicville, ED 12345',
    qualification: 'M.Sc. Mathematics, B.Ed',
    bio: 'Experienced mathematics teacher with 6 years of teaching experience. Specialized in Algebra and Calculus. Passionate about making math accessible and enjoyable for students.',
    classesTaught: ['10-A', '10-B', '11-A'],
    expertise: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
      duration: 3000,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Teacher Profile</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{profileData.name}</h3>
              <p className="text-muted-foreground">{profileData.subject} Teacher</p>
            </div>
            
            <div className="w-full space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{profileData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{profileData.phone}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{profileData.qualification}</span>
              </div>
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{profileData.department}</span>
              </div>
            </div>
            
            <div className="flex gap-2 w-full pt-4">
              <Button variant="outline" className="w-full">
                Change Photo
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="personal"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      value={profileData.name} 
                      onChange={(e) => handleInputChange('name', e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      value={profileData.email} 
                      onChange={(e) => handleInputChange('email', e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input 
                      value={profileData.phone} 
                      onChange={(e) => handleInputChange('phone', e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <Input 
                      value={profileData.address} 
                      onChange={(e) => handleInputChange('address', e.target.value)} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bio</label>
                  <Textarea 
                    rows={4}
                    value={profileData.bio} 
                    onChange={(e) => handleInputChange('bio', e.target.value)} 
                  />
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="professional" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input 
                      value={profileData.subject} 
                      onChange={(e) => handleInputChange('subject', e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Input 
                      value={profileData.department} 
                      onChange={(e) => handleInputChange('department', e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Employee ID</label>
                    <Input 
                      value={profileData.employeeId} 
                      readOnly
                      disabled 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Join Date</label>
                    <Input 
                      value={profileData.joinDate} 
                      readOnly
                      disabled 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Qualification</label>
                    <Input 
                      value={profileData.qualification} 
                      onChange={(e) => handleInputChange('qualification', e.target.value)} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expertise</label>
                  <Input 
                    value={profileData.expertise.join(', ')} 
                    onChange={(e) => handleInputChange('expertise', e.target.value)} 
                  />
                  <p className="text-xs text-muted-foreground">Separate with commas</p>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Password</label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm Password</label>
                  <Input type="password" />
                </div>
                <div className="flex justify-end">
                  <Button>
                    <Shield className="mr-2 h-4 w-4" /> Update Password
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherProfile;
