"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Award } from "lucide-react";
import type { TranslationType } from "@/lib/translations";

interface StatsSectionProps {
  t: TranslationType;
}

export default function StatsSection({ t }: StatsSectionProps) {
  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: t.stats?.buildings || "Tòa nhà",
      description: t.stats?.buildingsDesc || "Đã triển khai thành công",
    },
    {
      icon: Users,
      number: "1M+",
      label: t.stats?.users || "Người dùng",
      description: t.stats?.usersDesc || "Tin tưởng sử dụng hàng ngày",
    },
    {
      icon: TrendingUp,
      number: "99.9%",
      label: t.stats?.uptime || "Uptime",
      description: t.stats?.uptimeDesc || "Độ ổn định vượt trội",
    },
    {
      icon: Award,
      number: "50+",
      label: t.stats?.awards || "Giải thưởng",
      description: t.stats?.awardsDesc || "Công nhận quốc tế",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            {t.stats?.title || "Con Số Ấn Tượng"}
          </h2>
          <p className="text-xl text-gray-300">
            {t.stats?.subtitle || "Thành tích của chúng tôi nói lên tất cả"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl opacity-10" />
    </section>
  );
}
