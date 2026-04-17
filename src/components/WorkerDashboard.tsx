import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, DollarSign, User, Search, MapPin, Clock, Star, TrendingUp, Award, ArrowLeft } from 'lucide-react';
import { mockJobs } from '../data/mockData';
import { skillCategories } from '../data/skills';

interface WorkerDashboardProps {
  userData: any;
  onBack: () => void;
}

export function WorkerDashboard({ userData, onBack }: WorkerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'gigs' | 'earnings' | 'profile'>('home');

  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'gigs' as const, icon: Briefcase, label: 'Gigs' },
    { id: 'earnings' as const, icon: DollarSign, label: 'Earnings' },
    { id: 'profile' as const, icon: User, label: 'Profile' },
  ];

  const trustScore = 72; // Mock trust score
  const profileCompleteness = 65; // Mock profile completeness

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                KaamForce
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-400">Welcome back,</div>
                <div className="font-semibold text-white">{userData.name}</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Trust Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Trust Score</h2>
                  <p className="text-slate-400">Your credibility on the platform</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-blue-400">{trustScore}</div>
                  <div className="text-sm text-slate-400">Good</div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Verification', score: 0, total: 100, color: 'red' },
                  { label: 'Profile Complete', score: profileCompleteness, total: 100, color: 'yellow' },
                  { label: 'Activity', score: 45, total: 100, color: 'blue' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-slate-400">{item.score}/{item.total}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.score}%` }}
                        className={`h-full bg-gradient-to-r ${
                          item.color === 'red' ? 'from-red-500 to-red-600' :
                          item.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                          'from-blue-500 to-blue-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <p className="text-sm text-blue-400 font-medium mb-2">🚀 Next Steps to Boost Score:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Take skill verification quiz (+40 points)</li>
                  <li>• Complete your profile (+35 points)</li>
                  <li>• Get your first gig (+20 points)</li>
                </ul>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Briefcase, label: 'Gigs Applied', value: '0', color: 'blue' },
                { icon: Star, label: 'Rating', value: 'New', color: 'yellow' },
                { icon: DollarSign, label: 'Earnings', value: '₹0', color: 'green' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Recommended Gigs */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Recommended Gigs</h2>
                <button
                  onClick={() => setActiveTab('gigs')}
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  View all
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockJobs.slice(0, 4).filter(job => 
                  job.skills.some(skill => userData.skills?.includes(skill))
                ).map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{job.title}</h3>
                        <p className="text-sm text-slate-400">{job.company}</p>
                      </div>
                      {job.urgent && (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-md">
                          Urgent
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.postedAgo}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-green-400">
                        ₹{job.budget.min} - ₹{job.budget.max}/hr
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gigs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Available Gigs</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search gigs..."
                    className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {mockJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-md font-medium">
                            URGENT
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">
                        ₹{job.budget.min}-{job.budget.max}
                      </div>
                      <div className="text-sm text-slate-400">per hour</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skillId) => {
                      const skill = Object.values(skillCategories)
                        .flat()
                        .find(s => s.id === skillId);
                      return skill ? (
                        <span
                          key={skillId}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {skill.icon} {skill.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Posted {job.postedAgo}
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Earnings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Total Earnings', value: '₹0', icon: DollarSign, color: 'green' },
                { label: 'This Month', value: '₹0', icon: TrendingUp, color: 'blue' },
                { label: 'Pending', value: '₹0', icon: Clock, color: 'yellow' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
              <Award className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No earnings yet</h3>
              <p className="text-slate-400 mb-6">
                Complete your first gig to start earning!
              </p>
              <button
                onClick={() => setActiveTab('gigs')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Browse Available Gigs
              </button>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Your Profile</h2>
            
            {/* Profile Completeness */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Profile Completeness</h3>
                <span className="text-2xl font-bold text-blue-400">{profileCompleteness}%</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden mb-4">
                <div
                  style={{ width: `${profileCompleteness}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  Basic Information
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  Skills Added
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">○</span>
                  </div>
                  Skill Verification (Take Quiz)
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">○</span>
                  </div>
                  Profile Photo
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">○</span>
                  </div>
                  Portfolio/Work Samples
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Name</div>
                  <div className="text-white font-medium">{userData.name}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Phone</div>
                  <div className="text-white font-medium">{userData.phone}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">City</div>
                  <div className="text-white font-medium">{userData.city}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Experience</div>
                  <div className="text-white font-medium">{userData.experience}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Expected Rate</div>
                  <div className="text-white font-medium">₹{userData.expectedRate}/hour</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {userData.skills?.map((skillId: string) => {
                  const skill = Object.values(skillCategories)
                    .flat()
                    .find(s => s.id === skillId);
                  return skill ? (
                    <div
                      key={skillId}
                      className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600"
                    >
                      <span className="text-xl mr-2">{skill.icon}</span>
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="ml-2 text-xs text-red-400">Not Verified</span>
                    </div>
                  ) : null;
                })}
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                Take Verification Quiz
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
