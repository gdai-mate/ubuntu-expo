'use client';

import { motion } from 'framer-motion';

interface VimeoPlayerProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function VimeoPlayer({
  videoId,
  title = "Ubuntu Expo",
  description
}: VimeoPlayerProps) {
  return (
    <div className="relative w-full">
      {/* Title and Description */}
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h3 className="text-3xl font-serif font-light text-foreground mb-4 tracking-wide">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-cream/70 font-light max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Video Container - Responsive to video aspect ratio */}
      <div className="relative w-full max-w-md md:max-w-lg mx-auto overflow-hidden border border-primary/20">
        <div className="relative" style={{ paddingTop: '177.78%' }}> {/* 9:16 aspect ratio for vertical video */}
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&color=b8936a`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            title={title}
          />
        </div>
      </div>

      {/* Vimeo Attribution */}
      <div className="mt-4 text-center">
        <p className="text-cream/40 text-xs font-light">
          Video hosted on Vimeo
        </p>
      </div>
    </div>
  );
}
