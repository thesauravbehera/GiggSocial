import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Briefcase, MessageCircle, Bell, User, Settings, TrendingUp, Shield, BarChart3, HelpCircle, LogOut, ChevronDown } from 'lucide-react';

interface ImprovedNavProps {
  currentPage: string;
  onNavigate: (page: any) => void;
  userName: string;
  isAdmin?: boolean;
  unreadMessages?: number;
  unreadNotifications?: number;
}

export function ImprovedNav({ currentPage, onNavigate, userName, isAdmin, unreadMessages = 3, unreadNotifications = 5 }: ImprovedNavProps) {
  const [hidden, setHidden] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const mainNavItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'jobs' as const, label: 'Jobs', icon: Briefcase },
    { id: 'messages' as const, label: 'Messages', icon: MessageCircle, badge: unreadMessages },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell, badge: unreadNotifications },
  ];

  const profileMenuItems = [
    { id: 'profile' as const, label: 'Profile', icon: User },
    { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
    { id: 'trust' as const, label: 'Trust Score', icon: Shield },
    { id: 'settings' as const, label: 'Settings', icon: Settings },
    ...(isAdmin ? [{ id: 'admin' as const, label: 'Admin Panel', icon: Settings }] : []),
    { id: 'help' as const, label: 'Help Center', icon: HelpCircle },
    { id: 'logout' as const, label: 'Sign Out', icon: LogOut, danger: true },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-5xl"
    >
      <div className="relative glass rounded-full shadow-2xl border border-white/10">
        <div className="flex items-center justify-between gap-1 px-3 py-2">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 font-bold text-lg text-white hover:text-gray-300 transition-all"
          >
            KaamForce
          </button>

          {/* Main Nav Items */}
          <div className="flex items-center gap-2">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative px-4 py-2 rounded-full transition-all group"
              >
                {currentPage === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative flex items-center gap-2">
                  <div className="relative">
                    <item.icon className={`w-5 h-5 transition-colors ${
                      currentPage === item.id 
                        ? 'text-white' 
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`} />
                    {item.badge && item.badge > 0 && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <span className="text-xs font-bold text-black">
                          {item.badge > 9 ? '9+' : item.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors hidden md:inline ${
                    currentPage === item.id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold">
                {userName.charAt(0)}
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform hidden md:block ${
                showProfileMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfileMenu && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 -z-10" 
                    onClick={() => setShowProfileMenu(false)}
                  />

                  {/* Dropdown Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-14 w-64"
                  >
                    <div className="glass rounded-2xl p-3 border border-white/10 shadow-2xl">
                      {/* User Info */}
                      <div className="px-3 py-4 border-b border-white/5 mb-2">
                        <div className="font-semibold text-white mb-1">{userName}</div>
                        <div className="text-sm text-gray-400">View profile</div>
                      </div>

                      {/* Menu Items */}
                      <div className="space-y-1">
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
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                              item.danger
                                ? 'hover:bg-red-500/10 text-red-300'
                                : currentPage === item.id
                                ? 'bg-white/10 text-white'
                                : 'hover:bg-white/5 text-gray-300'
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
