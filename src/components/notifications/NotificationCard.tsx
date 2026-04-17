import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, DollarSign, MessageCircle, Bell, Star, Scale, Check, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

interface Notification {
  id: string;
  type: 'job' | 'payment' | 'message' | 'system' | 'review' | 'dispute';
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
  actionUrl?: string;
}

interface NotificationCardProps {
  notification: Notification;
  index: number;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export function NotificationCard({ notification, index, onMarkAsRead, onDelete }: NotificationCardProps) {
  const getIcon = () => {
    switch (notification.type) {
      case 'job': return Briefcase;
      case 'payment': return DollarSign;
      case 'message': return MessageCircle;
      case 'review': return Star;
      case 'dispute': return Scale;
      default: return Bell;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ delay: index * 0.03 }}
      className={`glass rounded-2xl p-6 border transition-all group ${
        notification.read 
          ? 'border-white/5 hover:bg-white/5' 
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
          notification.read ? 'bg-white/5' : 'bg-white/10'
        }`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                {notification.title}
                {!notification.read && (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </h3>
              <p className="text-gray-300 leading-relaxed">{notification.message}</p>
            </div>
            
            {/* Priority Badge */}
            {notification.priority === 'high' && !notification.read && (
              <div className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30 shrink-0">
                High Priority
              </div>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">{notification.time}</span>
            
            {/* Actions */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {!notification.read && (
                <button
                  onClick={() => onMarkAsRead(notification.id)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  title="Mark as read"
                >
                  <Check className="w-4 h-4 text-white" />
                </button>
              )}
              {notification.actionUrl && (
                <button
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  title="View details"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
              )}
              <button
                onClick={() => onDelete(notification.id)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all"
                title="Delete"
              >
                <Trash2 className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
