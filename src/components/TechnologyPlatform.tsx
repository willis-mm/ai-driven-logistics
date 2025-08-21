import React from 'react';
import { Card } from './ui/card';

const TechnologyPlatform = () => {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Human + AI 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Intelligence Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proprietary technology combines machine learning optimization with human decision-making to deliver logistics solutions that scale intelligently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Optimization Engine</h3>
            <p className="text-muted-foreground">
              Advanced algorithms predict demand, optimize routes, and allocate resources in real-time, learning from every delivery to improve efficiency.
            </p>
          </Card>
          
          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Human Intelligence Layer</h3>
            <p className="text-muted-foreground">
              Experienced logistics professionals handle complex decisions, exceptions, and relationship management that require human judgment and creativity.
            </p>
          </Card>
          
          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Scalable Infrastructure</h3>
            <p className="text-muted-foreground">
              Cloud-native architecture designed to handle millions of transactions, instantly adapt to demand spikes, and expand into new markets seamlessly.
            </p>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card p-8 rounded-2xl shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">35%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.2%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50x</div>
              <div className="text-muted-foreground">Faster Scaling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatform;