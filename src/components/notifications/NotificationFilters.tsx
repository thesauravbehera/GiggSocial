import React from 'react';
import { Briefcase, DollarSign, MessageCircle, Bell } from 'lucide-react';

interface NotificationFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: 'all' | 'unread' | 'job' | 'payment' | 'message') => void;
}

export function NotificationFilters({ currentFilter, onFilterChange }: NotificationFiltersProps) {
  const filters = [
    { id: 'all', label: 'All', icon: Bell },
    { id: 'unread', label: 'Unread', icon: Bell },
    { id: 'job', label: 'Jobs', icon: Briefcase },
    { id: 'payment', label: 'Payments', icon: DollarSign },
    { id: 'message', label: 'Messages', icon: MessageCircle },
  ];

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Filter By Type
      </h3>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id as any)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              currentFilter === filter.id
                ? 'bg-white text-black'
                : 'glass text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <filter.icon className="w-4 h-4" />
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
