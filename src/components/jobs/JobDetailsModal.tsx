import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, DollarSign, Clock, Users, TrendingUp, CheckCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';

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

interface JobDetailsModalProps {
  job: Job;
  onClose: () => void;
  userRole: 'worker' | 'employer';
}

export function JobDetailsModal({ job, onClose, userRole }: JobDetailsModalProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [proposedBudget, setProposedBudget] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [timeline, setTimeline] = useState('');

  const handleApply = () => {
    // Handle application submission
    console.log({ proposedBudget, coverLetter, timeline });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="glass rounded-3xl p-8 border border-white/10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{job.title}</h2>
                    <p className="text-gray-400 text-lg">{job.company}</p>
                  </div>
                </div>
                
                {/* Match Score */}
                {userRole === 'worker' && job.matchScore && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-sm font-bold text-white">{job.matchScore}% Match Score</span>
                  </div>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Meta Info */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 border border-white/5">
                <MapPin className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-sm text-gray-400 mb-1">Location</div>
                <div className="font-semibold text-white">{job.location}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <DollarSign className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-sm text-gray-400 mb-1">Budget</div>
                <div className="font-semibold text-white">{job.budget}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <Clock className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-sm text-gray-400 mb-1">Posted</div>
                <div className="font-semibold text-white">{job.postedDate}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/5">
                <Users className="w-5 h-5 text-gray-400 mb-2" />
                <div className="text-sm text-gray-400 mb-1">Applicants</div>
                <div className="font-semibold text-white">{job.applicants}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Job Description</h3>
              <div className="glass rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
              <div className="glass rounded-xl p-6 border border-white/5">
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form (Worker only) */}
            {userRole === 'worker' && !job.status && (
              <>
                {!showApplicationForm ? (
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setShowApplicationForm(true)}
                      className="flex-1 py-4 text-lg"
                    >
                      Apply for This Job
                    </Button>
                    <Button variant="outline" className="px-8">
                      Save for Later
                    </Button>
                  </div>
                ) : (
                  <div className="glass rounded-2xl p-6 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6">Application Details</h3>
                    
                    <div className="space-y-6">
                      {/* Proposed Budget */}
                      <div>
                        <label className="block text-sm font-medium text-white mb-3">
                          Proposed Budget *
                        </label>
                        <input
                          type="text"
                          value={proposedBudget}
                          onChange={(e) => setProposedBudget(e.target.value)}
                          placeholder="₹15,000"
                          className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-sm font-medium text-white mb-3">
                          Estimated Timeline *
                        </label>
                        <input
                          type="text"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          placeholder="3-5 days"
                          className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>

                      {/* Cover Letter */}
                      <div>
                        <label className="block text-sm font-medium text-white mb-3">
                          Cover Letter *
                        </label>
                        <textarea
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          placeholder="Explain why you're the best fit for this job..."
                          rows={6}
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                        />
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        <Button
                          onClick={handleApply}
                          disabled={!proposedBudget || !timeline || !coverLetter}
                          className="flex-1 gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Submit Application
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowApplicationForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Already Applied Status */}
            {job.status === 'applied' && (
              <div className="glass rounded-2xl p-6 border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Application Submitted</h3>
                    <p className="text-sm text-gray-400">Your application is under review</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
