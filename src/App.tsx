import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TrainingGrounds from "./components/TrainingGrounds";
import Loadout from "./components/Loadout";
import FrontlineUpdates from "./components/FrontlineUpdates";
import ContactHQ from "./components/ContactHQ";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <TrainingGrounds />
        <Loadout />
        <FrontlineUpdates />
        <ContactHQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
