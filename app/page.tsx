'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollY } = useScroll();

  // BasePath for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/ubuntu-expo' : '';

  // Parallax transforms - all blobs move faster than scroll (like raindrops falling up)
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -450]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -350]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -500]);
  const y5 = useTransform(scrollY, [0, 2000], [0, -380]);
  const y6 = useTransform(scrollY, [0, 2000], [0, -420]);
  const y7 = useTransform(scrollY, [0, 2000], [0, -480]);
  const y8 = useTransform(scrollY, [0, 2000], [0, -440]);
  const y9 = useTransform(scrollY, [0, 2000], [0, -520]);
  const y10 = useTransform(scrollY, [0, 2000], [0, -460]);

  const galleryImages = [
    { src: '/images/ubuntu-ii/002F20E0-7B3B-464E-A5AA-EBBEEE1EED4E-86619-00000D3A073BA9D0.JPG', alt: 'Ubuntu gathering' },
    { src: '/images/ubuntu-ii/03ED999D-0950-45EB-B973-DED868129CA6-86619-00000D3B10942F05.JPG', alt: 'Community art' },
    { src: '/images/ubuntu-ii/1449754C-1565-490A-A734-F3101FC27CF0-86619-00000D3DA7AFF9BE.JPG', alt: 'Cultural celebration' },
    { src: '/images/ubuntu-ii/1D34948E-8FD5-4EEB-8D61-1C41EA3ADE31-86619-00000D3CD80EDE2C.JPG', alt: 'Community moment' },
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
        {/* LEFT SIDE BLOBS (1-5) */}

        {/* BLOB 1: Top-left corner */}
        <motion.div
          data-blob="1-left-top"
          className="hidden lg:block absolute left-8 top-16 w-72 h-72 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/027FC2CD-B853-48A2-8175-1BD02F31513B-86619-00000D3EDF7393D4.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-1 10s ease-in-out infinite alternate',
            y: y1
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 2: Middle-left, near event card */}
        <motion.div
          data-blob="2-left-middle"
          className="hidden lg:block absolute w-36 h-36 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/butterfly-art.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-1 13s ease-in-out infinite alternate',
            left: 'calc(50% - 415px)',
            top: 'calc(50vh + 80px)',
            y: y2
          }}
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 3: Middle-left edge (between blobs 1 and 4) */}
        <motion.div
          data-blob="3-left-middle-edge"
          className="hidden lg:block absolute w-44 h-44 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/EE7F21EA-7082-4534-8286-2885020F9D44-86619-00000D3A85F2B435.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-2 12s ease-in-out infinite alternate',
            left: 'calc(2.5rem + 150px)',
            top: 'calc(50vh - 70px)',
            y: y3
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 4: Lower-left */}
        <motion.div
          data-blob="4-left-lower"
          className="hidden lg:block absolute left-12 w-52 h-52 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/botanical-art.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-2 15s ease-in-out infinite alternate',
            top: '70vh',
            y: y4
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 5: Lower center-left */}
        <motion.div
          data-blob="5-left-lower-center"
          className="hidden lg:block absolute w-40 h-40 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/2AE85DC3-DB8F-43F1-81FC-411CCFCD3C7C-86619-00000D3FCD9C4744.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-4 14s ease-in-out infinite alternate',
            left: 'calc(30% - 80px)',
            top: '85vh',
            y: y5
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* RIGHT SIDE BLOBS (6-10) */}

        {/* BLOB 6: Top-right corner */}
        <motion.div
          data-blob="6-right-top"
          className="hidden lg:block absolute right-16 top-20 w-60 h-60 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/C70513BC-CCE4-4824-8D9E-9D2580F75601-86619-00000D3B593C5F02.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-3 11s ease-in-out infinite alternate',
            y: y6
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 7: Middle-right edge (between top and bottom) */}
        <motion.div
          data-blob="7-right-middle-edge"
          className="hidden lg:block absolute w-56 h-56 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/280E68C6-8972-4D8F-B2DC-51093CA8808C-86619-00000D3FC99C9404.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-3 17s ease-in-out infinite alternate',
            right: 'calc(3rem + 150px)',
            top: 'calc(50vh - 120px)',
            y: y7
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 8: Middle-right, near event card */}
        <motion.div
          data-blob="8-right-middle"
          className="hidden lg:block absolute w-36 h-36 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/chess-scene.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-5 9s ease-in-out infinite alternate',
            right: 'calc(50% - 415px)',
            top: 'calc(50vh + 80px)',
            y: y8
          }}
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 9: Bottom-right corner */}
        <motion.div
          data-blob="9-right-bottom"
          className="hidden lg:block absolute right-8 bottom-20 w-64 h-64 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/43453325-87C7-4CAA-9DCA-9748B2BCB707-86619-00000D3E8FAB43FE.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-4 14s ease-in-out infinite alternate',
            y: y9
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* BLOB 10: Lower center-right */}
        <motion.div
          data-blob="10-right-lower-center"
          className="hidden lg:block absolute w-44 h-44 opacity-100 overflow-hidden"
          style={{
            backgroundImage: `url(${basePath}/images/ubuntu-ii/92CD1F78-4397-44F8-A687-0BA036A8E4AC-86619-00000D40563BA310.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-5 16s ease-in-out infinite alternate',
            right: 'calc(30% - 88px)',
            top: '90vh',
            y: y10
          }}
          whileHover={{ scale: 1.2 }}
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
