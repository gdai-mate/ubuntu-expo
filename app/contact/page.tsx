'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get the access key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // Debug: Check if access key exists
    if (!accessKey) {
      console.error('Web3Forms access key is missing!');
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        subject: `Ubuntu Expo Contact Form - ${formData.inquiryType}`,
      };

      console.log('Submitting form...', { email: formData.email, name: formData.name });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      console.log('Web3Forms response:', result);

      if (result.success) {
        console.log('Form submitted successfully!');
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', inquiryType: 'general', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.error('Form submission failed:', result);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background pt-32 min-h-screen w-full">
      {/* Header */}
      <section className="py-32 px-6 w-full flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif font-light tracking-[0.15em] text-foreground mb-8 uppercase"
          >
            Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Connect with Ubuntu Expo on North Stradbroke Island for sponsorship opportunities,
            artist inquiries, or media partnerships
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 px-6 w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border border-primary/20 p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-cream/70 font-light mb-3 text-sm tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 text-foreground placeholder-cream/30 focus:outline-none focus:border-primary/40 transition-colors font-light"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-cream/70 font-light mb-3 text-sm tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 text-foreground placeholder-cream/30 focus:outline-none focus:border-primary/40 transition-colors font-light"
                  placeholder="your@email.com"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-cream/70 font-light mb-3 text-sm tracking-wider uppercase">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 text-foreground focus:outline-none focus:border-primary/40 transition-colors font-light"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="performer">Artist / Performer</option>
                  <option value="media">Media</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-cream/70 font-light mb-3 text-sm tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 text-foreground placeholder-cream/30 focus:outline-none focus:border-primary/40 transition-colors resize-none font-light"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 font-light transition-all duration-300 tracking-wider text-sm uppercase ${
                  isSubmitting
                    ? 'bg-muted/50 text-cream/30 cursor-not-allowed'
                    : 'bg-primary text-background hover:bg-accent'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 border border-primary/40 text-center"
                >
                  <p className="text-primary font-light">
                    Thank you. We will be in touch shortly.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 border border-red-500/40 text-center"
                >
                  <p className="text-red-500 font-light">
                    Something went wrong. Please try again or contact us directly via Instagram.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-28 px-6 mb-28 w-full flex justify-center">
        <div className="w-full max-w-4xl text-center space-y-16">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs text-cream/50 uppercase tracking-widest mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/ubuntu.expo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-light"
              >
                @ubuntu.expo
              </a>
            </div>

            <div>
              <p className="text-xs text-cream/50 uppercase tracking-widest mb-2">Location</p>
              <p className="text-cream/70 font-light">Community Hall, Point Lookout</p>
              <p className="text-cream/70 font-light">Minjerribah (North Stradbroke Island)</p>
              <p className="text-cream/70 font-light">Queensland, Australia</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
