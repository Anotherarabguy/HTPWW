import React, { useState } from 'react';
import { Menu, X, Shield, Target, Users, Radio, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'TRAINING GROUNDS', href: 'training', icon: Target },
    { name: 'LOADOUT', href: 'loadout', icon: Shield },
    { name: 'ALLIES & ENEMIES', href: 'factions', icon: Users },
    { name: 'FRONTLINE UPDATES', href: 'updates', icon: Radio },
    { name: 'CONTACT HQ', href: 'contact', icon: Mail },
  ];

  return (
    <header className="bg-black border-b-2 border-red-600 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-red-500 font-bold text-xl tracking-wider">
              [CLASSIFIED] Howtoplayww3.online
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-green-400 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-2 cursor-pointer bg-transparent border-none"
                >
                  <item.icon size={16} />
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-400 hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-red-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-green-400 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium tracking-wide transition-colors duration-200 w-full text-left flex items-center gap-2 cursor-pointer bg-transparent border-none"
              >
                <item.icon size={16} />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
