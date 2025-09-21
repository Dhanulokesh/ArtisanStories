import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Truck, Sparkles, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function CheckoutScreen() {
  const [selectedShipping, setSelectedShipping] = useState('standard');

  const cartItems = [
    {
      id: 1,
      name: "Handcrafted Ceramic Bowl",
      price: 2499,
      quantity: 1,
      image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      name: "Traditional Clay Vase",
      price: 1899,
      quantity: 2,
      image: "https://images.pexels.com/photos/4207717/pexels-photo-4207717.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      time: '5-7 days',
      price: 99,
      recommended: false
    },
    {
      id: 'express',
      name: 'Express Delivery',
      time: '2-3 days',
      price: 199,
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium Delivery',
      time: '1-2 days',
      price: 299,
      recommended: false
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingOptions.find(opt => opt.id === selectedShipping)?.price || 0;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
            <ShoppingBag className="mr-2 text-purple-600" />
            Checkout
          </h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* AI Feature Highlight */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
              <Sparkles className="text-white" size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Simplifies Checkout & Delivery</h3>
              <p className="text-sm text-gray-600">Smart recommendations for optimal shipping</p>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Order</h3>
          
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Options with AI Recommendation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <Truck className="mr-2" size={20} />
              Shipping Options
            </h3>
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-green-500 px-2 py-1 rounded-full">
              <Sparkles className="text-white mr-1" size={12} />
              <span className="text-white text-xs font-medium">AI Optimized</span>
            </div>
          </div>

          <div className="space-y-3">
            {shippingOptions.map((option) => (
              <label key={option.id} className="relative block">
                <input
                  type="radio"
                  name="shipping"
                  value={option.id}
                  checked={selectedShipping === option.id}
                  onChange={(e) => setSelectedShipping(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedShipping === option.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                } ${option.recommended ? 'ring-2 ring-green-200' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-gray-900">{option.name}</span>
                        {option.recommended && (
                          <div className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                            <Sparkles className="mr-1" size={10} />
                            AI Pick
                          </div>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="mr-1" size={14} />
                        {option.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">₹{option.price}</span>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Sparkles className="text-blue-600 mr-2" size={16} />
              <p className="text-sm text-blue-700">
                <strong>AI Recommendation:</strong> Express delivery offers the best balance of speed and value for your location.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="mr-2" size={20} />
            Delivery Address
          </h3>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="font-medium text-gray-900">John Doe</div>
            <div className="text-sm text-gray-600 mt-1">
              123 Art Street, Creative District<br />
              Mumbai, Maharashtra 400001<br />
              Phone: +91 98765 43210
            </div>
          </div>
          
          <button className="mt-3 text-purple-600 font-medium text-sm hover:text-purple-700">
            Change Address
          </button>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-900">₹{shippingCost}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-xl text-purple-600">₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* One-Click Checkout */}
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all">
            <CreditCard className="mr-2" size={20} />
            Complete Order • ₹{total.toLocaleString()}
          </button>
          
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <CheckCircle className="text-green-500 mr-2" size={16} />
              <span>Secure checkout powered by AI fraud detection</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="text-green-600" size={16} />
            </div>
            <span className="text-xs text-gray-600">Secure Payment</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Truck className="text-blue-600" size={16} />
            </div>
            <span className="text-xs text-gray-600">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Sparkles className="text-purple-600" size={16} />
            </div>
            <span className="text-xs text-gray-600">AI Optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
}