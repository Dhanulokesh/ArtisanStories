import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Sparkles, ShoppingBag } from 'lucide-react';

export default function SocialFeed() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const posts = [
    {
      id: 1,
      user: "Maya's Pottery Studio",
      avatar: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      image: "https://images.pexels.com/photos/4207717/pexels-photo-4207717.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 1247,
      comments: 89,
      caption: "When clay meets soul ✨ Each curve tells a story of passion and heritage",
      hashtags: "#HandmadeWithLove #CeramicArt #SustainableCrafts #ArtisanMade #TraditionalCrafts",
      price: "₹2,499",
      aiGenerated: true
    },
    {
      id: 2,
      user: "Threads of Heritage",
      avatar: "https://images.pexels.com/photos/7525184/pexels-photo-7525184.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      image: "https://images.pexels.com/photos/7525184/pexels-photo-7525184.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 892,
      comments: 67,
      caption: "Threading dreams into reality, one fiber at a time 🧵 Generations of wisdom in every weave",
      hashtags: "#Handwoven #TextileArt #CulturalHeritage #SlowFashion #EthicalFashion",
      price: "₹3,299",
      aiGenerated: true
    },
    {
      id: 3,
      user: "Wooden Wonders",
      avatar: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 1456,
      comments: 112,
      caption: "Carved with love, shaped by tradition 🪵 Where sustainability meets artistry",
      hashtags: "#WoodCrafts #SustainableArt #HandCarved #EcoFriendly #ArtisanCrafted",
      price: "₹1,899",
      aiGenerated: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Social Feed</h1>
          <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full">
            <Sparkles className="text-white mr-1" size={14} />
            <span className="text-white text-sm font-medium">AI Curated</span>
          </div>
        </div>
      </div>

      {/* AI Feature Highlight */}
      <div className="bg-white mx-4 rounded-xl p-4 mb-6 shadow-sm border border-gray-100 mt-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
            <Sparkles className="text-white" size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">AI Creates Catchy Captions</h3>
            <p className="text-sm text-gray-600">Every post optimized for maximum engagement</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-sm">
              {/* Post Header */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.user}</h3>
                    {post.aiGenerated && (
                      <div className="flex items-center">
                        <Sparkles className="text-purple-500 mr-1" size={12} />
                        <span className="text-xs text-purple-600 font-medium">AI Caption</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full aspect-square object-cover"
                />
                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full">
                  <span className="font-semibold">{post.price}</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`transition-colors ${
                        likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                      }`}
                    >
                      <Heart size={24} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                      <MessageCircle size={24} />
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                      <Share2 size={24} />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-700 hover:text-gray-900">
                      <Bookmark size={24} />
                    </button>
                    <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-900">{post.likes.toLocaleString()} likes</span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-900 mr-2">{post.user}</span>
                  <span className="text-gray-700">{post.caption}</span>
                </div>

                <div className="mb-3">
                  <p className="text-purple-600 text-sm">{post.hashtags}</p>
                </div>

                <button className="text-gray-500 text-sm">
                  View all {post.comments} comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}