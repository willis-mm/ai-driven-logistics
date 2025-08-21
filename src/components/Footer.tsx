import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4 text-primary-glow">
              LogiFlow
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Revolutionizing local logistics through the power of human intelligence combined with AI optimization. Building the future of efficient, scalable delivery solutions.
            </p>
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-glow">Platform</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">AI Optimization</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Human Intelligence</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">API Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-glow">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Press</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0">
              © 2024 LogiFlow. All rights reserved. Building the future of logistics.
            </p>
            <div className="flex space-x-6 text-background/60">
              <a href="#" className="hover:text-background transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-background transition-smooth">Investors</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;