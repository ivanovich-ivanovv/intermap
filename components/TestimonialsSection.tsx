"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { TranslationType } from "@/lib/translations";

interface TestimonialsSectionProps {
  t: TranslationType;
}

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  const controls = useAnimationControls();

  // Start animation on mount
  useEffect(() => {
    controls.start({
      x: -1600,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      }
    });
  }, [controls]);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "CEO, VinGroup",
      company: "Vinhomes",
      content:
        "InterMap đã giúp Vinhomes cải thiện trải nghiệm khách hàng. Giải pháp chuyên nghiệp, hỗ trợ tận tình.",
      rating: 5,
      avatar: "/images/avatar1.jpg",
    },
    {
      name: "Trần Thị B",
      position: "Giám đốc Vận hành",
      company: "AEON Mall",
      content:
        "Khách hàng không còn lạc đường trong trung tâm thương mại. Tăng 40% thời gian shopping.",
      rating: 5,
      avatar: "/images/avatar2.jpg",
    },
    {
      name: "John Smith",
      position: "CTO",
      company: "Singapore Hospital",
      content:
        "Perfect navigation solution for our complex hospital. Patients find their way easily now.",
      rating: 5,
      avatar: "/images/avatar3.jpg",
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
            {t.testimonials?.title || "Khách Hàng Nói Gì"}
          </h2>
          <p className="text-xl text-white-900 font-semibold">
            {t.testimonials?.subtitle ||
              "Được tin tưởng bởi các tổ chức hàng đầu"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-200" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-white-900 font-semibold mb-6 leading-relaxed italic">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-white-800 font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-lg rounded-3xl py-8 shadow-2xl overflow-hidden"
        >
          <p className="text-white-800 font-bold mb-6 uppercase tracking-wider text-lg text-center">
            {t.testimonials?.trustedBy || "Được tin tưởng bởi"}
          </p>

          {/* Scrolling container */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: [0, -1600],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              })
            }
          >
            <motion.div
              animate={controls}
              initial={{ x: 0 }}
              onAnimationComplete={() => {
                controls.set({ x: 0 });
                controls.start({
                  x: -1600,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                });
              }}
              className="flex gap-20 whitespace-nowrap"
            >
              {/* First set of logos */}
              <div className="flex gap-20 items-center">
                <Image
                  src="/images/logos/vingroup.png"
                  alt="VinGroup"
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain hover:grayscale-0 transition-all"
                />
                <Image
                  src="/images/logos/Aeon.png"
                  alt="AEON"
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain hover:grayscale-0 transition-all"
                />
                <Image
                  src="/images/logos/lotte.png"
                  alt="Lotte"
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain hover:grayscale-0 transition-all"
                />
                <Image
                  src="/images/logos/vincom.png"
                  alt="Vincom"
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain hover:grayscale-0 transition-all"
                />
                <Image
                  src="/images/logos/crescent.png"
                  alt="Crescent Mall"
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
