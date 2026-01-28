"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { TranslationType } from "@/lib/translations";

interface ContactSectionProps {
  t: TranslationType;
  lang?: "vi" | "en";
}

export default function ContactSection({ t, lang = "vi" }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      titleEn: "Address",
      content: "Đại học FPT, 600, Nguyễn Văn Cừ, An Bình, Ninh Kiều, Thành Phố Cần Thơ",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      titleEn: "Phone",
      content: "+84 123 456 789",
    },
    {
      icon: Mail,
      title: "Email",
      titleEn: "Email",
      content: "contact@intermap.vn",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      titleEn: "Working Hours",
      content: "Thứ 2 - Thứ 6: 8:00 - 18:00",
      contentEn: "Mon - Fri: 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {t.contact?.title || "Liên Hệ Với Chúng Tôi"}
          </h2>
          <p className="text-xl text-white-800 font-semibold">
            {t.contact?.subtitle || "Chúng tôi sẵn sàng hỗ trợ bạn 24/7"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {lang === "vi" ? info.title : info.titleEn}
                    </h3>
                    <p className="text-white font-medium">
                      {lang === "vi" ? info.content : (info.contentEn || info.content)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/95 rounded-2xl shadow-2xl overflow-hidden h-full min-h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0533542569992!2d105.72985667485877!3d10.012451790093609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2sFPT%20University!5e0!3m2!1svi!2s!4v1769624029179!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
