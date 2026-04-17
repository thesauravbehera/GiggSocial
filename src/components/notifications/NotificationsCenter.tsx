import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, Check, Trash2, Settings, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { NotificationCard } from './NotificationCard';
import { NotificationFilters } from './NotificationFilters';

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

export function NotificationsCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'job',
      title: 'New Job Match',
      message: 'You have a 95% match for "Residential Electrical Wiring" in Mumbai',
      time: '5 min ago',
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      type: 'payment',
      title: 'Payment Received',
      message: 'You received ₹18,000 from BuildTech Constructions',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message',
      message: 'CoolTech Solutions sent you a message about AC Installation project',
      time: '3 hours ago',
      read: false,
      priority: 'medium'
    },
    {
      id: '4',
      type: 'review',
      title: 'New Review',
      message: 'BuildTech left you a 5-star review!',
      time: '5 hours ago',
      read: true,
      priority: 'medium'
    },
    {
      id: '5',
      type: 'system',
      title: 'Trust Score Updated',
      message: 'Your trust score increased to 88/100 (+3 points)',
      time: '1 day ago',
      read: true,
      priority: 'low'
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'job' | 'payment' | 'message'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
                <Bell className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Stay Updated
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Notifications
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                {unreadCount > 0 
                  ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                  : 'You\'re all caught up!'
                }
              </p>
            </div>

            <div className="flex gap-3">
              {unreadCount > 0 && (
                <Button
                  variant="outline"
                  onClick={markAllAsRead}
                  className="gap-2"
                >
                  <Check className="w-5 h-5" />
                  Mark All Read
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="w-5 h-5" />
                Filters
              </Button>
            </div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <NotificationFilters
                  currentFilter={filter}
                  onFilterChange={setFilter}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Total', count: notifications.length, color: 'white' },
              { label: 'Unread', count: unreadCount, color: 'white' },
              { label: 'Jobs', count: notifications.filter(n => n.type === 'job').length, color: 'white' },
              { label: 'Payments', count: notifications.filter(n => n.type === 'payment').length, color: 'white' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass rounded-xl p-4 border border-white/5"
              >
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-3xl font-bold text-white">{stat.count}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notifications List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, idx) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  index={idx}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                  <Bell className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No notifications
                </h3>
                <p className="text-gray-400">
                  {filter === 'all' 
                    ? 'You\'re all caught up!' 
                    : `No ${filter} notifications found`
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
