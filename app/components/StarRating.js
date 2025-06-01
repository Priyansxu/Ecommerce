import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? "fill-orange-400 text-orange-400" : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">({reviews})</span>
    </div>
  );
}
