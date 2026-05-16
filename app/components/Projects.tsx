'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Learning Book with Chatbot',
    description: 'An interactive AI learning book combined with a chatbot to help users understand AI concepts in a simple way. Includes a deployed web interface and chatbot integration. It also supports Urdu language translation, allowing users to learn in Urdu, and the chatbot works as a translator as well.',
    tech: ['Python', 'TypeScript', 'OpenAI API', 'Docusaurus'],
    gradient: 'from-indigo-600 to-purple-700',
    image: 'AI',
    link: 'https://hackathon1-ashen.vercel.app/',
  },
  {
    title: 'Interactive Resume Builder',
    description: 'A simple yet modern resume website built using TypeScript. It allows users to showcase their profile, skills, and experience in a clean and responsive layout.',
    tech: ['TypeScript', 'HTML', 'CSS'],
    gradient: 'from-purple-600 to-pink-700',
    image: 'CV',
    link: 'https://milestone2-resumebyummehabiba1.vercel.app/',
  },
  {
    title: 'E-commerce Frontend',
    description: 'A fully responsive e-commerce platform with product listings, cart functionality, and checkout flow.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    gradient: 'from-cyan-600 to-blue-700',
    image: 'Shop',
    link: 'https://your-ecommerce-link.com',
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
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
