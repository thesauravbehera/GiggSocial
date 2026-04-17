import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Clock, Users, Target, CheckCircle } from 'lucide-react';

interface PerformanceMetricsProps {
  metrics: {
    totalJobs: number;
    completionRate: number;
    avgRating: number;
    responseTime: string;
    repeatCustomers: number;
    onTimeDelivery: number;
  };
  userRole: 'worker' | 'employer';
}

export function PerformanceMetrics({ metrics, userRole }: PerformanceMetricsProps) {
  const metricsList = [
    {
      icon: Target,
      label: 'Total Jobs',
      value: metrics.totalJobs.toString(),
      subtitle: 'Completed'
    },
    {
      icon: CheckCircle,
      label: 'Completion Rate',
      value: `${metrics.completionRate}%`,
      subtitle: 'Success rate',
      progress: metrics.completionRate
    },
    {
      icon: Star,
      label: 'Average Rating',
      value: `${metrics.avgRating}★`,
      subtitle: 'Customer satisfaction',
      progress: (metrics.avgRating / 5) * 100
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: metrics.responseTime,
      subtitle: 'Avg response'
    },
    {
      icon: Users,
      label: 'Repeat Customers',
      value: `${metrics.repeatCustomers}%`,
      subtitle: 'Return rate',
      progress: metrics.repeatCustomers
    },
    {
      icon: Award,
      label: 'On-Time Delivery',
      value: `${metrics.onTimeDelivery}%`,
      subtitle: 'Punctuality',
      progress: metrics.onTimeDelivery
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass rounded-2xl p-8 border border-white/5 h-full"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Performance</h2>
      <p className="text-gray-400 mb-8">Your key metrics</p>

      <div className="space-y-6">
        {metricsList.map((metric, idx) => (
          <div key={idx} className="glass rounded-xl p-4 border border-white/5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                </div>
              </div>
            </div>
            
            {metric.progress !== undefined && (
              <div className="space-y-2">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.progress}%` }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.8 }}
                    className="h-full bg-white"
                  />
                </div>
                <div className="text-xs text-gray-500">{metric.subtitle}</div>
              </div>
            )}
            
            {!metric.progress && (
              <div className="text-xs text-gray-500">{metric.subtitle}</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
