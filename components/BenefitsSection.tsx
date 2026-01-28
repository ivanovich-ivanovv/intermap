'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Globe, Building2 } from 'lucide-react';
import type { TranslationType } from '@/lib/translations';

interface BenefitsSectionProps {
  t: TranslationType;
}

export default function BenefitsSection({ t }: BenefitsSectionProps) {
  const icons = [Clock, Users, Globe, Building2];

  return (
    <section id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {t.benefits.title}
          </h2>
          <p className="text-xl text-white-900 font-semibold">{t.benefits.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex items-start space-x-4 p-6 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white-900">
                  {t.benefits.list[index].title}
                </h3>
                <p className="text-white-800 font-semibold leading-relaxed">
                  {t.benefits.list[index].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
