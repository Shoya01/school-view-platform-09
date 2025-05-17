
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, CheckCircle, Users, GraduationCap, School, Info } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import EnrollmentForm from '@/components/EnrollmentForm';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

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
      
      {/* Announcement Banner */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm md:text-base">
        <p>Now accepting applications for Fall 2025 semester! <a href="#" className="underline font-medium ml-1">Learn more</a></p>
      </div>
      
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-primary dark:text-blue-300" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">Northside Academy</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Our History</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Mission & Values</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Staff & Faculty</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Programs</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Curriculum</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Academic Calendar</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Campus Life</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Clubs & Activities</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Athletics</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                            <div className="text-sm font-medium">Events</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Admissions
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all"
            >
              Apply Now
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Portal Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 md:py-24 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in font-serif">
                Excellence in Education Since 1985
              </h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 italic font-serif">
                "Inspiring minds, shaping futures"
              </p>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-lg animate-fade-in delay-300">
                Northside Academy offers a comprehensive educational experience with dedicated faculty, cutting-edge facilities, and a nurturing environment that prepares students for success.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => setShowEnrollmentForm(true)}
                  className="w-full sm:w-auto text-lg px-8 py-6 bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform animate-fade-in delay-500"
                >
                  Apply for Admission
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  className="w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-transform animate-fade-in delay-500"
                  variant="outline"
                >
                  Student Portal Login
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1" 
                  alt="Students at Northside Academy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our School Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
              About Northside Academy
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              With a rich history spanning over three decades, Northside Academy has established itself as a leading educational institution committed to academic excellence and character development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300 text-center">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-8 w-8 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white font-serif">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide a transformative educational experience that nurtures intellect, creativity, and character, preparing students to be responsible global citizens.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300 text-center">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white font-serif">Academic Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our rigorous curriculum is designed to challenge students while fostering a love of learning and critical thinking skills for success in college and beyond.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300 text-center">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white font-serif">Community</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We foster a supportive and inclusive environment where students from diverse backgrounds can grow together and form lasting friendships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs & Curriculum */}
      <section className="py-16 bg-blue-50 dark:bg-gray-700 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
              Academic Programs
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our comprehensive programs are designed to nurture the whole student - intellectually, socially, and emotionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="h-48 bg-blue-400 relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" 
                  alt="Elementary Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Elementary School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Building a strong foundation with a nurturing approach to core academics, critical thinking, and creativity.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="h-48 bg-green-400 relative">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45" 
                  alt="Middle School Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Middle School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Supporting students through early adolescence with engaging curriculum and personal development.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="h-48 bg-purple-400 relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                  alt="High School Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">High School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Preparing students for college and beyond with advanced academics, leadership opportunities, and personalized guidance.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Highlights */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-serif">Our Campus</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Nestled on 25 acres of beautiful grounds, our campus provides students with state-of-the-art facilities designed to enhance the learning experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Modern classrooms with advanced technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Fully-equipped science and computer labs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Performing arts center and music studios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Athletic facilities including gymnasium and playing fields</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Dedicated spaces for art, music, and extracurricular activities</span>
                </li>
              </ul>
              <Button className="mt-8 bg-primary">Schedule a Campus Tour</Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585" 
                  alt="School Library" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350" 
                  alt="Science Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1511225317751-5c2d61819d58" 
                  alt="Sports Field" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1599687267812-35c05ff70ee9" 
                  alt="Art Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialsRef} className="py-16 bg-blue-50 dark:bg-gray-700 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-serif">
            What Our Community Says
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-4">
                  <span className="font-medium text-primary dark:text-blue-300">AS</span>
                </div>
                <div>
                  <p className="font-medium dark:text-white">Amanda Stevens</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The dedicated teachers at Northside Academy have made a tremendous difference in my daughter's academic journey. The individualized attention and supportive environment have helped her thrive in ways I never expected."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-4">
                  <span className="font-medium text-primary dark:text-blue-300">EW</span>
                </div>
                <div>
                  <p className="font-medium dark:text-white">Ethan Williams</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Class of 2024</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Being a student at Northside has been transformative. The challenging curriculum pushed me to excel academically, while the supportive community helped me discover my passion for science and robotics."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-4">
                  <span className="font-medium text-primary dark:text-blue-300">DR</span>
                </div>
                <div>
                  <p className="font-medium dark:text-white">Dr. Rebecca Chen</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Science Department Chair</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Teaching at Northside Academy has been the highlight of my career. The collaborative faculty environment and resources available allow us to create innovative learning experiences that truly engage students."
              </p>
            </div>
          </div>
          
          {/* Accreditation */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Accreditations & Recognitions</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <p className="font-medium">National Education Association</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <p className="font-medium">STEM Excellence Award</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <p className="font-medium">Regional Accreditation Board</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
              Upcoming Events
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary text-white p-3 text-center">
                <p className="text-sm font-medium">MAY 15, 2025</p>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 dark:text-white">Spring Arts Festival</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Celebrate the creativity of our students with performances, exhibitions, and interactive activities.</p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>3:00 PM - 7:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-600 text-white p-3 text-center">
                <p className="text-sm font-medium">JUNE 2, 2025</p>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 dark:text-white">Science Fair</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Students showcase their innovative research projects and scientific discoveries.</p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-700 text-white p-3 text-center">
                <p className="text-sm font-medium">JUNE 15, 2025</p>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 dark:text-white">Graduation Ceremony</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Join us as we celebrate the achievements of the Class of 2025.</p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="hover:bg-primary hover:text-white">
              View Full Calendar <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Start Your Educational Journey Today</h2>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Join our vibrant learning community at Northside Academy and discover the difference that personalized education can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowEnrollmentForm(true)} 
              className="border-white text-white hover:bg-green-600 hover:border-green-600 hover:text-white px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Apply for Admission
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')} 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Student Portal Login
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
                <School className="h-6 w-6" />
                <h3 className="text-xl font-bold font-serif">Northside Academy</h3>
              </div>
              <p className="text-gray-400 max-w-md">
                Providing excellence in education since 1985. Our students are prepared for success in college, career, and life.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">School Calendar</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Student Handbook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>info@northsideacademy.edu</li>
                  <li>+1 (555) 123-4567</li>
                  <li>123 Education Ave, Learning City</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Northside Academy. All rights reserved.</p>
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
