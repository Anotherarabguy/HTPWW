
import React from 'react';
import { Shield, Home, Radio, Heart, Map, Gamepad2 } from 'lucide-react';

const TrainingGrounds = () => {
  const handleDownloadGuide = () => {
    // Create a mock download action
    alert('📋 STRATEGY GUIDE DOWNLOADED\n\nYour comprehensive survival guide has been added to your downloads. Remember: this is for educational purposes only!');
  };

  const gameplayMechanics = [
    {
      icon: Home,
      title: "BASE BUILDING",
      subtitle: "Residential Fortification & Safe Zone Creation",
      description: "Learn to transform your home into an impenetrable fortress. Master the art of creating secure areas, ventilation systems, and supply caches. Think Minecraft, but with actual consequences for poor planning.",
      priority: "TUTORIAL LEVEL 1",
      timeframe: "Complete immediately",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Radio,
      title: "COMMUNICATION NETWORKS",
      subtitle: "Information Warfare & Signal Management",
      description: "Establish reliable communication channels when the internet goes down. Battery radios, emergency frequencies, and intel verification. Your Twitter addiction finally has a practical application.",
      priority: "TUTORIAL LEVEL 2", 
      timeframe: "Learn within 48 hours",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Heart,
      title: "HEALTH MANAGEMENT",
      subtitle: "Medical Skills & Resource Conservation",
      description: "Essential health mechanics including wound treatment, medication management, and hygiene protocols. Because health potions don't exist in real life, unfortunately.",
      priority: "CORE MECHANIC",
      timeframe: "Ongoing skill development",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Shield,
      title: "DEFENSE STRATEGIES",
      subtitle: "Personal Security & Community Coordination",
      description: "Advanced gameplay mechanics for personal protection and group coordination. Includes threat assessment, safe routes, and alliance building. Your gaming clan experience is finally relevant.",
      priority: "ADVANCED LEVEL",
      timeframe: "Master continuously",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/80 text-blue-200 px-6 py-3 rounded-full text-sm font-mono mb-4 backdrop-blur-sm">
            <Gamepad2 size={16} />
            GAMEPLAY MECHANICS & SURVIVAL TUTORIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-400">SURVIVAL</span> GAMEPLAY
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Master these essential gameplay mechanics to maximize your survival chances in the world's most challenging scenario. 
            <span className="text-orange-400"> Think of it as the ultimate survival game tutorial.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {gameplayMechanics.map((mechanic, index) => (
            <div 
              key={index}
              className="bg-slate-900/90 border-2 border-blue-500/30 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${mechanic.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <mechanic.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-blue-400 text-sm font-mono font-bold">{mechanic.title}</div>
                    <h3 className="text-white font-bold">{mechanic.subtitle}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {mechanic.description}
                </p>
                
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-orange-400 bg-orange-900/30 px-3 py-1 rounded-full">
                    {mechanic.priority}
                  </span>
                  <span className="text-blue-400">
                    {mechanic.timeframe}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleDownloadGuide}
            className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            DOWNLOAD COMPLETE STRATEGY GUIDE
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingGrounds;
