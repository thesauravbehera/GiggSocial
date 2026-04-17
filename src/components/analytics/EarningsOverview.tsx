import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Clock, Wallet } from 'lucide-react';

interface EarningsOverviewProps {
  data: {
    total: number;
    thisMonth: number;
    lastMonth: number;
    pending: number;
  };
  userRole: 'worker' | 'employer';
}

export function EarningsOverview({ data, userRole }: EarningsOverviewProps) {
  const growth = ((data.thisMonth - data.lastMonth) / data.lastMonth * 100).toFixed(1);
  const isPositiveGrowth = parseFloat(growth) > 0;

  const cards = [
    {
      title: 'Total Earnings',
      value: `₹${(data.total / 1000).toFixed(0)}K`,
      icon: Wallet,
      subtitle: 'All time',
      color: 'white'
    },
    {
      title: 'This Month',
      value: `₹${(data.thisMonth / 1000).toFixed(0)}K`,
      icon: DollarSign,
      subtitle: `${isPositiveGrowth ? '+' : ''}${growth}% vs last month`,
      color: isPositiveGrowth ? 'white' : 'gray',
      trend: isPositiveGrowth
    },
    {
      title: 'Last Month',
      value: `₹${(data.lastMonth / 1000).toFixed(0)}K`,
      icon: TrendingUp,
      subtitle: 'Previous period',
      color: 'white'
    },
    {
      title: 'Pending',
      value: `₹${(data.pending / 1000).toFixed(1)}K`,
      icon: Clock,
      subtitle: 'Under processing',
      color: 'white'
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass glass-hover rounded-2xl p-6 border border-white/5 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <card.icon className="w-6 h-6 text-white" />
            </div>
            {card.trend !== undefined && (
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                card.trend ? 'bg-white/10' : 'bg-white/5'
              }`}>
                <TrendingUp className={`w-4 h-4 ${
                  card.trend ? 'text-white' : 'text-gray-500 rotate-180'
                }`} />
                <span className={`text-xs font-semibold ${
                  card.trend ? 'text-white' : 'text-gray-500'
                }`}>
                  {growth}%
                </span>
              </div>
            )}
          </div>
          
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            {card.title}
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {card.value}
          </div>
          <div className="text-sm text-gray-500">
            {card.subtitle}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
