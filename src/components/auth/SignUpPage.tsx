import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface SignUpPageProps {
  onSignUp: (role: 'worker' | 'hirer') => void;
  onBack: () => void;
  onSignIn: () => void;
}

export function SignUpPage({ onSignUp, onBack, onSignIn }: SignUpPageProps) {
  const [step, setStep] = React.useState<'role' | 'details'>('role');
  const [selectedRole, setSelectedRole] = React.useState<'worker' | 'hirer' | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    skills: '',
    experience: '',
  });

  const handleRoleSelect = (role: 'worker' | 'hirer') => {
    setSelectedRole(role);
    setStep('details');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && formData.name && formData.email && formData.phone && formData.city) {
      onSignUp(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-clash">
            Start Your Journey
          </h1>
          <p className="text-xl text-gray-400">
            Choose your path to work without boundaries
          </p>
        </motion.div>

        {step === 'role' ? (
          /* Role Selection */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 font-clash">I want to...</h2>
              <p className="text-gray-400">Choose your role to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Worker Card */}
              <button
                onClick={() => handleRoleSelect('worker')}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-clash">Gig Worker</h3>
                <p className="text-gray-400 mb-6">
                  Offer your services and get hired for gigs
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    Create service listings
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    Get verified by AI
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    Build your portfolio
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Join as Gig Worker
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

              {/* Hirer Card */}
              <button
                onClick={() => handleRoleSelect('hirer')}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-clash">Hirer</h3>
                <p className="text-gray-400 mb-6">
                  Find and hire skilled gig workers for your needs
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    Post job requests
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    Browse verified workers
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    AI-matched talent
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Join as Hirer
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={onBack}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </motion.div>
        ) : (
          /* Details Form */
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <button
              onClick={() => setStep('role')}
              className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-all"
            >
              ← Back
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              {selectedRole === 'worker' ? 'Worker Details' : 'Hirer Details'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
                  placeholder="Mumbai, Delhi, Bangalore..."
                />
              </div>

              {selectedRole === 'worker' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Skills *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
                      placeholder="Web Design, Logo Design, Development..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Experience *
                    </label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/30 focus:outline-none transition-all"
                    >
                      <option value="" className="bg-black">Select experience</option>
                      <option value="0-2 years" className="bg-black">0-2 years</option>
                      <option value="2-5 years" className="bg-black">2-5 years</option>
                      <option value="5-10 years" className="bg-black">5-10 years</option>
                      <option value="10+ years" className="bg-black">10+ years</option>
                    </select>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full gap-2" size="lg">
                Create Account
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        )}

        {/* Sign In Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              onClick={onSignIn}
              className="text-white hover:text-gray-300 font-semibold transition-colors"
            >
              Sign In
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
