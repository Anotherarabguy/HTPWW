import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrainingGrounds from '../components/TrainingGrounds';
import Loadout from '../components/Loadout';
import FrontlineUpdates from '../components/FrontlineUpdates';
import ContactHQ from '../components/ContactHQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <TrainingGrounds />
      <Loadout />
      <FrontlineUpdates />
      <ContactHQ />
      <Footer />
    </div>
  );
};

export default Index;
