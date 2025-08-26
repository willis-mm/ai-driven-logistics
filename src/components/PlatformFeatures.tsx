import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const PlatformFeatures = () => {
  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> DTC Brand</span>
            <span className="block">Needs to Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From order processing to last-mile delivery, our comprehensive platform handles every aspect of your logistics chain.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="space-y-8">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Smart Order Management</h3>
              <p className="text-muted-foreground mb-6">
                AI-powered routing automatically selects the optimal fulfillment path based on inventory location, customer address, and delivery preferences.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time inventory sync across all channels</li>
                <li>• Automated order splitting and routing</li>
                <li>• Dynamic delivery window optimization</li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Local Delivery Network</h3>
              <p className="text-muted-foreground mb-6">
                Human couriers enhanced with AI dispatch ensure reliable, flexible delivery options that adapt to your customers' needs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Same-day and scheduled delivery options</li>
                <li>• Real-time tracking and customer updates</li>
                <li>• Specialized handling for fragile items</li>
              </ul>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Brand Experience Control</h3>
              <p className="text-muted-foreground mb-6">
                Maintain your brand identity throughout the entire delivery experience with custom packaging, messaging, and customer touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• White-label delivery notifications</li>
                <li>• Custom packaging and unboxing experiences</li>
                <li>• Branded courier uniforms and vehicles</li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Growth Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive insights into delivery performance, customer satisfaction, and market expansion opportunities powered by our AI engine.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Delivery performance dashboards</li>
                <li>• Customer satisfaction scoring</li>
                <li>• Market expansion recommendations</li>
              </ul>
            </Card>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PlatformFeatures;