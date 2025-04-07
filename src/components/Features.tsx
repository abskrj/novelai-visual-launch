
import React from 'react';
import { Cpu, Paintbrush, BookOpen, SlidersHorizontal, CloudLightning, Users, Languages, CloudUpload, HardDrive, HardDriveDownload, HardDriveUpload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI Story Generation",
      description: "Generate complete narrative arcs or get AI assistance for your writer's block moments."
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-primary" />,
      title: "Character Creation",
      description: "Design unique characters with our AI image generator and build detailed personalities."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Branching Narratives",
      description: "Easily create complex, branching storylines with our intuitive visual editor."
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-primary" />,
      title: "Full Customization",
      description: "Control every aspect of your visual novel from dialogue to backgrounds and effects."
    },
    {
      icon: <CloudLightning className="h-8 w-8 text-primary" />,
      title: "Instant Publishing",
      description: "Share your creations instantly with one-click publishing to web or export options."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Support",
      description: "Join a thriving community of creators, share assets, and collaborate on projects."
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "AI Translation",
      description: "Automatically translate your stories to 100+ languages with our AI-powered translation tools."
    },
    {
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      title: "Cross-Platform Export",
      description: "Export your visual novels to any device - Mac, Windows, Linux, Phone, PS5, and more."
    },
    {
      icon: <CloudUpload className="h-8 w-8 text-primary" />,
      title: "Cloud Backup",
      description: "Never lose your work with automatic cloud-based backups of all your projects."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Work together with multiple team members on the same project in real-time."
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-gradient">Creative Minds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create professional visual novels without coding or design skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-background hover:shadow-md transition-all hover-float overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-5 rounded-lg inline-flex p-3 bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              <div className="h-1 w-0 group-hover:w-full bg-gradient transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
