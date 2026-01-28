'use client';

import { motion, MotionValue } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { TranslationType } from '@/lib/translations';

interface HeroSectionProps {
  t: TranslationType;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
}

export default function HeroSection({ t, heroY, heroOpacity }: HeroSectionProps) {
  return (
    <motion.section 
      style={{ y: heroY, opacity: heroOpacity }}
      className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                {t.hero.title}
              </span>
              <br />
              <span className="text-white drop-shadow-lg">{t.hero.subtitle}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto drop-shadow-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center space-x-2"
            >
              <span>{t.hero.cta}</span>
              <ChevronRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full font-semibold text-lg shadow-2xl hover:bg-white transition-all border-2 border-white/50"
            >
              {t.hero.learnMore}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
