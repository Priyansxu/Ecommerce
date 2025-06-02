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

      {/* Full Gaussian Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 z-0" />

      {/* Gradient Background */}
      <div className="absolute bottom-0 left-0 right-0 h-36 overflow-hidden">
        <motion.svg 
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 144"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#BDA5FB" />
              <stop offset="20%" stopColor="#936DF8" />
              <stop offset="40%" stopColor="#5E2DE0" />
              <stop offset="60%" stopColor="#3E2291" />
              <stop offset="80%" stopColor="#22184D" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            d="M 0 144 L 0 20 Q 600 80 1200 20 L 1200 144 Z"
            fill="url(#waveGradient)"
          />
        </motion.svg>
      </div>

      {/* Grainy Texture */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequen[...]`,
          mixBlendMode: 'overlay',
          filter: 'blur(0px) drop-shadow(0 0 8px rgba(0,0,0,0.3))'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
      />

      {/* Motion Blur Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
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