import React from 'react';
import { motion } from 'motion/react';
import { MapPin, DollarSign, Clock, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  budget: string;
  type: string;
  urgency: string;
  postedDate: string;
  applicants: number;
  matchScore?: number;
  status?: 'available' | 'applied' | 'in-progress' | 'completed';
}

interface JobsListProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  userRole: 'worker' | 'employer';
}

export function JobsList({ jobs, onSelectJob, userRole }: JobsListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job, idx) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          onClick={() => onSelectJob(job)}
          className="glass glass-hover rounded-2xl p-6 border border-white/5 cursor-pointer group transition-all"
        >
          <div className="flex items-start justify-between gap-6">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                {/* Company Logo */}
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-all">
                  <span className="text-2xl font-bold text-white">
                    {job.company.charAt(0)}
                  </span>
                </div>

                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 font-medium">{job.company}</p>
                    </div>
                    
                    {/* Match Score (Worker only) */}
                    {userRole === 'worker' && job.matchScore && (
                      <div className="glass rounded-full px-4 py-2 border border-white/5">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-white" />
                          <span className="text-sm font-bold text-white">{job.matchScore}% Match</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-semibold text-white">{job.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{job.applicants} applicants</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      job.urgency === 'Emergency' || job.urgency === 'Urgent'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-white/5 text-gray-300 border border-white/5'
                    }`}>
                      {job.urgency === 'Emergency' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                      {job.urgency}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/5">
                      {job.type}
                    </span>
                    {job.status && job.status !== 'available' && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.status === 'applied' 
                          ? 'bg-white/10 text-white border border-white/20'
                          : job.status === 'in-progress'
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'bg-white/5 text-gray-400 border border-white/5'
                      }`}>
                        {job.status === 'applied' ? '✓ Applied' : 
                         job.status === 'in-progress' ? '⚡ In Progress' : 
                         '✓ Completed'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="flex flex-col items-end gap-3">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectJob(job);
                }}
                variant={job.status === 'applied' ? 'outline' : 'default'}
                size="sm"
              >
                {job.status === 'applied' ? 'View Application' : 
                 job.status === 'in-progress' ? 'View Details' : 
                 userRole === 'worker' ? 'View & Apply' : 'View Applications'}
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
