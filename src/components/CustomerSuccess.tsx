import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const CustomerSuccess = () => {
  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Leading
            <span className="bg-gradient-primary bg-clip-text text-transparent"> DTC Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ecommerce brands choose our platform to deliver exceptional customer experiences while reducing logistics costs by up to 40%.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="p-8 shadow-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">92%</span>
              </div>
              <Badge variant="secondary" className="ml-4">Fashion</Badge>
            </div>
            <h3 className="text-xl font-bold mb-3">On-Time Delivery Rate</h3>
            <p className="text-muted-foreground">Premium fashion brand increased customer satisfaction and reduced return rates significantly.</p>
          </Card>
          
          <Card className="p-8 shadow-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">3x</span>
              </div>
              <Badge variant="secondary" className="ml-4">Electronics</Badge>
            </div>
            <h3 className="text-xl font-bold mb-3">Delivery Speed Improvement</h3>
            <p className="text-muted-foreground">Tech startup reduced average delivery time from 3 days to same-day delivery in metro areas.</p>
          </Card>
          
          <Card className="p-8 shadow-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">40%</span>
              </div>
              <Badge variant="secondary" className="ml-4">Beauty</Badge>
            </div>
            <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
            <p className="text-muted-foreground">Beauty brand cut logistics costs while expanding to 5 new markets simultaneously.</p>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Join 500+ DTC brands already scaling with our platform
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">BRAND A</div>
            <div className="text-2xl font-bold text-muted-foreground">BRAND B</div>
            <div className="text-2xl font-bold text-muted-foreground">BRAND C</div>
            <div className="text-2xl font-bold text-muted-foreground">BRAND D</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccess;