import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JobsList } from './JobsList';
import { JobDetailsModal } from './JobDetailsModal';
import { ActiveJobsCard } from './ActiveJobsCard';
import { PostJobModal } from './PostJobModal';
import { Briefcase, Plus, Filter, Search } from 'lucide-react';
import { Button } from '../ui/button';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  budget: string;
  type: string;
  urgency: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicants: number;
  matchScore?: number;
  status?: 'available' | 'applied' | 'in-progress' | 'completed';
}

interface JobManagementDashboardProps {
  userRole: 'worker' | 'employer';
}

export function JobManagementDashboard({ userRole }: JobManagementDashboardProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showPostJob, setShowPostJob] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Residential Electrical Wiring',
      company: 'BuildTech Constructions',
      location: 'Andheri West, Mumbai',
      budget: '₹15,000 - ₹20,000',
      type: 'Contract',
      urgency: 'Urgent',
      description: 'Need experienced electrician for complete house wiring of 2BHK apartment. Work includes installation of switches, sockets, DB box, and lighting.',
      requirements: ['Licensed Electrician', '5+ years experience', 'Own tools', 'Available immediately'],
      postedDate: '2 hours ago',
      applicants: 12,
      matchScore: 95,
      status: 'available'
    },
    {
      id: '2',
      title: 'Commercial AC Installation',
      company: 'CoolTech Solutions',
      location: 'BKC, Mumbai',
      budget: '₹25,000 - ₹30,000',
      type: 'Project',
      urgency: 'Normal',
      description: 'Install 5 split AC units in office space. Includes mounting, piping, and electrical connections.',
      requirements: ['AC Installation Expert', 'GST Registered', 'Insurance', '3+ years experience'],
      postedDate: '5 hours ago',
      applicants: 8,
      matchScore: 88,
      status: 'available'
    },
    {
      id: '3',
      title: 'Electrical Maintenance Contract',
      company: 'Skyline Apartments',
      location: 'Powai, Mumbai',
      budget: '₹50,000/month',
      type: 'Full-time',
      urgency: 'Normal',
      description: 'Monthly maintenance contract for residential complex. Handle all electrical repairs and maintenance.',
      requirements: ['Licensed Electrician', 'Society maintenance experience', 'Available 24/7 on call'],
      postedDate: '1 day ago',
      applicants: 23,
      matchScore: 82,
      status: 'applied'
    },
    {
      id: '4',
      title: 'Emergency Electrical Repair',
      company: 'HomeServices India',
      location: 'Malad East, Mumbai',
      budget: '₹3,000 - ₹5,000',
      type: 'Immediate',
      urgency: 'Emergency',
      description: 'Short circuit issue in kitchen. Need immediate assistance.',
      requirements: ['Available now', 'Licensed', 'Experience with residential repairs'],
      postedDate: '30 minutes ago',
      applicants: 4,
      matchScore: 91,
      status: 'available'
    },
  ];

  const activeJobs = mockJobs.filter(job => job.status === 'in-progress' || job.status === 'applied');

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
                <Briefcase className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {userRole === 'worker' ? 'Find Your Next Gig' : 'Manage Your Jobs'}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {userRole === 'worker' ? 'Available Jobs' : 'Job Management'}
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                {userRole === 'worker' 
                  ? 'Browse and apply to verified opportunities matched to your skills'
                  : 'Post jobs, manage applications, and track progress'}
              </p>
            </div>
            
            {userRole === 'employer' && (
              <Button
                onClick={() => setShowPostJob(true)}
                className="gap-2"
              >
                <Plus className="w-5 h-5" />
                Post New Job
              </Button>
            )}
          </div>

          {/* Active Jobs Summary */}
          {userRole === 'worker' && activeJobs.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ActiveJobsCard
                title="Applied"
                count={activeJobs.filter(j => j.status === 'applied').length}
                color="white"
              />
              <ActiveJobsCard
                title="In Progress"
                count={activeJobs.filter(j => j.status === 'in-progress').length}
                color="white"
              />
              <ActiveJobsCard
                title="Completed This Month"
                count={7}
                color="white"
              />
            </div>
          )}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass rounded-2xl p-6 border border-white/5">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs by title, company, or location..."
                  className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              {/* Filter by Type */}
              <div className="flex gap-2">
                {['all', 'urgent', 'contract', 'full-time'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterType(filter)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      filterType === filter
                        ? 'bg-white text-black'
                        : 'glass text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Jobs List */}
        <JobsList
          jobs={mockJobs}
          onSelectJob={setSelectedJob}
          userRole={userRole}
        />
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          userRole={userRole}
        />
      )}

      {/* Post Job Modal */}
      {showPostJob && (
        <PostJobModal onClose={() => setShowPostJob(false)} />
      )}
    </div>
  );
}
