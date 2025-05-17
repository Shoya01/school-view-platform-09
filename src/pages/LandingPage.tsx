
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, CheckCircle, Users } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import EnrollmentForm from '@/components/EnrollmentForm';

const LandingPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
      <EnrollmentForm open={showEnrollmentForm} onOpenChange={setShowEnrollmentForm} />
      
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary dark:text-blue-300" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EduManagement</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all"
            >
              Enroll Now
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 md:py-24 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in">
                Modern Education Management Platform
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-lg animate-fade-in delay-300">
                Streamlined attendance tracking, assignment management, and classroom communications for students, teachers, and administrators.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => setShowEnrollmentForm(true)}
                  className="w-full sm:w-auto text-lg px-8 py-6 bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform animate-fade-in delay-500"
                >
                  Apply for Admission
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  className="w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-transform animate-fade-in delay-500"
                  variant="outline"
                >
                  Login to Dashboard
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Student using laptop" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Features */}
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">For Students</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>View attendance records and statistics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Access and submit assignments online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Receive important class notices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Track academic performance</span>
                </li>
              </ul>
            </div>
            
            {/* Teacher Features */}
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">For Teachers</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Manage classroom attendance easily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Create and grade assignments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Post important notices to classes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Track student performance metrics</span>
                </li>
              </ul>
            </div>
            
            {/* Admin Features */}
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">For Administrators</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Oversee school operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Monitor teacher and student activity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Generate and analyze reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span>Manage schoolwide announcements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialsRef} className="py-16 bg-blue-50 dark:bg-gray-700 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "This platform has made managing my classroom so much easier. I can track attendance and assignments all in one place."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="font-medium text-primary dark:text-blue-300">JS</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium dark:text-white">Jane Smith</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Math Teacher</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "As a student, I love being able to see all my assignments and notices in one place. The interface is really easy to use."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="font-medium text-primary dark:text-blue-300">MJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium dark:text-white">Michael Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Student, Grade 10</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The administrative tools have given me unprecedented visibility into our school's operations. It's been transformative."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="font-medium text-primary dark:text-blue-300">RP</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium dark:text-white">Rachel Peterson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">School Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Join our platform today and experience the benefits of streamlined education management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowEnrollmentForm(true)} 
              className="border-white text-white hover:bg-green-500 hover:border-green-500 hover:text-white px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Enroll Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')} 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <h3 className="text-xl font-bold">EduManagement</h3>
              </div>
              <p className="text-gray-400 max-w-md">
                A comprehensive platform for students, teachers, and administrators to manage educational activities efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>info@edumanagement.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>123 Education St, Learning City</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 EduManagement. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
