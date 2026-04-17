import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'quiz' | 'profile') => void;
  userName: string;
}

export function Navigation({ currentPage, onNavigate, userName }: NavigationProps) {
  return (
    <nav className="border-b-2 border-[#1a1a1a] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            KAAMFORCE
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-bold uppercase tracking-wider transition-opacity ${
                currentPage === 'home' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className={`text-sm font-bold uppercase tracking-wider transition-opacity ${
                currentPage === 'quiz' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              Verify Skills
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`text-sm font-bold uppercase tracking-wider transition-opacity ${
                currentPage === 'profile' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              Profile
            </button>
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-sm font-medium opacity-60">
              {userName}
            </div>
            <div className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold border-2 border-[#1a1a1a]">
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
