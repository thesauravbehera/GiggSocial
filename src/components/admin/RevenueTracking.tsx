import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, CreditCard, Wallet } from 'lucide-react';

interface RevenueTrackingProps {
  stats: {
    totalRevenue: number;
    monthlyRevenue: number;
    platformFee: number;
  };
}

export function RevenueTracking({ stats }: RevenueTrackingProps) {
  const revenueBreakdown = [
    { source: 'Platform Fees (15%)', amount: stats.monthlyRevenue * 0.15, percentage: 15 },
    { source: 'Premium Subscriptions', amount: 125000, percentage: 26 },
    { source: 'Verification Fees', amount: 85000, percentage: 18 },
    { source: 'Featured Listings', amount: 95000, percentage: 20 },
    { source: 'Other Services', amount: 100000, percentage: 21 },
  ];

  const monthlyBreakdown = [
    { month: 'January', revenue: 325000, growth: '+12%' },
    { month: 'February', revenue: 380000, growth: '+17%' },
    { month: 'March', revenue: 425000, growth: '+12%' },
    { month: 'April', revenue: 445000, growth: '+5%' },
    { month: 'May', revenue: 485000, growth: '+9%' },
  ];

  return (
    <div className="space-y-8">
      {/* Revenue Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-6"
      >
        {[
          {
            label: 'Total Revenue',
            value: `₹${(stats.totalRevenue / 100000).toFixed(1)}L`,
            sublabel: 'All time',
            icon: DollarSign
          },
          {
            label: 'This Month',
            value: `₹${(stats.monthlyRevenue / 1000).toFixed(0)}K`,
            sublabel: '+9% vs last month',
            icon: TrendingUp
          },
          {
            label: 'Platform Fee',
            value: `${stats.platformFee}%`,
            sublabel: 'Per transaction',
            icon: Wallet
          },
          {
            label: 'Avg Transaction',
            value: '₹16,800',
            sublabel: 'Per completed job',
            icon: CreditCard
          },
        ].map((item, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              {item.label}
            </div>
            <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
            <div className="text-sm text-gray-500">{item.sublabel}</div>
          </div>
        ))}
      </motion.div>

      {/* Revenue Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Revenue Sources</h2>
        <div className="space-y-4">
          {revenueBreakdown.map((source, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{source.source}</span>
                <span className="text-white font-bold">₹{(source.amount / 1000).toFixed(0)}K</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${source.percentage}%` }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="h-full bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Monthly Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl border border-white/5 overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Monthly Revenue</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Month
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {monthlyBreakdown.map((item, idx) => (
                <tr key={idx} className="border-b border-white/5">
                  <td className="p-6 text-white font-medium">{item.month}</td>
                  <td className="p-6 text-white font-bold">₹{(item.revenue / 1000).toFixed(0)}K</td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                      {item.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
