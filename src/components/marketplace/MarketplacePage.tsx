import React from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Button } from '../ui/Button';

interface MarketplacePageProps {
  userRole: 'worker' | 'hirer';
  onBack: () => void;
  isVerified?: boolean;
  onNavigateToVerification?: () => void;
}

export function MarketplacePage({ userRole, onBack, isVerified = false, onNavigateToVerification }: MarketplacePageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = [
    { id: 'all', label: 'All Services', count: 1240 },
    { id: 'design', label: 'Design & Creative', count: 340 },
    { id: 'development', label: 'Development', count: 280 },
    { id: 'writing', label: 'Writing & Content', count: 195 },
    { id: 'marketing', label: 'Marketing', count: 210 },
    { id: 'video', label: 'Video & Animation', count: 125 },
    { id: 'business', label: 'Business', count: 90 },
  ];

  const services = [
    {
      id: '1',
      title: 'Professional Logo Design for Your Brand',
      description: 'I will create a modern, unique logo that captures your brand essence',
      image: '',
      worker: {
        name: 'Priya Sharma',
        avatar: 'P',
        rating: 4.9,
        reviewCount: 127,
      },
      startingPrice: 2500,
      category: 'Design & Creative',
    },
    {
      id: '2',
      title: 'Full-Stack Web Application Development',
      description: 'Build responsive, scalable web apps with React, Node.js, and databases',
      image: '',
      worker: {
        name: 'Amit Patel',
        avatar: 'A',
        rating: 5.0,
        reviewCount: 94,
      },
      startingPrice: 15000,
      category: 'Development',
    },
    {
      id: '3',
      title: 'SEO-Optimized Content Writing',
      description: 'Engaging blog posts and articles that rank on Google',
      image: '',
      worker: {
        name: 'Rajesh Kumar',
        avatar: 'R',
        rating: 4.8,
        reviewCount: 203,
      },
      startingPrice: 1500,
      category: 'Writing & Content',
    },
    {
      id: '4',
      title: 'Social Media Marketing Strategy',
      description: 'Complete social media management and growth plan',
      image: '',
      worker: {
        name: 'Sneha Reddy',
        avatar: 'S',
        rating: 4.9,
        reviewCount: 156,
      },
      startingPrice: 8000,
      category: 'Marketing',
    },
    {
      id: '5',
      title: 'Professional Video Editing',
      description: 'High-quality video editing for YouTube, ads, and social media',
      image: '',
      worker: {
        name: 'Vijay Singh',
        avatar: 'V',
        rating: 5.0,
        reviewCount: 88,
      },
      startingPrice: 5000,
      category: 'Video & Animation',
    },
    {
      id: '6',
      title: 'Business Plan & Financial Modeling',
      description: 'Comprehensive business plans with financial projections',
      image: '',
      worker: {
        name: 'Anita Desai',
        avatar: 'A',
        rating: 4.9,
        reviewCount: 67,
      },
      startingPrice: 12000,
      category: 'Business',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Service Marketplace
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-clash">
            Browse Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Discover talented gig workers offering services across all categories
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for any service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-all"
              />
            </div>
            <Button variant="outline" className="gap-2 px-6">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </Button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex gap-3 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
            >
              <ServiceCard service={service} onSelect={onBack} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Services
          </Button>
        </motion.div>
      </div>
    </div>
  );
}