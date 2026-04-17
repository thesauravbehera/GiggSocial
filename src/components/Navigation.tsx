import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Menu } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'quiz' | 'profile') => void;
  userName: string;
}

export function Navigation({ currentPage, onNavigate, userName }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <button
            onClick={() => onNavigate('home')}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="text-xl font-bold">KaamForce</span>
          </button>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === 'home' ? 'text-foreground' : 'text-foreground/60'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === 'quiz' ? 'text-foreground' : 'text-foreground/60'
              }`}
            >
              Verify Skills
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === 'profile' ? 'text-foreground' : 'text-foreground/60'
              }`}
            >
              Profile
            </button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {userName.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
}
