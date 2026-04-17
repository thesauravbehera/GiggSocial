import React from 'react';
import { motion } from 'motion/react';
import { BadgeDisplay } from './BadgeDisplay';
import { TrustScoreCard } from './TrustScoreCard';
import { SkillsSection } from './SkillsSection';

interface WorkerProfileViewProps {
  workerData: any;
}

export function WorkerProfileView({ workerData }: WorkerProfileViewProps) {
  return (
    <div className="px-6 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            <div className="w-48 h-48 bg-black text-white flex items-center justify-center text-8xl font-bold border-[3px] border-black shadow-[12px_12px_0px_#0a0a0a] flex-shrink-0">
              {workerData.name.charAt(0)}
            </div>
            
            <div className="flex-1">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 uppercase tracking-tight">
                {workerData.name}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="text-xl text-[#888888]">{workerData.city}</div>
                <div className="text-xl text-[#888888]">•</div>
                <div className="text-xl text-[#888888]">{workerData.experience} experience</div>
              </div>
              
              {/* Verification Status */}
              {workerData.verificationStatus && (
                <BadgeDisplay
                  badge={workerData.verificationStatus.badge}
                  score={workerData.verificationStatus.score}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trust Score */}
          <div className="lg:col-span-1">
            <TrustScoreCard verificationStatus={workerData.verificationStatus} />
          </div>

          {/* Right Column - Skills & Details */}
          <div className="lg:col-span-2 space-y-8">
            <SkillsSection skills={workerData.skills} verified={!!workerData.verificationStatus} />
            
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 uppercase">Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Gigs', value: '0' },
                  { label: 'Rating', value: 'New' },
                  { label: 'Response', value: '< 1hr' },
                  { label: 'Reviews', value: '0' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-[3px] border-black p-6 shadow-[4px_4px_0px_#0a0a0a]"
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-[#888888] uppercase font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#00cc66]/10 border-[3px] border-black p-8"
            >
              <h3 className="text-2xl font-bold mb-4 uppercase">Next Steps</h3>
              <div className="space-y-4 mb-6">
                {[
                  'Complete your profile with work samples',
                  'Upload verification video for Master badge',
                  'Start applying to premium gigs',
                  'Build your trust score with quality work'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-lg pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
              <button className="bg-black text-white px-8 py-4 text-lg font-bold uppercase border-[3px] border-black shadow-[8px_8px_0px_#0a0a0a] hover:shadow-[4px_4px_0px_#0a0a0a] hover:translate-x-1 hover:translate-y-1 transition-all w-full md:w-auto">
                Browse Available Gigs →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
