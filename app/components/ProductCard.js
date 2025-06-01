import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden group">
      <div className="relative aspect-square">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.badge}
          </div>
        )}
        <button className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <StarRating rating={product.rating} reviews={product.reviews} />

        <h3 className="text-xl font-light mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2">by {product.author}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md flex items-center text-sm transition-colors">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
