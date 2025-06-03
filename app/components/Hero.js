import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      className="relative px-6 lg:px-12 py-16 overflow-hidden m-6 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto relative z-10 mb-16">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Psychology Books
        </motion.h1>
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Discover transformative psychology books that unlock the mysteries of the human mind.
        </motion.p>
      </div>

      {/* PNG Gradient Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/gradient.png')`,
          }}
        />
        
        {/* Fallback gradient in case PNG doesn't load */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #BDA5FB 0%, #936DF8 20%, #5E2DE0 40%, #3E2291 60%, #22184D 80%, #130F2C 100%)',
            zIndex: -1
          }}
        />
      </motion.div>

      {/* Grainy Texture */}
      <motion.div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
      />

      {/* Motion Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          transform: 'skewY(0deg)'
        }}
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 400, opacity: 0.2 }}
        transition={{ 
          delay: 1,
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};