'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import type { TranslationType } from '@/lib/translations';

interface FooterProps {
  t: TranslationType;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="InterMap Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                InterMap
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Giải pháp điều hướng nội khu hàng đầu Việt Nam. Mang đến trải nghiệm di chuyển thông minh và tiện lợi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Sản phẩm</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Indoor Navigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">API & SDK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Enterprise Solution</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Công ty</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Đội ngũ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Sự nghiệp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span>600, Nguyễn Văn Cừ, An Bình, Ninh Kiều, TP.Cần Thơ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>+84 (028) 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>contact@intermap.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t.footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
