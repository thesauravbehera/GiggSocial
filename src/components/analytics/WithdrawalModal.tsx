import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wallet, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface WithdrawalModalProps {
  onClose: () => void;
  availableBalance: number;
}

export function WithdrawalModal({ onClose, availableBalance }: WithdrawalModalProps) {
  const [amount, setAmount] = useState('');
  const [accountType, setAccountType] = useState('bank');

  const handleWithdraw = () => {
    // Handle withdrawal
    console.log({ amount, accountType });
    onClose();
  };

  const withdrawalAmount = parseFloat(amount) || 0;
  const processingFee = withdrawalAmount * 0.02; // 2% fee
  const finalAmount = withdrawalAmount - processingFee;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full"
        >
          <div className="glass rounded-3xl p-8 border border-white/10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border border-white/5">
                  <Wallet className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Withdraw Funds</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Request Withdrawal</h2>
                <p className="text-gray-400">
                  Available: ₹{availableBalance.toLocaleString()}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Withdrawal Amount *
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  max={availableBalance}
                  className="w-full h-16 px-6 glass rounded-xl text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 text-3xl font-bold"
                />
                <div className="flex justify-between mt-3">
                  {[25, 50, 75, 100].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => setAmount(((availableBalance * percent) / 100).toString())}
                      className="px-4 py-2 rounded-lg glass text-sm text-gray-400 hover:text-white border border-white/5 hover:bg-white/5 transition-all"
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Withdrawal Method *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'bank', label: '🏦 Bank Transfer', time: '1-2 days' },
                    { value: 'upi', label: '💳 UPI', time: 'Instant' },
                  ].map((method) => (
                    <button
                      key={method.value}
                      onClick={() => setAccountType(method.value)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        accountType === method.value
                          ? 'bg-white/10 border-white/20'
                          : 'glass border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="font-medium text-white mb-1">{method.label}</div>
                      <div className="text-xs text-gray-400">{method.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fee Breakdown */}
              {withdrawalAmount > 0 && (
                <div className="glass rounded-xl p-4 border border-white/5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Withdrawal Amount</span>
                    <span className="text-white font-semibold">₹{withdrawalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Processing Fee (2%)</span>
                    <span className="text-gray-400">-₹{processingFee.toLocaleString()}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">You'll Receive</span>
                    <span className="text-2xl font-bold text-white">₹{finalAmount.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Warning */}
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Important Information</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Withdrawals are processed within 24-48 hours</li>
                      <li>• Minimum withdrawal amount: ₹500</li>
                      <li>• 2% processing fee applies to all withdrawals</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  onClick={handleWithdraw}
                  disabled={!amount || withdrawalAmount < 500 || withdrawalAmount > availableBalance}
                  className="flex-1"
                >
                  Request Withdrawal
                </Button>
                <Button
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
