import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';

interface Dispute {
  id: string;
  title: string;
  type: 'payment' | 'quality' | 'timeline' | 'behavior';
  submittedBy: string;
  against: string;
  amount: number;
  status: 'pending' | 'investigating' | 'resolved';
  priority: 'high' | 'medium' | 'low';
  submittedDate: string;
  description: string;
}

export function DisputeManagement() {
  const mockDisputes: Dispute[] = [
    {
      id: 'D-1245',
      title: 'Payment not received',
      type: 'payment',
      submittedBy: 'Rajesh Kumar (Worker)',
      against: 'BuildTech Constructions',
      amount: 18000,
      status: 'pending',
      priority: 'high',
      submittedDate: '2 hours ago',
      description: 'Job completed 5 days ago but payment not yet received'
    },
    {
      id: 'D-1244',
      title: 'Work quality issue',
      type: 'quality',
      submittedBy: 'CoolTech Solutions (Employer)',
      against: 'Amit Patel',
      amount: 27000,
      status: 'investigating',
      priority: 'medium',
      submittedDate: '1 day ago',
      description: 'AC installation has issues, needs rework'
    },
    {
      id: 'D-1243',
      title: 'Delayed completion',
      type: 'timeline',
      submittedBy: 'HomeServices India',
      against: 'Suresh Verma',
      amount: 4500,
      status: 'resolved',
      priority: 'low',
      submittedDate: '3 days ago',
      description: 'Work completed 2 days late - Resolved with partial refund'
    },
  ];

  const handleResolve = (disputeId: string) => {
    console.log('Resolve dispute:', disputeId);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Pending', count: 23, color: 'red', icon: AlertTriangle },
            { label: 'Investigating', count: 12, color: 'yellow', icon: Clock },
            { label: 'Resolved', count: 145, color: 'white', icon: CheckCircle },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                stat.color === 'red' ? 'bg-red-500/20' :
                stat.color === 'yellow' ? 'bg-yellow-500/20' :
                'bg-white/10'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'red' ? 'text-red-300' :
                  stat.color === 'yellow' ? 'text-yellow-300' :
                  'text-white'
                }`} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-4xl font-bold text-white">{stat.count}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Disputes List */}
      <div className="space-y-4">
        {mockDisputes.map((dispute, idx) => (
          <motion.div
            key={dispute.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  dispute.priority === 'high' ? 'bg-red-500/20' :
                  dispute.priority === 'medium' ? 'bg-yellow-500/20' :
                  'bg-white/5'
                }`}>
                  <Scale className={`w-6 h-6 ${
                    dispute.priority === 'high' ? 'text-red-300' :
                    dispute.priority === 'medium' ? 'text-yellow-300' :
                    'text-white'
                  }`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{dispute.title}</h3>
                    <span className="text-sm text-gray-500">#{dispute.id}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">{dispute.submittedBy}</span>
                      <span className="mx-2">vs</span>
                      <span className="text-white font-medium">{dispute.against}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300">
                      {dispute.type}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3">{dispute.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">Amount: <span className="text-white font-semibold">₹{dispute.amount.toLocaleString()}</span></span>
                    <span className="text-gray-500">{dispute.submittedDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  dispute.status === 'pending'
                    ? 'bg-red-500/20 text-red-300'
                    : dispute.status === 'investigating'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-white/10 text-white'
                }`}>
                  {dispute.status}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  dispute.priority === 'high'
                    ? 'bg-red-500/20 text-red-300'
                    : dispute.priority === 'medium'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-white/5 text-gray-400'
                }`}>
                  {dispute.priority} priority
                </div>
              </div>
            </div>

            {dispute.status !== 'resolved' && (
              <div className="flex gap-3 pt-4 border-t border-white/5">
                <Button size="sm" onClick={() => handleResolve(dispute.id)}>
                  View Details & Resolve
                </Button>
                <Button size="sm" variant="outline">
                  Contact Parties
                </Button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
