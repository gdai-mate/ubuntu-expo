'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ubuntu-i' | 'ubuntu-ii'>('all');

  const ubuntuIIImages = [
    { src: '/images/ubuntu-ii/chess-scene.jpg', alt: 'Chess game under warm lamp', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/butterfly-art.jpg', alt: 'Indigenous butterfly art', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/botanical-art.jpg', alt: 'Botanical art prints', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/ochre-painting.jpg', alt: 'Ochre painting process', event: 'ubuntu-ii' },
    { src: '/images/hero.jpg', alt: 'Community gathering', event: 'ubuntu-ii' },
  ];

  // Placeholder images for Ubuntu I
  const ubuntuIImages = [
    { src: 'https://placehold.co/600x400/3d2a1f/d4a354?text=Ubuntu+I', alt: 'Ubuntu I placeholder 1', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x600/8b3a2e/f5e6d3?text=Ubuntu+I', alt: 'Ubuntu I placeholder 2', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x400/1a0f0a/c8a858?text=Ubuntu+I', alt: 'Ubuntu I placeholder 3', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x500/3d2a1f/e8d5b7?text=Ubuntu+I', alt: 'Ubuntu I placeholder 4', event: 'ubuntu-i' },
  ];

  const allImages = [...ubuntuIImages, ...ubuntuIIImages];

  const filteredImages =
    activeFilter === 'all'
      ? allImages
      : activeFilter === 'ubuntu-i'
      ? ubuntuIImages
      : ubuntuIIImages;

  return (
    <div className="bg-background pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-cream max-w-2xl mx-auto"
          >
            Moments captured from our Ubuntu gatherings—celebrating art, music, culture, and community.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 bg-muted sticky top-20 z-40 border-b border-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-primary text-background'
                  : 'bg-muted border border-secondary/30 text-cream hover:border-primary'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter('ubuntu-i')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === 'ubuntu-i'
                  ? 'bg-primary text-background'
                  : 'bg-muted border border-secondary/30 text-cream hover:border-primary'
              }`}
            >
              Ubuntu I
            </button>
            <button
              onClick={() => setActiveFilter('ubuntu-ii')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === 'ubuntu-ii'
                  ? 'bg-primary text-background'
                  : 'bg-muted border border-secondary/30 text-cream hover:border-primary'
              }`}
            >
              Ubuntu II
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.event}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-muted"
                style={{
                  height: index % 5 === 0 ? '500px' : index % 3 === 0 ? '450px' : '400px'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-primary font-serif text-sm uppercase tracking-wider">
                      {image.event === 'ubuntu-i' ? 'Ubuntu I' : 'Ubuntu II'}
                    </p>
                    <p className="text-cream mt-1">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-cream text-lg">No images found for this event.</p>
            </div>
          )}
        </div>
      </section>

      {/* Note for Ubuntu I */}
      {activeFilter === 'ubuntu-i' && (
        <section className="py-12 px-6 bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-cream italic">
              Ubuntu I photos coming soon. These are placeholder images.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
