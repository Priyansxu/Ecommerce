import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      className="relative px-6 lg:px-12 py-16 overflow-hidden h-screen bg-black m-6 -mt-16 rounded-xl md:rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Psychology Books
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover transformative psychology books that unlock the mysteries of the human mind.
          </motion.p>
        </div>
      </div>

      {/* PNG Gradient Background */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('/gradient.png')`,
            transform: 'translateY(30%)'
          }}
        />
      </motion.div>
    </motion.div>
  );
};