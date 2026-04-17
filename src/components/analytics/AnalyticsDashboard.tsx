import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EarningsOverview } from './EarningsOverview';
import { EarningsChart } from './EarningsChart';
import { PaymentHistory } from './PaymentHistory';
import { PerformanceMetrics } from './PerformanceMetrics';
import { TrendingUp, DollarSign, Calendar, Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface AnalyticsDashboardProps {
  userRole: 'worker' | 'employer';
}

export function AnalyticsDashboard({ userRole }: AnalyticsDashboardProps) {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  const earningsData = {
    total: userRole === 'worker' ? 185000 : 450000,
    thisMonth: userRole === 'worker' ? 45000 : 125000,
    lastMonth: userRole === 'worker' ? 38000 : 98000,
    pending: userRole === 'worker' ? 8500 : 23000,
    chartData: [
      { month: 'Jan', earnings: 32000 },
      { month: 'Feb', earnings: 28000 },
      { month: 'Mar', earnings: 38000 },
      { month: 'Apr', earnings: 42000 },
      { month: 'May', earnings: 45000 },
    ]
  };

  const payments = [
    {
      id: '1',
      title: 'Residential Wiring - BuildTech',
      amount: 18000,
      status: 'completed',
      date: '2 days ago',
      type: 'credit'
    },
    {
      id: '2',
      title: 'AC Installation - CoolTech',
      amount: 27000,
      status: 'completed',
      date: '5 days ago',
      type: 'credit'
    },
    {
      id: '3',
      title: 'Platform Fee',
      amount: -1350,
      status: 'completed',
      date: '5 days ago',
      type: 'debit'
    },
    {
      id: '4',
      title: 'Emergency Repair - HomeServices',
      amount: 4500,
      status: 'pending',
      date: '1 week ago',
      type: 'credit'
    },
    {
      id: '5',
      title: 'Monthly Maintenance - Skyline',
      amount: 50000,
      status: 'completed',
      date: '2 weeks ago',
      type: 'credit'
    },
  ];

  const metrics = {
    totalJobs: 47,
    completionRate: 96,
    avgRating: 4.8,
    responseTime: '2.3 hrs',
    repeatCustomers: 68,
    onTimeDelivery: 94
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Financial Analytics
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Earnings & Analytics
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Track your earnings, analyze performance, and optimize your success
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-5 h-5" />
                Export Report
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-5 h-5" />
                {timeRange === 'week' ? 'This Week' : timeRange === 'month' ? 'This Month' : 'This Year'}
              </Button>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 mb-8">
            {(['week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  timeRange === range
                    ? 'bg-white text-black'
                    : 'glass text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {range === 'week' ? 'Week' : range === 'month' ? 'Month' : 'Year'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Earnings Overview Cards */}
        <EarningsOverview data={earningsData} userRole={userRole} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Earnings Chart */}
          <div className="lg:col-span-2">
            <EarningsChart data={earningsData.chartData} timeRange={timeRange} />
          </div>

          {/* Performance Metrics */}
          <div className="lg:col-span-1">
            <PerformanceMetrics metrics={metrics} userRole={userRole} />
          </div>
        </div>

        {/* Payment History */}
        <div className="mt-8">
          <PaymentHistory payments={payments} userRole={userRole} />
        </div>
      </div>
    </div>
  );
}
