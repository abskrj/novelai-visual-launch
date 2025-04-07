
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';
import ImageComparison from './ImageComparison';

const Hero = () => {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-950/20 dark:to-transparent -z-10"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-200 dark:bg-purple-800/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-[5%] w-64 h-64 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Storytelling</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight fade-in-delay-1">
            Transform Reality <br className="hidden sm:block" />
            <span className="text-gradient">into Visual Novels</span>
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 fade-in-delay-2">
            Get AI assistance for your story writing and scene generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Wand2 className="mr-2 h-4 w-4" /> 
              Coming Soon
            </Button>
            {/* <Button variant="outline" size="lg" className="group">
              See Examples
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto relative fade-in-delay-4">
          <ImageComparison 
            beforeImage="/lovable-uploads/9ef1b2b4-9689-4326-9ac6-e01b619ab91d.png"
            afterImage="/lovable-uploads/d0720a2f-9068-49c3-923b-9af02b317891.png"
            beforeLabel="Reality Scene"
            afterLabel="Anime Scene"
          />
          
          {/* Floating badges */}
          <div className="absolute -top-8 -right-8 bg-accent px-4 py-2 rounded-lg shadow-lg text-white animate-float">
            <span className="font-medium">AI-powered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
