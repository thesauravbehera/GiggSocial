import React from 'react';
import { motion } from 'motion/react';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ConversationList({ conversations, selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="space-y-2">
      {conversations.map((conv, idx) => (
        <motion.button
          key={conv.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          onClick={() => onSelect(conv.id)}
          className={`w-full p-4 rounded-xl text-left transition-all ${
            selectedId === conv.id
              ? 'bg-white/10 border border-white/20'
              : 'hover:bg-white/5 border border-transparent'
          }`}
        >
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{conv.avatar}</span>
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-black" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-semibold text-white truncate">{conv.name}</h4>
                <span className="text-xs text-gray-500 shrink-0 ml-2">{conv.time}</span>
              </div>
              <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
            </div>

            {/* Unread Badge */}
            {conv.unread > 0 && (
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-black">{conv.unread}</span>
              </div>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
