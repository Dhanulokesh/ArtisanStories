import React, { useState } from 'react';
import { Heart, Crown, Gift, Sparkles, Trophy, Star } from 'lucide-react';

export default function SupportScreen() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const tipOptions = [
    { amount: 10, label: 'Coffee ☕', color: 'bg-yellow-500' },
    { amount: 50, label: 'Lunch 🍽️', color: 'bg-orange-500' },
    { amount: 100, label: 'Support 💝', color: 'bg-pink-500' },
    { amount: 250, label: 'Champion 🏆', color: 'bg-purple-500' },
  ];

  const topSupporters = [
    { name: 'Sarah K.', amount: 2500, avatar: '🌟', level: 'Champion' },
    { name: 'Alex M.', amount: 1800, avatar: '🎨', level: 'Supporter' },
    { name: 'Priya S.', amount: 1200, avatar: '💎', level: 'Friend' },
    { name: 'David L.', amount: 950, avatar: '🌸', level: 'Friend' },
    { name: 'Maya R.', amount: 750, avatar: '✨', level: 'Contributor' },
  ];

  const handleTip = () => {
    if (selectedTip) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setSelectedTip(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
            <Heart className="mr-2 text-red-500" />
            Support Artisans
          </h1>
          <p className="text-gray-600">Show love to creators who inspire you</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* AI Feature Highlight */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
              <Sparkles className="text-white" size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Suggests Perfect Tips</h3>
              <p className="text-sm text-gray-600">Personalized support options for every creator</p>
            </div>
          </div>
        </div>

        {/* Featured Artisan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Maya"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Maya's Pottery Studio</h2>
            <div className="flex items-center justify-center mb-3">
              <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
              <span className="text-gray-700">4.9 • 127 reviews</span>
            </div>
            <p className="text-gray-600 mb-4">
              "Your support helps me continue creating beautiful pottery and supporting my community"
            </p>
            
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center">
                <span className="text-green-600 font-medium">💖 1,247 supporters this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💖 Tip the Artisan</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {tipOptions.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedTip(option.amount)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTip === option.amount
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className={`w-8 h-8 ${option.color} rounded-full mx-auto mb-2`}></div>
                <div className="text-sm font-medium text-gray-900">₹{option.amount}</div>
                <div className="text-xs text-gray-600">{option.label}</div>
              </button>
            ))}
          </div>

          <div className="mb-4">
            <input
              type="number"
              placeholder="Custom amount"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleTip}
            disabled={!selectedTip}
            className={`w-full py-3 rounded-xl font-semibold transition-colors ${
              selectedTip
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedTip ? `Send ₹${selectedTip} with Love` : 'Select an amount'}
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <Heart className="text-white" size={16} />
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Thank you! 🎉</h4>
                <p className="text-sm text-green-600">Your support means the world to Maya!</p>
              </div>
            </div>
          </div>
        )}

        {/* Supporter Leaderboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">🏆 Top Supporters</h3>
            <span className="text-sm text-purple-600 font-medium">This Month</span>
          </div>
          
          <div className="space-y-3">
            {topSupporters.map((supporter, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 text-white font-bold">
                    {index === 0 ? <Crown size={16} /> : index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{supporter.name}</div>
                    <div className="text-xs text-purple-600 font-medium">{supporter.level}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">₹{supporter.amount}</div>
                  <div className="text-xs text-gray-500">total</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <div className="flex items-center justify-center">
              <Trophy className="text-purple-600 mr-2" size={16} />
              <span className="text-sm text-purple-700 font-medium">
                Be featured in the leaderboard!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}