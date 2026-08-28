"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initial load
    AOS.init({
      duration: 600,
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    // Re-trigger animations when navigating to a new page
    // Using setTimeout to wait for new page components to mount completely
    const timer = setTimeout(() => {
      // refreshHard is required to make AOS scan for newly added DOM elements in SPAs
      if (typeof AOS.refreshHard === 'function') {
        AOS.refreshHard();
      }
      AOS.refresh();
    }, 150);
    
    return () => clearTimeout(timer);
  }, [pathname]);
  
  return null;
}
