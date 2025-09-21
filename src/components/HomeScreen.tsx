import React from 'react';
import { ShoppingBag, Star, Sparkles, ArrowRight } from 'lucide-react';

interface HomeScreenProps {
  setActiveScreen: (screen: string) => void;
}

export default function HomeScreen({ setActiveScreen }: HomeScreenProps) {
  const trendingStories = [
    {
      id: 1,
      artisan: "Maya's Pottery Studio",
      story: "From grandmother's clay to modern masterpieces...",
      image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      products: 12,
      aiSnippet: "AI discovers: Maya's pottery tells a 3-generation story of resilience and tradition"
    },
    {
      id: 2,
      artisan: "Threads of Heritage",
      story: "Weaving dreams into reality with traditional techniques...",
      image: "https://images.pexels.com/photos/7525184/pexels-photo-7525184.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      products: 24,
      aiSnippet: "AI highlights: Each thread carries centuries of cultural wisdom and artistry"
    },
    {
      id: 3,
      artisan: "Wooden Wonders",
      story: "Carving emotions into every piece...",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      products: 8,
      aiSnippet: "AI reveals: Sustainable craftsmanship meets contemporary design philosophy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Artisan Stories</h1>
          <p className="text-gray-600">Discover the magic behind every creation</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Big Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-3">
              <Sparkles className="mr-2" size={24} />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                AI Powered
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Discover Stories Behind Every Product</h2>
            <p className="text-white/90 mb-4">Where craftsmanship meets storytelling</p>
            
            <button 
              onClick={() => setActiveScreen('story')}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag className="mr-2" size={18} />
              Shop the Story
            </button>
          </div>
        </div>

        {/* AI Feature Highlight */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
              <Sparkles className="text-white" size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Crafts Engaging Stories</h3>
              <p className="text-sm text-gray-600">Every artisan's journey, beautifully narrated</p>
            </div>
          </div>
        </div>

        {/* Trending Artisan Stories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Trending Stories</h3>
            <button className="text-purple-600 font-medium text-sm">View All</button>
          </div>

          <div className="space-y-4">
            {trendingStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveScreen('story')}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-video relative">
                  <img
                    src={story.image}
                    alt={story.artisan}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Sparkles className="mr-1" size={12} />
                      AI Story
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{story.artisan}</h4>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" size={14} fill="currentColor" />
                      <span className="text-sm text-gray-600">{story.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{story.story}</p>
                  
                  {/* AI-generated snippet */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 mb-3">
                    <p className="text-sm text-purple-700 font-medium">{story.aiSnippet}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{story.products} products</span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center hover:bg-purple-700 transition-colors">
                      Shop Now
                      <ArrowRight className="ml-1" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}