import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    worker: {
      name: string;
      avatar: string;
      rating: number;
      reviewCount: number;
    };
    startingPrice: number;
    category: string;
  };
  onSelect: (id: string) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const [isFavorited, setIsFavorited] = React.useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
      onClick={() => onSelect(service.id)}
    >
      {/* Image */}
      <div className="relative aspect-video bg-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0" />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full glass backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all z-10"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isFavorited ? 'fill-white text-white' : 'text-white'
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass backdrop-blur-md">
          <span className="text-xs font-semibold text-white">{service.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Worker Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-sm font-bold text-white">
              {service.worker.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{service.worker.name}</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Star className="w-3 h-3 fill-white text-white" />
              <span className="text-white font-semibold">{service.worker.rating}</span>
              <span>({service.worker.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 font-clash line-clamp-2 group-hover:text-gray-300 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <div className="text-xs text-gray-500 mb-1">Starting at</div>
            <div className="text-xl font-bold text-white">₹{service.startingPrice.toLocaleString()}</div>
          </div>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(service.id);
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
