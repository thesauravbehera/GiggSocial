import React from 'react';
import { motion } from 'motion/react';

interface BadgeDisplayProps {
  badge: string;
  score: number;
}

export function BadgeDisplay({ badge, score }: BadgeDisplayProps) {
  const getBadgeDetails = () => {
    switch (badge) {
      case 'master':
        return {
          emoji: '👑',
          color: '#ff4d00',
          label: 'Master Verified',
          description: 'Top 10% of workers'
        };
      case 'expert':
        return {
          emoji: '⭐',
          color: '#0066ff',
          label: 'Expert Verified',
          description: 'Highly skilled professional'
        };
      case 'verified':
        return {
          emoji: '✓',
          color: '#00cc66',
          label: 'Verified',
          description: 'Skills confirmed'
        };
      default:
        return {
          emoji: '○',
          color: '#888888',
          label: 'Unverified',
          description: 'Take quiz to verify'
        };
    }
  };

  const details = getBadgeDetails();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-block"
    >
      <div className="flex items-center gap-4 bg-white border-[3px] border-black px-6 py-4 shadow-[6px_6px_0px_#0a0a0a]">
        <div
          className="w-16 h-16 flex items-center justify-center text-4xl border-[3px] border-black flex-shrink-0"
          style={{ backgroundColor: details.color }}
        >
          {details.emoji}
        </div>
        <div>
          <div className="text-2xl font-bold uppercase">{details.label}</div>
          <div className="text-sm text-[#888888]">{details.description}</div>
          {score > 0 && (
            <div className="text-sm font-bold mt-1">Score: {Math.round(score)}%</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
