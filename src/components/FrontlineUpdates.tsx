
import React from 'react';
import { Radio, AlertTriangle, Globe, Shield, Newspaper, TrendingUp } from 'lucide-react';

const FrontlineUpdates = () => {
  const gameUpdates = [
    {
      timestamp: "PATCH 2024.06",
      priority: "CRITICAL UPDATE",
      title: "Global Economy Mechanics Rebalanced - Supply Chain Vulnerabilities Detected",
      content: "Recent game analysis shows economic warfare tactics targeting critical infrastructure across multiple sectors. Players advised to stockpile essential resources and monitor local supply networks. The developers really didn't balance this economy system well.",
      status: "MONITORING",
      updateType: "BALANCE PATCH"
    },
    {
      timestamp: "HOTFIX 2024.05",
      priority: "SECURITY PATCH",
      title: "Cyber Infrastructure Defense Systems Updated Following Vulnerability Assessment",
      content: "Digital protection measures enhanced after comprehensive security review. Players should verify backup communication methods and offline storage capabilities. At least the devs are patching the security holes.",
      status: "DEPLOYED",
      updateType: "SECURITY FIX"
    },
    {
      timestamp: "UPDATE 2024.04",
      priority: "MAJOR FEATURE",
      title: "Emergency Shelter Network Expansion - New Safe Zones Added",
      content: "Shelter capacity increased by 40% in metropolitan areas. New facilities include enhanced NBC protection and extended supply capabilities. Finally, some decent spawn points in urban areas.",
      status: "LIVE",
      updateType: "CONTENT UPDATE"
    },
    {
      timestamp: "BETA 2024.03",
      priority: "CLASSIFIED BUILD",
      title: "Advanced Warning Systems Show Increased Activity Patterns",
      content: "[RESTRICTED ACCESS] Detection networks indicate elevated threat levels across multiple vectors. Beta testers should review emergency protocols and maintain heightened awareness. The devs aren't telling us everything about this update.",
      status: "TESTING PHASE",
      updateType: "BETA FEATURE"
    }
  ];

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'CRITICAL UPDATE': return 'text-red-400 border-red-400 bg-red-900/20';
      case 'SECURITY PATCH': return 'text-orange-400 border-orange-400 bg-orange-900/20';
      case 'MAJOR FEATURE': return 'text-yellow-400 border-yellow-400 bg-yellow-900/20';
      case 'CLASSIFIED BUILD': return 'text-purple-400 border-purple-400 bg-purple-900/20';
      default: return 'text-gray-400 border-gray-400 bg-gray-900/20';
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400';
      case 'MONITORING': return 'text-orange-400';
      case 'LIVE': return 'text-blue-400';
      case 'TESTING PHASE': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="updates" className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/80 text-blue-200 px-6 py-3 rounded-full text-sm font-mono mb-4 backdrop-blur-sm">
            <Newspaper size={16} />
            GAME UPDATES & PATCH NOTES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-400">LATEST</span> UPDATES
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Stay informed about the latest game mechanics, balance changes, and feature updates. 
            <span className="text-orange-400"> The developers keep patching this reality build.</span>
          </p>
        </div>

        <div className="space-y-6">
          {gameUpdates.map((update, index) => (
            <div 
              key={index}
              className="bg-slate-900/90 border-l-4 border-blue-600 rounded-r-xl p-8 hover:border-l-orange-600 transition-all duration-300 backdrop-blur-sm shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border ${getPriorityStyle(update.priority)}`}>
                    <TrendingUp size={14} />
                    {update.priority}
                  </div>
                  <span className="text-slate-400 font-mono text-sm bg-slate-800 px-3 py-1 rounded">
                    {update.timestamp}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`font-mono text-sm ${getStatusStyle(update.status)} bg-slate-800 px-3 py-1 rounded`}>
                    STATUS: {update.status}
                  </div>
                  <div className="text-blue-400 font-mono text-xs bg-blue-900/30 px-2 py-1 rounded">
                    {update.updateType}
                  </div>
                </div>
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4">
                {update.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed font-mono">
                {update.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-900/50 to-orange-900/50 border-2 border-red-500/50 p-8 rounded-xl text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle size={28} className="text-red-400" />
            <h3 className="text-white font-bold text-2xl">PLAYER ADVISORY</h3>
            <AlertTriangle size={28} className="text-red-400" />
          </div>
          <p className="text-red-200 font-mono text-lg">
            All players are advised to maintain current preparedness levels and monitor official patch notes.
            <br />
            Avoid unofficial guides and unverified information sources - they usually contain bugs.
            <br />
            <span className="text-red-400 font-bold">PREPARATION IS YOUR BEST STRATEGY.</span>
            <br />
            <span className="text-yellow-400">(Yes, even you, player who still doesn't have a flashlight in your inventory.)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontlineUpdates;
