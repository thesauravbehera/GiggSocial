import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MoreVertical, CheckCircle, XCircle, Shield } from 'lucide-react';
import { Button } from '../ui/button';

interface User {
  id: string;
  name: string;
  type: 'worker' | 'employer';
  email: string;
  joinDate: string;
  status: 'active' | 'suspended' | 'pending';
  verificationLevel: 'unverified' | 'verified' | 'expert' | 'master';
  totalJobs: number;
  rating: number;
  revenue: number;
}

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'worker' | 'employer'>('all');

  const mockUsers: User[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      type: 'worker',
      email: 'rajesh@example.com',
      joinDate: '2024-01-15',
      status: 'active',
      verificationLevel: 'master',
      totalJobs: 127,
      rating: 4.9,
      revenue: 285000
    },
    {
      id: '2',
      name: 'BuildTech Constructions',
      type: 'employer',
      email: 'contact@buildtech.com',
      joinDate: '2024-02-01',
      status: 'active',
      verificationLevel: 'verified',
      totalJobs: 45,
      rating: 4.7,
      revenue: 850000
    },
    {
      id: '3',
      name: 'Amit Patel',
      type: 'worker',
      email: 'amit@example.com',
      joinDate: '2024-03-10',
      status: 'pending',
      verificationLevel: 'unverified',
      totalJobs: 0,
      rating: 0,
      revenue: 0
    },
    {
      id: '4',
      name: 'Suresh Verma',
      type: 'worker',
      email: 'suresh@example.com',
      joinDate: '2023-11-20',
      status: 'suspended',
      verificationLevel: 'verified',
      totalJobs: 68,
      rating: 4.2,
      revenue: 145000
    },
  ];

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || user.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleApprove = (userId: string) => {
    console.log('Approve user:', userId);
  };

  const handleSuspend = (userId: string) => {
    console.log('Suspend user:', userId);
  };

  return (
    <div>
      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="glass rounded-2xl p-6 border border-white/5">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              {(['all', 'worker', 'employer'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    filterType === type
                      ? 'bg-white text-black'
                      : 'glass text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl border border-white/5 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Verification
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Jobs
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Rating
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-all"
                >
                  <td className="p-6">
                    <div>
                      <div className="font-semibold text-white mb-1">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 inline-block">
                      {user.type}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      user.status === 'active'
                        ? 'bg-white/10 text-white'
                        : user.status === 'suspended'
                        ? 'bg-red-500/20 text-red-300'
                        : 'bg-white/5 text-gray-400'
                    }`}>
                      {user.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {user.status === 'suspended' && <XCircle className="w-3 h-3" />}
                      {user.status}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      user.verificationLevel === 'master'
                        ? 'bg-white/10 text-white'
                        : user.verificationLevel === 'expert'
                        ? 'bg-white/10 text-white'
                        : user.verificationLevel === 'verified'
                        ? 'bg-white/5 text-gray-300'
                        : 'bg-white/5 text-gray-500'
                    }`}>
                      <Shield className="w-3 h-3" />
                      {user.verificationLevel}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="text-white font-semibold">{user.totalJobs}</div>
                  </td>
                  <td className="p-6">
                    <div className="text-white font-semibold">
                      {user.rating > 0 ? `${user.rating}★` : '-'}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {user.status === 'pending' && (
                        <Button
                          size="sm"
                          onClick={() => handleApprove(user.id)}
                          className="gap-1"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </Button>
                      )}
                      {user.status === 'active' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSuspend(user.id)}
                          className="gap-1"
                        >
                          <XCircle className="w-4 h-4" />
                          Suspend
                        </Button>
                      )}
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
