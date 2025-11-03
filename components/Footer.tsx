import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold tracking-wider text-foreground mb-4">
              UBUNTU
            </h3>
            <p className="text-cream italic text-sm">I am because we are</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-cream hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-cream hover:text-primary transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block text-cream hover:text-primary transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-cream hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/ubuntu.expo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream hover:text-primary transition-colors duration-200"
              >
                @ubuntu.expo
              </a>
              <p className="text-cream text-sm">Minjerribah (Stradbroke Island)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center">
          <p className="text-cream text-sm mb-2">
            Ubuntu Expo acknowledges the Traditional Custodians of Minjerribah, the Quandamooka People, and pays respect to Elders past, present, and emerging.
          </p>
          <p className="text-cream/60 text-xs mt-4">
            © {new Date().getFullYear()} Ubuntu Expo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
