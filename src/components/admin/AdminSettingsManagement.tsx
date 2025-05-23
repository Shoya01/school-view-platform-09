
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Bell, Mail, Shield, User, School, Calendar, Palette } from 'lucide-react';

const AdminSettingsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage system settings and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="space-y-4">
            <TabsList>
              <TabsTrigger value="account" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="school" className="flex items-center">
                <School className="h-4 w-4 mr-2" />
                School Info
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center">
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Admin User" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="admin@school.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" defaultValue="School Administrator" />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="timezone">Timezone</Label>
                      <p className="text-sm text-muted-foreground">Choose your local timezone</p>
                    </div>
                    <select className="border rounded-md py-1 px-2">
                      <option>America/New_York</option>
                      <option>America/Chicago</option>
                      <option>America/Denver</option>
                      <option>America/Los_Angeles</option>
                      <option>Europe/London</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Language</Label>
                      <p className="text-sm text-muted-foreground">System language preference</p>
                    </div>
                    <select className="border rounded-md py-1 px-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <h3 className="text-lg font-medium">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Alerts</Label>
                    <p className="text-sm text-muted-foreground">Important system notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Student Registrations</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new student registrations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Teacher Updates</Label>
                    <p className="text-sm text-muted-foreground">Notifications about teacher activities</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive weekly summary reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="school" className="space-y-4">
              <h3 className="text-lg font-medium">School Information</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" defaultValue="Springfield High School" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-code">School Code</Label>
                  <Input id="school-code" defaultValue="SHS-12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Education St, Springfield" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 987-6543" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="info@springfield-high.edu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" defaultValue="https://springfield-high.edu" />
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="description">School Description</Label>
                <textarea 
                  id="description" 
                  rows={4}
                  className="w-full border rounded-md p-2"
                  defaultValue="Springfield High School is committed to academic excellence and providing quality education to all students."
                />
              </div>
              <Button>Save School Information</Button>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-4">
              <h3 className="text-lg font-medium">System Appearance</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 cursor-pointer border-2 border-primary">
                    <div className="space-y-2">
                      <div className="h-20 bg-background rounded-md border" />
                      <h4 className="font-medium">Light Mode</h4>
                      <p className="text-sm text-muted-foreground">Default light appearance</p>
                    </div>
                  </Card>
                  <Card className="p-4 cursor-pointer">
                    <div className="space-y-2">
                      <div className="h-20 bg-slate-900 rounded-md" />
                      <h4 className="font-medium">Dark Mode</h4>
                      <p className="text-sm text-muted-foreground">Dark appearance</p>
                    </div>
                  </Card>
                  <Card className="p-4 cursor-pointer">
                    <div className="space-y-2">
                      <div className="h-20 bg-gradient-to-r from-slate-100 to-slate-900 rounded-md" />
                      <h4 className="font-medium">System Default</h4>
                      <p className="text-sm text-muted-foreground">Match system settings</p>
                    </div>
                  </Card>
                </div>
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500"].map((color, i) => (
                      <div key={i} className={`h-8 rounded-full ${color} ${i === 0 ? 'ring-2 ring-offset-2' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <h3 className="text-lg font-medium">Security Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                    </div>
                    <select className="border rounded-md py-1 px-2">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>4 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsManagement;
