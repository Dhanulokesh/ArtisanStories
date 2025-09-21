import React, { useState } from 'react';
import { Heart, Share2, ShoppingBag, Star, ArrowLeft, Sparkles, Play } from 'lucide-react';

interface StoryScreenProps {
  setActiveScreen: (screen: string) => void;
}

export default function StoryScreen({ setActiveScreen }: StoryScreenProps) {
  const [liked, setLiked] = useState(false);

  const products = [
    {
      id: 1,
      name: "Handcrafted Ceramic Bowl",
      price: "₹2,499",
      image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9
    },
    {
      id: 2,
      name: "Traditional Clay Vase",
      price: "₹1,899",
      image: "https://images.pexels.com/photos/4207717/pexels-photo-4207717.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4 flex items-center">
        <button 
          onClick={() => setActiveScreen('home')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Maya's Story</h1>
      </div>

      {/* Video/Image Section */}
      <div className="aspect-video relative bg-gray-900">
        <img
          src="https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Artisan at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Play className="text-gray-800 ml-1" size={24} />
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Sparkles className="mr-1" size={12} />
            AI Enhanced
          </span>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Artisan Info */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-900">Maya's Pottery Studio</h2>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-colors ${
                  liked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
            <span className="text-gray-700 mr-4">4.9 (127 reviews)</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-700 ml-4">12 Products</span>
          </div>
        </div>

        {/* AI-Powered Storytelling Block */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center mb-3">
            <Sparkles className="mr-2" size={20} />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              AI Story Generation
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-3">From Clay to Canvas: Maya's Journey</h3>
          
          <p className="text-white/90 mb-4 leading-relaxed">
            In the bustling streets of Rajasthan, Maya discovered her grandmother's abandoned pottery wheel at age 16. 
            What started as curiosity transformed into a passion that bridges three generations of artistic heritage. 
            Today, Maya's hands shape not just clay, but stories of resilience, tradition, and innovation.
          </p>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <p className="text-sm italic">
              "Each piece I create carries the whispers of my ancestors and the dreams of tomorrow. 
              The clay doesn't just take shape – it comes alive with purpose."
            </p>
            <p className="text-xs mt-2 text-white/70">- Maya, Master Potter</p>
          </div>
          
          <div className="text-sm text-white/80">
            <span className="font-medium">🤖 Our AI helps narrate the artisan's journey in an engaging, GenZ style</span>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Shop Maya's Collection</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" size={12} fill="currentColor" />
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                    <p className="text-lg font-bold text-purple-600 mb-3">{product.price}</p>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                        Buy Now
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-green-50 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-green-800">Verified Artisan</h4>
              <p className="text-sm text-green-600">Authenticated by our AI trust system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}