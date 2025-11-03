'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex justify-center ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-light tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300 uppercase"
          >
            Ubuntu
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm border border-primary/40 px-6 py-2 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-6 space-y-6 border-t border-primary/10 pt-6">
            <Link
              href="/"
              className="block text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block text-sm text-cream/70 hover:text-primary transition-colors duration-300 font-light tracking-wider uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block text-center text-sm border border-primary/40 px-6 py-2 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
