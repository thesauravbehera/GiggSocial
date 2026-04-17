import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Zap, Shield, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export function BentoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 border-t border-white/5">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A complete platform designed for modern gig workers
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="glass glass-hover rounded-3xl p-8 h-full transition-all border border-white/5 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">AI-Powered Verification</h3>
              <p className="text-gray-400 text-lg mb-6">
                Get verified in 5 minutes with our intelligent quiz system. 
                Earn badges and build trust instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                {['10 Questions', '~5 Minutes', 'Instant Results'].map((item, idx) => (
                  <span key={idx} className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="glass glass-hover rounded-3xl p-6 h-full transition-all border border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trust Score</h3>
              <p className="text-sm text-gray-500 mb-4">Transparent scoring</p>
              <div className="text-4xl font-bold text-white">95/100</div>
            </div>
          </motion.div>

          {/* Earnings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1"
          >
            <div className="glass glass-hover rounded-3xl p-6 h-full transition-all border border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">30% More</h3>
              <p className="text-sm text-gray-500 mb-4">Avg earnings boost</p>
              <div className="text-2xl font-bold text-white">₹2L+/mo</div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="glass glass-hover rounded-3xl p-6 h-full transition-all border border-white/5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Verified Badge', 'Premium Gigs', 'Higher Rates', 'Priority Support'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Success Rate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2"
          >
            <div className="glass glass-hover rounded-3xl p-6 transition-all border border-white/5 group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">92%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Success Rate</div>
                </div>
              </div>
              <p className="text-gray-400">
                Verified workers find gigs 3x faster than unverified workers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
