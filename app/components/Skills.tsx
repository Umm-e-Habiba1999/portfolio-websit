'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', icon: '⚡', color: 'text-white' },
  { name: 'TypeScript', icon: '📘', color: 'text-blue-400' },
  { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan-400' },
  { name: 'React', icon: '⚛️', color: 'text-blue-500' },
  { name: 'AI/ML', icon: '🤖', color: 'text-green-400' },
  { name: 'JavaScript', icon: '📝', color: 'text-yellow-300' },
  { name: 'HTML/CSS', icon: ' Markup', color: 'text-orange-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-indigo-950/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of technologies I use to build modern, intelligent applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group cursor-default"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className={`text-lg font-semibold ${skill.color}`}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Technical <span className="text-indigo-400">Proficiency</span>
          </h3>
          <div className="space-y-5">
            {[
              { skill: 'Next.js & React', level: 90, color: 'from-indigo-500 to-purple-500' },
              { skill: 'TypeScript', level: 85, color: 'from-blue-500 to-cyan-500' },
              { skill: 'Python & AI', level: 80, color: 'from-green-500 to-emerald-500' },
              { skill: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-blue-500' },
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-200">{item.skill}</span>
                  <span className="text-indigo-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-3 rounded-full shadow-lg shadow-${item.color.split('-')[1]}-500/30`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
