import React from 'react';
import { motion } from 'motion/react';

interface ActiveJobsCardProps {
  title: string;
  count: number;
  color: string;
}

export function ActiveJobsCard({ title, count, color }: ActiveJobsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass glass-hover rounded-2xl p-6 border border-white/5"
    >
      <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">{title}</div>
      <div className="text-4xl font-bold text-white">{count}</div>
    </motion.div>
  );
}
