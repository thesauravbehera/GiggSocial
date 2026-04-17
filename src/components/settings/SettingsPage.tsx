import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, User, Bell, Lock, CreditCard, Globe, Moon, Shield, HelpCircle, LogOut } from 'lucide-react';
import { AccountSettings } from './AccountSettings';
import { NotificationSettings } from './NotificationSettings';
import { PrivacySettings } from './PrivacySettings';
import { PaymentSettings } from './PaymentSettings';
import { PreferencesSettings } from './PreferencesSettings';

type SettingsView = 'account' | 'notifications' | 'privacy' | 'payment' | 'preferences';

interface SettingsPageProps {
  userData: any;
}

export function SettingsPage({ userData }: SettingsPageProps) {
  const [currentView, setCurrentView] = useState<SettingsView>('account');

  const settingsSections = [
    { id: 'account' as const, label: 'Account', icon: User, description: 'Manage your profile and personal information' },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell, description: 'Configure notification preferences' },
    { id: 'privacy' as const, label: 'Privacy & Security', icon: Lock, description: 'Control your privacy and security settings' },
    { id: 'payment' as const, label: 'Payment Methods', icon: CreditCard, description: 'Manage payment and withdrawal options' },
    { id: 'preferences' as const, label: 'Preferences', icon: Globe, description: 'Customize your experience' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
            <Settings className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Account Settings
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Settings
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Manage your account, preferences, and platform settings
          </p>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 border border-white/5 sticky top-24">
              <nav className="space-y-2">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentView(section.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      currentView === section.id
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <section.icon className={`w-5 h-5 ${
                        currentView === section.id ? 'text-white' : 'text-gray-400'
                      }`} />
                      <span className={`font-semibold ${
                        currentView === section.id ? 'text-white' : 'text-gray-400'
                      }`}>
                        {section.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 pl-8">
                      {section.description}
                    </p>
                  </button>
                ))}

                {/* Divider */}
                <div className="py-4">
                  <div className="h-px bg-white/5" />
                </div>

                {/* Additional Actions */}
                <button className="w-full text-left p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold text-gray-400">Help Center</span>
                  </div>
                </button>

                <button className="w-full text-left p-4 rounded-xl hover:bg-red-500/10 transition-all border border-transparent">
                  <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5 text-red-300" />
                    <span className="font-semibold text-red-300">Sign Out</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {currentView === 'account' && <AccountSettings userData={userData} />}
            {currentView === 'notifications' && <NotificationSettings />}
            {currentView === 'privacy' && <PrivacySettings />}
            {currentView === 'payment' && <PaymentSettings />}
            {currentView === 'preferences' && <PreferencesSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}
