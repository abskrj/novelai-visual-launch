
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-display font-bold">
            NovelAI
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Community</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm hidden md:inline-flex">
              Log in
            </Button>
            <Button className="text-sm bg-primary hover:bg-primary/90 hidden md:inline-flex">
              <Sparkles className="h-4 w-4 mr-2" />
              Sign Up Free
            </Button>
            <Button variant="ghost" className="md:hidden" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Gallery /> */}
        {/* <Testimonials /> */}
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your <span className="text-gradient">Visual Novel?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of creators who are bringing their stories to life with NovelAI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Creating Free
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
