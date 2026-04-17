import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { DisputeResolutionModal } from './DisputeResolutionModal';

interface DisputeCenterProps {
  disputes: any[];
}

export function DisputeCenter({ disputes }: DisputeCenterProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="glass rounded-2xl p-8 border border-white/5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Dispute Center</h2>
          <Button variant="outline" size="sm" onClick={() => setShowModal(true)}>
            Raise Dispute
          </Button>
        </div>

        {disputes.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Disputes</h3>
            <p className="text-gray-400">
              You have a clean record! Keep up the great work.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {disputes.map((dispute, idx) => (
              <motion.div
                key={dispute.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-xl p-6 border border-white/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      dispute.status === 'resolved' 
                        ? 'bg-white/10' 
                        : dispute.status === 'open'
                        ? 'bg-white/5'
                        : 'bg-white/5'
                    }`}>
                      {dispute.status === 'resolved' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : dispute.status === 'open' ? (
                        <AlertCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{dispute.title}</h3>
                      <p className="text-sm text-gray-400">{dispute.description}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    dispute.status === 'resolved'
                      ? 'bg-white/10 text-white'
                      : 'bg-white/5 text-gray-400'
                  }`}>
                    {dispute.status}
                  </div>
                </div>
                <div className="text-xs text-gray-500">{dispute.date}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <DisputeResolutionModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
