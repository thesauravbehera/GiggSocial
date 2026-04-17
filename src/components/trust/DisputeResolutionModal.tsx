import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

interface DisputeResolutionModalProps {
  onClose: () => void;
}

export function DisputeResolutionModal({ onClose }: DisputeResolutionModalProps) {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    evidence: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle dispute submission
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
          className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="glass rounded-3xl p-8 border border-white/10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border border-white/5">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">AI-Powered Resolution</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Raise a Dispute</h2>
                <p className="text-gray-400">
                  Our AI will analyze your case and suggest a fair resolution
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
              {/* Dispute Type */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Dispute Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'payment', label: '💰 Payment Issue' },
                    { value: 'quality', label: '🛠️ Quality Issue' },
                    { value: 'timeline', label: '⏰ Timeline Issue' },
                    { value: 'behavior', label: '🗣️ Behavior Issue' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: type.value })}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        formData.type === type.value
                          ? 'bg-white/10 border-white/20'
                          : 'glass border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-medium text-white">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the issue in detail..."
                  rows={6}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Minimum 50 characters. Be specific about what happened.
                </p>
              </div>

              {/* Evidence Upload */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Evidence (Optional)
                </label>
                <div className="glass rounded-xl p-8 border border-white/5 border-dashed text-center hover:bg-white/5 transition-all cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-300 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Images, PDFs, or chat logs (Max 10MB each, up to 5 files)
                  </p>
                </div>
              </div>

              {/* AI Info */}
              <div className="glass rounded-xl p-6 border border-white/5">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Analysis</h4>
                    <p className="text-sm text-gray-400">
                      Our AI will analyze your dispute, review evidence, and suggest a fair resolution 
                      within 48 hours. Both parties will be notified.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!formData.type || !formData.description || formData.description.length < 50}
                  className="flex-1"
                >
                  Submit Dispute
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
