'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const galleryImages = [
    { src: '/images/ubuntu-ii/chess-scene.jpg', alt: 'Chess game under warm lamp' },
    { src: '/images/ubuntu-ii/butterfly-art.jpg', alt: 'Indigenous butterfly art' },
    { src: '/images/ubuntu-ii/botanical-art.jpg', alt: 'Botanical art prints' },
    { src: '/images/ubuntu-ii/ochre-painting.jpg', alt: 'Ochre painting process' },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Ubuntu Expo community gathering"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold tracking-widest text-foreground mb-6"
          >
            UBUNTU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif italic text-cream mb-12"
          >
            I am because we are
          </motion.p>

          {/* Next Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-muted/90 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-semibold text-primary mb-4">Ubuntu III</h2>
            <div className="space-y-2 text-cream">
              <p className="text-lg">Mid-December 2025</p>
              <p>Community Hall, Point Lookout</p>
              <p>Minjerribah (Stradbroke Island)</p>
              <p className="text-sm mt-4 italic">More details coming soon...</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cream rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,80 350,20 600,50 C850,80 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="#8b3a2e"
            opacity="0.3"
          />
          <path
            d="M0,20 C200,100 400,40 600,70 C800,100 1000,40 1200,80 L1200,120 L0,120 Z"
            fill="#d4a354"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* About Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            A Celebration of Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-cream leading-relaxed mb-8"
          >
            Ubuntu Expo brings together artists, musicians, and community on the sacred shores of
            Minjerribah. We create space for connection, creativity, and cultural celebration.
            Through art, music, photography, and food, we share the amazing things we all create.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-primary text-background rounded-full hover:bg-accent transition-all duration-200 font-medium"
            >
              Learn More About Ubuntu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center mb-12"
          >
            Moments from Ubuntu II
          </motion.h2>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                style={{ height: index % 3 === 0 ? '400px' : '300px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-secondary text-foreground rounded-full hover:bg-terracotta transition-all duration-200 font-medium"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center mb-12"
          >
            Get Involved
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Become a Sponsor',
                description: 'Support local artists and help us create unforgettable experiences for our community.',
                icon: '✨',
              },
              {
                title: 'Perform With Us',
                description: 'Share your art, music, or talent with the Ubuntu community. We celebrate all forms of expression.',
                icon: '🎵',
              },
              {
                title: 'Media Inquiries',
                description: 'Press and media partners can reach out to learn more about our events and initiatives.',
                icon: '📸',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-muted border border-secondary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-cream mb-6">{item.description}</p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-background transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
