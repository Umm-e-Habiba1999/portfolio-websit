'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer building intelligent solutions for the modern web
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl shadow-indigo-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I am a passionate AI and Web Developer with a strong foundation in building intelligent applications. My journey began with exploring the possibilities of artificial intelligence and evolved into creating full-stack web solutions that combine functionality with beautiful design.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Currently seeking internship opportunities where I can apply my skills in Next.js, TypeScript, Python, and AI to build innovative solutions while continuing to grow as a developer.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="glass rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">2+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-500">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
