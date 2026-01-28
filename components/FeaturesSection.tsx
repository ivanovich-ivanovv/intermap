"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Smartphone,
  Shield,
  Zap,
  Clock,
} from "lucide-react";
import type { TranslationType } from "@/lib/translations";

interface FeaturesSectionProps {
  t: TranslationType;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  const features = [
    { icon: MapPin, color: "orange" },
    { icon: Navigation, color: "amber" },
    { icon: Smartphone, color: "orange" },
    { icon: Shield, color: "amber" },
    { icon: Zap, color: "orange" },
    { icon: Clock, color: "amber" },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {t.features.title}
          </h2>
          <p className="text-xl text-white-900 font-semibold">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className=" backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white-900">
                  {t.features.list[index].title}
                </h3>
                <p className="text-white-800 font-semibold leading-relaxed">
                  {t.features.list[index].description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
