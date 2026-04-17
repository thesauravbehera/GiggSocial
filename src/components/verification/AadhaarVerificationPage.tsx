import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Camera,
  Smartphone,
  Lock,
  ChevronRight,
  X,
  Zap
} from 'lucide-react';
import { Button } from '../ui/button';

interface AadhaarVerificationPageProps {
  onComplete: () => void;
  onSkip: () => void;
}

type Step = 'intro' | 'aadhaar' | 'documents' | 'selfie' | 'processing' | 'complete';

export function AadhaarVerificationPage({ onComplete, onSkip }: AadhaarVerificationPageProps) {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({
    aadhaarFront: false,
    aadhaarBack: false,
    selfie: false,
    additional: false,
  });

  const handleSendOTP = () => {
    if (aadhaarNumber.length === 12) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setCurrentStep('documents');
    }
  };

  const handleFileUpload = (docType: keyof typeof uploadedDocs) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: true }));
  };

  const handleProceed = () => {
    if (currentStep === 'intro') setCurrentStep('aadhaar');
    else if (currentStep === 'aadhaar' && otpSent && otp.length === 6) setCurrentStep('documents');
    else if (currentStep === 'documents') setCurrentStep('selfie');
    else if (currentStep === 'selfie') {
      setCurrentStep('processing');
      setTimeout(() => {
        setCurrentStep('complete');
        setTimeout(onComplete, 2000);
      }, 3000);
    }
  };

  const canProceed = () => {
    if (currentStep === 'intro') return true;
    if (currentStep === 'aadhaar') return otpSent && otp.length === 6;
    if (currentStep === 'documents') return uploadedDocs.aadhaarFront && uploadedDocs.aadhaarBack;
    if (currentStep === 'selfie') return uploadedDocs.selfie;
    return false;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Skip Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/5 border-b border-white/10 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-white/60" />
            <span className="text-sm text-gray-400">
              Verify your identity to unlock all features
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onSkip}
            className="text-gray-400 hover:text-white"
          >
            Skip for now
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            {['Intro', 'Aadhaar', 'Documents', 'Selfie', 'Done'].map((label, idx) => {
              const steps: Step[] = ['intro', 'aadhaar', 'documents', 'selfie', 'complete'];
              const stepIndex = steps.indexOf(currentStep);
              const isActive = idx === stepIndex;
              const isComplete = idx < stepIndex;

              return (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        isComplete
                          ? 'bg-white border-white text-black'
                          : isActive
                          ? 'border-white bg-white/10 text-white'
                          : 'border-white/30 text-white/30'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-bold">{idx + 1}</span>
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 ${
                        isActive ? 'text-white font-semibold' : 'text-white/40'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {idx < 4 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 ${
                        isComplete ? 'bg-white' : 'bg-white/20'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {currentStep === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4">Get Verified</h1>
                <p className="text-xl text-gray-400 mb-8">
                  Build trust with AI-powered identity verification.
                  <br />
                  Takes only 5 minutes.
                </p>

                <div className="glass rounded-2xl p-8 mb-8 text-left">
                  <h3 className="text-lg font-semibold mb-4">What you'll need:</h3>
                  <div className="space-y-3">
                    {[
                      { icon: FileText, text: 'Aadhaar Card (India)' },
                      { icon: Camera, text: 'Clear selfie photo' },
                      { icon: Smartphone, text: 'Mobile number linked to Aadhaar' },
                      { icon: Lock, text: '5 minutes of your time' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white/60" />
                        </div>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleProceed}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Start Verification
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onSkip}
                  >
                    I'll do this later
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  Your data is encrypted and secure. We follow RBI guidelines.
                </p>
              </motion.div>
            )}

            {currentStep === 'aadhaar' && (
              <motion.div
                key="aadhaar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-center">Verify Aadhaar</h2>
                <p className="text-gray-400 text-center mb-8">
                  Enter your 12-digit Aadhaar number
                </p>

                <div className="glass rounded-2xl p-8">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Aadhaar Number</label>
                    <input
                      type="text"
                      maxLength={12}
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="XXXX XXXX XXXX"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  {!otpSent ? (
                    <Button
                      className="w-full bg-white text-black hover:bg-white/90"
                      onClick={handleSendOTP}
                      disabled={aadhaarNumber.length !== 12}
                    >
                      Send OTP
                      <Smartphone className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <>
                      <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          OTP sent to mobile number ending in **{aadhaarNumber.slice(-4)}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Enter OTP</label>
                        <input
                          type="text"
                          maxLength={6}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                          placeholder="6-digit OTP"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                        />
                      </div>

                      <Button
                        className="w-full bg-white text-black hover:bg-white/90"
                        onClick={handleVerifyOTP}
                        disabled={otp.length !== 6}
                      >
                        Verify OTP
                        <CheckCircle2 className="w-4 h-4 ml-2" />
                      </Button>
                    </>
                  )}

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Protected by 256-bit encryption
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 'documents' && (
              <motion.div
                key="documents"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-center">Upload Documents</h2>
                <p className="text-gray-400 text-center mb-8">
                  Upload clear photos of your Aadhaar card
                </p>

                <div className="space-y-4">
                  {/* Aadhaar Front */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-white/60" />
                        <div>
                          <h3 className="font-semibold">Aadhaar Front Side</h3>
                          <p className="text-sm text-gray-400">Photo or PDF</p>
                        </div>
                      </div>
                      {uploadedDocs.aadhaarFront && (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={() => handleFileUpload('aadhaarFront')}
                        className="hidden"
                      />
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-white/40 transition-colors">
                        <Upload className="w-8 h-8 text-white/40 mx-auto mb-2" />
                        <p className="text-sm text-gray-400">
                          {uploadedDocs.aadhaarFront ? 'File uploaded ✓' : 'Click to upload'}
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Aadhaar Back */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-white/60" />
                        <div>
                          <h3 className="font-semibold">Aadhaar Back Side</h3>
                          <p className="text-sm text-gray-400">Photo or PDF</p>
                        </div>
                      </div>
                      {uploadedDocs.aadhaarBack && (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={() => handleFileUpload('aadhaarBack')}
                        className="hidden"
                      />
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-white/40 transition-colors">
                        <Upload className="w-8 h-8 text-white/40 mx-auto mb-2" />
                        <p className="text-sm text-gray-400">
                          {uploadedDocs.aadhaarBack ? 'File uploaded ✓' : 'Click to upload'}
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Additional (Optional) */}
                  <div className="glass rounded-2xl p-6 opacity-60">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-white/60" />
                        <div>
                          <h3 className="font-semibold">Additional Document (Optional)</h3>
                          <p className="text-sm text-gray-400">PAN, License, or Portfolio</p>
                        </div>
                      </div>
                    </div>
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={() => handleFileUpload('additional')}
                        className="hidden"
                      />
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-white/40 transition-colors">
                        <Upload className="w-6 h-6 text-white/40 mx-auto mb-2" />
                        <p className="text-sm text-gray-400">Optional - Upload for higher trust score</p>
                      </div>
                    </label>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-white text-black hover:bg-white/90"
                  onClick={handleProceed}
                  disabled={!canProceed()}
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {currentStep === 'selfie' && (
              <motion.div
                key="selfie"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-center">Upload Your Photo</h2>
                <p className="text-gray-400 text-center mb-8">
                  We'll match this with your Aadhaar photo using AI
                </p>

                <div className="glass rounded-2xl p-8">
                  {/* Upload Area */}
                  <label className="block cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={() => handleFileUpload('selfie')}
                      className="hidden"
                    />
                    <div className="aspect-square max-w-md mx-auto rounded-2xl bg-white/5 border-2 border-dashed border-white/20 hover:border-white/40 transition-all flex flex-col items-center justify-center mb-6 p-8">
                      {!uploadedDocs.selfie ? (
                        <>
                          <Upload className="w-16 h-16 text-white/40 mb-4" />
                          <p className="text-white font-semibold mb-2">Click to upload your photo</p>
                          <p className="text-gray-400 text-sm text-center">
                            JPG, PNG or JPEG (Max 5MB)
                          </p>
                        </>
                      ) : (
                        <div className="text-center">
                          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                          <p className="text-green-400 font-semibold mb-2">Photo uploaded!</p>
                          <p className="text-gray-400 text-sm">Click to change photo</p>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Tips */}
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div className="text-sm text-blue-300">
                        <p className="font-semibold mb-1">Tips for best results:</p>
                        <ul className="list-disc list-inside space-y-1 text-blue-300/80">
                          <li>Face clearly visible</li>
                          <li>Good lighting</li>
                          <li>Plain background preferred</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Button
                    className="w-full bg-white text-black hover:bg-white/90"
                    onClick={handleProceed}
                    disabled={!canProceed()}
                  >
                    Complete Verification
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-4 border-white/20 border-t-white"
                  />
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Verifying...</h2>
                <p className="text-xl text-gray-400">
                  AI is analyzing your documents
                </p>
              </motion.div>
            )}

            {currentStep === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-400" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4">Verified! 🎉</h2>
                <p className="text-xl text-gray-400 mb-4">
                  Your identity has been verified
                </p>
                <div className="glass rounded-2xl p-6 inline-block">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <div className="text-left">
                      <p className="font-semibold">Trust Score: 95/100</p>
                      <p className="text-sm text-gray-400">Excellent standing</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}