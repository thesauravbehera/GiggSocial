import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import { Button } from '../ui/Button';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

interface ChatWindowProps {
  conversation: Conversation;
}

export function ChatWindow({ conversation }: ChatWindowProps) {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: '1',
      sender: 'them',
      text: 'Hi! I saw your profile and I\'m interested in hiring you for electrical work.',
      time: '10:30 AM'
    },
    {
      id: '2',
      sender: 'me',
      text: 'Hello! Thank you for reaching out. I\'d be happy to help. What kind of work do you need?',
      time: '10:32 AM'
    },
    {
      id: '3',
      sender: 'them',
      text: 'We need complete wiring for a 2BHK apartment in Andheri. Can you give me a quote?',
      time: '10:35 AM'
    },
    {
      id: '4',
      sender: 'me',
      text: 'Sure! Based on 2BHK, it would be around ₹15,000-18,000. I can visit the site for exact estimate.',
      time: '10:40 AM'
    },
    {
      id: '5',
      sender: 'them',
      text: 'That sounds good. When can you start the work?',
      time: '10:45 AM'
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      console.log('Sending:', message);
      setMessage('');
    }
  };

  return (
    <div className="glass rounded-2xl border border-white/5 flex flex-col h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{conversation.avatar}</span>
            </div>
            {conversation.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-black" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-white">{conversation.name}</h3>
            <p className="text-sm text-gray-400">
              {conversation.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
            <Phone className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
            <Video className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
            <MoreVertical className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
              <div className={`rounded-2xl px-4 py-3 ${
                msg.sender === 'me'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white'
              }`}>
                <p className="leading-relaxed">{msg.text}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${
                msg.sender === 'me' ? 'text-right' : 'text-left'
              }`}>
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-white/5">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
            <Paperclip className="w-5 h-5 text-gray-400" />
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 h-12 px-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="gap-2"
          >
            <Send className="w-5 h-5" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
