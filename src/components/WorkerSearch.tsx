import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Award, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { mockWorkers } from '../data/mockData';
import { skillCategories } from '../data/skills';

export function WorkerSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(s => s !== skillId)
        : [...prev, skillId]
    );
  };

  const filteredWorkers = mockWorkers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         worker.primarySkill.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 ||
                         worker.skills.some(s => selectedSkills.includes(s));
    return matchesSearch && matchesSkills;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Find Workers</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or skill..."
              className="pl-10 pr-4 py-2 w-80 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white hover:border-orange-500 transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700"
        >
          <h3 className="font-semibold text-white mb-4">Filter by Skills</h3>
          <div className="flex flex-wrap gap-2">
            {Object.values(skillCategories).flat().slice(0, 12).map((skill) => (
              <button
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedSkills.includes(skill.id)
                    ? 'border-orange-500 bg-orange-500/20 text-white'
                    : 'border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </button>
            ))}
          </div>
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className="mt-4 text-sm text-orange-400 hover:text-orange-300"
            >
              Clear all filters
            </button>
          )}
        </motion.div>
      )}

      {/* Results Count */}
      <div className="text-slate-400">
        Found {filteredWorkers.length} worker{filteredWorkers.length !== 1 ? 's' : ''}
      </div>

      {/* Worker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkers.map((worker) => (
          <motion.div
            key={worker.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-orange-500 transition-all cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                {worker.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-lg flex items-center gap-2 mb-1">
                  {worker.name}
                  {worker.verified && (
                    <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  )}
                </h3>
                <p className="text-slate-400 text-sm">{worker.primarySkill}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {worker.location}
                </p>
              </div>
            </div>

            {/* Trust Score Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-xl">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-semibold">
                  Trust Score: {worker.trustScore}/100
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="font-semibold">{worker.rating}</span>
                </div>
                <div className="text-xs text-slate-400">{worker.reviewCount} reviews</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-white font-semibold mb-1">{worker.completedGigs}</div>
                <div className="text-xs text-slate-400">Gigs completed</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 mb-4 line-clamp-2">{worker.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {worker.skills.slice(0, 3).map((skillId) => {
                const skill = Object.values(skillCategories)
                  .flat()
                  .find(s => s.id === skillId);
                return skill ? (
                  <span
                    key={skillId}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                  >
                    {skill.icon} {skill.name}
                  </span>
                ) : null;
              })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
              <div className="flex items-center gap-1">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-xl font-bold text-green-400">₹{worker.hourlyRate}</span>
                <span className="text-sm text-slate-400">/hr</span>
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium group-hover:scale-105">
                Contact
              </button>
            </div>

            {/* Availability Badge */}
            {worker.availability && (
              <div className="mt-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  worker.availability === 'Available'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    worker.availability === 'Available' ? 'bg-green-400' : 'bg-yellow-400'
                  }`} />
                  {worker.availability}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div className="bg-slate-800 rounded-xl p-12 border border-slate-700 text-center">
          <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No workers found</h3>
          <p className="text-slate-400">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
