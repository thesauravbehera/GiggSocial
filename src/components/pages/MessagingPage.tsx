import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { MessagingCenter } from '../messaging/MessagingCenter';

interface MessagingPageProps {
  onBack: () => void;
}

export function MessagingPage({ onBack }: MessagingPageProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="h-full"
        >
          <MessagingCenter />
        </motion.div>
      </div>
    </div>
  );
}
