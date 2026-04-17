import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Building2, Target, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/skills';

interface CompanyOnboardingProps {
  onComplete: (data: any) => void;
}

export function CompanyOnboarding({ onComplete }: CompanyOnboardingProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    teamSize: '',
    gst: '',
    contactName: '',
    email: '',
    phone: '',
    skillsNeeded: [] as string[],
    frequency: '',
    budget: ''
  });

  const totalSteps = 4;

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
      case 0: return true;
      case 1: return formData.companyName && formData.industry && formData.teamSize && formData.contactName && formData.email && formData.phone;
      case 2: return formData.skillsNeeded.length > 0;
      case 3: return formData.frequency && formData.budget;
      default: return false;
    }
  };

  const toggleSkill = (skillId: string) => {
    setFormData(prev => ({
      ...prev,
      skillsNeeded: prev.skillsNeeded.includes(skillId)
        ? prev.skillsNeeded.filter(s => s !== skillId)
        : [...prev.skillsNeeded, skillId]
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Step {step + 1} of {totalSteps}</span>
            <span className="text-sm text-orange-400">{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 min-h-[500px] flex flex-col"
          >
            {step === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6"
                >
                  <Building2 className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">Welcome to KaamForce!</h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                  Hire verified talent in 24 hours with AI-powered matching
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-8">
                  {[
                    { icon: CheckCircle, title: 'Verified Workers', desc: 'AI-verified skills only' },
                    { icon: Target, title: 'Smart Matching', desc: 'Find perfect fit instantly' },
                    { icon: Building2, title: 'Fair Pricing', desc: 'Transparent, market-driven' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-slate-700/50 rounded-xl p-4"
                    >
                      <item.icon className="w-8 h-8 text-orange-400 mb-2" />
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Company Details</h2>
                <p className="text-slate-400 mb-8">Tell us about your company</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      placeholder="e.g., Tech Solutions Pvt Ltd"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Industry *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => updateFormData('industry', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="retail">Retail</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Team Size *</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => updateFormData('teamSize', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      GST Number <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.gst}
                      onChange={(e) => updateFormData('gst', e.target.value)}
                      placeholder="22AAAAA0000A1Z5"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="md:col-span-2 border-t border-slate-700 pt-6 mt-2">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Person</h3>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateFormData('contactName', e.target.value)}
                      placeholder="e.g., Priya Sharma"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="priya@company.com"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Hiring Needs</h2>
                <p className="text-slate-400 mb-8">Which skills do you typically need?</p>
                
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
                              formData.skillsNeeded.includes(skill.id)
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
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Budget & Frequency</h2>
                <p className="text-slate-400 mb-8">Help us understand your hiring patterns</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">How often do you hire? *</label>
                    <select
                      value={formData.frequency}
                      onChange={(e) => updateFormData('frequency', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select frequency</option>
                      <option value="weekly">Weekly (High frequency)</option>
                      <option value="monthly">Monthly (Regular needs)</option>
                      <option value="quarterly">Quarterly (Occasional)</option>
                      <option value="as-needed">As needed (Project-based)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Typical Budget Range *</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000/month</option>
                      <option value="10k-50k">₹10,000 - ₹50,000/month</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000/month</option>
                      <option value="1l-5l">₹1,00,000 - ₹5,00,000/month</option>
                      <option value="5l+">₹5,00,000+/month</option>
                    </select>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/30 rounded-xl mt-8">
                    <h3 className="font-semibold text-white mb-2">🎉 All Set!</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      You're ready to start hiring verified talent. Here's what happens next:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Post your first job and get AI-powered worker recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Review verified profiles with trust scores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Hire with confidence using our secure payment system</span>
                      </li>
                    </ul>
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
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {step === totalSteps - 1 ? 'Complete Setup' : 'Continue'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
