'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearch, FaLock, FaBrain, FaBook, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Guides() {
  const guides = [
    {
      title: 'Operational Security (OpSec)',
      description: 'Complete guide to maintaining operational security in digital environments. Learn how to protect your identity, communications, and activities.',
      icon: FaShieldAlt,
      topics: ['Digital anonymity', 'Secure communications', 'Identity protection', 'Counter-surveillance'],
      level: 'Intermediate',
      readTime: '15 min',
      href: '/guides/opsec'
    },
    {
      title: 'Open Source Intelligence (OSINT)',
      description: 'Master the art of gathering intelligence from publicly available sources. Learn advanced techniques for information gathering and analysis.',
      icon: FaSearch,
      topics: ['Social media analysis', 'Geolocation tracking', 'Document analysis', 'Tool automation'],
      level: 'Beginner',
      readTime: '20 min',
      href: '/guides/osint'
    },
    {
      title: 'Pentesting Fundamentals',
      description: 'Essential guide to penetration testing methodologies and techniques. Learn how to identify and exploit security vulnerabilities.',
      icon: FaLock,
      topics: ['Reconnaissance', 'Scanning', 'Exploitation', 'Post-exploitation'],
      level: 'Advanced',
      readTime: '25 min',
      href: '/guides/pentesting'
    },
    {
      title: 'Machine Learning for Security',
      description: 'Apply machine learning techniques to cybersecurity challenges. Learn how to build intelligent security systems.',
      icon: FaBrain,
      topics: ['Anomaly detection', 'Threat classification', 'Pattern recognition', 'Automated defense'],
      level: 'Advanced',
      readTime: '30 min',
      href: '/guides/ml-security'
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security <span className="text-gradient">Guides</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides covering essential cybersecurity topics. 
            From basic concepts to advanced techniques, learn from practical examples and real-world scenarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-500/20 rounded-lg">
                  <guide.icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(guide.level)}`}>
                    {guide.level}
                  </span>
                  <span className="text-gray-400 text-xs">{guide.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {guide.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {guide.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {guide.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                  {guide.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{guide.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <Link
                href={guide.href}
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Read Guide</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <FaBook className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-300 mb-4">
              More detailed guides with practical examples, code snippets, and hands-on exercises are in development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <span>Request Specific Topics</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
