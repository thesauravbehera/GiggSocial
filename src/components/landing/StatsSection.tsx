import React from 'react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Users, Briefcase, Star } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { 
      value: '50K+', 
      label: 'Gig Workers',
      description: 'Verified professionals'
    },
    { 
      value: '500+', 
      label: 'Hirers',
      description: 'Active companies'
    },
    { 
      value: '1M+', 
      label: 'Gigs Completed',
      description: 'Successful jobs'
    },
    { 
      value: '4.9★', 
      label: 'Average Rating',
      description: 'Platform satisfaction'
    },
  ];

  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white">Platform Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real numbers from India's fastest-growing AI workforce platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}