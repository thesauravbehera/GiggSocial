import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { WorkerMatchCard } from './WorkerMatchCard';
import { PricingRecommendation } from './PricingRecommendation';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';

export function MatchingDashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);

  // Animated stars background using Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars: Array<{ x: number; y: number; size: number; speed: number; opacity: number; vx: number }> = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.2
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y += star.speed;
        star.x += star.vx;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < 0 || star.x > canvas.width) {
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const mockMatches = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      score: 95,
      skills: ['Residential Wiring', 'Circuit Boards', 'Safety Certified'],
      rating: 4.9,
      completedJobs: 127,
      hourlyRate: 450,
      location: 'Andheri West, Mumbai',
      avatar: 'R',
      availability: 'Available Now',
      responseTime: '15 min',
      trustScore: 92
    },
    {
      id: '2',
      name: 'Amit Patel',
      score: 88,
      skills: ['Commercial Wiring', 'Panel Installation', 'Troubleshooting'],
      rating: 4.7,
      completedJobs: 94,
      hourlyRate: 400,
      location: 'Bandra East, Mumbai',
      avatar: 'A',
      availability: 'Available Tomorrow',
      responseTime: '30 min',
      trustScore: 85
    },
    {
      id: '3',
      name: 'Suresh Verma',
      score: 82,
      skills: ['Home Automation', 'Smart Wiring', 'LED Installation'],
      rating: 4.8,
      completedJobs: 68,
      hourlyRate: 500,
      location: 'Powai, Mumbai',
      avatar: 'S',
      availability: 'Available Now',
      responseTime: '10 min',
      trustScore: 88
    }
  ];

  const pricingData = {
    recommended: 17500,
    min: 15000,
    max: 20000,
    marketAverage: 16800,
    factors: [
      { name: 'Worker Experience', impact: '+15%', value: 2550 },
      { name: 'Project Complexity', impact: '+10%', value: 1700 },
      { name: 'Urgent Timeline', impact: '+5%', value: 850 },
      { name: 'Location Premium', impact: '+3%', value: 510 },
    ]
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-20"
      />
      
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] -z-5" />

      <div className="container px-4 py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              AI-Powered Matching
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Perfect Matches
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI analyzed 9 factors to find the best workers for your electrical project
          </p>
        </motion.div>

        {/* Match Score Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-12 border border-white/5"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Match Scoring Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Skills Match', weight: '35%', icon: Zap },
              { label: 'Availability', weight: '25%', icon: TrendingUp },
              { label: 'Location', weight: '15%', icon: Sparkles },
              { label: 'Rating & Reviews', weight: '15%', icon: TrendingUp },
              { label: 'Response Time', weight: '10%', icon: Zap },
            ].map((factor, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <factor.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{factor.label}</div>
                  <div className="text-xs text-gray-500">{factor.weight} weight</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Matches Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Top Matches</h2>
            {mockMatches.map((match, idx) => (
              <WorkerMatchCard
                key={match.id}
                match={match}
                index={idx}
                onSelect={setSelectedMatch}
              />
            ))}
          </div>

          {/* Pricing Recommendation */}
          <div className="lg:sticky lg:top-24 h-fit">
            <PricingRecommendation data={pricingData} />
          </div>
        </div>
      </div>
    </div>
  );
}
