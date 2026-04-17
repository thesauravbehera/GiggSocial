import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function PlatformAnalytics() {
  const userGrowthData = [
    { month: 'Jan', workers: 1200, employers: 350 },
    { month: 'Feb', workers: 1850, employers: 480 },
    { month: 'Mar', workers: 2600, employers: 620 },
    { month: 'Apr', workers: 3450, employers: 780 },
    { month: 'May', workers: 4280, employers: 920 },
    { month: 'Jun', workers: 5120, employers: 1100 },
  ];

  const jobsData = [
    { month: 'Jan', posted: 420, completed: 380 },
    { month: 'Feb', posted: 580, completed: 520 },
    { month: 'Mar', posted: 720, completed: 680 },
    { month: 'Apr', posted: 890, completed: 820 },
    { month: 'May', posted: 1050, completed: 980 },
    { month: 'Jun', posted: 1220, completed: 1150 },
  ];

  return (
    <div className="space-y-8">
      {/* User Growth Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#fff'
              }}
            />
            <Line type="monotone" dataKey="workers" stroke="#fff" strokeWidth={2} />
            <Line type="monotone" dataKey="employers" stroke="#999" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Jobs Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/5"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Jobs Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#fff'
              }}
            />
            <Bar dataKey="posted" fill="#fff" />
            <Bar dataKey="completed" fill="#666" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Avg Response Time', value: '2.3 hrs', change: '-15%' },
          { label: 'Job Success Rate', value: '94%', change: '+3%' },
          { label: 'User Retention', value: '87%', change: '+5%' },
          { label: 'Platform Uptime', value: '99.9%', change: '0%' },
        ].map((metric, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 border border-white/5">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              {metric.label}
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <div className={`text-sm font-semibold ${
              metric.change.startsWith('+') ? 'text-white' : 
              metric.change.startsWith('-') ? 'text-white' : 
              'text-gray-500'
            }`}>
              {metric.change} vs last month
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
