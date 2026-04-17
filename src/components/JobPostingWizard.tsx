import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, MapPin, DollarSign, Clock, Zap, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skills';

interface JobPostingWizardProps {
  onComplete: () => void;
  onCancel: () => void;
}

export function JobPostingWizard({ onComplete, onCancel }: JobPostingWizardProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    skills: [] as string[],
    location: '',
    locationType: 'onsite',
    budgetMin: '',
    budgetMax: '',
    budgetType: 'hourly',
    timeline: '',
    duration: '',
    urgency: 'normal'
  });

  const totalSteps = 6;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const toggleSkill = (skillId: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(s => s !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">Step {step + 1} of {totalSteps}</span>
          <span className="text-sm text-orange-400">{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
          />
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 min-h-[500px]"
        >
          {step === 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Job Basics</h2>
              <p className="text-slate-400 mb-8">What kind of work do you need done?</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Job Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    placeholder="e.g., Residential Wiring Installation"
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => updateFormData('category', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select category</option>
                    <option value="blue-collar">Blue Collar (Home Services, Repair)</option>
                    <option value="white-collar">White Collar (Admin, Support)</option>
                    <option value="creative">Creative (Design, Content)</option>
                    <option value="technical">Technical (Development, IT)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Job Description</h2>
              <p className="text-slate-400 mb-8">Provide details about what needs to be done</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-slate-300">Description *</label>
                    <button className="flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs hover:bg-purple-500/30 transition-colors">
                      <Sparkles className="w-3 h-3" />
                      AI Improve
                    </button>
                  </div>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData('description', e.target.value)}
                    placeholder="Describe the work in detail. What needs to be done? Any specific requirements or preferences?"
                    rows={8}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Tip: Be specific about requirements, timeline, and expected deliverables
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Skills Required</h2>
              <p className="text-slate-400 mb-8">Select the skills needed for this job</p>
              
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {formData.category && skillCategories[formData.category as keyof typeof skillCategories] ? (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skillCategories[formData.category as keyof typeof skillCategories].map((skill) => (
                        <button
                          key={skill.id}
                          onClick={() => toggleSkill(skill.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.skills.includes(skill.id)
                              ? 'border-orange-500 bg-orange-500/20'
                              : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                          }`}
                        >
                          <div className="text-2xl mb-2">{skill.icon}</div>
                          <div className="font-medium text-white text-sm">{skill.name}</div>
                          <div className="text-xs text-slate-400 mt-1">₹{skill.avgRate}/hr avg</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400">Please select a category first</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Location</h2>
              <p className="text-slate-400 mb-8">Where will the work be performed?</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Work Type *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'onsite', label: 'On-site', icon: MapPin },
                      { value: 'remote', label: 'Remote', icon: Zap },
                      { value: 'hybrid', label: 'Hybrid', icon: Clock },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => updateFormData('locationType', type.value)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.locationType === type.value
                            ? 'border-orange-500 bg-orange-500/20'
                            : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                        }`}
                      >
                        <type.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <div className="text-sm font-medium text-white">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {formData.locationType !== 'remote' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Address *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData('location', e.target.value)}
                      placeholder="e.g., Andheri West, Mumbai"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Budget</h2>
              <p className="text-slate-400 mb-8">Set your budget range</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Budget Type *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'hourly', label: 'Hourly Rate' },
                      { value: 'fixed', label: 'Fixed Price' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => updateFormData('budgetType', type.value)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.budgetType === type.value
                            ? 'border-orange-500 bg-orange-500/20'
                            : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                        }`}
                      >
                        <DollarSign className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <div className="text-sm font-medium text-white">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Minimum (₹) *
                    </label>
                    <input
                      type="number"
                      value={formData.budgetMin}
                      onChange={(e) => updateFormData('budgetMin', e.target.value)}
                      placeholder="500"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Maximum (₹) *
                    </label>
                    <input
                      type="number"
                      value={formData.budgetMax}
                      onChange={(e) => updateFormData('budgetMax', e.target.value)}
                      placeholder="800"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {formData.skills.length > 0 && (
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <p className="text-sm text-blue-400 mb-2">💡 Market Reference:</p>
                    <div className="text-sm text-slate-300">
                      {formData.skills.slice(0, 1).map(skillId => {
                        const skill = Object.values(skillCategories)
                          .flat()
                          .find(s => s.id === skillId);
                        return skill ? (
                          <div key={skillId}>
                            Market average for {skill.name}: ₹{skill.avgRate}/hr
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Timeline & Urgency</h2>
              <p className="text-slate-400 mb-8">When do you need this done?</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Start Date *</label>
                  <input
                    type="date"
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Estimated Duration *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => updateFormData('duration', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select duration</option>
                    <option value="few-hours">Few hours</option>
                    <option value="1-day">1 day</option>
                    <option value="2-3-days">2-3 days</option>
                    <option value="1-week">1 week</option>
                    <option value="2-weeks">2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="long-term">Long-term</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Urgency Level *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'urgent', label: 'Urgent', sublabel: '24 hours', color: 'red' },
                      { value: 'normal', label: 'Normal', sublabel: '3-7 days', color: 'blue' },
                      { value: 'flexible', label: 'Flexible', sublabel: '2+ weeks', color: 'green' },
                    ].map((level) => (
                      <button
                        key={level.value}
                        onClick={() => updateFormData('urgency', level.value)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.urgency === level.value
                            ? 'border-orange-500 bg-orange-500/20'
                            : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                        }`}
                      >
                        <div className="font-medium text-white mb-1">{level.label}</div>
                        <div className="text-xs text-slate-400">{level.sublabel}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/30 rounded-xl mt-8">
                  <h3 className="font-semibold text-white mb-2">🎉 Ready to Post!</h3>
                  <p className="text-sm text-slate-300">
                    Your job will be reviewed by our AI matching engine and shown to the best-matched workers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
            <button
              onClick={step === 0 ? onCancel : prevStep}
              className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              {step === 0 ? 'Cancel' : 'Back'}
            </button>
            
            <button
              onClick={nextStep}
              disabled={!formData.title && step === 0}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {step === totalSteps - 1 ? 'Post Job' : 'Continue'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
