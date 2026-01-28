'use client';

import { motion } from 'framer-motion';
import { Smartphone, MapPin, Navigation, ChevronRight } from 'lucide-react';
import type { TranslationType } from '@/lib/translations';

interface HowItWorksSectionProps {
  t: TranslationType;
}

export default function HowItWorksSection({ t }: HowItWorksSectionProps) {
  const icons = [Smartphone, MapPin, Navigation];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-white-900 font-semibold">{t.howItWorks.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white-900">
                  {t.howItWorks.steps[index].title}
                </h3>
                <p className="text-white-800 font-semibold leading-relaxed">
                  {t.howItWorks.steps[index].description}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-amber-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
