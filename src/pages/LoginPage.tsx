
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';
import { UserRole } from '@/types';
import ThemeToggle from '@/components/ThemeToggle';

const LoginPage = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    try {
      const success = await login(email, password, role);
      
      if (success) {
        toast.success(`Welcome back!`);
        
        // Redirect based on role
        switch (role) {
          case 'admin':
            navigate('/admin/dashboard');
            break;
          case 'teacher':
            navigate('/teacher/dashboard');
            break;
          case 'student':
            navigate('/student/dashboard');
            break;
        }
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error(error);
    }
  };
  
  return (
    <div className="relative flex h-screen w-full items-center justify-center p-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute animate-spin-slow opacity-30 -inset-[40%] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>
        <div className="absolute animate-pulse opacity-20 -inset-[30%] rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400"></div>
        <div className="absolute animate-bounce-slow opacity-10 -inset-[20%] rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400 delay-700"></div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300">EduManagement</h1>
          <p className="text-gray-600 dark:text-gray-300">Access your educational dashboard</p>
        </div>
        
        <Card className="backdrop-blur-md bg-white/90 dark:bg-gray-800/90 animate-fade-in shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Log in</CardTitle>
            <CardDescription className="dark:text-gray-300">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" onValueChange={(value) => setRole(value as UserRole)}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="bg-white/80 dark:bg-gray-700/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="bg-white/80 dark:bg-gray-700/80"
                  />
                </div>
                
                <TabsContent value="student">
                  <p className="text-sm text-muted-foreground mb-4">
                    For demo: Use email "student@school.edu" with any password
                  </p>
                </TabsContent>
                <TabsContent value="teacher">
                  <p className="text-sm text-muted-foreground mb-4">
                    For demo: Use email "teacher@school.edu" with any password
                  </p>
                </TabsContent>
                <TabsContent value="admin">
                  <p className="text-sm text-muted-foreground mb-4">
                    For demo: Use email "admin@school.edu" with any password
                  </p>
                </TabsContent>
                
                <Button type="submit" className="w-full hover:scale-105 transition-transform" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Log in'}
                </Button>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              This is a demo application. Use the provided credentials.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
