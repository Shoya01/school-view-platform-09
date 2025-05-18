
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, School, Calendar, Book, Edit, Settings, Shield, Key, Bell } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

// Mock student data
const studentData = {
  id: '12345',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.edu',
  phone: '(123) 456-7890',
  dateOfBirth: '2007-08-15',
  gender: 'Male',
  address: '123 Student Lane, Learning City, ST 54321',
  className: '10th Grade',
  section: 'A',
  rollNumber: '1042',
  joinDate: '2022-09-01',
  guardianName: 'Robert & Mary Johnson',
  guardianContact: '(123) 555-7890',
  guardianEmail: 'rjohnson@example.com',
  profileComplete: 85,
  subjects: [
    { name: 'Mathematics', teacher: 'Dr. Sarah Thompson', grade: 'A' },
    { name: 'Science', teacher: 'Ms. Emily Chen', grade: 'A-' },
    { name: 'English', teacher: 'Mr. James Wilson', grade: 'B+' },
    { name: 'History', teacher: 'Mr. Robert Brown', grade: 'B' },
    { name: 'Art', teacher: 'Ms. Lisa Park', grade: 'A' },
    { name: 'Physical Education', teacher: 'Mr. David Jones', grade: 'A' },
  ],
  achievements: [
    { title: 'Mathematics Olympiad', description: 'First place in regional competition', date: '2024-11-15', badge: 'Gold' },
    { title: 'Science Fair', description: 'Best innovative project award', date: '2024-03-20', badge: 'Silver' },
    { title: 'Creative Writing Competition', description: 'Honorable mention', date: '2023-05-10', badge: 'Bronze' },
  ]
};

const StudentProfile = () => {
  const { currentUser } = useAuth();
  const [selectedTab, setSelectedTab] = useState('personal');
  
  // Use real user data if available, otherwise use mock data
  const name = currentUser?.name || studentData.name;
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Student Profile
        </h2>
        <p className="text-muted-foreground mt-1">
          View and manage your personal and academic information
        </p>
      </div>

      {/* Profile Header */}
      <Card className="border-none shadow-sm overflow-hidden">
        <div className="relative">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-700 dark:to-purple-700"></div>
          
          {/* Profile Image */}
          <div className="absolute -bottom-16 left-6">
            <div className="rounded-full h-32 w-32 border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
              {currentUser?.profileImageUrl ? (
                <img 
                  src={currentUser.profileImageUrl}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <User className="h-20 w-20 text-muted-foreground" />
              )}
            </div>
          </div>
        </div>
        
        <CardContent className="pt-20 pb-6 px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <School className="h-4 w-4 mr-1" />
                  <span>{studentData.className}, Section {studentData.section}</span>
                </div>
                <div className="flex items-center">
                  <Book className="h-4 w-4 mr-1" />
                  <span>Roll No: {studentData.rollNumber}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined {format(new Date(studentData.joinDate), 'MMMM yyyy')}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="outline" className="gap-1">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button className="gap-1">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
          
          {/* Profile Completion */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Profile Completion</span>
              <span>{studentData.profileComplete}%</span>
            </div>
            <Progress value={studentData.profileComplete} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      {/* Tabs for Profile Sections */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-muted/50 mb-4">
          <TabsTrigger value="personal" className="data-[state=active]:bg-background">
            Personal Info
          </TabsTrigger>
          <TabsTrigger value="academic" className="data-[state=active]:bg-background">
            Academic Info
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-background">
            Achievements
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-background">
            Account Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Email Address</p>
                    <p className="text-sm text-muted-foreground">{studentData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Phone Number</p>
                    <p className="text-sm text-muted-foreground">{studentData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{studentData.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Full Name</p>
                    <p className="text-sm text-muted-foreground">{studentData.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Date of Birth</p>
                    <p className="text-sm text-muted-foreground">{format(new Date(studentData.dateOfBirth), 'MMMM d, yyyy')} (Age: {new Date().getFullYear() - new Date(studentData.dateOfBirth).getFullYear()})</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Gender</p>
                    <p className="text-sm text-muted-foreground">{studentData.gender}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Guardian Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Guardian Name</p>
                    <p className="text-sm text-muted-foreground">{studentData.guardianName}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Guardian Contact</p>
                    <p className="text-sm text-muted-foreground">{studentData.guardianContact}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Guardian Email</p>
                    <p className="text-sm text-muted-foreground">{studentData.guardianEmail}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Update Guardian Information</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Subjects</CardTitle>
              <CardDescription>
                Your current subjects and instructors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Current Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentData.subjects.map((subject, i) => (
                    <TableRow key={i}>
                      <TableCell>{subject.name}</TableCell>
                      <TableCell>{subject.teacher}</TableCell>
                      <TableCell>
                        <Badge className={`
                          ${subject.grade.startsWith('A') ? 'bg-green-100 text-green-800 border-green-200' : 
                            subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                            subject.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                            'bg-red-100 text-red-800 border-red-200'}
                        `}>
                          {subject.grade}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Student Achievements</CardTitle>
              <CardDescription>
                Awards, certificates and recognitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {studentData.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`
                      h-12 w-12 rounded-full flex items-center justify-center shrink-0
                      ${achievement.badge === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                        achievement.badge === 'Silver' ? 'bg-slate-100 text-slate-800' : 
                        'bg-amber-100 text-amber-800'}
                    `}>
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{format(new Date(achievement.date), 'MMMM d, yyyy')}</p>
                    </div>
                    <div className="ml-auto">
                      <Badge variant="outline" className={`
                        ${achievement.badge === 'Gold' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                          achievement.badge === 'Silver' ? 'bg-slate-100 text-slate-800 border-slate-200' : 
                          'bg-amber-100 text-amber-800 border-amber-200'}
                      `}>
                        {achievement.badge}
                      </Badge>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4">View All Achievements</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Account Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Password</p>
                  <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  <Button variant="outline" size="sm">Enable 2FA</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates about assignments and grades</p>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm font-medium">In-App Notifications</p>
                  <p className="text-sm text-muted-foreground">Control which notifications appear in-app</p>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Profile Visibility</p>
                  <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm font-medium">Data Usage & Privacy</p>
                  <p className="text-sm text-muted-foreground">Manage how your information is used</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Privacy Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentProfile;
