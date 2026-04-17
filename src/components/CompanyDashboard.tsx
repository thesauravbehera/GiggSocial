import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Plus, Users, Settings, ArrowLeft, Search, MapPin, Star, Award, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { JobPostingWizard } from './JobPostingWizard';
import { WorkerSearch } from './WorkerSearch';
import { mockJobs, mockWorkers } from '../data/mockData';

interface CompanyDashboardProps {
  userData: any;
  onBack: () => void;
}

export function CompanyDashboard({ userData, onBack }: CompanyDashboardProps) {
  const [activeView, setActiveView] = useState<'dashboard' | 'post-job' | 'search-workers' | 'my-jobs'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                KaamForce
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`text-sm font-medium transition-colors ${
                  activeView === 'dashboard' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveView('search-workers')}
                className={`text-sm font-medium transition-colors ${
                  activeView === 'search-workers' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Find Workers
              </button>
              <button
                onClick={() => setActiveView('my-jobs')}
                className={`text-sm font-medium transition-colors ${
                  activeView === 'my-jobs' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                My Jobs
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveView('post-job')}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Post Job
              </button>
              <div className="text-right hidden md:block">
                <div className="text-sm text-slate-400">Welcome,</div>
                <div className="font-semibold text-white">{userData.companyName}</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                {userData.companyName?.charAt(0) || 'C'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeView === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
              <p className="text-slate-400">Manage your hiring pipeline and find verified talent</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: 'Total Hires', value: '0', color: 'blue', trend: null },
                { icon: Clock, label: 'Active Jobs', value: '0', color: 'orange', trend: null },
                { icon: CheckCircle, label: 'Completed', value: '0', color: 'green', trend: null },
                { icon: DollarSign, label: 'Total Spent', value: '₹0', color: 'purple', trend: null },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setActiveView('post-job')}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500 transition-all text-left"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Post a New Job</h3>
                <p className="text-slate-400">
                  Get AI-powered worker recommendations in seconds
                </p>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setActiveView('search-workers')}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all text-left"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Search Workers</h3>
                <p className="text-slate-400">
                  Browse 10,000+ verified workers across India
                </p>
              </motion.button>
            </div>

            {/* Top Recommended Workers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Top Recommended Workers</h3>
                <button
                  onClick={() => setActiveView('search-workers')}
                  className="text-sm text-orange-400 hover:text-orange-300"
                >
                  View all →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockWorkers.slice(0, 3).map((worker) => (
                  <motion.div
                    key={worker.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {worker.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white flex items-center gap-2">
                            {worker.name}
                            {worker.verified && (
                              <Award className="w-4 h-4 text-yellow-400" />
                            )}
                          </h4>
                          <p className="text-sm text-slate-400">{worker.primarySkill}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Trust Score</span>
                        <span className="text-green-400 font-semibold">{worker.trustScore}/100</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Rating</span>
                        <span className="flex items-center gap-1 text-white">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          {worker.rating} ({worker.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Location</span>
                        <span className="text-white">{worker.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="text-lg font-bold text-green-400">₹{worker.hourlyRate}/hr</div>
                      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                        Contact
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeView === 'post-job' && (
          <JobPostingWizard onComplete={() => setActiveView('my-jobs')} onCancel={() => setActiveView('dashboard')} />
        )}

        {activeView === 'search-workers' && (
          <WorkerSearch />
        )}

        {activeView === 'my-jobs' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">My Jobs</h2>
            
            <div className="bg-slate-800 rounded-xl p-12 border border-slate-700 text-center">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No jobs posted yet</h3>
              <p className="text-slate-400 mb-6">
                Post your first job to start hiring verified talent
              </p>
              <button
                onClick={() => setActiveView('post-job')}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Post Your First Job
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
