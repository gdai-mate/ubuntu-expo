'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryLightboxProps {
  images: { src: string; alt?: string; caption?: string; event: string }[];
  currentIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, currentIndex, onClose }: GalleryLightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[101] text-cream/70 hover:text-primary transition-colors text-4xl font-light"
          aria-label="Close"
        >
          ×
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-[101] text-cream/70 font-light text-sm tracking-wider">
          {index + 1} / {images.length}
        </div>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 z-[101] text-cream/70 hover:text-primary transition-colors text-5xl font-light"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 z-[101] text-cream/70 hover:text-primary transition-colors text-5xl font-light"
          aria-label="Next"
        >
          ›
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].caption || images[index].alt || 'Gallery image'}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-[101]">
          <p className="text-primary font-serif text-sm uppercase tracking-wider mb-2">
            {images[index].event === 'ubuntu-i' ? 'Ubuntu I' : 'Ubuntu II'}
          </p>
          <p className="text-cream/70 text-sm font-light">{images[index].caption || images[index].alt}</p>
        </div>
      </div>
    </motion.div>
  );
}
