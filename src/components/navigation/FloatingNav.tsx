import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Sparkles, User, Zap, Rocket, Shield, Briefcase, BarChart3, Bell, MessageCircle, Settings } from 'lucide-react';

interface FloatingNavProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'quiz' | 'profile' | 'matching' | 'trust' | 'jobs' | 'analytics' | 'notifications' | 'messages' | 'admin' | 'settings') => void;
  userName: string;
  isAdmin?: boolean;
}

export function FloatingNav({ currentPage, onNavigate, userName, isAdmin }: FloatingNavProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Sparkles },
    { id: 'jobs' as const, label: 'Jobs', icon: Briefcase },
    { id: 'messages' as const, label: 'Messages', icon: MessageCircle },
    { id: 'notifications' as const, label: 'Alerts', icon: Bell },
    { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
    { id: 'trust' as const, label: 'Trust', icon: Shield },
    ...(isAdmin ? [{ id: 'admin' as const, label: 'Admin', icon: Settings }] : []),
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4"
    >
      <div className="relative">
        <div className="relative glass rounded-full shadow-2xl border border-white/10">
          <div className="flex items-center gap-1 px-3 py-2">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 font-bold text-sm text-white hover:text-gray-300 transition-all"
            >
              KaamForce
            </button>

            <div className="w-px h-6 bg-white/10" />

            {/* Nav Items */}
            {navItems.map((item) => (
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
                  <item.icon className={`w-4 h-4 transition-colors ${
                    currentPage === item.id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`} />
                  <span className={`text-sm font-medium transition-colors ${
                    currentPage === item.id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
            ))}

            <div className="w-px h-6 bg-white/10" />

            {/* User Avatar */}
            <div className="relative px-2">
              <button
                onClick={() => onNavigate('settings')}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold hover:bg-gray-200 transition-all"
              >
                {userName.charAt(0)}
              </button>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full border-2 border-black" />
            </div>

            {/* Admin Icon */}
            {isAdmin && (
              <div className="relative px-2">
                <Settings className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full border-2 border-black" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}