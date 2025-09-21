import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomeScreen from './components/HomeScreen';
import StoryScreen from './components/StoryScreen';
import SocialFeed from './components/SocialFeed';
import SupportScreen from './components/SupportScreen';
import TrustScreen from './components/TrustScreen';
import CheckoutScreen from './components/CheckoutScreen';

function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen setActiveScreen={setActiveScreen} />;
      case 'story':
        return <StoryScreen setActiveScreen={setActiveScreen} />;
      case 'feed':
        return <SocialFeed />;
      case 'support':
        return <SupportScreen />;
      case 'trust':
        return <TrustScreen />;
      case 'cart':
        return <CheckoutScreen />;
      case 'profile':
        return <TrustScreen />; // Using TrustScreen as profile for demo
      default:
        return <HomeScreen setActiveScreen={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      <Navigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}

export default App;