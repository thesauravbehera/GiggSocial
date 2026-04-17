import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  User, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Star, 
  Clock,
  ChevronRight,
  ArrowUpRight,
  Target,
  Zap,
  Shield,
  X,
  Plus
} from 'lucide-react';
import { Button } from '../ui/button';

interface WorkerDashboardProps {
  onNavigateToMarketplace: () => void;
  onNavigateToVerification?: () => void;
  isVerified?: boolean;
}

export function WorkerDashboard({ 
  onNavigateToMarketplace, 
  onNavigateToVerification, 
  isVerified = false 
}: WorkerDashboardProps) {
  const [showVerificationBanner, setShowVerificationBanner] = useState(!isVerified);

  const stats = [
    { label: 'Active Gigs', value: '3', icon: Briefcase, change: '+2 this week', color: 'text-blue-400' },
    { label: 'Total Earnings', value: '₹45,000', icon: DollarSign, change: '+₹12K this month', color: 'text-green-400' },
    { label: 'Trust Score', value: isVerified ? '95/100' : '0/100', icon: Shield, change: isVerified ? 'Excellent' : 'Not Verified', color: 'text-purple-400' },
    { label: 'Completion Rate', value: '98%', icon: Star, change: '47/48 completed', color: 'text-yellow-400' },
  ];

  const recentGigs = [
    {
      title: 'Logo Design for Startup',
      client: 'TechCo',
      price: '₹5,000',
      deadline: '2 days left',
      status: 'In Progress',
      progress: 60,
    },
    {
      title: 'Website Development',
      client: 'ShopEasy',
      price: '₹25,000',
      deadline: '5 days left',
      status: 'In Progress',
      progress: 30,
    },
    {
      title: 'Mobile App UI Design',
      client: 'FitLife',
      price: '₹15,000',
      deadline: 'Tomorrow',
      status: 'Review',
      progress: 90,
    },
  ];

  const recommendedGigs = [
    {
      title: 'E-commerce Website Design',
      category: 'Web Design',
      budget: '₹30,000 - ₹50,000',
      matchScore: 95,
    },
    {
      title: 'Brand Identity Package',
      category: 'Design',
      budget: '₹20,000 - ₹35,000',
      matchScore: 88,
    },
    {
      title: 'React Dashboard Development',
      category: 'Development',
      budget: '₹40,000 - ₹60,000',
      matchScore: 92,
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
              saurv<span className="text-white/60">.ai</span>
            </div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" onClick={onNavigateToMarketplace} className="gap-2">
                <Briefcase className="w-4 h-4" />
                Browse Gigs
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Target className="w-4 h-4" />
                My Services
              </Button>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  5
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
        {/* Verification Banner - Show if not verified */}
        {showVerificationBanner && !isVerified && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 glass rounded-2xl p-6 border border-yellow-500/30 bg-yellow-500/5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Complete Verification to Unlock All Features
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Verify your identity with Aadhaar to apply for gigs, create service listings, and build trust with hirers. Takes only 5 minutes.
                </p>
                <div className="flex gap-3">
                  <Button 
                    onClick={onNavigateToVerification}
                    className="bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Get Verified Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
              <button 
                onClick={() => setShowVerificationBanner(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Raj! 👋</h1>
          <p className="text-gray-400">Here's what's happening with your gigs today.</p>
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
          {/* Left Column - Active Gigs */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Gigs</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {recentGigs.map((gig, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{gig.title}</h3>
                        <p className="text-sm text-gray-400">{gig.client}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{gig.price}</div>
                        <div className="text-xs text-gray-400">{gig.deadline}</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-semibold">{gig.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                          style={{ width: `${gig.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium">
                        {gig.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recommended Gigs */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>

              <div className="space-y-4">
                {recommendedGigs.map((gig, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 text-sm">{gig.title}</h3>
                        <p className="text-xs text-gray-400">{gig.category}</p>
                      </div>
                      <div className="ml-3">
                        <div className="px-2 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-bold">
                          {gig.matchScore}%
                        </div>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-white mb-3">{gig.budget}</div>

                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={isVerified ? onNavigateToMarketplace : onNavigateToVerification}
                    >
                      {isVerified ? 'View Details' : '🔒 Verify to Apply'}
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
                Browse All Gigs
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Service Listing
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Client
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