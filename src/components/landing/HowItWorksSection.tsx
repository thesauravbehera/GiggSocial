import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/Button';

interface HowItWorksSectionProps {}

export function HowItWorksSection({}: HowItWorksSectionProps) {
  const workerSteps = [
    {
      step: '01',
      title: 'Sign Up & Get Verified',
      description: 'Complete our AI-powered quiz and video verification in just 5 minutes. Get your skill certification instantly.',
      icon: Shield,
      color: 'white',
    },
    {
      step: '02',
      title: 'Browse AI-Matched Jobs',
      description: 'Our AI agent analyzes 9 factors to match you with perfect opportunities. See match scores before applying.',
      icon: Zap,
      color: 'white',
    },
    {
      step: '03',
      title: 'Apply & Negotiate',
      description: 'Get AI-powered pricing recommendations. Apply to jobs with confidence knowing your fair market rate.',
      icon: TrendingUp,
      color: 'white',
    },
    {
      step: '04',
      title: 'Work & Build Trust',
      description: 'Complete jobs, earn reviews, and build your trust score. Higher scores = better opportunities.',
      icon: Users,
      color: 'white',
    },
  ];

  const employerSteps = [
    {
      step: '01',
      title: 'Post Your Job',
      description: 'Describe what you need in 2 minutes. Set budget, timeline, and requirements.',
      icon: Shield,
      color: 'white',
    },
    {
      step: '02',
      title: 'Get AI Matches',
      description: 'Instantly see the top verified workers matched to your job with detailed scores.',
      icon: Zap,
      color: 'white',
    },
    {
      step: '03',
      title: 'Review & Hire',
      description: 'Check trust scores, reviews, and past work. Message candidates and hire with confidence.',
      icon: Users,
      color: 'white',
    },
    {
      step: '04',
      title: 'Track & Pay',
      description: 'Monitor progress, resolve disputes with AI assistance, and pay securely when satisfied.',
      icon: TrendingUp,
      color: 'white',
    },
  ];

  const [activeTab, setActiveTab] = React.useState<'worker' | 'employer'>('worker');
  const steps = activeTab === 'worker' ? workerSteps : employerSteps;

  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started in minutes. Our AI handles the complex matching while you focus on work.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="glass rounded-full p-1.5 inline-flex border border-white/10">
            <button
              onClick={() => setActiveTab('worker')}
              className={`px-8 py-3.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'worker'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Workers
            </button>
            <button
              onClick={() => setActiveTab('employer')}
              className={`px-8 py-3.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'employer'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Employers
            </button>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all relative z-10 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-white/10 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6`}>
                  <step.icon className={`w-6 h-6 text-white`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to get started?
          </p>
          <Button size="lg" className="gap-2">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}