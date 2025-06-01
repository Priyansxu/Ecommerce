import React from 'react';
import { Quote } from 'lucide-react';

export default function QuoteCard({ quote, author }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <Quote className="w-6 h-6 text-orange-500 mb-4" />
      <blockquote className="text-lg font-light leading-relaxed mb-4 text-white">
        "{quote}"
      </blockquote>
      <cite className="text-gray-400 text-sm">— {author}</cite>
    </div>
  );
}