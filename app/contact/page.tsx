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

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', inquiryType: 'general', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-cream max-w-2xl mx-auto"
          >
            Whether you're interested in sponsoring, performing, covering our events, or just want to say hello—we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background border border-secondary/30 rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-cream font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-lg text-foreground placeholder-cream/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-cream font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-lg text-foreground placeholder-cream/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-cream font-medium mb-2">
                  What's this about? *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="performer">Perform With Us</option>
                  <option value="media">Media Inquiry</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-cream font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-lg text-foreground placeholder-cream/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full font-medium transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-muted text-cream cursor-not-allowed'
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
                  className="p-4 bg-primary/20 border border-primary rounded-lg text-center"
                >
                  <p className="text-primary font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Other Ways to Connect
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/ubuntu.expo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-primary transition-colors"
                >
                  @ubuntu.expo
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-cream">Community Hall, Point Lookout</p>
                <p className="text-cream">Minjerribah (Stradbroke Island), QLD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
