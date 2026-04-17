import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, DollarSign, TrendingUp, Plus, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

interface EmployerDashboardProps {
  userData: any;
  onNavigate: (page: string) => void;
}

export function EmployerDashboard({ userData, onNavigate }: EmployerDashboardProps) {
  const stats = {
    activeJobs: 5,
    totalApplications: 47,
    totalSpent: 450000,
    thisMonth: 125000,
  };

  const activeJobs = [
    { id: '1', title: 'Residential Wiring', applicants: 12, budget: '₹15K-20K', status: 'active', posted: '2 days ago' },
    { id: '2', title: 'AC Installation', applicants: 8, budget: '₹25K-30K', status: 'reviewing', posted: '5 days ago' },
  ];

  const topCandidates = [
    { id: '1', name: 'Rajesh Kumar', match: 95, rating: 4.9, jobs: 127, skills: ['Residential', 'Commercial'] },
    { id: '2', name: 'Amit Patel', match: 88, rating: 4.7, jobs: 94, skills: ['Troubleshooting', 'Wiring'] },
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
            Welcome back, {userData.name}
          </h1>
          <p className="text-xl text-gray-400">
            Manage your jobs and find the perfect workers
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Jobs', value: stats.activeJobs, icon: Briefcase, color: 'white', action: () => onNavigate('jobs') },
            { label: 'Applications', value: stats.totalApplications, icon: Users, color: 'white', action: () => onNavigate('jobs') },
            { label: 'This Month', value: `₹${(stats.thisMonth / 1000).toFixed(0)}K`, icon: DollarSign, color: 'white', action: () => onNavigate('analytics') },
            { label: 'Total Spent', value: `₹${(stats.totalSpent / 1000).toFixed(0)}K`, icon: TrendingUp, color: 'white', action: () => onNavigate('analytics') },
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
              <h2 className="text-3xl font-bold text-white">Your Jobs</h2>
              <Button onClick={() => onNavigate('jobs')} className="gap-2">
                <Plus className="w-5 h-5" />
                Post New Job
              </Button>
            </div>

            <div className="space-y-4">
              {activeJobs.map((job, idx) => (
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
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400">{job.budget}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{job.posted}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{job.applicants}</div>
                      <div className="text-sm text-gray-500">applicants</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                    job.status === 'active' 
                      ? 'bg-white/10 text-white' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {job.status === 'active' ? 'Active' : 'Reviewing Applications'}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Top Candidates */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Top Matches</h2>
                <Button variant="outline" onClick={() => onNavigate('matching')}>
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {topCandidates.map((candidate, idx) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all cursor-pointer"
                    onClick={() => onNavigate('matching')}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{candidate.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{candidate.name}</h3>
                          <div className="flex items-center gap-4 text-sm mb-3">
                            <span className="text-white font-semibold">{candidate.rating}★</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{candidate.jobs} jobs</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {candidate.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-3 py-1 rounded-full bg-white/10 text-white font-semibold text-sm mb-3">
                          {candidate.match}% Match
                        </div>
                        <Button size="sm">View Profile</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
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
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Post Job</div>
                      <div className="text-xs text-gray-500">Find workers</div>
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
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Browse Workers</div>
                      <div className="text-xs text-gray-500">AI-matched profiles</div>
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
                      <div className="font-semibold text-white">View Analytics</div>
                      <div className="text-xs text-gray-500">Track spending</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
                  </div>
                </button>
              </div>

              {/* Platform Tips */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Tips</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Jobs with urgent tags get 3x more applications
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}