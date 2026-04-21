import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Bell, 
  User, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  Clock,
  ChevronRight,
  ArrowUpRight,
  Plus,
  Filter,
  Star
} from 'lucide-react';
import { Button } from '../ui/button';

interface HirerDashboardProps {
  onNavigateToMarketplace: () => void;
}

export function HirerDashboard({ onNavigateToMarketplace }: HirerDashboardProps) {
  const stats = [
    { label: 'Active Requests', value: '5', icon: Briefcase, change: '+2 this week', color: 'text-blue-400' },
    { label: 'Total Spent', value: '₹1.2L', icon: DollarSign, change: '+₹45K this month', color: 'text-green-400' },
    { label: 'Hired Workers', value: '28', icon: Users, change: '12 this month', color: 'text-purple-400' },
    { label: 'Avg Rating', value: '4.8/5', icon: Star, change: 'Excellent', color: 'text-yellow-400' },
  ];

  const activeRequests = [
    {
      title: 'Senior React Developer',
      applications: 12,
      budget: '₹50,000',
      deadline: '3 days left',
      status: 'Reviewing',
      matched: 3,
    },
    {
      title: 'UI/UX Designer',
      applications: 8,
      budget: '₹35,000',
      deadline: '5 days left',
      status: 'Open',
      matched: 2,
    },
    {
      title: 'Content Writer',
      applications: 15,
      budget: '₹15,000',
      deadline: 'Tomorrow',
      status: 'Closing Soon',
      matched: 5,
    },
  ];

  const matchedWorkers = [
    {
      name: 'Priya Sharma',
      skill: 'React Developer',
      trustScore: 95,
      hourlyRate: '₹800/hr',
      matchScore: 98,
      avatar: '👩‍💻',
    },
    {
      name: 'Arjun Patel',
      skill: 'UI/UX Designer',
      trustScore: 92,
      hourlyRate: '₹600/hr',
      matchScore: 95,
      avatar: '👨‍🎨',
    },
    {
      name: 'Sneha Gupta',
      skill: 'Content Writer',
      trustScore: 88,
      hourlyRate: '₹400/hr',
      matchScore: 90,
      avatar: '✍️',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight">
              Gigg<span className="text-white/60">Connect</span>
            </div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" onClick={onNavigateToMarketplace} className="gap-2">
                <Users className="w-4 h-4" />
                Find Workers
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Briefcase className="w-4 h-4" />
                My Requests
              </Button>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  4
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-gray-400">Manage your hiring and track your team's progress.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Active Requests */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Job Requests</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Post New Job
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {activeRequests.map((request, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{request.title}</h3>
                        <p className="text-sm text-gray-400">
                          {request.applications} applications • {request.matched} AI matched
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{request.budget}</div>
                        <div className="text-xs text-gray-400">{request.deadline}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium">
                        {request.status}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Applications
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
              >
                View All Requests
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column - Matched Workers */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">AI Matched Workers</h2>

              <div className="space-y-4">
                {matchedWorkers.map((worker, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{worker.avatar}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-0.5 text-sm">{worker.name}</h3>
                        <p className="text-xs text-gray-400">{worker.skill}</p>
                      </div>
                      <div className="px-2 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-bold">
                        {worker.matchScore}%
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">{worker.trustScore}/100</span>
                      </div>
                      <div className="text-white font-semibold">{worker.hourlyRate}</div>
                    </div>

                    <Button size="sm" className="w-full">
                      View Profile
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={onNavigateToMarketplace}
              >
                Browse All Workers
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Workers
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}