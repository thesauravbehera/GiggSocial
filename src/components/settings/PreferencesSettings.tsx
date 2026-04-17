import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Moon, Sun, Volume2 } from 'lucide-react';
import { Button } from '../ui/button';

export function PreferencesSettings() {
  const [preferences, setPreferences] = useState({
    language: 'english',
    theme: 'dark',
    soundEffects: true,
    autoplay: false,
  });

  const toggleSetting = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Language & Region */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Language & Region</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              <Globe className="w-4 h-4 inline mr-2" />
              Language
            </label>
            <select
              value={preferences.language}
              onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="english" className="bg-black">English</option>
              <option value="hindi" className="bg-black">हिंदी (Hindi)</option>
              <option value="marathi" className="bg-black">मराठी (Marathi)</option>
              <option value="gujarati" className="bg-black">ગુજરાતી (Gujarati)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Time Zone
            </label>
            <select className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">
              <option value="ist" className="bg-black">IST (GMT+5:30) - India Standard Time</option>
              <option value="gst" className="bg-black">GST (GMT+4:00) - Gulf Standard Time</option>
              <option value="utc" className="bg-black">UTC (GMT+0:00) - Coordinated Universal Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Currency
            </label>
            <select className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">
              <option value="inr" className="bg-black">₹ INR - Indian Rupee</option>
              <option value="usd" className="bg-black">$ USD - US Dollar</option>
              <option value="eur" className="bg-black">€ EUR - Euro</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Appearance</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-4">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: 'light', label: 'Light', icon: Sun },
                { value: 'dark', label: 'Dark', icon: Moon },
                { value: 'auto', label: 'Auto', icon: Globe },
              ].map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => setPreferences({ ...preferences, theme: theme.value })}
                  className={`p-4 rounded-xl text-center transition-all ${
                    preferences.theme === theme.value
                      ? 'bg-white/10 border border-white/20'
                      : 'glass border border-white/5 hover:bg-white/5'
                  }`}
                >
                  <theme.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">{theme.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Audio & Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Audio & Video</h2>
        <div className="space-y-4">
          {[
            { key: 'soundEffects', label: 'Sound Effects', description: 'Play sounds for notifications and actions', icon: Volume2 },
            { key: 'autoplay', label: 'Auto-play Videos', description: 'Automatically play videos in feed', icon: Volume2 },
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
                onClick={() => toggleSetting(item.key as keyof typeof preferences)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  preferences[item.key as keyof typeof preferences] ? 'bg-white' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform ${
                  preferences[item.key as keyof typeof preferences] ? 'translate-x-6' : ''
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
