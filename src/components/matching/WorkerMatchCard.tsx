import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Star, MapPin, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

interface WorkerMatchCardProps {
  worker: any;
  index: number;
  onSelect: () => void;
}

export function WorkerMatchCard({ worker, index, onSelect }: WorkerMatchCardProps) {
  const getMatchColor = (score: number) => {
    if (score >= 90) return { gradient: 'from-green-400 to-emerald-400', glow: 'from-green-500/30 to-emerald-500/30' };
    if (score >= 80) return { gradient: 'from-blue-400 to-cyan-400', glow: 'from-blue-500/30 to-cyan-500/30' };
    return { gradient: 'from-purple-400 to-pink-400', glow: 'from-purple-500/30 to-pink-500/30' };
  };

  const colors = getMatchColor(worker.matchScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        {/* Cosmic Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Match Score Badge */}
          <div className="absolute -top-3 -right-3">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-full blur-lg animate-pulse`} />
              <div className={`relative bg-gradient-to-r ${colors.gradient} rounded-full px-4 py-2 text-black font-bold text-sm flex items-center gap-1`}>
                <Sparkles className="w-4 h-4" />
                {worker.matchScore}%
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-md`} />
                <div className={`relative w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center text-2xl font-bold text-black`}>
                  {worker.name.charAt(0)}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  {worker.name}
                  {worker.verified && (
                    <Zap className="w-5 h-5 text-yellow-400" />
                  )}
                </h3>
                <p className="text-sm text-gray-400">{worker.primarySkill}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold">{worker.rating}</span>
              </div>
              <div className="text-xs text-gray-400">{worker.reviewCount} reviews</div>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-white font-bold">{worker.trustScore}</span>
              </div>
              <div className="text-xs text-gray-400">Trust Score</div>
            </div>
          </div>

          {/* Match Reasons */}
          <div className="mb-4 space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Why this match?
            </div>
            {worker.matchReasons?.slice(0, 2).map((reason: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <div className={`mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                <span className="text-sm text-gray-300">{reason}</span>
              </div>
            ))}
          </div>

          {/* Location & Rate */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              {worker.location}
            </div>
            <div className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              ₹{worker.hourlyRate}/hr
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              onClick={onSelect}
              className={`flex-1 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-black font-semibold`}
            >
              View Details
            </Button>
            <Button
              variant="outline"
              className="backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10 text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
