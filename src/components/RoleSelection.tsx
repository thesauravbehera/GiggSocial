import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Wrench } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: 'worker' | 'company') => void;
}

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo & Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
          KaamForce
        </h1>
        <p className="text-xl text-slate-400">
          India's First AI-Verified Gig Workforce Platform
        </p>
      </motion.div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRoleSelect('worker')}
          className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">
              I want to work
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Get verified, showcase your skills, and discover premium gigs with fair pricing
            </p>
            
            <div className="mt-8 flex flex-col gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                5-minute skill verification
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Build verified trust score
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Earn rewards & badges
              </div>
            </div>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRoleSelect('company')}
          className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">
              I want to hire
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Hire verified talent in 24 hours with AI-powered matching and transparent pricing
            </p>
            
            <div className="mt-8 flex flex-col gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                AI-verified workers only
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Smart matching in seconds
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Fair pricing suggestions
              </div>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="flex items-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-400">10,000+</span>
            <span>Verified Workers</span>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-400">500+</span>
            <span>Companies</span>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-400">4.8★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
