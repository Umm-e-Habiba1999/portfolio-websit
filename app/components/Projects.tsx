'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot UI',
    description: 'A modern conversational AI interface with real-time responses, smart suggestions, and an intuitive user experience.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind'],
    gradient: 'from-indigo-600 to-purple-700',
    image: 'AI',
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning personal portfolio showcasing projects, skills, and contact information with smooth animations.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-purple-600 to-pink-700',
    image: 'Port',
  },
  {
    title: 'E-commerce Frontend',
    description: 'A fully responsive e-commerce platform with product listings, cart functionality, and checkout flow.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    gradient: 'from-cyan-600 to-blue-700',
    image: 'Shop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-indigo-600/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my best work demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-7xl font-bold text-white/20">{project.image}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  View Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
