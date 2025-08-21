import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import TechnologyPlatform from '../components/TechnologyPlatform';
import MarketOpportunity from '../components/MarketOpportunity';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <TechnologyPlatform />
      <MarketOpportunity />
      <Footer />
    </div>
  );
};

export default Index;
