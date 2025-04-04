
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners and hobbyists",
      features: [
        "1 project at a time",
        "Basic AI character generation",
        "Standard templates",
        "Web publishing",
        "Community support"
      ],
      limitations: [
        "Limited AI generations per month",
        "NovelAI branding",
        "No custom assets"
      ],
      cta: "Start Free",
      isPopular: false
    },
    {
      name: "Creator",
      price: "$19",
      period: "per month",
      description: "For serious storytellers and indie developers",
      features: [
        "Up to 10 projects",
        "Advanced AI character generation",
        "Premium templates",
        "Web & mobile publishing",
        "Priority support",
        "Custom assets library",
        "No branding",
        "Analytics dashboard"
      ],
      limitations: [],
      cta: "Start 7-Day Trial",
      isPopular: true
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For studios and professional teams",
      features: [
        "Unlimited projects",
        "Premium AI character generation",
        "All templates & assets",
        "Multi-platform publishing",
        "Dedicated support",
        "Team collaboration",
        "White-label solution",
        "API access"
      ],
      limitations: [],
      cta: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect plan for your storytelling needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border hover:shadow-md transition-all ${
                plan.isPopular ? 'relative border-primary shadow-lg' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, i) => (
                    <div key={i} className="flex items-start">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 mr-3" />
                      <span className="text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-8">
                <Button 
                  className={`w-full ${
                    plan.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-muted/80 hover:bg-muted'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-muted-foreground">
          <p>All plans include a 14-day money back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
