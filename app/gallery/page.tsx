'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryLightbox from '@/components/GalleryLightbox';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ubuntu-i' | 'ubuntu-ii'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const ubuntuIIImages = [
    { src: '/images/hero.jpg', alt: 'Community gathering silhouettes', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/chess-scene.jpg', alt: 'Chess under warm light', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/butterfly-art.jpg', alt: 'Indigenous butterfly art', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/botanical-art.jpg', alt: 'Botanical installation', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/ochre-painting.jpg', alt: 'Ochre painting process', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/002F20E0-7B3B-464E-A5AA-EBBEEE1EED4E-86619-00000D3A073BA9D0.JPG', alt: 'Ubuntu II moment', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/027FC2CD-B853-48A2-8175-1BD02F31513B-86619-00000D3EDF7393D4.JPG', alt: 'Art installation', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/03ED999D-0950-45EB-B973-DED868129CA6-86619-00000D3B10942F05.JPG', alt: 'Community moment', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/09A90FE1-49DD-4416-834B-3A5F1895643D-86619-00000D40594EB12F.JPG', alt: 'Cultural expression', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/1449754C-1565-490A-A734-F3101FC27CF0-86619-00000D3DA7AFF9BE.JPG', alt: 'Artistic creation', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/1D34948E-8FD5-4EEB-8D61-1C41EA3ADE31-86619-00000D3CD80EDE2C.JPG', alt: 'Music performance', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/248FFC77-9478-41C6-8ED6-3A55DB46E451-86619-00000D3A6BE9E23F.JPG', alt: 'Celebration', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/280E68C6-8972-4D8F-B2DC-51093CA8808C-86619-00000D3FC99C9404.JPG', alt: 'Shared experience', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/2AE85DC3-DB8F-43F1-81FC-411CCFCD3C7C-86619-00000D3FCD9C4744.JPG', alt: 'Community gathering', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/2E05913E-D93C-4AFE-9E74-8C309B975CB2-86619-00000D3C3E9850B7.JPG', alt: 'Art display', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/2F4D45FB-4BC9-4E73-804A-A29A5F3A7821-86619-00000D3AB6E29009.JPG', alt: 'Creative space', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/33271924-B05B-4D36-8C81-C90BC2094E7B-86619-00000D3F8F42D00F.JPG', alt: 'Ubuntu moment', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/35D5F659-2C05-441F-BF85-E6F4C7F46B49-86619-00000D3AF5D40003.JPG', alt: 'Connection', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/3F1823F3-12B6-4CB5-91EF-35384DCE6B77-86619-00000D3FEBCCE6E6.JPG', alt: 'Community art', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/43453325-87C7-4CAA-9DCA-9748B2BCB707-86619-00000D3E8FAB43FE.JPG', alt: 'Cultural moment', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/486E5717-496A-46A1-8828-A7114A7800C2-86619-00000D3F4E2FA1B6.JPG', alt: 'Artistic expression', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/52F64889-4FE9-4DC5-B6EC-4EDB7508EF57-86619-00000D3B07B252E4.JPG', alt: 'Ubuntu II', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/5FE71117-2AB1-4D3D-8045-AF52971D1796-86619-00000D3E661DD7B1.JPG', alt: 'Creative gathering', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/67BD4291-4173-4627-9AD2-85E109AAD477-86619-00000D3EE5967655.JPG', alt: 'Art and culture', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/67CCCC3F-56AD-4276-ADFC-3AA74CF8CA96-86619-00000D3AAE968FD6.JPG', alt: 'Community celebration', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/70443F25-9020-4E32-9C7D-D48C9816268B-86619-00000D3FD8795872.JPG', alt: 'Ubuntu experience', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/73ACEBA0-A278-48F8-AB2E-A3D67EAA93A6-86619-00000D3A9E9877BC.JPG', alt: 'Artistic moment', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/76994D10-175F-421F-B915-4A55EEFCB2D8-86619-00000D3DCBBB4D49.JPG', alt: 'Cultural gathering', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/76F6EC8A-ACC2-4425-97DD-71D9952EAC98-86619-00000D3B770C69D8.JPG', alt: 'Community art', event: 'ubuntu-ii' },
    { src: '/images/ubuntu-ii/83EAF1A9-74C9-4F05-AD9C-2B56CA21C270-86619-00000D3E3D94190B.JPG', alt: 'Creative expression', event: 'ubuntu-ii' },
  ];

  const ubuntuIImages = [
    { src: 'https://placehold.co/600x400/1a120d/b8936a?text=Ubuntu+I', alt: 'Ubuntu I placeholder 1', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x600/0a0604/8d7256?text=Ubuntu+I', alt: 'Ubuntu I placeholder 2', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x400/0f0a07/a08566?text=Ubuntu+I', alt: 'Ubuntu I placeholder 3', event: 'ubuntu-i' },
    { src: 'https://placehold.co/600x500/1a120d/d4c4b0?text=Ubuntu+I', alt: 'Ubuntu I placeholder 4', event: 'ubuntu-i' },
  ];

  const allImages = [...ubuntuIImages, ...ubuntuIIImages];

  const filteredImages =
    activeFilter === 'all'
      ? allImages
      : activeFilter === 'ubuntu-i'
      ? ubuntuIImages
      : ubuntuIIImages;

  return (
    <div className="bg-background pt-32 min-h-screen w-full">
      {/* Header */}
      <section className="py-32 px-6 w-full flex justify-center">
        <div className="w-full max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif font-light tracking-[0.15em] text-foreground mb-6 uppercase"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cream/60 font-light text-sm tracking-widest uppercase"
          >
            Moments of Connection
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 sticky top-24 z-40 bg-background/95 backdrop-blur-md border-y border-primary/10 w-full flex justify-center">
        <div className="w-full max-w-7xl flex justify-center">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-8 py-2 font-light tracking-widest text-xs uppercase transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-cream/50 hover:text-cream border-b-2 border-transparent'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter('ubuntu-i')}
              className={`px-8 py-2 font-light tracking-widest text-xs uppercase transition-all duration-300 ${
                activeFilter === 'ubuntu-i'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-cream/50 hover:text-cream border-b-2 border-transparent'
              }`}
            >
              Ubuntu I
            </button>
            <button
              onClick={() => setActiveFilter('ubuntu-ii')}
              className={`px-8 py-2 font-light tracking-widest text-xs uppercase transition-all duration-300 ${
                activeFilter === 'ubuntu-ii'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-cream/50 hover:text-cream border-b-2 border-transparent'
              }`}
            >
              Ubuntu II
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-28 px-6 w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.event}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative overflow-hidden group cursor-pointer"
                style={{
                  height: index % 5 === 0 ? '550px' : index % 3 === 0 ? '450px' : '400px'
                }}
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-serif text-sm uppercase tracking-wider mb-1">
                    {image.event === 'ubuntu-i' ? 'Ubuntu I' : 'Ubuntu II'}
                  </p>
                  <p className="text-cream/80 text-sm font-light">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-32">
              <p className="text-cream/50 font-light">No images found for this event.</p>
            </div>
          )}
        </div>
      </section>

      {activeFilter === 'ubuntu-i' && (
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-cream/40 italic font-light text-sm">
              Ubuntu I archive coming soon
            </p>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
