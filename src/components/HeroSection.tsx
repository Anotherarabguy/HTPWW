
import React from 'react';
import { AlertTriangle, Shield, GamepadIcon } from 'lucide-react';

const HeroSection = () => {
  const handleStartTutorial = () => {
    // Scroll to training grounds section
    const trainingSection = document.getElementById('training');
    if (trainingSection) {
      trainingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewHandbook = () => {
    // Scroll to loadout section
    const loadoutSection = document.getElementById('loadout');
    if (loadoutSection) {
      loadoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-900/80 text-orange-200 px-6 py-3 rounded-full text-sm font-mono mb-4 backdrop-blur-sm">
            <GamepadIcon size={18} />
            SURVIVAL STRATEGY GUIDE - PLAYER'S HANDBOOK 2024
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="text-orange-400">HOW TO PLAY</span>
          <br />
          <span className="text-blue-400">WORLD WAR 3</span>
        </h1>

        <div className="bg-slate-900/90 border-2 border-orange-500/50 p-8 mb-8 font-mono text-left max-w-3xl mx-auto rounded-lg backdrop-blur-sm">
          <div className="text-orange-400 text-sm mb-3 flex items-center gap-2">
            <Shield size={16} />
            [GAME OVERVIEW - DIFFICULTY: NIGHTMARE MODE]
          </div>
          <p className="text-blue-300 leading-relaxed text-lg">
            Welcome to the most challenging survival game ever created - and unfortunately, it's not optional. 
            This comprehensive player's guide covers <span className="text-orange-400 font-bold">essential survival mechanics</span>, 
            resource management, and strategic gameplay for when global tensions turn into the ultimate battle royale. 
            <span className="text-red-400 font-semibold"> (Respawning not available in this version.)</span>
          </p>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          Master the art of civilian survival in extreme scenarios with our step-by-step gameplay guide.
          <br className="hidden md:block" />
          <span className="text-blue-400 font-semibold">Because this isn't a game you want to lose.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleStartTutorial}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Shield size={20} />
            START SURVIVAL TUTORIAL
          </button>
          <button 
            onClick={handleViewHandbook}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-200 transform hover:scale-105 shadow-lg backdrop-blur-sm cursor-pointer"
          >
            VIEW PLAYER HANDBOOK
          </button>
        </div>

        <div className="mt-12 text-xs text-slate-400 font-mono bg-slate-900/50 p-4 rounded-lg backdrop-blur-sm">
          DISCLAIMER: This guide is for educational purposes and we sincerely hope remains theoretical.
          <br />
          <span className="text-orange-400">No cheat codes available for this particular game.</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
