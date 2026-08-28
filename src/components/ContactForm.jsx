"use client";
import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    jobTitle: '',
    companyName: '',
    website: '',
    city: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '', lastName: '', phone: '', email: '', 
          jobTitle: '', companyName: '', website: '', city: '', 
          service: '', message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 relative">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <input 
          type="text" 
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name" 
          required
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
        <input 
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name" 
          required
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <div className="flex bg-[#EEEEEE] focus-within:ring-1 focus-within:ring-[#0A3A7A] transition-all">
          <div className="px-2 md:px-4 py-3.5 md:py-4 border-r border-[#DDDDDD] text-[14px] md:text-base text-gray-600 flex items-center justify-center bg-[#E5E5E5] cursor-pointer whitespace-nowrap">
            +91 <span className="ml-1 text-[8px] md:text-[10px]">▼</span>
          </div>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No" 
            className="w-full bg-transparent border-none outline-none px-2 md:px-4 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 min-w-0"
          />
        </div>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Business Email" 
          required
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <input 
          type="text" 
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title" 
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
        <input 
          type="text" 
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name" 
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <input 
          type="text" 
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Company Website" 
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
        <input 
          type="text" 
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City" 
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        />
      </div>

      <div className="relative">
        <select 
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 appearance-none cursor-pointer focus:ring-1 focus:ring-[#0A3A7A] transition-all"
        >
          <option value="" disabled className="text-gray-400">Select a Service</option>
          <option value="software">Custom Software Development</option>
          <option value="cloud">Cloud & Infrastructure</option>
          <option value="ai">AI & Data Analytics</option>
          <option value="consulting">IT Consulting</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-6 pointer-events-none text-gray-500">
          <ChevronDown size={20} strokeWidth={1.5} />
        </div>
      </div>

      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message" 
        rows="4"
        className="w-full bg-[#EEEEEE] border-none outline-none px-4 md:px-6 py-3.5 md:py-4 text-[14px] md:text-base text-gray-700 placeholder-gray-400 resize-none focus:ring-1 focus:ring-[#0A3A7A] transition-all"
      ></textarea>
      
      <div className="flex justify-end mt-2 md:mt-4 items-center gap-4">
        {status === 'error' && (
          <span className="text-red-500 text-sm">Failed to send message. Please try again.</span>
        )}
        {status === 'success' && (
          <span className="text-green-600 text-sm flex items-center gap-1">
            <CheckCircle2 size={16} /> Message sent successfully!
          </span>
        )}
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="px-10 py-3.5 bg-[#D4AF37] text-white hover:bg-[#0A3A7A] font-medium transition-all rounded shadow-sm w-full md:w-auto text-[15px] md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Submit Message'}
        </button>
      </div>
    </form>
  );
}
