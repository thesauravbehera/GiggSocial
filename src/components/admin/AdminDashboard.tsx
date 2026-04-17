import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Briefcase, DollarSign, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { AdminStats } from './AdminStats';
import { UserManagement } from './UserManagement';
import { DisputeManagement } from './DisputeManagement';
import { PlatformAnalytics } from './PlatformAnalytics';
import { RevenueTracking } from './RevenueTracking';

type AdminView = 'overview' | 'users' | 'disputes' | 'analytics' | 'revenue';

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>('overview');

  const platformStats = {
    totalUsers: 10847,
    activeWorkers: 8234,
    activeEmployers: 2613,
    totalJobs: 5672,
    completedJobs: 4891,
    activeJobs: 781,
    totalRevenue: 2847500,
    monthlyRevenue: 485000,
    pendingDisputes: 23,
    resolvedDisputes: 145,
    averageRating: 4.7,
    platformFee: 15,
  };

  const recentActivity = [
    {
      id: '1',
      type: 'new_user',
      message: 'New worker registered: Rajesh Kumar',
      time: '2 min ago',
      status: 'pending'
    },
    {
      id: '2',
      type: 'dispute',
      message: 'Dispute raised: Payment Issue #D-1245',
      time: '15 min ago',
      status: 'urgent'
    },
    {
      id: '3',
      type: 'job_completed',
      message: 'Job completed: Electrical Wiring - ₹18,000',
      time: '1 hour ago',
      status: 'success'
    },
    {
      id: '4',
      type: 'verification',
      message: 'Verification completed: Amit Patel (Master Badge)',
      time: '2 hours ago',
      status: 'success'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Admin Control Center
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Platform Management
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Monitor, manage, and optimize KaamForce operations
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <div className="glass rounded-xl px-4 py-3 border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Platform Health</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-semibold text-white">Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* View Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'overview' as const, label: 'Overview', icon: TrendingUp },
              { id: 'users' as const, label: 'Users', icon: Users },
              { id: 'disputes' as const, label: 'Disputes', icon: AlertTriangle },
              { id: 'analytics' as const, label: 'Analytics', icon: Briefcase },
              { id: 'revenue' as const, label: 'Revenue', icon: DollarSign },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  currentView === tab.id
                    ? 'bg-white text-black'
                    : 'glass text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Overview View */}
        {currentView === 'overview' && (
          <>
            {/* Platform Stats */}
            <AdminStats stats={platformStats} />

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between p-4 glass rounded-xl border border-white/5 hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.status === 'urgent' 
                            ? 'bg-red-500/20' 
                            : activity.status === 'success'
                            ? 'bg-white/10'
                            : 'bg-white/5'
                        }`}>
                          {activity.status === 'urgent' ? (
                            <AlertTriangle className="w-5 h-5 text-red-300" />
                          ) : activity.status === 'success' ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Users className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="text-white font-medium">{activity.message}</div>
                          <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        activity.status === 'urgent'
                          ? 'bg-red-500/20 text-red-300'
                          : activity.status === 'success'
                          ? 'bg-white/10 text-white'
                          : 'bg-white/5 text-gray-400'
                      }`}>
                        {activity.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* Users View */}
        {currentView === 'users' && <UserManagement />}

        {/* Disputes View */}
        {currentView === 'disputes' && <DisputeManagement />}

        {/* Analytics View */}
        {currentView === 'analytics' && <PlatformAnalytics />}

        {/* Revenue View */}
        {currentView === 'revenue' && <RevenueTracking stats={platformStats} />}
      </div>
    </div>
  );
}
