import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Zap, Star, TrendingUp } from 'lucide-react';
import { skillCategories } from '../data/skills';

interface WorkerOnboardingProps {
  onComplete: (data: any) => void;
}

export function WorkerOnboarding({ onComplete }: WorkerOnboardingProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    skills: [] as string[],
    experience: '',
    description: '',
    expectedRate: ''
  });

  const totalSteps = 5;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 0: return true; // Welcome screen
      case 1: return formData.name && formData.phone && formData.city;
      case 2: return formData.skills.length > 0;
      case 3: return formData.experience;
      case 4: return formData.expectedRate;
      default: return false;
    }
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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Step {step + 1} of {totalSteps}</span>
            <span className="text-sm text-blue-400">{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
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
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 min-h-[500px] flex flex-col"
          >
            {step === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6"
                >
                  <Zap className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">Welcome to KaamForce!</h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                  You're 5 minutes away from accessing verified gigs with fair pricing
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-8">
                  {[
                    { icon: Check, title: 'Get Verified', desc: 'Quick skill verification' },
                    { icon: Star, title: 'Build Trust', desc: 'Earn trust score & badges' },
                    { icon: TrendingUp, title: 'Earn More', desc: 'Premium gigs, fair prices' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-slate-700/50 rounded-xl p-4"
                    >
                      <item.icon className="w-8 h-8 text-blue-400 mb-2" />
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Personal Information</h2>
                <p className="text-slate-400 mb-8">Let's start with the basics</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="e.g., Raj Kumar"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">City *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      placeholder="e.g., Mumbai"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-1">We'll show you gigs in your area</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Your Skills</h2>
                <p className="text-slate-400 mb-8">Select the skills you want to offer (choose at least one)</p>
                
                <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-white mb-3 capitalize">{category.replace('-', ' ')}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skills.map((skill) => (
                          <button
                            key={skill.id}
                            onClick={() => toggleSkill(skill.id)}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${
                              formData.skills.includes(skill.id)
                                ? 'border-blue-500 bg-blue-500/20'
                                : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                            }`}
                          >
                            <div className="text-2xl mb-2">{skill.icon}</div>
                            <div className="font-medium text-white text-sm">{skill.name}</div>
                            <div className="text-xs text-slate-400 mt-1">Avg: ₹{skill.avgRate}/hr</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
                <p className="text-slate-400 mb-8">Tell us about your background</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Years of Experience *</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => updateFormData('experience', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Brief Description <span className="text-slate-500">(Optional)</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      placeholder="Tell companies about your experience, notable projects, certifications, etc."
                      rows={6}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Expected Rate</h2>
                <p className="text-slate-400 mb-8">What's your hourly rate?</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Hourly Rate (₹) *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                      <input
                        type="number"
                        value={formData.expectedRate}
                        onChange={(e) => updateFormData('expectedRate', e.target.value)}
                        placeholder="500"
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-8 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    {formData.skills.length > 0 && (
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                        <p className="text-sm text-blue-400 mb-2">💡 Market Reference:</p>
                        <div className="space-y-1 text-sm text-slate-300">
                          {formData.skills.slice(0, 3).map(skillId => {
                            const skill = Object.values(skillCategories)
                              .flat()
                              .find(s => s.id === skillId);
                            return skill ? (
                              <div key={skillId}>
                                {skill.name}: ₹{skill.avgRate}/hr average
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl">
                    <h3 className="font-semibold text-white mb-2">🎉 Almost Done!</h3>
                    <p className="text-sm text-slate-300">
                      After completing this, you'll be able to take a quick skill verification quiz to unlock premium gigs!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
              
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {step === totalSteps - 1 ? 'Complete' : 'Continue'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
