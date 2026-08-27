"use client";

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';

export default function ShareButtons({ title, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: window.location.href,
        });
      } else {
        // Fallback to copy link if share is not supported
        handleCopy();
      }
    } catch (err) {
      console.error('Failed to share', err);
    }
  };

  return (
    <>
      <button 
        title="Copy Link"
        onClick={handleCopy}
        className="w-12 h-12 mx-auto md:mx-0 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-[#040026] hover:text-[#ffb916] text-gray-600 flex items-center justify-center transition-all border border-gray-200"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
      </button>
      <button 
        title="Share"
        onClick={handleShare}
        className="w-12 h-12 mx-auto md:mx-0 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-[#040026] hover:text-[#ffb916] text-gray-600 flex items-center justify-center transition-all border border-gray-200"
      >
        <Share2 size={18} />
      </button>
    </>
  );
}
