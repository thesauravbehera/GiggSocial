import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowUp } from 'lucide-react';

interface TrustScoreCardProps {
  trustData: any;
}

export function TrustScoreCard({ trustData }: TrustScoreCardProps) {
  const getLevelColor = (score: number) => {
    if (score >= 90) return 'text-white';
    if (score >= 75) return 'text-white';
    if (score >= 60) return 'text-gray-300';
    return 'text-gray-500';
  };

  return (
    <div className="glass rounded-2xl p-8 border border-white/5 sticky top-24">
      <h2 className="text-2xl font-bold text-white mb-8">Trust Score</h2>
      
      {/* Main Score Display */}
      <div className="text-center mb-8 pb-8 border-b border-white/5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative inline-block mb-4"
        >
          <div className="w-40 h-40 rounded-full glass flex items-center justify-center border border-white/10">
            <div className="text-6xl font-bold text-white">{trustData.score}</div>
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <ArrowUp className="w-6 h-6 text-black" />
          </div>
        </motion.div>
        <div className={`text-xl font-bold mb-2 ${getLevelColor(trustData.score)}`}>
          {trustData.level}
        </div>
        <div className="text-sm text-gray-500 uppercase tracking-wider">Out of 100</div>
      </div>

      {/* Breakdown */}
      <div className="space-y-6 mb-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Score Breakdown
        </h3>
        {[
          { label: 'Verification', score: trustData.breakdown.verification, weight: '40%' },
          { label: 'Ratings', score: trustData.breakdown.ratings, weight: '30%' },
          { label: 'Disputes', score: trustData.breakdown.disputes, weight: '20%' },
          { label: 'Activity', score: trustData.breakdown.activity, weight: '10%' },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-300 font-medium">{item.label}</span>
              <span className="text-white font-bold">{item.score}/100</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="h-full bg-white"
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">Weight: {item.weight}</div>
          </div>
        ))}
      </div>

      {/* Improvement Tips */}
      <div className="glass rounded-xl p-4 border border-white/5">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-white shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-white mb-2">Boost Your Score</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-white">→</span>
                <span>Complete more verified gigs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white">→</span>
                <span>Maintain 5-star ratings</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white">→</span>
                <span>Stay active on platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
