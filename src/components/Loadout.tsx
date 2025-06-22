
import React from 'react';
import { Package, Zap, Shield, Droplets, Star, Trophy } from 'lucide-react';

const Loadout = () => {
  const inventoryCategories = [
    {
      category: "SURVIVAL ESSENTIALS KIT",
      icon: Package,
      items: [
        { name: "Emergency Food Supply (72h+)", rarity: "LEGENDARY", notes: "High-calorie, non-perishable items", xp: "+500 Survival XP" },
        { name: "Water Purification System", rarity: "EPIC", notes: "1 gallon per person per day rule", xp: "+300 Health XP" },
        { name: "Multi-Tool & Can Opener", rarity: "COMMON", notes: "Because ramen packets won't open themselves", xp: "+100 Utility XP" }
      ]
    },
    {
      category: "MEDICAL & HEALTH BUFFS",
      icon: Shield,
      items: [
        { name: "Advanced First Aid Kit", rarity: "LEGENDARY", notes: "Real trauma supplies, not just band-aids", xp: "+600 Medical XP" },
        { name: "Prescription Medications", rarity: "PERSONAL", notes: "90-day supply minimum for your character", xp: "+400 Health XP" },
        { name: "Sanitation Supplies", rarity: "COMMON", notes: "Morale matters, even during apocalypse", xp: "+200 Hygiene XP" }
      ]
    },
    {
      category: "COMMUNICATION & POWER-UPS",
      icon: Zap,
      items: [
        { name: "Hand-Crank Radio", rarity: "EPIC", notes: "Information is your most valuable resource", xp: "+400 Intel XP" },
        { name: "Portable Solar Charger", rarity: "RARE", notes: "Keep your devices powered when grid fails", xp: "+250 Tech XP" },
        { name: "Emergency Whistle Set", rarity: "COMMON", notes: "Low-tech, high-reliability signaling", xp: "+150 Signal XP" }
      ]
    }
  ];

  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case 'LEGENDARY': return 'text-yellow-400 border-yellow-400 bg-yellow-900/20';
      case 'EPIC': return 'text-purple-400 border-purple-400 bg-purple-900/20';
      case 'RARE': return 'text-blue-400 border-blue-400 bg-blue-900/20';
      case 'PERSONAL': return 'text-green-400 border-green-400 bg-green-900/20';
      case 'COMMON': return 'text-gray-400 border-gray-400 bg-gray-900/20';
      default: return 'text-gray-400 border-gray-400 bg-gray-900/20';
    }
  };

  return (
    <section id="inventory" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-900/80 text-orange-200 px-6 py-3 rounded-full text-sm font-mono mb-4 backdrop-blur-sm">
            <Trophy size={16} />
            INVENTORY MANAGEMENT & LOOT SYSTEM
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-orange-400">ESSENTIAL</span> LOADOUT
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Optimize your inventory with these crucial items. Think of it as your survival game starter pack - 
            <span className="text-blue-400"> except there's no respawn if you forget something important.</span>
          </p>
        </div>

        <div className="space-y-10">
          {inventoryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-900/90 border-2 border-slate-600/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8 text-center justify-center">
                <category.icon size={32} className="text-orange-400" />
                <h3 className="text-3xl font-bold text-white">
                  <span className="text-orange-400">[</span>
                  {category.category}
                  <span className="text-orange-400">]</span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`bg-black/50 border-2 ${getRarityStyle(item.rarity)} p-6 rounded-lg hover:scale-105 transition-all duration-200 backdrop-blur-sm`}
                  >
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border ${getRarityStyle(item.rarity)}`}>
                        <Star size={12} />
                        {item.rarity}
                      </div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-3">
                        {item.name}
                      </h4>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-slate-300 text-sm text-center">
                        {item.notes}
                      </div>
                      <div className="text-center">
                        <span className="text-green-400 text-xs font-mono bg-green-900/30 px-2 py-1 rounded">
                          {item.xp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-orange-900/50 to-red-900/50 border-2 border-orange-500/50 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-white font-bold text-2xl mb-4 flex items-center justify-center gap-2">
            <Package className="text-orange-400" size={24} />
            ⚠️ INVENTORY MANAGEMENT TIPS ⚠️
          </h3>
          <p className="text-orange-200 font-mono">
            STRATEGY: Build your inventory gradually and responsibly. Panic buying creates server lag for everyone else. 
            <br />
            Plan your loadout strategically, not in crisis mode.
            <br />
            <span className="text-yellow-400">(Also, your neighbors will remember who hoarded all the healing potions.)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loadout;
