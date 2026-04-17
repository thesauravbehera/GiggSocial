import React from 'react';
import { motion } from 'motion/react';
import { Bell, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface NotificationDropdownProps {
  onClose: () => void;
}

export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  const recentNotifications = [
    { id: '1', title: 'New Job Match', message: '95% match for Electrical Wiring', time: '5 min ago' },
    { id: '2', title: 'Payment Received', message: '₹18,000 from BuildTech', time: '2 hrs ago' },
    { id: '3', title: 'New Message', message: 'CoolTech sent you a message', time: '3 hrs ago' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />

      {/* Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className="absolute right-0 top-12 w-96 z-50"
      >
        <div className="glass rounded-2xl p-4 border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <h3 className="font-bold text-white">Notifications</h3>
            <span className="text-sm text-gray-400">3 unread</span>
          </div>

          {/* Notifications */}
          <div className="space-y-2 max-h-96 overflow-y-auto mb-4">
            {recentNotifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
              >
                <h4 className="text-sm font-semibold text-white mb-1">
                  {notification.title}
                </h4>
                <p className="text-xs text-gray-400 mb-2">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <Button variant="outline" className="w-full gap-2">
            View All Notifications
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </>
  );
}
