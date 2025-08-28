import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Middle Mile
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-muted-foreground hover:text-foreground transition-smooth">
              Platform
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-smooth">
              Technology
            </a>
            <a href="#market" className="text-muted-foreground hover:text-foreground transition-smooth">
              Market
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
