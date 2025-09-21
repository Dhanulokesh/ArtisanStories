import React from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';

interface NavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export default function Navigation({ activeScreen, setActiveScreen }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'feed', icon: Search, label: 'Feed' },
    { id: 'support', icon: Heart, label: 'Support' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                isActive
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}