
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, CheckCircle, Users, GraduationCap, School, Star, Award, Target, Heart, Lightbulb, Globe, ChevronDown, Scroll, Trophy, Clock } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import EnrollmentForm from '@/components/EnrollmentForm';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { AcademicNavigation } from '@/components/ui/academic-navigation';
import { VintageHero } from '@/components/ui/vintage-hero';
import { VintageCard } from '@/components/ui/vintage-card';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-up, .stagger-children');
    sections.forEach((section, index) => {
      if (!section.id) section.id = `section-${index}`;
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-amber-950 dark:to-yellow-950 transition-colors duration-300">
      <EnrollmentForm open={showEnrollmentForm} onOpenChange={setShowEnrollmentForm} />
      
      {/* Academic Announcement Banner */}
      <div className="vintage-nav text-white py-4 px-4 text-center text-sm md:text-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-yellow-900/20 to-amber-900/20"></div>
        <p className="relative z-10 font-academic font-semibold vintage-glow">
          📚 Celebrating 40 Years of Academic Excellence - Established 1985 📚
        </p>
      </div>
      
      {/* Academic Navigation */}
      <AcademicNavigation isScrolled={isScrolled}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="academic-seal w-12 h-12 flex items-center justify-center">
              <School className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="text-white">
              <h1 className="text-xl md:text-2xl font-bold font-academic vintage-glow">NORTHSIDE ACADEMY</h1>
              <p className="text-xs text-yellow-200 font-academic">Est. 1985 • Excellence in Education</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white/90 hover:text-yellow-200 hover:bg-white/10 font-academic transition-all duration-300`} href="#">
                  About Us
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white/90 hover:text-yellow-200 hover:bg-white/10 font-academic transition-all duration-300`} href="#">
                  Academics
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white/90 hover:text-yellow-200 hover:bg-white/10 font-academic transition-all duration-300`} href="#">
                  Student Life
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white/90 hover:text-yellow-200 hover:bg-white/10 font-academic transition-all duration-300`} href="#">
                  Admissions
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="academic-button px-4 py-2 text-sm vintage-hover"
            >
              Apply Now
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white border-2 border-yellow-800 vintage-hover transition-all duration-300"
              variant="outline"
            >
              Portal <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </AcademicNavigation>

      {/* Vintage Hero Section */}
      <VintageHero>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Principal's Welcome Badge */}
            <div className="mb-8 fade-in-up">
              <div className="inline-flex items-center gap-3 vintage-border bg-white/90 backdrop-blur-sm rounded-none px-6 py-3 text-amber-900 text-sm mb-6">
                <Scroll className="h-5 w-5 text-amber-700" />
                <span className="font-academic font-semibold">Welcome from Principal Margaret Thompson</span>
                <Scroll className="h-5 w-5 text-amber-700" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-100 leading-tight mb-6 font-academic typewriter">
              NORTHSIDE ACADEMY
            </h1>
            
            <div className="text-xl md:text-2xl text-amber-800 dark:text-amber-200 font-academic mb-4 vintage-glow">
              "Tradition • Excellence • Character"
            </div>
            
            <p className="text-lg md:text-xl text-amber-700 dark:text-amber-300 max-w-4xl mx-auto mb-12 leading-relaxed font-academic fade-in-up">
              For four decades, we have nurtured young minds in the classical tradition of learning, 
              where academic rigor meets moral character, preparing students for lives of purpose and service.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 fade-in-up stagger-children">
              <Button 
                onClick={() => setShowEnrollmentForm(true)}
                className="text-lg px-8 py-6 academic-button"
                size="lg"
              >
                Begin Your Journey
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                className="text-lg px-8 py-6 bg-amber-600 hover:bg-amber-700 text-white border-2 border-amber-800 vintage-hover transition-all duration-300"
                variant="outline"
                size="lg"
              >
                Student Portal
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce fade-in-up">
              <ChevronDown className="h-8 w-8 text-amber-600 mx-auto" />
            </div>
          </div>
        </div>
      </VintageHero>

      {/* Principal's Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-amber-950 dark:to-yellow-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 fade-in-up">
          <div className="max-w-6xl mx-auto">
            <VintageCard className="overflow-hidden" academic>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2">
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
                    <Award className="h-4 w-4" />
                    From the Principal's Desk
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-6 font-academic">
                    A Message from Our Principal
                  </h2>
                  <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed font-academic mb-6">
                    "Welcome to Northside Academy, where we believe that every student possesses unique gifts 
                    waiting to be discovered and nurtured. Our time-honored traditions of academic excellence, 
                    moral development, and community service prepare our students not just for college, 
                    but for meaningful lives of leadership and contribution."
                  </p>
                  <div className="border-l-4 border-amber-600 pl-6">
                    <p className="text-amber-700 dark:text-amber-300 italic font-academic">
                      "Education is not the filling of a pail, but the lighting of a fire." - W.B. Yeats
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="academic-seal w-48 h-48 flex items-center justify-center">
                    <div className="text-center text-white">
                      <GraduationCap className="h-16 w-16 mx-auto mb-2" />
                      <div className="text-sm font-academic font-bold">NORTHSIDE</div>
                      <div className="text-xs">EST. 1985</div>
                    </div>
                  </div>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* Academic Pillars */}
      <section className="py-20 parchment-bg fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-800 text-yellow-100 rounded-none px-6 py-3 text-sm font-medium mb-6 vintage-border">
              <Trophy className="h-4 w-4" />
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 font-academic">
              The Four Pillars of Excellence
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 stagger-children">
            <VintageCard className="text-center p-8" hover academic>
              <div className="academic-seal w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100 font-academic">Academic Rigor</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed font-academic">
                Challenging curriculum rooted in classical education principles, 
                fostering critical thinking and intellectual curiosity.
              </p>
            </VintageCard>
            
            <VintageCard className="text-center p-8" hover academic>
              <div className="academic-seal w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100 font-academic">Character Formation</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed font-academic">
                Developing moral character, integrity, and ethical leadership 
                through mentorship and community service.
              </p>
            </VintageCard>
            
            <VintageCard className="text-center p-8" hover academic>
              <div className="academic-seal w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100 font-academic">Community Spirit</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed font-academic">
                Building lasting relationships and school pride through 
                traditions, events, and collaborative learning.
              </p>
            </VintageCard>
            
            <VintageCard className="text-center p-8" hover academic>
              <div className="academic-seal w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Target className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100 font-academic">Future Readiness</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed font-academic">
                Preparing students for success in higher education and 
                meaningful careers through comprehensive guidance.
              </p>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-amber-950 dark:to-yellow-950 transition-colors duration-300 fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-800 text-yellow-100 rounded-none px-6 py-3 text-sm font-medium mb-6 vintage-border">
              <Scroll className="h-4 w-4" />
              Academic Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 font-academic">
              Time-Honored Educational Excellence
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 stagger-children">
            <VintageCard className="overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="academic-seal w-32 h-32 flex items-center justify-center opacity-80">
                    <School className="h-16 w-16 text-yellow-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="vintage-border bg-white/90 p-2 text-center">
                    <div className="text-amber-800 font-academic font-bold text-sm">ELEMENTARY</div>
                    <div className="text-amber-600 text-xs">Grades K-5</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-amber-900 dark:text-amber-100 font-academic">Elementary School</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Building strong foundations in reading, writing, mathematics, and character 
                  through nurturing guidance and classical methodology.
                </p>
                <Button variant="outline" className="vintage-hover border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </VintageCard>
            
            <VintageCard className="overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="academic-seal w-32 h-32 flex items-center justify-center opacity-80">
                    <Users className="h-16 w-16 text-yellow-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="vintage-border bg-white/90 p-2 text-center">
                    <div className="text-green-800 font-academic font-bold text-sm">MIDDLE SCHOOL</div>
                    <div className="text-green-600 text-xs">Grades 6-8</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-amber-900 dark:text-amber-100 font-academic">Middle School</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Guiding students through adolescence with comprehensive academics, 
                  mentorship programs, and character development initiatives.
                </p>
                <Button variant="outline" className="vintage-hover border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </VintageCard>
            
            <VintageCard className="overflow-hidden shadow-xl" hover>
              <div className="h-56 relative overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="academic-seal w-32 h-32 flex items-center justify-center opacity-80">
                    <GraduationCap className="h-16 w-16 text-yellow-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="vintage-border bg-white/90 p-2 text-center">
                    <div className="text-purple-800 font-academic font-bold text-sm">HIGH SCHOOL</div>
                    <div className="text-purple-600 text-xs">Grades 9-12</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-amber-900 dark:text-amber-100 font-academic">High School</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Preparing scholars for university and life with rigorous academics, 
                  leadership opportunities, and comprehensive college counseling.
                </p>
                <Button variant="outline" className="vintage-hover border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  View Curriculum <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* School News & Events */}
      <section className="py-20 parchment-bg fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-800 text-yellow-100 rounded-none px-6 py-3 text-sm font-medium mb-6 vintage-border">
              <Calendar className="h-4 w-4" />
              School Calendar
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 font-academic">
              Upcoming Traditions & Events
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <VintageCard className="overflow-hidden" hover academic>
              <div className="vintage-nav text-white p-6 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="font-academic">
                  <p className="text-sm font-medium opacity-90">MAY</p>
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm opacity-90">2025</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 text-amber-900 dark:text-amber-100 font-academic">Annual Spring Concert</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Our distinguished choir and orchestra perform classical masterpieces in the historic auditorium.
                </p>
                <div className="flex items-center text-sm text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-academic">7:00 PM - Great Hall</span>
                </div>
              </div>
            </VintageCard>
            
            <VintageCard className="overflow-hidden" hover academic>
              <div className="vintage-nav text-white p-6 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="font-academic">
                  <p className="text-sm font-medium opacity-90">JUN</p>
                  <p className="text-3xl font-bold">02</p>
                  <p className="text-sm opacity-90">2025</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 text-amber-900 dark:text-amber-100 font-academic">Founder's Day Celebration</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Honoring our heritage with traditional ceremonies, awards, and community fellowship.
                </p>
                <div className="flex items-center text-sm text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-academic">All Day - Campus Wide</span>
                </div>
              </div>
            </VintageCard>
            
            <VintageCard className="overflow-hidden" hover academic>
              <div className="vintage-nav text-white p-6 text-center relative">
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="font-academic">
                  <p className="text-sm font-medium opacity-90">JUN</p>
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm opacity-90">2025</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-bold text-xl mb-3 text-amber-900 dark:text-amber-100 font-academic">Commencement Ceremony</h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed font-academic">
                  Celebrating the achievements of our graduating class with time-honored traditions.
                </p>
                <div className="flex items-center text-sm text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-academic">10:00 AM - Memorial Garden</span>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 vintage-nav text-white relative overflow-hidden fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-academic vintage-glow">
            Join Our Distinguished Legacy
          </h2>
          <p className="max-w-3xl mx-auto text-xl mb-12 opacity-90 leading-relaxed font-academic">
            Become part of a tradition that has shaped leaders, scholars, and citizens for four decades. 
            Your journey of academic excellence and character formation begins here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 stagger-children">
            <Button 
              onClick={() => setShowEnrollmentForm(true)} 
              className="academic-button text-lg px-10 py-4"
              size="lg"
            >
              Begin Your Application
            </Button>
            <Button 
              onClick={() => navigate('/login')} 
              className="bg-yellow-600 hover:bg-yellow-700 text-white border-2 border-yellow-800 vintage-hover transition-all duration-300 text-lg px-10 py-4"
              variant="outline"
              size="lg"
            >
              Access Student Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Footer */}
      <footer className="bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-yellow-900/90 to-amber-800/90"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/3">
              <div className="flex items-center space-x-4 mb-6">
                <div className="academic-seal w-16 h-16 flex items-center justify-center">
                  <School className="h-8 w-8 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-academic">NORTHSIDE ACADEMY</h3>
                  <p className="text-yellow-200 text-sm font-academic">Excellence Since 1985</p>
                </div>
              </div>
              <p className="text-amber-100 leading-relaxed mb-6 text-lg font-academic">
                Continuing the noble tradition of classical education, where wisdom meets wonder 
                and students discover their calling to lead and serve.
              </p>
              <div className="vintage-border bg-amber-800/30 p-4 rounded-none">
                <p className="text-yellow-200 italic font-academic text-center">
                  "Per aspera ad astra" - Through hardships to the stars
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-200 font-academic">Academics</h4>
                <ul className="space-y-3 font-academic">
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Elementary Program</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Middle School</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Upper School</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Academic Calendar</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-200 font-academic">Community</h4>
                <ul className="space-y-3 font-academic">
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Alumni Association</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Parent Council</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">School Events</a></li>
                  <li><a href="#" className="text-amber-100 hover:text-white transition-colors hover:underline">Volunteer Opportunities</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-200 font-academic">Contact</h4>
                <ul className="space-y-3 text-amber-100 font-academic">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">📧</span>
                    <span>admissions@northsideacademy.edu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">📞</span>
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">📍</span>
                    <span>123 Academy Lane<br />Traditions Hall<br />Learning City, State 12345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="vintage-border bg-amber-800/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-center md:text-left font-academic">
              © 2025 Northside Academy. All rights reserved. A tradition of excellence continues.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 font-academic">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Honor Code</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
