import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../../data/skills';

interface SkillsSectionProps {
  skills: string[];
  verified: boolean;
}

export function SkillsSection({ skills, verified }: SkillsSectionProps) {
  const getSkillDetails = (skillId: string) => {
    for (const category of Object.values(skillCategories)) {
      const skill = category.find(s => s.id === skillId);
      if (skill) return skill;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 uppercase">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skillId, idx) => {
          const skill = getSkillDetails(skillId);
          if (!skill) return null;

          return (
            <motion.div
              key={skillId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-white border-[3px] border-black p-6 shadow-[4px_4px_0px_#0a0a0a]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{skill.icon}</div>
                {verified ? (
                  <div className="bg-[#00cc66] text-white px-3 py-1 text-xs font-bold uppercase border-[2px] border-black">
                    Verified
                  </div>
                ) : (
                  <div className="bg-[#e0e0e0] text-black px-3 py-1 text-xs font-bold uppercase border-[2px] border-black">
                    Not Verified
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 uppercase">{skill.name}</h3>
              <div className="text-[#888888] mb-4">
                Market avg: ₹{skill.avgRate}/hr
              </div>
              
              {!verified && (
                <button className="w-full bg-black text-white px-4 py-3 text-sm font-bold uppercase border-[3px] border-black hover:bg-[#ff4d00] transition-colors">
                  Take Verification Quiz
                </button>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Add More Skills CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <button className="w-full md:w-auto bg-white text-black px-8 py-4 text-lg font-bold uppercase border-[3px] border-black shadow-[6px_6px_0px_#0a0a0a] hover:shadow-[3px_3px_0px_#0a0a0a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
          + Add More Skills
        </button>
      </motion.div>
    </motion.div>
  );
}
