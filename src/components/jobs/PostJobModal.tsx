import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MapPin, DollarSign, Clock, Upload } from 'lucide-react';
import { Button } from '../ui/button';

interface PostJobModalProps {
  onClose: () => void;
}

export function PostJobModal({ onClose }: PostJobModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    budgetMin: '',
    budgetMax: '',
    type: '',
    urgency: 'Normal',
    description: '',
    requirements: [''],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle job posting
    console.log(formData);
    onClose();
  };

  const addRequirement = () => {
    setFormData({
      ...formData,
      requirements: [...formData.requirements, '']
    });
  };

  const updateRequirement = (index: number, value: string) => {
    const newReqs = [...formData.requirements];
    newReqs[index] = value;
    setFormData({ ...formData, requirements: newReqs });
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
          className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="glass rounded-3xl p-8 border border-white/10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border border-white/5">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">AI-Powered Matching</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Post a New Job</h2>
                <p className="text-gray-400">
                  Our AI will match your job with the best verified workers
                </p>
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Residential Electrical Wiring"
                  className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              {/* Category & Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="">Select category</option>
                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="painter">Painter</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Andheri West, Mumbai"
                    className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Budget Range *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.budgetMin}
                    onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                    placeholder="Min: ₹10,000"
                    className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <input
                    type="text"
                    value={formData.budgetMax}
                    onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                    placeholder="Max: ₹15,000"
                    className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>

              {/* Job Type & Urgency */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Job Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="">Select type</option>
                    <option value="Contract">Contract</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Project">Project</option>
                    <option value="Immediate">Immediate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Urgency *
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Job Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the job in detail..."
                  rows={6}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Requirements *
                </label>
                <div className="space-y-3">
                  {formData.requirements.map((req, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={req}
                      onChange={(e) => updateRequirement(idx, e.target.value)}
                      placeholder={`Requirement ${idx + 1}`}
                      className="w-full h-12 px-4 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    + Add Another Requirement
                  </button>
                </div>
              </div>

              {/* AI Info */}
              <div className="glass rounded-xl p-6 border border-white/5">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Matching</h4>
                    <p className="text-sm text-gray-400">
                      Your job will be analyzed by our AI and matched with workers based on 
                      skills, location, ratings, and availability. You'll receive qualified 
                      applications within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={!formData.title || !formData.category || !formData.location}
                  className="flex-1"
                >
                  Post Job
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
