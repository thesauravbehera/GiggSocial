import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin, Upload, Camera } from 'lucide-react';
import { Button } from '../ui/button';

interface AccountSettingsProps {
  userData: any;
}

export function AccountSettings({ userData }: AccountSettingsProps) {
  const [formData, setFormData] = useState({
    name: userData.name || 'Raj Kumar',
    email: 'raj.kumar@example.com',
    phone: '+91 98765 43210',
    city: userData.city || 'Mumbai',
    bio: 'Experienced electrician with 10+ years in residential and commercial projects.',
  });

  const handleSave = () => {
    console.log('Saving account settings:', formData);
  };

  return (
    <div className="space-y-8">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Profile Photo</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{formData.name.charAt(0)}</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-all">
              <Camera className="w-4 h-4 text-black" />
            </button>
          </div>
          <div>
            <Button variant="outline" className="gap-2 mb-2">
              <Upload className="w-4 h-4" />
              Upload Photo
            </Button>
            <p className="text-sm text-gray-500">JPG, PNG or GIF. Max 2MB.</p>
          </div>
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <p className="text-xs text-gray-500 mt-2">Used for login and notifications</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              <MapPin className="w-4 h-4 inline mr-2" />
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full glass rounded-xl px-4 py-3 text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">Tell others about yourself and your skills</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8 pt-6 border-t border-white/5">
          <Button onClick={handleSave}>Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 border border-red-500/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
            <div>
              <h3 className="font-semibold text-white mb-1">Deactivate Account</h3>
              <p className="text-sm text-gray-400">Temporarily disable your account</p>
            </div>
            <Button variant="outline" className="text-red-300 border-red-500/30 hover:bg-red-500/10">
              Deactivate
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
            <div>
              <h3 className="font-semibold text-white mb-1">Delete Account</h3>
              <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button variant="outline" className="text-red-300 border-red-500/30 hover:bg-red-500/10">
              Delete
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
