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

type Page = 'landing' | 'signup' | 'signin' | 'quiz' | 'verification' | 'worker-dashboard' | 'hirer-dashboard' | 'marketplace' | 'messaging' | 'profile' | 'settings' | 'ai-matchmaker' | 'escrow-contract';
type UserRole = 'worker' | 'hirer' | null;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSignUp = (role: 'worker' | 'hirer') => {
    setUserRole(role);
    setIsAuthenticated(true);
    
    // Workers can choose to verify or skip
    // Hirers go straight to dashboard
    if (role === 'worker') {
      setCurrentPage('verification');
    } else {
      setCurrentPage('hirer-dashboard');
    }
  };

  const handleSignIn = () => {
    setCurrentPage('signin');
  };

  const handleSignInSuccess = (role: 'worker' | 'hirer') => {
    setUserRole(role);
    setIsAuthenticated(true);
    setIsVerified(true); // Assume returning users are verified
    
    if (role === 'worker') {
      setCurrentPage('worker-dashboard');
    } else {
      setCurrentPage('hirer-dashboard');
    }
  };

  const handleVerificationComplete = () => {
    setIsVerified(true);
    setCurrentPage('worker-dashboard');
  };

  const handleVerificationSkip = () => {
    // Allow user to explore dashboard without verification
    setCurrentPage('worker-dashboard');
  };

  const handleNavigateToDashboard = () => {
    if (userRole === 'worker') {
      setCurrentPage('worker-dashboard');
    } else if (userRole === 'hirer') {
      setCurrentPage('hirer-dashboard');
    }
  };

  const handleNavigateToMarketplace = () => {
    setCurrentPage('marketplace');
  };

  const handleNavigateToVerification = () => {
    setCurrentPage('verification');
  };

  const handleNavigateToMessaging = () => {
    setCurrentPage('messaging');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToSettings = () => {
    setCurrentPage('settings');
  };

  const handleNavigateToAIMatchmaker = () => {
    setCurrentPage('ai-matchmaker');
  };

  const handleNavigateToEscrow = () => {
    setCurrentPage('escrow-contract');
  };

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'landing' && (
        <LandingPage 
          onGetStarted={() => setCurrentPage('signup')}
          onSignIn={handleSignIn}
        />
      )}

      {currentPage === 'signup' && (
        <SignUpPage 
          onSignUp={handleSignUp}
          onBack={() => setCurrentPage('landing')}
          onSignIn={handleSignIn}
        />
      )}

      {currentPage === 'signin' && (
        <SignInPage 
          onSignIn={handleSignInSuccess}
          onBack={() => setCurrentPage('landing')}
          onSignUp={() => setCurrentPage('signup')}
        />
      )}

      {currentPage === 'verification' && (
        <AadhaarVerificationPage 
          onComplete={handleVerificationComplete}
          onSkip={handleVerificationSkip}
        />
      )}

      {currentPage === 'quiz' && (
        <QuizPage onComplete={() => setCurrentPage('worker-dashboard')} />
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
        <ProfilePage onBack={handleNavigateToDashboard} userData={undefined} />
      )}

      {currentPage === 'settings' && (
        <SettingsPage onBack={handleNavigateToDashboard} userData={undefined} />
      )}

      {currentPage === 'ai-matchmaker' && (
        <AIMatchmakerPage onBack={handleNavigateToDashboard} />
      )}

      {currentPage === 'escrow-contract' && (
        <ContractManagerPage onBack={handleNavigateToDashboard} />
      )}
    </div>
  );
}

export default App;