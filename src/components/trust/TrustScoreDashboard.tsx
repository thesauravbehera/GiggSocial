import React from 'react';
import { motion } from 'motion/react';
import { TrustScoreCard } from './TrustScoreCard';
import { ReviewsList } from './ReviewsList';
import { DisputeCenter } from './DisputeCenter';
import { AchievementsBadges } from './AchievementsBadges';
import { Shield, Star, Scale, Award } from 'lucide-react';

interface TrustScoreDashboardProps {
  userData: any;
}

export function TrustScoreDashboard({ userData }: TrustScoreDashboardProps) {
  const trustData = {
    score: 88,
    level: 'Very Good',
    breakdown: {
      verification: 95,
      ratings: 90,
      disputes: 85,
      activity: 75
    },
    reviews: [
      {
        id: '1',
        reviewer: 'Tech Solutions Pvt Ltd',
        rating: 5,
        comment: 'Excellent work! Fixed the wiring issue quickly and professionally.',
        date: '2 days ago',
        sentiment: 'very_positive'
      },
      {
        id: '2',
        reviewer: 'HomeBuilders Co.',
        rating: 5,
        comment: 'Very skilled and punctual. Highly recommended!',
        date: '1 week ago',
        sentiment: 'very_positive'
      },
      {
        id: '3',
        reviewer: 'QuickFix Services',
        rating: 4,
        comment: 'Good work, completed on time.',
        date: '2 weeks ago',
        sentiment: 'positive'
      }
    ],
    disputes: [],
    achievements: [
      { id: '1', name: 'First Gig', icon: '🎯', unlocked: true },
      { id: '2', name: 'Perfect Score', icon: '💯', unlocked: true },
      { id: '3', name: '5-Star Rating', icon: '⭐', unlocked: true },
      { id: '4', name: 'Top 10%', icon: '👑', unlocked: false },
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Trust & Credibility Center
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Trust Score
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build credibility and unlock premium opportunities with transparent scoring
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Shield, label: 'Trust Score', value: trustData.score, suffix: '/100' },
            { icon: Star, label: 'Avg Rating', value: '4.8', suffix: '★' },
            { icon: Scale, label: 'Disputes', value: '0', suffix: '' },
            { icon: Award, label: 'Achievements', value: '3', suffix: '/10' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 border border-white/5 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trust Score Card */}
          <div className="lg:col-span-1">
            <TrustScoreCard trustData={trustData} />
          </div>

          {/* Reviews and Achievements */}
          <div className="lg:col-span-2 space-y-8">
            <ReviewsList reviews={trustData.reviews} />
            <AchievementsBadges achievements={trustData.achievements} />
            <DisputeCenter disputes={trustData.disputes} />
          </div>
        </div>
      </div>
    </div>
  );
}
