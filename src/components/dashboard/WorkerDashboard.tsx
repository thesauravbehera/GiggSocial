import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Shield, DollarSign, Star, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface WorkerDashboardProps {
  userData: any;
  onNavigate: (page: string) => void;
}

export function WorkerDashboard({ userData, onNavigate }: WorkerDashboardProps) {
  const stats = {
    activeJobs: 2,
    completedJobs: 47,
    totalEarnings: 185000,
    thisMonth: 45000,
    trustScore: 88,
    rating: 4.8,
    verificationLevel: 'master'
  };

  const recentJobs = [
    { id: '1', title: 'Residential Wiring', client: 'BuildTech', amount: 18000, status: 'in-progress', date: 'Started 2 days ago' },
    { id: '2', title: 'AC Installation', client: 'CoolTech', amount: 27000, status: 'pending-payment', date: 'Completed yesterday' },
  ];

  const recommendedJobs = [
    { id: '1', title: 'Emergency Electrical Repair', company: 'HomeServices', budget: '₹3K-5K', match: 91, urgency: 'Emergency' },
    { id: '2', title: 'Commercial Wiring', company: 'TechPark', budget: '₹25K-30K', match: 95, urgency: 'Urgent' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Welcome back, {userData.name.split(' ')[0]}
          </h1>
          <p className="text-xl text-gray-400">
            Here's what's happening with your gigs today
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Jobs', value: stats.activeJobs, icon: Briefcase, color: 'white', action: () => onNavigate('jobs') },
            { label: 'This Month', value: `₹${(stats.thisMonth / 1000).toFixed(0)}K`, icon: DollarSign, color: 'white', action: () => onNavigate('analytics') },
            { label: 'Trust Score', value: `${stats.trustScore}/100`, icon: Shield, color: 'white', action: () => onNavigate('trust') },
            { label: 'Rating', value: `${stats.rating}★`, icon: Star, color: 'white', action: () => onNavigate('trust') },
          ].map((stat, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={stat.action}
              className="glass glass-hover rounded-2xl p-6 border border-white/5 text-left group transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all`}>
                  <stat.icon className={`w-6 h-6 text-white`} />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-4xl font-bold text-white">{stat.value}</div>
            </motion.button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Jobs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Active Jobs</h2>
              <Button variant="outline" onClick={() => onNavigate('jobs')}>
                View All
              </Button>
            </div>

            {recentJobs.length > 0 ? (
              <div className="space-y-4">
                {recentJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all cursor-pointer"
                    onClick={() => onNavigate('jobs')}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                        <p className="text-gray-400">{job.client}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">₹{job.amount.toLocaleString()}</div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                          job.status === 'in-progress' 
                            ? 'bg-white/10 text-white' 
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {job.status === 'in-progress' ? 'In Progress' : 'Pending Payment'}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{job.date}</div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="glass rounded-2xl p-12 border border-white/5 text-center">
                <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No active jobs</h3>
                <p className="text-gray-400 mb-6">Browse available opportunities to get started</p>
                <Button onClick={() => onNavigate('jobs')}>
                  Find Jobs
                </Button>
              </div>
            )}

            {/* Recommended Jobs */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Recommended for You</h2>
                <Button variant="outline" onClick={() => onNavigate('jobs')}>
                  See More
                </Button>
              </div>

              <div className="space-y-4">
                {recommendedJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all cursor-pointer"
                    onClick={() => onNavigate('jobs')}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          {job.urgency === 'Emergency' && (
                            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30">
                              Emergency
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 mb-3">{job.company}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-white font-semibold">{job.budget}</span>
                          <span className="px-3 py-1 rounded-full bg-white/10 text-white font-semibold">
                            {job.match}% Match
                          </span>
                        </div>
                      </div>
                      <Button size="sm">Apply</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/5 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('jobs')}
                  className="w-full p-4 rounded-xl glass glass-hover border border-white/5 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Browse Jobs</div>
                      <div className="text-xs text-gray-500">Find new opportunities</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('matching')}
                  className="w-full p-4 rounded-xl glass glass-hover border border-white/5 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">AI Matching</div>
                      <div className="text-xs text-gray-500">Get matched to jobs</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('analytics')}
                  className="w-full p-4 rounded-xl glass glass-hover border border-white/5 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">View Earnings</div>
                      <div className="text-xs text-gray-500">Track your income</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('trust')}
                  className="w-full p-4 rounded-xl glass glass-hover border border-white/5 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Trust Score</div>
                      <div className="text-xs text-gray-500">Build credibility</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
                  </div>
                </button>
              </div>

              {/* Verification Status */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Master Verified</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Your profile is verified and trusted by employers
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Verification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}