import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, DollarSign, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

interface AdminStatsProps {
  stats: {
    totalUsers: number;
    activeWorkers: number;
    activeEmployers: number;
    totalJobs: number;
    completedJobs: number;
    activeJobs: number;
    totalRevenue: number;
    monthlyRevenue: number;
    pendingDisputes: number;
    resolvedDisputes: number;
    averageRating: number;
  };
}

export function AdminStats({ stats }: AdminStatsProps) {
  const statCards = [
    {
      label: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      sublabel: `${stats.activeWorkers.toLocaleString()} workers, ${stats.activeEmployers.toLocaleString()} employers`,
      icon: Users,
      color: 'white'
    },
    {
      label: 'Total Jobs',
      value: stats.totalJobs.toLocaleString(),
      sublabel: `${stats.completedJobs.toLocaleString()} completed, ${stats.activeJobs} active`,
      icon: Briefcase,
      color: 'white'
    },
    {
      label: 'Monthly Revenue',
      value: `₹${(stats.monthlyRevenue / 1000).toFixed(0)}K`,
      sublabel: `Total: ₹${(stats.totalRevenue / 100000).toFixed(1)}L`,
      icon: DollarSign,
      color: 'white'
    },
    {
      label: 'Platform Rating',
      value: `${stats.averageRating}★`,
      sublabel: 'Average across all users',
      icon: TrendingUp,
      color: 'white'
    },
    {
      label: 'Disputes',
      value: stats.pendingDisputes.toString(),
      sublabel: `${stats.resolvedDisputes} resolved this month`,
      icon: AlertTriangle,
      color: stats.pendingDisputes > 20 ? 'red' : 'white'
    },
    {
      label: 'Success Rate',
      value: `${Math.round((stats.completedJobs / stats.totalJobs) * 100)}%`,
      sublabel: 'Job completion rate',
      icon: CheckCircle,
      color: 'white'
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="glass glass-hover rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              stat.color === 'red' ? 'bg-red-500/20' : 'bg-white/5'
            }`}>
              <stat.icon className={`w-6 h-6 ${
                stat.color === 'red' ? 'text-red-300' : 'text-white'
              }`} />
            </div>
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            {stat.label}
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-500">
            {stat.sublabel}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
