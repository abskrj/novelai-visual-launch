
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform revolutionized how I create visual novels. What used to take me weeks now takes days, and the AI suggestions are surprisingly creative!",
      name: "Sarah Johnson",
      role: "Indie Game Developer",
      avatar: "SJ"
    },
    {
      quote: "As someone with no artistic skills, I never thought I could create a visual novel. The AI character generation and scene creation tools changed everything.",
      name: "Michael Lee",
      role: "Hobbyist Writer",
      avatar: "ML"
    },
    {
      quote: "The branching narrative tools make it so easy to create complex storylines. My students love using this platform for their creative writing projects.",
      name: "Dr. Emily Chen",
      role: "Literature Professor",
      avatar: "EC"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of creators who are bringing their stories to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-background hover:shadow-md transition-all hover-float">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 text-accent">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6 flex-grow">
                  <div className="text-muted-foreground mb-2">
                    <Quote className="h-6 w-6 text-primary/40" />
                  </div>
                  <p className="italic text-foreground">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
