import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Shield, TrendingUp, Award, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get verified in just 5 minutes with our AI-powered quiz system.'
    },
    {
      icon: Shield,
      title: 'Trust Score',
      description: 'Build credibility with transparent, AI-calculated trust scores.'
    },
    {
      icon: Award,
      title: 'Verified Badges',
      description: 'Earn Master, Expert, or Verified badges to stand out.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Earnings',
      description: 'Access premium gigs with 30% higher pay on average.'
    },
  ];

  return (
    <section ref={containerRef} className="relative py-24 border-t border-white/5">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white">AI Agents</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            6 Autonomous AI Agents
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Intelligent automation handling verification, matching, pricing, trust, and disputes
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass glass-hover rounded-2xl p-8 h-full transition-all border border-white/5">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}