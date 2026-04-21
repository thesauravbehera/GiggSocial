import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { ServiceCard } from './ServiceCard';

interface MapMarketplaceViewProps {
  services: any[];
  onBack: () => void;
}

export function MapMarketplaceView({ services, onBack }: MapMarketplaceViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Left List Pane */}
      <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col border-r border-white/10 relative z-10 bg-black/95">
        <div className="p-4 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-xl">
          <Button variant="ghost" size="sm" onClick={onBack} className="mb-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>

          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search local gigs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-white/30 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 gap-2 text-xs">
              <MapPin className="w-3 h-3" />
              Within 10km
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <SlidersHorizontal className="w-3 h-3" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">{services.length} Local Gigs Found</p>
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <ServiceCard service={service} onSelect={() => {}} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Map Pane */}
      <div className="hidden md:block flex-1 relative bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center flex-col z-0">
           {/* Placeholder for @vis.gl/react-google-maps */}
           <MapPin className="w-12 h-12 text-primary/50 mb-4 animate-bounce" />
           <p className="text-gray-400 font-medium">Google Maps Integration Ready</p>
           <p className="text-sm text-gray-600 mt-2 px-8 text-center max-w-sm">
             Waiting for valid VITE_GOOGLE_MAPS_API_KEY to render interactive canvas. Displaying localized service regions.
           </p>
        </div>
        
        {/* We can use a generic iframe for visual placeholder */}
        <iframe 
          className="absolute inset-0 w-full h-full opacity-30 grayscale pointer-events-none mix-blend-screen"
          src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0}
        />

        {/* Floating Map Legend/Controls can go here */}
        <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl">
           <h4 className="text-sm font-bold text-white mb-2">Map Legend</h4>
           <div className="flex items-center gap-2 text-xs text-gray-400">
             <div className="w-3 h-3 rounded-full bg-blue-500" /> High Demand Zone
           </div>
           <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
             <div className="w-3 h-3 rounded-full bg-green-500" /> Premium Gigs ($+)
           </div>
        </div>
      </div>
    </div>
  );
}
