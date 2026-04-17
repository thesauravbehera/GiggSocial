import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
}

interface AchievementsBadgesProps {
  achievements: Achievement[];
}

export function AchievementsBadges({ achievements }: AchievementsBadgesProps) {
  return (
    <div className="glass rounded-2xl p-8 border border-white/5">
      <h2 className="text-2xl font-bold text-white mb-8">Achievements</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative glass rounded-xl p-6 text-center border border-white/5 ${
              achievement.unlocked ? 'glass-hover' : 'opacity-40'
            }`}
          >
            {!achievement.unlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl backdrop-blur-sm">
                <Lock className="w-8 h-8 text-gray-500" />
              </div>
            )}
            
            <div className="text-5xl mb-3">{achievement.icon}</div>
            <div className="text-sm font-semibold text-white">{achievement.name}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
          <span className="text-sm text-gray-400">
            {achievements.filter(a => a.unlocked).length} / {achievements.length} unlocked
          </span>
        </div>
      </div>
    </div>
  );
}
