import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020012] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">

          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/web-development" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/ai-and-automation" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">AI & Automation</Link></li>
              <li><Link href="/services/iot" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">IoT Solutions</Link></li>
              <li><Link href="/services/ux-ui-design" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">UX/UI Design</Link></li>
              <li><Link href="/services/robotics" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Robotics</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/healthcare" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Healthcare</Link></li>
              <li><Link href="/solutions/finance" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Finance & FinTech</Link></li>
              <li><Link href="/solutions/education" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Education</Link></li>
              <li><Link href="/solutions/manufacturing" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Manufacturing</Link></li>
              <li><Link href="/solutions/retail" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Retail & E-commerce</Link></li>
              <li><Link href="/solutions/real-estate" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Real Estate</Link></li>
              <li><Link href="/solutions/immersivetech" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Immersive Tech</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact-us" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Blogs</Link></li>
            </ul>
          </div>



          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Address</h4>
            <address className="text-[#B0B3C6] not-italic leading-relaxed mb-4 text-sm">
              <span className="flex items-start gap-2 mb-2">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh, India.</span>
              </span>
            </address>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@shreezatech.com" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm">
                <Mail size={16} /> info@shreezatech.com
              </a>
              <a href="tel:8770699464" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm">
                <Phone size={16} /> +91 8770699454
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[#B0B3C6] text-sm">
          <div className="flex items-center gap-[4px] shrink-0">
            <Image src="/logo.png" alt="Shreezatech" width={56} height={56} className="h-[56px] w-auto object-contain drop-shadow-sm" />
            <div className="flex flex-col justify-center">
              <span
                className="text-[28px] font-semibold tracking-[0.03em] leading-none uppercase"
                style={{ fontFamily: 'var(--font-family-logo-main)' }}
              >
                <span className="text-white">SHREEZA</span>
                <span style={{ color: 'var(--color-logo-accent-orange)' }}>TECH</span>
              </span>
              <span
                className="text-[13px] font-normal tracking-[0.04em] leading-tight mt-0 text-white/60"
                style={{ fontFamily: 'var(--font-family-logo-tag)' }}
              >
                Consulting & Software Solutions
              </span>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Shreezatech Consulting &amp; Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
