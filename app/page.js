"use client";

import React from 'react';
import Hero from '@/components/Hero';
import QuoteCard from '@/components/QuoteCard';
import ProductCard from '@/components/ProductCard';
import { inspirationalQuotes } from '@/data/quotes';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      
      {/* Quotes Section */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspirationalQuotes.map((item) => (
              <QuoteCard key={item.id} quote={item.quote} author={item.author} />
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}