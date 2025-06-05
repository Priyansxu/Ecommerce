import React from 'react';
import { Raleway, Lato } from 'next/font/google';

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] })

export default function Hero() {
  return (
    <div className="relative px-6 lg:px-12 py-16 overflow-hidden h-screen bg-black m-6 -mt-20 rounded-xl md:rounded-3xl transition-opacity duration-600 ease-in-out">
      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
         <h1 className={`inline-block text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white from-0% via-white via-60% to-gray-400 to-100% transition-all duration-600 ease-in-out transform translate-y-0 ${raleway.className}`}> 
       Ecommerce Website
          </h1>
          <p className={`text-lg max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-b from-[#BDA5FB] from-0% via-[#BDA5FB] via-10% to-gray-300 to-100% transition-all duration-600 ease-in-out transform translate-y-0 ${lato.className}`}>
            Discover transformative psychology books that unlock the mysteries of the human mind.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-full transition-all duration-800 ease-out">
        <div className="w-full h-full bg-cover bg-bottom bg-no-repeat transform translate-y-8" style={{ backgroundImage: `url('/gradient.png')`}} />
      </div>
    </div>
  );
};