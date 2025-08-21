import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const MarketOpportunity = () => {
  return (
    <section id="market" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Massive Market
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Opportunity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The global logistics market is projected to reach $6.2T by 2027. We're positioned to capture significant market share in the rapidly growing local logistics segment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div>
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Market Size & Growth</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Addressable Market</span>
                  <span className="text-2xl font-bold text-primary">$1.6T</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Serviceable Market</span>
                  <span className="text-2xl font-bold text-primary">$280B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Annual Growth Rate</span>
                  <span className="text-2xl font-bold text-primary">12.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Target Market (2027)</span>
                  <span className="text-2xl font-bold text-primary">$45B</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h4 className="font-bold mb-2">Competitive Advantage</h4>
              <p className="text-muted-foreground">First-mover advantage in human + AI hybrid logistics platform with proprietary optimization algorithms.</p>
            </Card>
            
            <Card className="p-6 shadow-card">
              <h4 className="font-bold mb-2">Revenue Streams</h4>
              <p className="text-muted-foreground">SaaS platform fees, transaction commissions, premium AI insights, and white-label solutions for enterprises.</p>
            </Card>
            
            <Card className="p-6 shadow-card">
              <h4 className="font-bold mb-2">Expansion Plan</h4>
              <p className="text-muted-foreground">Launch in 5 major metro areas, expand to 25 cities by year 2, international markets by year 3.</p>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-8 shadow-elegant bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us in revolutionizing the logistics industry. Series A funding round open for strategic investors.
            </p>
            <Button variant="investor" size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Investor Deck
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;