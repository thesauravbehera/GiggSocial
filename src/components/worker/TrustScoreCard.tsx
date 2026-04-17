import React from 'react';
import { motion } from 'motion/react';

interface TrustScoreCardProps {
  verificationStatus: any;
}

export function TrustScoreCard({ verificationStatus }: TrustScoreCardProps) {
  const verificationScore = verificationStatus ? Math.min(verificationStatus.score, 100) : 0;
  const profileScore = 65; // Mock
  const activityScore = 30; // Mock
  
  const trustScore = Math.round(
    verificationScore * 0.4 +
    profileScore * 0.3 +
    activityScore * 0.3
  );

  const getTrustLevel = () => {
    if (trustScore >= 90) return { label: 'Excellent', color: '#00cc66' };
    if (trustScore >= 75) return { label: 'Very Good', color: '#0066ff' };
    if (trustScore >= 60) return { label: 'Good', color: '#ff4d00' };
    return { label: 'Needs Work', color: '#888888' };
  };

  const level = getTrustLevel();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white border-[3px] border-black p-8 shadow-[8px_8px_0px_#0a0a0a] sticky top-24"
    >
      <h2 className="text-3xl font-bold mb-8 uppercase">Trust Score</h2>
      
      {/* Main Score */}
      <div className="text-center mb-8">
        <div
          className="w-32 h-32 mx-auto mb-4 flex items-center justify-center border-[3px] border-black text-6xl font-bold"
          style={{ backgroundColor: level.color, color: 'white' }}
        >
          {trustScore}
        </div>
        <div className="text-2xl font-bold mb-1" style={{ color: level.color }}>
          {level.label}
        </div>
        <div className="text-sm text-[#888888] uppercase">Out of 100</div>
      </div>

      {/* Breakdown */}
      <div className="space-y-6">
        {[
          { label: 'Verification', score: verificationScore, weight: '40%' },
          { label: 'Profile', score: profileScore, weight: '30%' },
          { label: 'Activity', score: activityScore, weight: '30%' },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2">
              <span className="font-bold uppercase text-sm">{item.label}</span>
              <span className="font-bold">{Math.round(item.score)}/100</span>
            </div>
            <div className="h-4 bg-[#e0e0e0] border-[2px] border-black">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                className="h-full bg-black"
              />
            </div>
            <div className="text-xs text-[#888888] mt-1">Weight: {item.weight}</div>
          </div>
        ))}
      </div>

      {/* Improvement Tips */}
      <div className="mt-8 pt-6 border-t-[3px] border-black">
        <h3 className="font-bold mb-4 uppercase">Boost Your Score</h3>
        <div className="space-y-3 text-sm">
          {verificationScore < 50 && (
            <div className="flex items-start gap-2">
              <span className="text-[#ff4d00]">→</span>
              <span>Complete skill verification quiz</span>
            </div>
          )}
          {profileScore < 100 && (
            <div className="flex items-start gap-2">
              <span className="text-[#ff4d00]">→</span>
              <span>Add portfolio and work samples</span>
            </div>
          )}
          {activityScore < 50 && (
            <div className="flex items-start gap-2">
              <span className="text-[#ff4d00]">→</span>
              <span>Complete your first gig</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
