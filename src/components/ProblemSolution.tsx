import React from 'react';
import { Card } from './ui/card';

const ProblemSolution = () => {
  return (
    <section id="platform" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solving the $1.6T 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Logistics Gap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Local logistics is fragmented, inefficient, and expensive. We're changing that with the first platform to seamlessly blend human expertise with AI optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-8 shadow-card border-l-4 border-l-destructive">
              <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  40% logistics cost inefficiency due to poor route optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fragmented systems preventing scale and brand growth
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited real-time visibility and predictive analytics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lack of integrated workforce management solutions
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 shadow-elegant border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-driven optimization reduces logistics costs by 35%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Unified platform enabling rapid market expansion
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time tracking with predictive delivery windows
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Human + AI workforce optimization for peak performance
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;