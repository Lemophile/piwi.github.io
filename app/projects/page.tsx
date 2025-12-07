'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: FaReact,
      github: 'https://github.com/Lemophile/ecommerce',
      demo: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      icon: FaNodeJs,
      github: 'https://github.com/Lemophile/task-manager',
      demo: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
      icon: FaPython,
      github: 'https://github.com/Lemophile/weather-app',
      demo: 'https://weather-demo.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, user authentication, and responsive design.',
      tech: ['Next.js', 'MDX', 'Prisma', 'Tailwind'],
      icon: FaDatabase,
      github: 'https://github.com/Lemophile/blog-platform',
      demo: 'https://blog-demo.com',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with smooth animations, dark mode, and optimized performance.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      icon: FaReact,
      github: 'https://github.com/Lemophile/portfolio',
      demo: 'https://lemophile.github.io',
      featured: false
    },
    {
      title: 'API REST Service',
      description: 'RESTful API service with authentication, rate limiting, and comprehensive documentation.',
      tech: ['Node.js', 'Express', 'JWT', 'Swagger'],
      icon: FaNodeJs,
      github: 'https://github.com/Lemophile/api-service',
      demo: null,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-8 h-8 text-blue-400" />
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-6 h-6 text-blue-400" />
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Interested in working together?</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
