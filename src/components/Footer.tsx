import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-red-600 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={24} className="text-red-500" />
            <h3 className="text-2xl font-bold text-white">Howtoplayww3.online</h3>
            <Shield size={24} className="text-red-500" />
          </div>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Your premier source for tactical meme warfare intelligence. 
            Serving doomscrollers and keyboard warriors since the Great Meme War began.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center">
          <div>
            <h4 className="text-green-400 font-bold mb-3">DECLASSIFIED INTEL</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-mono">
              <li>Meme Warfare Protocols</li>
              <li>Tactical Cringe Guide</li>
              <li>Boomer Defense Systems</li>
              <li>NPC Identification Manual</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-green-400 font-bold mb-3">FIELD DIVISIONS</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-mono">
              <li>Reddit Regiment</li>
              <li>Discord Commandos</li>
              <li>TikTok Infiltration Unit</li>
              <li>Instagram Special Forces</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-green-400 font-bold mb-3">SUPPORT SYSTEMS</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-mono">
              <li>24/7 Copium Hotline</li>
              <li>Emergency Meme Supplies</li>
              <li>Therapy for Touch Grass</li>
              <li>WiFi Password Recovery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="bg-red-900 border border-red-600 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-red-400 font-bold text-sm">DISCLAIMER</span>
              <AlertTriangle size={16} className="text-red-400" />
            </div>
            <p className="text-red-200 text-xs font-mono text-center">
              This website is a work of satirical fiction. No actual wars were started in the making of these memes. 
              Side effects may include: Chronic online syndrome, inability to touch grass, and spontaneous urge to debate strangers on the internet.
            </p>
          </div>
          
          <div className="text-center text-gray-500 text-xs font-mono">
            © 2024 Howtoplayww3.online | CLASSIFIED: EYES ONLY, MEME DIVISION
            <br />
            "In Memes We Trust" - Official Motto of the Digital Resistance
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
