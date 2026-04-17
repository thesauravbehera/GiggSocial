import React from 'react';
import { motion } from 'motion/react';
import { Play, Zap, Users, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';

export function DemoSection() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const features = [
    {
      icon: Zap,
      title: 'Instant Matching',
      description: 'AI matches workers with gigs in seconds',
    },
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'All workers verified through AI assessment',
    },
    {
      icon: TrendingUp,
      title: 'Smart Pricing',
      description: 'AI recommends fair market rates',
    },
    {
      icon: Users,
      title: 'Trust Scores',
      description: 'Build reputation through completed work',
    },
  ];

  return (
    <section id="demo" className="py-32 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white font-clash">Platform Demo</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-clash">
            See It In Action
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch how saurv.ai connects gig workers with opportunities in real-time
          </p>
        </motion.div>

        {/* Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 group cursor-pointer">
            {/* Placeholder Video */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all group-hover:scale-110"
                >
                  <Play className="w-10 h-10 text-black ml-2" fill="black" />
                </button>
              ) : (
                <div className="text-white text-2xl">Demo Video Playing...</div>
              )}
            </div>

            {/* Overlay Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-white/20" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-clash">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
