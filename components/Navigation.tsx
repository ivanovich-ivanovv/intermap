'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import type { Language, TranslationType } from '@/lib/translations';

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  t: TranslationType;
}

export default function Navigation({ lang, setLang, mobileMenuOpen, setMobileMenuOpen, t }: NavigationProps) {
  const { scrollY } = useScroll();
  
  // Transparency increases as user scrolls
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ 
        backgroundColor: `rgba(255, 255, 255, ${navOpacity})`,
        backdropFilter: `blur(${navBlur}px)`,
        height: navHeight
      }}
      className="fixed top-0 w-full z-50 border-b border-white/20 transition-all duration-300 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Simplified */}
          <motion.div 
            style={{ scale: logoScale }}
            className="flex items-center space-x-2.5"
          >
            <Image 
              src="/images/logo.png" 
              alt="InterMap" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              InterMap
            </span>
          </motion.div>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white-700 hover:text-orange-600 transition-colors text-sm font-medium">
              {t.nav.features}
            </a>
            <a href="#how-it-works" className="text-white-700 hover:text-orange-600 transition-colors text-sm font-medium">
              {t.nav.howItWorks}
            </a>
            <a href="#benefits" className="text-white-700 hover:text-orange-600 transition-colors text-sm font-medium">
              {t.nav.benefits}
            </a>
            
            {/* Language Switcher - Minimal */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-medium hover:shadow-lg transition-shadow"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile - Minimal */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
        >
          <div className="px-6 py-6 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-orange-600 text-sm font-medium">
              {t.nav.features}
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-orange-600 text-sm font-medium">
              {t.nav.howItWorks}
            </a>
            <a href="#benefits" className="block text-gray-700 hover:text-orange-600 text-sm font-medium">
              {t.nav.benefits}
            </a>
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white w-full justify-center text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'vi' ? 'English' : 'Tiếng Việt'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
