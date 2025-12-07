'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaGitAlt, FaReact } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'React/Next.js', icon: FaReact, level: 90 },
    { name: 'TypeScript', icon: FaCode, level: 85 },
    { name: 'Node.js', icon: FaDatabase, level: 80 },
    { name: 'Mobile Dev', icon: FaMobile, level: 75 },
    { name: 'Cloud Services', icon: FaCloud, level: 70 },
    { name: 'Git/GitHub', icon: FaGitAlt, level: 95 }
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
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies. 
            I love creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-hover">
              <h2 className="text-2xl font-bold text-white mb-4">My Story</h2>
              <p className="text-gray-300 leading-relaxed">
                I started my journey in web development over 5 years ago, driven by curiosity 
                and a passion for creating things that matter. From simple websites to complex 
                web applications, I've worked on diverse projects that have helped me grow 
                both technically and professionally.
              </p>
            </div>
            
            <div className="card-hover">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Bachelor of Computer Science</h3>
                  <p className="text-gray-400">University Name • 2018 - 2022</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Full-Stack Development Bootcamp</h3>
                  <p className="text-gray-400">Tech Academy • 2022</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card-hover">
              <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Senior Full-Stack Developer</h3>
                  <p className="text-gray-400">Tech Company • 2023 - Present</p>
                  <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Led development of enterprise web applications</li>
                    <li>Mentored junior developers</li>
                    <li>Improved application performance by 40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Front-End Developer</h3>
                  <p className="text-gray-400">Startup • 2022 - 2023</p>
                  <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Built responsive user interfaces</li>
                    <li>Implemented modern design systems</li>
                    <li>Collaborated with cross-functional teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card-hover"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-center">
                <skill.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
