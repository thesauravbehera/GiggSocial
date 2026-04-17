import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../ui/button';

interface PricingSectionProps {
  onGetStarted: () => void;
}

export function PricingSection({ onGetStarted }: PricingSectionProps) {
  const plans = [
    {
      name: 'Worker',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for skilled workers looking for gigs',
      features: [
        'AI skill verification',
        'Unlimited job applications',
        'AI-matched opportunities',
        'Trust score & reviews',
        'Direct messaging',
        'Mobile app access',
        'AI pricing recommendations',
        'Dispute resolution',
      ],
      cta: 'Start as Worker',
      popular: false,
    },
    {
      name: 'Employer',
      price: '₹499',
      period: 'Per job post',
      description: 'For businesses hiring skilled workers',
      features: [
        'Post unlimited jobs',
        'AI worker matching',
        'Verified profiles only',
        'Trust score insights',
        'Priority support',
        'Analytics dashboard',
        'Bulk hiring tools',
        'Dispute resolution',
      ],
      cta: 'Start as Employer',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large organizations with high volume',
      features: [
        'Everything in Employer',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'White-label option',
        'SLA guarantee',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

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
            <span className="text-sm font-semibold text-white">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Free for workers, pay-per-post for employers.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className={`glass rounded-2xl p-8 border transition-all h-full flex flex-col ${
                plan.popular
                  ? 'border-white/30 bg-white/5 scale-105'
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={onGetStarted}
                  variant={plan.popular ? 'default' : 'outline'}
                  className="w-full gap-2"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-white">
                Platform Fee
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              KaamForce charges a 2% platform fee on completed transactions. This fee covers payment processing,
              dispute resolution, trust scoring, and platform maintenance. Workers receive 98% of their earnings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}