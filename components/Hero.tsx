import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaShieldAlt, FaNetworkWired, FaDownload, FaArrowDown, FaLock, FaSearch, FaBug } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse bottom-20 right-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-400 text-sm font-medium">Security Researcher</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">Piwi</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cybersecurity researcher specializing in network security, exploit development, 
            and defensive security. Creator of KrakenNet DoS research platform and 
            TikTok visibility enhancement tools.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/projects" 
              className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaNetworkWired className="w-5 h-5" />
              <span>View Projects</span>
            </Link>
            <Link 
              href="/guides" 
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaShieldAlt className="w-5 h-5" />
              <span>Security Guides</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://github.com/Lemophile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-500 to-orange-600 overflow-hidden shadow-2xl shadow-red-500/25">
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-red-400 to-orange-600 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-white text-4xl" />
                </div>
                <p className="text-gray-400 text-sm">Security Researcher</p>
              </div>
            </div>
          </div>
          
          <motion.div className="mt-8 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <FaLock className="w-4 h-4 text-red-400" />
                <span className="text-sm">Pentesting</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaSearch className="w-4 h-4 text-orange-400" />
                <span className="text-sm">OSINT</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBug className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Exploit Dev</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500"
        >
          <FaArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
