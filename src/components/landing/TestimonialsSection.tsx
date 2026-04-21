import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Electrician, Mumbai',
      avatar: 'R',
      rating: 5,
      text: 'Gigg Connect changed my life. The AI matching finds me the perfect jobs, and I\'ve doubled my income in just 3 months. The trust score really helps me stand out.',
      stats: { jobs: 127, earnings: '₹8.5L' },
    },
    {
      name: 'Priya Sharma',
      role: 'Construction Manager',
      avatar: 'P',
      rating: 5,
      text: 'Finally, a platform that actually verifies workers! We hired 15 people through Gigg Connect and every single one was skilled and reliable. The AI matching is incredible.',
      stats: { hires: 15, saved: '40hrs' },
    },
    {
      name: 'Amit Patel',
      role: 'Plumber, Delhi',
      avatar: 'A',
      rating: 5,
      text: 'The AI quiz was challenging but fair. Getting verified opened so many doors. Employers trust me more, and I can charge better rates. Best decision I made!',
      stats: { jobs: 94, earnings: '₹6.2L' },
    },
    {
      name: 'Sneha Reddy',
      role: 'Facility Manager',
      avatar: 'S',
      rating: 5,
      text: 'We post 20+ jobs monthly. Gigg Connect saves us hours of screening. The trust scores and AI recommendations are spot-on. Our hiring time went from weeks to days.',
      stats: { hires: 50, saved: '120hrs' },
    },
    {
      name: 'Vijay Singh',
      role: 'Carpenter, Bangalore',
      avatar: 'V',
      rating: 5,
      text: 'I was skeptical about AI at first, but the pricing recommendations helped me earn 30% more. The platform is easy to use, and payment is always on time.',
      stats: { jobs: 156, earnings: '₹12L' },
    },
    {
      name: 'Anita Desai',
      role: 'HR Director',
      avatar: 'A',
      rating: 5,
      text: 'Gigg Connect is our go-to for all gig hiring. The verification process ensures quality, and the dispute resolution AI saved us multiple times. Highly recommend!',
      stats: { hires: 78, saved: '200hrs' },
    },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Loved by Thousands
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real stories from workers and employers who transformed their workflow with Gigg Connect
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-white/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                {Object.entries(testimonial.stats).map(([key, value], i) => (
                  <div key={i}>
                    <span className="text-white font-bold">{value}</span>
                    <span className="text-gray-500 ml-1">{key}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Active Users', value: '50K+' },
            { label: 'Jobs Completed', value: '1M+' },
            { label: 'Success Rate', value: '98%' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}