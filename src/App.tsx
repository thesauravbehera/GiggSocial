import React, { useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { SignUpPage } from './components/auth/SignUpPage';
import { SignInPage } from './components/auth/SignInPage';
import { WorkerDashboard } from './components/dashboards/WorkerDashboard';
import { HirerDashboard } from './components/dashboards/HirerDashboard';
import { MarketplacePage } from './components/marketplace/MarketplacePage';
import { QuizPage } from './components/quiz/QuizPage';
import { AadhaarVerificationPage } from './components/verification/AadhaarVerificationPage';
import { MessagingPage } from './components/pages/MessagingPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { SettingsPage } from './components/settings/SettingsPage';
import { AIMatchmakerPage } from './components/pages/AIMatchmakerPage';
import { ContractManagerPage } from './components/pages/ContractManagerPage';
import { NotificationsCenter } from './components/notifications/NotificationsCenter';

type Page = 'landing' | 'signup' | 'signin' | 'quiz' | 'verification' | 'worker-dashboard' | 'hirer-dashboard' | 'marketplace' | 'messaging' | 'profile' | 'settings' | 'ai-matchmaker' | 'escrow-contract' | 'notifications';
type UserRole = 'worker' | 'hirer' | null;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname.slice(1);
    const validPages: Page[] = ['landing', 'signup', 'signin', 'quiz', 'verification', 'worker-dashboard', 'hirer-dashboard', 'marketplace', 'messaging', 'profile', 'settings', 'ai-matchmaker', 'escrow-contract', 'notifications'];
    return validPages.includes(path as Page) ? (path as Page) : 'landing';
  });

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      const validPages: Page[] = ['landing', 'signup', 'signin', 'quiz', 'verification', 'worker-dashboard', 'hirer-dashboard', 'marketplace', 'messaging', 'profile', 'settings', 'ai-matchmaker', 'escrow-contract', 'notifications'];
      setCurrentPage(validPages.includes(path as Page) ? (path as Page) : 'landing');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page === 'landing' ? '' : page}`);
  };
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSignUp = (role: 'worker' | 'hirer') => {
    setUserRole(role);
    setIsAuthenticated(true);
    
    // Workers can choose to verify or skip
    // Hirers go straight to dashboard
    if (role === 'worker') {
      navigateTo('verification');
    } else {
      navigateTo('hirer-dashboard');
    }
  };

  const handleSignIn = () => {
    navigateTo('signin');
  };

  const handleSignInSuccess = (role: 'worker' | 'hirer') => {
    setUserRole(role);
    setIsAuthenticated(true);
    setIsVerified(true); // Assume returning users are verified
    
    if (role === 'worker') {
      navigateTo('worker-dashboard');
    } else {
      navigateTo('hirer-dashboard');
    }
  };

  const handleVerificationComplete = () => {
    setIsVerified(true);
    navigateTo('worker-dashboard');
  };

  const handleVerificationSkip = () => {
    // Allow user to explore dashboard without verification
    navigateTo('worker-dashboard');
  };

  const handleNavigateToDashboard = () => {
    if (userRole === 'worker') {
      navigateTo('worker-dashboard');
    } else if (userRole === 'hirer') {
      navigateTo('hirer-dashboard');
    }
  };

  const handleNavigateToMarketplace = () => {
    navigateTo('marketplace');
  };

  const handleNavigateToVerification = () => {
    navigateTo('verification');
  };

  const handleNavigateToMessaging = () => {
    navigateTo('messaging');
  };

  const handleNavigateToProfile = () => {
    navigateTo('profile');
  };

  const handleNavigateToSettings = () => {
    navigateTo('settings');
  };

  const handleNavigateToAIMatchmaker = () => {
    navigateTo('ai-matchmaker');
  };

  const handleNavigateToEscrow = () => {
    navigateTo('escrow-contract');
  };

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'landing' && (
        <LandingPage 
          onGetStarted={() => navigateTo('signup')}
          onSignIn={handleSignIn}
        />
      )}

      {currentPage === 'signup' && (
        <SignUpPage 
          onSignUp={handleSignUp}
          onBack={() => navigateTo('landing')}
          onSignIn={handleSignIn}
        />
      )}

      {currentPage === 'signin' && (
        <SignInPage 
          onSignIn={handleSignInSuccess}
          onBack={() => navigateTo('landing')}
          onSignUp={() => navigateTo('signup')}
        />
      )}

      {currentPage === 'verification' && (
        <AadhaarVerificationPage 
          onComplete={handleVerificationComplete}
          onSkip={handleVerificationSkip}
        />
      )}

      {currentPage === 'quiz' && (
        <QuizPage onComplete={() => navigateTo('worker-dashboard')} />
      )}

      {currentPage === 'worker-dashboard' && (
        <WorkerDashboard 
          onNavigateToMarketplace={handleNavigateToMarketplace}
          onNavigateToVerification={handleNavigateToVerification}
          onNavigateToMessaging={handleNavigateToMessaging}
          onNavigateToProfile={handleNavigateToProfile}
          onNavigateToSettings={handleNavigateToSettings}
          onNavigateToAIMatchmaker={handleNavigateToAIMatchmaker}
          onNavigateToEscrow={handleNavigateToEscrow}
          isVerified={isVerified}
        />
      )}

      {currentPage === 'hirer-dashboard' && (
        <HirerDashboard 
          onNavigateToMarketplace={handleNavigateToMarketplace}
        />
      )}

      {currentPage === 'marketplace' && (
        <MarketplacePage 
          userRole={userRole || 'worker'}
          onBack={handleNavigateToDashboard}
          isVerified={isVerified}
          onNavigateToVerification={handleNavigateToVerification}
        />
      )}

      {currentPage === 'messaging' && (
        <MessagingPage onBack={handleNavigateToDashboard} />
      )}

      {currentPage === 'profile' && (
        <ProfilePage 
          onBack={handleNavigateToDashboard} 
          userData={{
            name: "John Doe",
            city: "Mumbai, India",
            experience: "5 years",
            verificationStatus: { badge: "expert", score: 85 },
            skills: []
          }} 
        />
      )}

      {currentPage === 'settings' && (
        <SettingsPage 
          onBack={handleNavigateToDashboard} 
          userData={{
            name: "John Doe",
            email: "john@example.com",
            phone: "+91 98765 43210"
          }} 
        />
      )}

      {currentPage === 'ai-matchmaker' && (
        <AIMatchmakerPage onBack={handleNavigateToDashboard} />
      )}

      {currentPage === 'escrow-contract' && (
        <ContractManagerPage onBack={handleNavigateToDashboard} />
      )}

      {currentPage === 'notifications' && (
        <NotificationsCenter />
      )}
    </div>
  );
}

export default App;