'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const galleryImages = [
    { src: '/images/ubuntu-ii/chess-scene.jpg', alt: 'Chess under warm light' },
    { src: '/images/ubuntu-ii/butterfly-art.jpg', alt: 'Indigenous butterfly art' },
    { src: '/images/ubuntu-ii/botanical-art.jpg', alt: 'Botanical installation' },
    { src: '/images/ubuntu-ii/2AE85DC3-DB8F-43F1-81FC-411CCFCD3C7C-86619-00000D3FCD9C4744.JPG', alt: 'Community gathering' },
    { src: '/images/ubuntu-ii/248FFC77-9478-41C6-8ED6-3A55DB46E451-86619-00000D3A6BE9E23F.JPG', alt: 'Celebration' },
    { src: '/images/ubuntu-ii/67CCCC3F-56AD-4276-ADFC-3AA74CF8CA96-86619-00000D3AAE968FD6.JPG', alt: 'Community celebration' },
  ];

  return (
    <div className="bg-background w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Ubuntu Expo community gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        {/* Wobbly Image Shapes - Desert Daze style (hidden on mobile) */}

        {/* BLOB 1: Large chess scene (top-left) */}
        <motion.div
          data-blob="1-chess-top-left"
          className="hidden lg:block absolute left-16 top-32 w-72 h-72 opacity-100 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/ubuntu-ii/chess-scene.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-1 10s ease-in-out infinite alternate'
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 2: Small butterfly art (bottom-left) */}
        <motion.div
          data-blob="2-butterfly-bottom-left"
          className="hidden lg:block absolute left-8 bottom-24 w-44 h-44 opacity-100 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/ubuntu-ii/butterfly-art.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-2 12s ease-in-out infinite alternate'
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 3: Medium botanical art (top-right) */}
        <motion.div
          data-blob="3-botanical-top-right"
          className="hidden lg:block absolute right-20 top-40 w-60 h-60 opacity-100 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/ubuntu-ii/botanical-art.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-3 11s ease-in-out infinite alternate'
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 4: Large ochre painting (bottom-right) */}
        <motion.div
          data-blob="4-ochre-bottom-right"
          className="hidden lg:block absolute right-8 bottom-32 w-64 h-64 opacity-100 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/ubuntu-ii/ochre-painting.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-4 14s ease-in-out infinite alternate'
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 5: Small celebration photo (top-center-right) */}
        <motion.div
          data-blob="5-celebration-top-center"
          className="hidden lg:block absolute right-1/4 top-20 w-36 h-36 opacity-100 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/ubuntu-ii/248FFC77-9478-41C6-8ED6-3A55DB46E451-86619-00000D3A6BE9E23F.JPG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-5 9s ease-in-out infinite alternate'
          }}
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-32 w-full max-w-5xl"
          >
            <h1 className="text-7xl md:text-9xl font-serif font-light tracking-[0.15em] text-foreground mb-8 uppercase">
              Ubuntu
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-cream/90 font-light">
              I am because we are
            </p>
          </motion.div>

          {/* Next Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="border border-primary/20 bg-black/40 backdrop-blur-md rounded-none p-12 w-full max-w-xl"
          >
            <div className="border-b border-primary/20 pb-6 mb-6 text-center">
              <h2 className="text-4xl font-serif font-light text-primary tracking-wider">
                Ubuntu III
              </h2>
            </div>
            <div className="space-y-3 text-cream/80 font-light text-center">
              <p className="text-lg">Mid-December 2025</p>
              <p className="text-sm tracking-wide">Community Hall, Point Lookout</p>
              <p className="text-sm tracking-wide">Minjerribah, Stradbroke Island</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-cream/70 leading-loose font-light">
              Ubuntu Expo brings together artists, musicians, and community on the shores of
              Minjerribah. A celebration of connection, creativity, and cultural expression.
            </p>
            <div className="pt-12">
              <Link
                href="/about"
                className="inline-block border border-primary/40 px-10 py-4 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider text-sm uppercase"
              >
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-4xl mx-auto my-20" />

      {/* Gallery Preview */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-wide mb-6">
              Ubuntu II
            </h2>
            <p className="text-cream/60 font-light text-sm tracking-widest uppercase">
              A Collection of Moments
            </p>
          </motion.div>

          {/* Refined Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-full">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden group cursor-pointer"
                style={{ height: '500px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border border-primary/40 px-10 py-4 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-4xl mx-auto my-20" />

      {/* Contact CTA */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-16"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-wide mb-10">
                Be Part of Ubuntu
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto leading-relaxed font-light text-lg">
                For sponsorship opportunities, artist inquiries, or media partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Sponsorship
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Support artists and cultural celebration
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Artists
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Share your work with our community
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Media
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Press inquiries and partnerships
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-block bg-primary px-12 py-5 text-background hover:bg-accent transition-all duration-300 font-light tracking-wider text-sm uppercase"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
