import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle, Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface Payment {
  id: string;
  title: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  type: 'credit' | 'debit';
}

interface PaymentHistoryProps {
  payments: Payment[];
  userRole: 'worker' | 'employer';
}

export function PaymentHistory({ payments, userRole }: PaymentHistoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass rounded-2xl p-8 border border-white/5"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Payment History</h2>
          <p className="text-gray-400">All transactions and earnings</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download Statement
        </Button>
      </div>

      <div className="space-y-3">
        {payments.map((payment, idx) => (
          <motion.div
            key={payment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="glass glass-hover rounded-xl p-4 border border-white/5 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  payment.type === 'credit' 
                    ? 'bg-white/10' 
                    : 'bg-white/5'
                }`}>
                  {payment.type === 'credit' ? (
                    <ArrowDownRight className="w-6 h-6 text-white" />
                  ) : (
                    <ArrowUpRight className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-gray-200 transition-colors">
                    {payment.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{payment.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      {payment.status === 'completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span className="text-white">Completed</span>
                        </>
                      ) : payment.status === 'pending' ? (
                        <>
                          <Clock className="w-4 h-4" />
                          <span>Pending</span>
                        </>
                      ) : (
                        <span className="text-red-400">Failed</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  payment.type === 'credit' ? 'text-white' : 'text-gray-500'
                }`}>
                  {payment.type === 'credit' ? '+' : '-'}₹{Math.abs(payment.amount).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {payment.type === 'credit' ? 'Received' : 'Paid'}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-6 text-center">
        <Button variant="outline">
          Load More Transactions
        </Button>
      </div>
    </motion.div>
  );
}
