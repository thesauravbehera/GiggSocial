import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Sparkles, DollarSign, Info } from 'lucide-react';
import { Button } from '../ui/button';

interface PricingRecommendationProps {
  worker: any;
}

export function PricingRecommendation({ worker }: PricingRecommendationProps) {
  const baseRate = worker.hourlyRate;
  const minRate = Math.round(baseRate * 0.85);
  const maxRate = Math.round(baseRate * 1.2);
  const recommendedRate = baseRate;

  const pricingFactors = [
    { label: 'Skill Rarity', value: 85, impact: '+15%' },
    { label: 'Location Demand', value: 92, impact: '+8%' },
    { label: 'Urgency Level', value: 75, impact: 'Normal' },
    { label: 'Worker Experience', value: 88, impact: '+12%' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Cosmic Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
          
          {/* Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-4">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">AI Pricing Engine</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Dynamic Pricing
                  </h2>
                  <p className="text-gray-400">
                    Calculated using 30+ market signals and real-time data
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Main Pricing Display */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Recommended Price */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs font-semibold text-green-400">RECOMMENDED</span>
                    </div>
                    <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      ₹{recommendedRate}
                    </div>
                    <div className="text-sm text-gray-400">per hour</div>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-400">Price Range</span>
                      <DollarSign className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                      <div className="absolute top-1/2 -translate-y-1/2 bg-white w-1 h-5" style={{ left: `${((recommendedRate - minRate) / (maxRate - minRate)) * 100}%` }} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="text-gray-400">Min</div>
                        <div className="text-white font-bold">₹{minRate}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Fair</div>
                        <div className="text-white font-bold">₹{recommendedRate}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400">Max</div>
                        <div className="text-white font-bold">₹{maxRate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-400">
                        This rate is <span className="text-white font-semibold">12% above market average</span> due to high skill verification and urgent demand.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Factors */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Pricing Factors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {pricingFactors.map((factor, idx) => (
                    <div key={idx} className="backdrop-blur-sm bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-300">{factor.label}</span>
                        <span className="text-sm font-bold text-purple-400">{factor.impact}</span>
                      </div>
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${factor.value}%` }}
                          transition={{ delay: idx * 0.1, duration: 0.8 }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-6"
                >
                  Accept Recommendation (₹{recommendedRate}/hr)
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10 text-white py-6"
                >
                  Set Custom Rate
                </Button>
              </div>

              {/* Fair Pricing Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span>Fair pricing guaranteed by AI • Transparent calculation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
