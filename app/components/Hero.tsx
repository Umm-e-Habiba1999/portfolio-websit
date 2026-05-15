'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-black to-purple-950/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            Available for Internship 2026
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            Building the <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Future of AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm an AI and Web Developer passionate about creating intelligent,
            user-friendly applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Next.js', 'TypeScript', 'Python', 'React', 'Tailwind', 'AI'].map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
