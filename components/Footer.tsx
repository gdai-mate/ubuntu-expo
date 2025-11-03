import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-primary/10 w-full flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-light tracking-[0.2em] text-foreground mb-3 uppercase">
              Ubuntu
            </h3>
            <p className="text-cream/60 italic text-sm font-light">I am because we are</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-foreground font-light mb-6 tracking-wider uppercase text-sm">
              Navigate
            </h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-cream/60 hover:text-primary transition-colors duration-300 text-sm font-light"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-cream/60 hover:text-primary transition-colors duration-300 text-sm font-light"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block text-cream/60 hover:text-primary transition-colors duration-300 text-sm font-light"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-cream/60 hover:text-primary transition-colors duration-300 text-sm font-light"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-light mb-6 tracking-wider uppercase text-sm">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/ubuntu.expo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-primary transition-colors duration-300 text-sm font-light"
              >
                @ubuntu.expo
              </a>
              <p className="text-cream/60 text-sm font-light">Minjerribah</p>
              <p className="text-cream/60 text-sm font-light">Stradbroke Island</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary/10 text-center space-y-6 md:relative">
          <p className="text-cream/50 text-xs font-light leading-relaxed max-w-3xl mx-auto">
            Ubuntu Expo acknowledges the Traditional Custodians of Minjerribah, the Quandamooka People,
            and pays respect to Elders past, present, and emerging.
          </p>
          <p className="text-cream/40 text-xs font-light tracking-wider">
            © {new Date().getFullYear()} Ubuntu Expo
          </p>

          {/* Designer Watermark */}
          <a
            href="https://asgardbishop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:absolute md:bottom-0 md:right-0 text-cream/30 hover:text-primary/60 transition-colors duration-300 text-xs font-light"
          >
            Website designed by asgardbishop.com
          </a>
        </div>
      </div>
    </footer>
  );
}
