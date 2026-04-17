import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, Shield, Key } from 'lucide-react';
import { Button } from '../ui/button';

export function PrivacySettings() {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    twoFactorAuth: false,
  });

  const toggleSetting = (key: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Profile Visibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Profile Visibility</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Who can see your profile?
            </label>
            <select
              value={privacySettings.profileVisibility}
              onChange={(e) => setPrivacySettings({ ...privacySettings, profileVisibility: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="public" className="bg-black">Public - Everyone can see</option>
              <option value="verified" className="bg-black">Verified Users Only</option>
              <option value="private" className="bg-black">Private - Hidden from search</option>
            </select>
          </div>

          {[
            { key: 'showEmail', label: 'Show Email Address', description: 'Display your email on your public profile' },
            { key: 'showPhone', label: 'Show Phone Number', description: 'Display your phone number on your public profile' },
            { key: 'showLocation', label: 'Show Location', description: 'Display your city on your public profile' },
            { key: 'allowMessages', label: 'Allow Direct Messages', description: 'Let other users send you messages' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
              <div>
                <h3 className="font-semibold text-white">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              <button
                onClick={() => toggleSetting(item.key as keyof typeof privacySettings)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  privacySettings[item.key as keyof typeof privacySettings] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                  privacySettings[item.key as keyof typeof privacySettings] ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Security</h2>
        <div className="space-y-4">
          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-400">Add an extra layer of security</p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting('twoFactorAuth')}
              className={`relative w-14 h-8 rounded-full transition-all ${
                privacySettings.twoFactorAuth ? 'bg-white' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                privacySettings.twoFactorAuth ? 'translate-x-6' : ''
              }`} />
            </button>
          </div>

          {/* Change Password */}
          <div className="p-4 glass rounded-xl border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Key className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Password</h3>
                <p className="text-sm text-gray-400">Last changed 3 months ago</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">Change Password</Button>
          </div>

          {/* Active Sessions */}
          <div className="p-4 glass rounded-xl border border-white/5">
            <h3 className="font-semibold text-white mb-4">Active Sessions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-white font-medium">Chrome on Windows</div>
                  <div className="text-gray-500">Mumbai, India • Current session</div>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                  Active
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-white font-medium">Safari on iPhone</div>
                  <div className="text-gray-500">Mumbai, India • 2 days ago</div>
                </div>
                <Button variant="outline" size="sm">Revoke</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Data & Privacy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Data & Privacy</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
            <div>
              <h3 className="font-semibold text-white mb-1">Download Your Data</h3>
              <p className="text-sm text-gray-400">Get a copy of all your information</p>
            </div>
            <Button variant="outline">Download</Button>
          </div>

          <div className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
            <div>
              <h3 className="font-semibold text-white mb-1">Privacy Policy</h3>
              <p className="text-sm text-gray-400">Read our privacy policy</p>
            </div>
            <Button variant="outline">View</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
