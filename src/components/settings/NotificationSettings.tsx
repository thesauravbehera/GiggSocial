import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, Mail, MessageCircle, Briefcase, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    jobMatches: true,
    messages: true,
    payments: true,
    reviews: true,
    disputes: true,
    platformUpdates: false,
    marketing: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Notification Channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Notification Channels</h2>
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email', icon: Mail },
            { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications on your device', icon: Bell },
            { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive important updates via SMS', icon: MessageCircle },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting(item.key as keyof typeof settings)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  settings[item.key as keyof typeof settings] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Activity Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Activity Notifications</h2>
        <div className="space-y-4">
          {[
            { key: 'jobMatches', label: 'Job Matches', description: 'When new jobs match your profile', icon: Briefcase },
            { key: 'messages', label: 'Messages', description: 'When you receive new messages', icon: MessageCircle },
            { key: 'payments', label: 'Payments', description: 'Payment confirmations and updates', icon: DollarSign },
            { key: 'reviews', label: 'Reviews', description: 'When someone leaves you a review', icon: Bell },
            { key: 'disputes', label: 'Disputes', description: 'Updates on dispute resolutions', icon: Bell },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting(item.key as keyof typeof settings)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  settings[item.key as keyof typeof settings] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marketing Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Marketing & Updates</h2>
        <div className="space-y-4">
          {[
            { key: 'platformUpdates', label: 'Platform Updates', description: 'New features and improvements' },
            { key: 'marketing', label: 'Marketing Emails', description: 'Tips, offers, and recommendations' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
              <div>
                <h3 className="font-semibold text-white">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              <button
                onClick={() => toggleSetting(item.key as keyof typeof settings)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  settings[item.key as keyof typeof settings] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Save Button */}
      <div className="flex gap-4">
        <Button>Save Preferences</Button>
        <Button variant="outline">Reset to Default</Button>
      </div>
    </div>
  );
}
