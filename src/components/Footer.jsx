import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#020012] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Cloud Transformation</a></li>
              <li><a href="#solutions" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Data Engineering</a></li>
              <li><a href="#solutions" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Enterprise AI</a></li>
              <li><a href="#solutions" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Digital Automation</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Platforms</h4>
            <ul className="space-y-3">
              <li><a href="#platforms" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Healthcare Tech</a></li>
              <li><a href="#platforms" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">FinTech Systems</a></li>
              <li><a href="#platforms" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">EduTech Portals</a></li>
              <li><a href="#platforms" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Immersive Tech</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Discover Us</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#leadership" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Leadership</a></li>
              <li><a href="#careers" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Join Us</a></li>
              <li><a href="#csr" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">CSR</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#blog" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Blogs</a></li>
              <li><a href="#brochure" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Brochures</a></li>
              <li><a href="#webinars" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Webinars</a></li>
              <li><a href="#media" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors">Media Kit</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-white text-lg font-bold mb-6">Address</h4>
            <address className="text-[#B0B3C6] not-italic leading-relaxed mb-4 text-sm">
              <span className="flex items-start gap-2 mb-2">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Mushakhedi, Indore, Madhya Pradesh, India.</span>
              </span>
            </address>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@shreezatech.com" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm">
                <Mail size={16} /> info@shreezatech.com
              </a>
              <a href="tel:+918223087569" className="text-[#B0B3C6] hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm">
                <Phone size={16} /> +91 8223087569
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[#B0B3C6] text-sm">
          <Image src="/logo.png" alt="Shreezatech" width={150} height={50} className="object-contain opacity-80" />
          <p>&copy; {new Date().getFullYear()} Shreezatech Consulting &amp; Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
