import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Plus, Trash2, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

export function PaymentSettings() {
  const paymentMethods = [
    { id: '1', type: 'UPI', details: 'rajkumar@paytm', primary: true },
    { id: '2', type: 'Bank Account', details: '****1234 - HDFC Bank', primary: false },
    { id: '3', type: 'Card', details: '****5678 - Visa', primary: false },
  ];

  return (
    <div className="space-y-8">
      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Payment Methods</h2>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Method
          </Button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method, idx) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-between p-4 glass rounded-xl border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{method.type}</h3>
                    {method.primary && (
                      <div className="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Primary
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{method.details}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!method.primary && (
                  <Button variant="outline" size="sm">Set as Primary</Button>
                )}
                <button className="p-2 rounded-lg hover:bg-red-500/10 transition-all">
                  <Trash2 className="w-4 h-4 text-red-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Withdrawal Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Withdrawal Preferences</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Minimum Withdrawal Amount
            </label>
            <select className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">
              <option value="1000" className="bg-black">₹1,000</option>
              <option value="2500" className="bg-black">₹2,500</option>
              <option value="5000" className="bg-black">₹5,000</option>
              <option value="10000" className="bg-black">₹10,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Auto-withdrawal
            </label>
            <select className="w-full h-12 px-4 glass rounded-xl text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">
              <option value="manual" className="bg-black">Manual - I'll withdraw manually</option>
              <option value="weekly" className="bg-black">Weekly - Every Monday</option>
              <option value="monthly" className="bg-black">Monthly - 1st of every month</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
        <div className="space-y-3">
          {[
            { date: '2 days ago', description: 'Withdrawal to UPI', amount: -15000, status: 'completed' },
            { date: '5 days ago', description: 'Payment received - BuildTech', amount: 18000, status: 'completed' },
            { date: '1 week ago', description: 'Payment received - CoolTech', amount: 27000, status: 'completed' },
          ].map((transaction, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5">
              <div>
                <div className="text-white font-medium mb-1">{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${transaction.amount > 0 ? 'text-white' : 'text-gray-400'}`}>
                  {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                </div>
                <div className="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white">
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-6">View All Transactions</Button>
      </motion.div>
    </div>
  );
}
