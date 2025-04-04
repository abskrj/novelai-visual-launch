
import React from 'react';
import { FileText, Palette, PenTool, Upload } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Write or Generate Story",
      description: "Start with your own story or let AI generate a narrative based on your prompts and preferences."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design Characters & Scenes",
      description: "Use our AI tools to create unique characters and beautiful backgrounds for your story."
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Build Your Novel",
      description: "Arrange scenes, add dialogue, and create branching choices in our visual editor."
    },
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "Publish & Share",
      description: "Publish your visual novel online or export it to share with friends and the community."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating beautiful visual novels has never been easier with our four-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 bg-background p-2 rounded-full border-2 border-primary flex items-center justify-center h-20 w-20">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
