import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, CheckCircle, Users, GraduationCap, School, Star, Award, Target, Heart, Lightbulb, Globe, ChevronDown } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import EnrollmentForm from '@/components/EnrollmentForm';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { GlassNavigation } from '@/components/ui/glass-navigation';
import { MegaMenu } from '@/components/ui/mega-menu';
import { AnimatedHero } from '@/components/ui/animated-hero';
import { InteractiveCard } from '@/components/ui/interactive-card';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // About menu items
  const aboutMenuItems = [
    {
      icon: <School className="h-5 w-5" />,
      title: "Our History",
      description: "Founded in 1985, learn about our journey of educational excellence"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Mission & Values",
      description: "Discover our commitment to nurturing future leaders"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Staff & Faculty",
      description: "Meet our dedicated team of educators and professionals"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Accreditations",
      description: "Our recognized standards and certifications"
    }
  ];

  // Academics menu items
  const academicsMenuItems = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Elementary Programs",
      description: "Building strong foundations for lifelong learning"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Middle School",
      description: "Supporting growth through early adolescence"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "High School",
      description: "Preparing students for college and career success"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Academic Calendar",
      description: "Important dates and academic schedules"
    }
  ];

  // Campus Life menu items
  const campusLifeMenuItems = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Clubs & Activities",
      description: "Explore extracurricular opportunities"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Athletics",
      description: "Competitive sports and physical education"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Events",
      description: "Community gatherings and celebrations"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Community Service",
      description: "Making a difference in our community"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <EnrollmentForm open={showEnrollmentForm} onOpenChange={setShowEnrollmentForm} />
      
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-4 text-center text-sm md:text-base relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 transform skew-y-1"></div>
        <p className="relative z-10 font-medium">
          🎉 Now accepting applications for Fall 2025 semester! 
          <a href="#" className="underline font-bold ml-2 hover:text-yellow-300 transition-colors">Apply Today</a>
        </p>
      </div>
      
      {/* Modern Glass Navigation */}
      <GlassNavigation isScrolled={isScrolled}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <School className="h-8 w-8 text-white drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold text-white font-serif drop-shadow-lg">Northside Academy</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <MegaMenu 
                  title="About" 
                  items={aboutMenuItems}
                  featured={{
                    title: "Campus Tour",
                    description: "Experience our beautiful campus virtually",
                    image: "https://images.unsplash.com/photo-1562774053-701939374585",
                    href: "#"
                  }}
                />
                <MegaMenu 
                  title="Academics" 
                  items={academicsMenuItems}
                  featured={{
                    title: "STEM Excellence",
                    description: "Award-winning science and technology programs",
                    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
                    href: "#"
                  }}
                />
                <MegaMenu 
                  title="Campus Life" 
                  items={campusLifeMenuItems}
                  featured={{
                    title: "Student Activities",
                    description: "Over 50 clubs and organizations to join",
                    image: "https://images.unsplash.com/photo-1511225317751-5c2d61819d58",
                    href: "#"
                  }}
                />
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white/90 hover:text-white hover:bg-white/10`} href="#">
                  Admissions
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl text-white border-0"
            >
              Apply Now
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 hover:scale-105 transition-all backdrop-blur-sm"
              variant="outline"
            >
              Portal Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </GlassNavigation>

      {/* Immersive Hero Section */}
      <AnimatedHero>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Excellence in Education Since 1985</span>
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in font-serif mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Inspiring Minds,
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text text-transparent">
                Shaping Futures
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in delay-300 leading-relaxed">
              Join a transformative educational journey where innovation meets tradition, 
              and every student is empowered to reach their full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in delay-500">
              <Button 
                onClick={() => setShowEnrollmentForm(true)}
                className="text-lg px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all shadow-2xl hover:shadow-green-500/25 text-white border-0 group"
                size="lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 hover:scale-105 transition-all backdrop-blur-sm"
                variant="outline"
                size="lg"
              >
                Student Portal
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/60 mx-auto" />
            </div>
          </div>
        </div>
      </AnimatedHero>

      {/* Enhanced About Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4" />
              About Our Institution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              Where Excellence Meets Innovation
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              For over three decades, Northside Academy has been at the forefront of educational innovation, 
              nurturing generations of leaders, thinkers, and changemakers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <InteractiveCard className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-200/50 text-center p-8" hover glow>
              <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white font-serif">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide a transformative educational experience that nurtures intellect, creativity, 
                and character, preparing students to be responsible global citizens.
              </p>
            </InteractiveCard>
            
            <InteractiveCard className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-200/50 text-center p-8" hover glow>
              <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white font-serif">Academic Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our rigorous curriculum challenges students while fostering critical thinking skills 
                and a lifelong love of learning for success in college and beyond.
              </p>
            </InteractiveCard>
            
            <InteractiveCard className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-200/50 text-center p-8" hover glow>
              <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white font-serif">Community</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We foster an inclusive environment where students from diverse backgrounds 
                grow together, forming lasting friendships and meaningful connections.
              </p>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Programs & Curriculum */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Academic Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              Comprehensive Learning Programs
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Our innovative programs are designed to nurture the whole student - intellectually, 
              socially, and emotionally - preparing them for tomorrow's challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <InteractiveCard className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" 
                  alt="Elementary Education" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-blue-500 rounded-lg p-2 inline-block mb-2">
                    <School className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 dark:text-white">Elementary School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Building strong foundations with nurturing approaches to core academics, 
                  critical thinking, and creative expression.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center group">
                  Discover More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </InteractiveCard>
            
            <InteractiveCard className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45" 
                  alt="Middle School Education" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-green-500 rounded-lg p-2 inline-block mb-2">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 dark:text-white">Middle School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Supporting students through early adolescence with engaging curriculum 
                  and comprehensive personal development programs.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center group">
                  Explore Programs 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </InteractiveCard>
            
            <InteractiveCard className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                  alt="High School Education" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-purple-500 rounded-lg p-2 inline-block mb-2">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 dark:text-white">High School</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Preparing students for college and beyond with advanced academics, 
                  leadership opportunities, and personalized guidance.
                </p>
                <a href="#" className="text-primary dark:text-blue-400 font-medium hover:underline flex items-center group">
                  View Curriculum 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Community Voices
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              What Our Community Says
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InteractiveCard className="bg-white dark:bg-gray-800 p-8 shadow-xl" hover glow>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-white text-lg">AS</span>
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white">Amanda Stevens</p>
                  <p className="text-sm text-primary font-medium">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-lg">
                "The dedicated teachers at Northside Academy have made a tremendous difference 
                in my daughter's academic journey. The individualized attention and supportive 
                environment have helped her thrive in ways I never expected."
              </p>
            </InteractiveCard>
            
            <InteractiveCard className="bg-white dark:bg-gray-800 p-8 shadow-xl" hover glow>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-white text-lg">EW</span>
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white">Ethan Williams</p>
                  <p className="text-sm text-primary font-medium">Class of 2024</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-lg">
                "Being a student at Northside has been transformative. The challenging curriculum 
                pushed me to excel academically, while the supportive community helped me discover 
                my passion for science and robotics."
              </p>
            </InteractiveCard>
            
            <InteractiveCard className="bg-white dark:bg-gray-800 p-8 shadow-xl" hover glow>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-white text-lg">DR</span>
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white">Dr. Rebecca Chen</p>
                  <p className="text-sm text-primary font-medium">Science Department Chair</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-lg">
                "Teaching at Northside Academy has been the highlight of my career. The collaborative 
                faculty environment and resources available allow us to create innovative learning 
                experiences that truly engage students."
              </p>
            </InteractiveCard>
          </div>
          
          {/* Enhanced Accreditations */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Accreditations & Recognition</h3>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <InteractiveCard className="bg-white dark:bg-gray-800 p-6 shadow-lg" hover>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <p className="font-semibold">National Education Association</p>
                </div>
              </InteractiveCard>
              <InteractiveCard className="bg-white dark:bg-gray-800 p-6 shadow-lg" hover>
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <p className="font-semibold">STEM Excellence Award</p>
                </div>
              </InteractiveCard>
              <InteractiveCard className="bg-white dark:bg-gray-800 p-6 shadow-lg" hover>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <p className="font-semibold">Regional Accreditation Board</p>
                </div>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 animate-on-scroll">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              School Events
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
              Upcoming Events
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InteractiveCard className="overflow-hidden shadow-xl" hover>
              <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-4 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                  <Calendar className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium opacity-90">MAY</p>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm opacity-90">2025</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 dark:text-white">Spring Arts Festival</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Celebrate creativity with student performances, art exhibitions, and interactive workshops.
                </p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>3:00 PM - 7:00 PM</span>
                </div>
              </div>
            </InteractiveCard>
            
            <InteractiveCard className="overflow-hidden shadow-xl" hover>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                  <Calendar className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium opacity-90">JUN</p>
                <p className="text-2xl font-bold">02</p>
                <p className="text-sm opacity-90">2025</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 dark:text-white">Science Fair</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Students showcase innovative research projects and scientific discoveries.
                </p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </InteractiveCard>
            
            <InteractiveCard className="overflow-hidden shadow-xl" hover>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                  <Calendar className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium opacity-90">JUN</p>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm opacity-90">2025</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 dark:text-white">Graduation Ceremony</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Celebrate the achievements of the Class of 2025 graduates.
                </p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
              </div>
            </InteractiveCard>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="hover:bg-primary hover:text-white border-2 px-8 py-3 text-lg hover:scale-105 transition-all">
              View Full Calendar <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white animate-on-scroll relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-3xl mx-auto text-xl mb-12 opacity-90 leading-relaxed">
            Join our vibrant learning community and discover the difference that 
            personalized education, innovative teaching, and a supportive environment can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              variant="outline" 
              onClick={() => setShowEnrollmentForm(true)} 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg hover:scale-105 transition-all bg-transparent backdrop-blur-sm"
              size="lg"
            >
              Apply for Admission
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')} 
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-10 py-4 text-lg hover:scale-105 transition-all bg-transparent backdrop-blur-sm"
              size="lg"
            >
              Student Portal Login
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/3">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <School className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold font-serif">Northside Academy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Providing excellence in education since 1985. Our students are prepared 
                for success in college, career, and life through innovative learning experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                  <span className="text-primary font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                  <span className="text-primary font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                  <span className="text-primary font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-6 text-primary">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Academics</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Admissions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Campus Life</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-primary">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">School Calendar</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Student Handbook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Career Opportunities</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Alumni Network</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-primary">Contact</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📧</span>
                    <span>info@northsideacademy.edu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📍</span>
                    <span>123 Education Ave, Learning City</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Northside Academy. All rights reserved. Built with excellence in mind.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
