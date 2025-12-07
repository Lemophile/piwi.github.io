'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNetworkWired, FaShieldAlt, FaBug, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'KrakenNet',
      description: 'Advanced DoS research platform for network security testing and vulnerability assessment. Designed for educational and research purposes to understand network attack vectors.',
      tech: ['Python', 'Scapy', 'Network Security', 'DoS Testing'],
      icon: FaNetworkWired,
      github: 'https://github.com/Lemophile/krakennet',
      demo: null,
      featured: true,
      type: 'Research',
      warning: 'For educational and research purposes only'
    },
    {
      title: 'TikTok Visibility Boost',
      description: 'Exploit-based tool for enhancing TikTok video visibility through platform vulnerabilities. Demonstrates social media security flaws.',
      tech: ['Python', 'API Exploitation', 'Social Media', 'Security Research'],
      icon: FaChartLine,
      github: 'https://github.com/Lemophile/tiktok-boost',
      demo: null,
      featured: true,
      type: 'Exploit',
      warning: 'Proof of concept for security research'
    },
    {
      title: 'Network Scanner',
      description: 'Comprehensive network scanning tool for security assessments and vulnerability discovery.',
      tech: ['Python', 'Nmap', 'Network Analysis', 'Security'],
      icon: FaShieldAlt,
      github: 'https://github.com/Lemophile/network-scanner',
      demo: null,
      featured: false,
      type: 'Tool'
    },
    {
      title: 'Exploit Framework',
      description: 'Modular exploit development framework for testing and demonstrating security vulnerabilities.',
      tech: ['Python', 'Metasploit', 'Exploit Dev', 'Security'],
      icon: FaBug,
      github: 'https://github.com/Lemophile/exploit-framework',
      demo: null,
      featured: false,
      type: 'Framework'
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
