import React from 'react';
import { Shield, Star, ThumbsUp, Award, Sparkles, CheckCircle } from 'lucide-react';

export default function TrustScreen() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely beautiful craftsmanship! The attention to detail is incredible and the story behind each piece makes it even more special.",
      date: "2 days ago",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Maya's pottery brings such warmth to my home. You can truly feel the love and tradition in every curve.",
      date: "1 week ago",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: "Priya Sharma",
      rating: 4,
      comment: "High quality products and fast delivery. The AI-generated story was so engaging and made me appreciate the craft even more.",
      date: "2 weeks ago",
      verified: true,
      helpful: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
            <Shield className="mr-2 text-green-500" />
            Trust & Reviews
          </h1>
          <p className="text-gray-600">Verified quality and authentic experiences</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* AI Feature Highlight */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
              <Sparkles className="text-white" size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Ensures Trust & Transparency</h3>
              <p className="text-sm text-gray-600">Smart verification and review analysis</p>
            </div>
          </div>
        </div>

        {/* Verified Trust Badge */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-2">Verified Artisan ✅</h2>
            <p className="text-gray-600 mb-4">Maya's Pottery Studio has been authenticated by our AI trust system</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-500">Authentic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">127</div>
                <div className="text-sm text-gray-500">Reviews</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center text-green-600">
                <CheckCircle className="mr-1" size={16} />
                <span className="text-sm font-medium">Identity Verified</span>
              </div>
              <div className="flex items-center text-green-600">
                <Award className="mr-1" size={16} />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h3>
          
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mr-4">4.9</div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 mr-1" size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Based on 127 reviews</div>
            </div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="text-sm text-gray-600 w-8">{rating}</span>
                <Star className="text-yellow-400 mr-2" size={12} fill="currentColor" />
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ 
                      width: rating === 5 ? '85%' : rating === 4 ? '12%' : rating === 3 ? '2%' : '1%'
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {rating === 5 ? '108' : rating === 4 ? '15' : rating === 3 ? '3' : '1'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Highlighted Reviews */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">⭐ Reviews & Ratings</h3>
            <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full">
              <Sparkles className="text-white mr-1" size={12} />
              <span className="text-white text-xs font-medium">AI Curated</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <Sparkles className="text-purple-600 mr-2" size={16} />
              <span className="text-sm font-medium text-purple-700">Most Helpful Review (AI Selected)</span>
            </div>
            <p className="text-sm text-purple-700 italic">
              "AI highlights reviews that provide the most valuable insights for future customers"
            </p>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-2">{review.name}</span>
                    {review.verified && (
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                        <CheckCircle className="text-green-600 mr-1" size={12} />
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`mr-1 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm mb-3">{review.comment}</p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                    <ThumbsUp size={14} className="mr-1" />
                    <span className="text-xs">Helpful ({review.helpful})</span>
                  </button>
                  
                  {review.id === 1 && (
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                      <Award className="text-yellow-600 mr-1" size={12} />
                      <span className="text-xs text-yellow-600 font-medium">Top Review</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            View All Reviews
          </button>
        </div>
      </div>
    </div>
  );
}