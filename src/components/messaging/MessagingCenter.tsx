import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Search, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { ConversationList } from './ConversationList';
import { ChatWindow } from './ChatWindow';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export function MessagingCenter() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'BuildTech Constructions',
      avatar: 'B',
      lastMessage: 'Great! When can you start the wiring work?',
      time: '5 min ago',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'CoolTech Solutions',
      avatar: 'C',
      lastMessage: 'The AC units have arrived. Can you come tomorrow?',
      time: '2 hours ago',
      unread: 1,
      online: true
    },
    {
      id: '3',
      name: 'HomeServices India',
      avatar: 'H',
      lastMessage: 'Thank you for the quick repair!',
      time: '1 day ago',
      unread: 0,
      online: false
    },
    {
      id: '4',
      name: 'Skyline Apartments',
      avatar: 'S',
      lastMessage: 'Monthly report looks good',
      time: '2 days ago',
      unread: 0,
      online: false
    },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5">
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Real-Time Chat
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Messages
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Communicate directly with clients and workers
              </p>
            </div>

            <Button className="gap-2">
              <Plus className="w-5 h-5" />
              New Message
            </Button>
          </div>
        </motion.div>

        {/* Messaging Interface */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversations Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 border border-white/5 sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search conversations..."
                  className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              {/* Conversations List */}
              <ConversationList
                conversations={filteredConversations}
                selectedId={selectedConversation}
                onSelect={setSelectedConversation}
              />
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <ChatWindow
                conversation={conversations.find(c => c.id === selectedConversation)!}
              />
            ) : (
              <div className="glass rounded-2xl p-12 border border-white/5 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Select a conversation
                </h3>
                <p className="text-gray-400">
                  Choose a conversation from the sidebar to start chatting
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
