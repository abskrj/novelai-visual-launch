
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const examples = [
    {
      title: "The Last Oracle",
      genre: "Fantasy Adventure",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      author: "Elena Storm"
    },
    {
      title: "Neon Hearts",
      genre: "Cyberpunk Romance",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      author: "Alex Chen"
    },
    {
      title: "Memory Fragments",
      genre: "Science Fiction",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      author: "Marcus Webb"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Novels</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore stunning visual novels created with our platform by writers like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden border bg-background hover:shadow-lg transition-all hover-float">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-xs font-medium uppercase tracking-wider text-primary-foreground/75 mb-1">
                      {example.genre}
                    </div>
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <p className="text-sm text-white/80">by {example.author}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 flex justify-end">
                <Button variant="ghost" size="sm" className="group">
                  Read Novel
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Browse All Novels
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
