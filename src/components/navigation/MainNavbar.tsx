import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  TrendingUp,
  MessageCircle, 
  Bell, 
  User,
  ChevronDown,
  Settings,
  Shield,
  BarChart3,
  LogOut,
  HelpCircle
} from 'lucide-react';

interface MainNavbarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
  userName: string;
  userRole: 'worker' | 'employer';
  isAdmin?: boolean;
  unreadMessages?: number;
  unreadNotifications?: number;
}

export function MainNavbar({ 
  currentPage, 
  onNavigate, 
  userName, 
  userRole,
  isAdmin,
  unreadMessages = 3, 
  unreadNotifications = 5 
}: MainNavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Main nav items based on role
  const mainNavItems = userRole === 'worker' ? [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'marketplace', label: 'Browse Gigs', icon: Briefcase },
    { id: 'my-services', label: 'My Services', icon: TrendingUp },
  ] : [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'marketplace', label: 'Find Workers', icon: Users },
    { id: 'jobs', label: 'My Requests', icon: Briefcase },
  ];

  const moreMenuItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'trust', label: 'Trust Score', icon: Shield },
    ...(isAdmin ? [{ id: 'admin', label: 'Admin Panel', icon: Settings }] : []),
  ];

  const profileMenuItems = [
    { id: 'profile', label: 'View Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help Center', icon: HelpCircle },
    { id: 'logout', label: 'Sign Out', icon: LogOut, danger: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 group"
          >
            <div className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors tracking-tight">
              Gigg<span className="text-white/60">Connect</span>
            </div>
          </button>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  currentPage === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}

            {/* More Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  showMoreMenu || moreMenuItems.some(item => item.id === currentPage)
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-medium">More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showMoreMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowMoreMenu(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-12 right-0 w-56 z-50"
                    >
                      <div className="glass rounded-xl p-2 border border-white/10 shadow-2xl">
                        {moreMenuItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              onNavigate(item.id);
                              setShowMoreMenu(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                              currentPage === item.id
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Messages */}
            <button
              onClick={() => onNavigate('messages')}
              className={`relative p-2 rounded-lg transition-all ${
                currentPage === 'messages'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              {unreadMessages > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">
                    {unreadMessages > 9 ? '9+' : unreadMessages}
                  </span>
                </div>
              )}
            </button>

            {/* Notifications */}
            <button
              onClick={() => onNavigate('notifications')}
              className={`relative p-2 rounded-lg transition-all ${
                currentPage === 'notifications'
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">
                    {unreadNotifications > 9 ? '9+' : unreadNotifications}
                  </span>
                </div>
              )}
            </button>

            {/* Divider */}
            <div className="w-px h-8 bg-white/10 mx-2" />

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-sm font-bold text-black">{userName.charAt(0)}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform hidden md:block ${
                  showProfileMenu ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-12 right-0 w-64 z-50"
                    >
                      <div className="glass rounded-xl p-2 border border-white/10 shadow-2xl">
                        {/* User Info */}
                        <div className="px-3 py-3 mb-2 border-b border-white/5">
                          <div className="font-semibold text-white mb-1">{userName}</div>
                          <div className="text-sm text-gray-400 capitalize">{userRole}</div>
                        </div>

                        {/* Menu Items */}
                        {profileMenuItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              if (item.id === 'logout') {
                                console.log('Logout');
                              } else {
                                onNavigate(item.id);
                              }
                              setShowProfileMenu(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                              item.danger
                                ? 'text-red-300 hover:bg-red-500/10'
                                : currentPage === item.id
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-white/10">
        <div className="flex items-center justify-around p-2">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                currentPage === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-400"
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </div>
    </nav>
  );
}