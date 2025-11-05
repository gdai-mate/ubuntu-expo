'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const { scrollY } = useScroll();

  // Parallax transforms for blobs
  const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -350]);

  return (
    <div className="bg-background pt-32 w-full">
      {/* Hero */}
      <section className="py-32 px-6 w-full flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif font-light tracking-[0.15em] text-foreground mb-6 uppercase"
          >
            Ubuntu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-serif italic text-primary font-light tracking-wide"
          >
            I am because we are
          </motion.p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-3xl mx-auto mb-32" />

      {/* Philosophy */}
      <section className="py-24 px-6 w-full flex justify-center">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-cream/70 leading-loose font-light text-center">
              Ubuntu is an ancient African philosophy that speaks to the interconnectedness of all
              humanity. It teaches us that our individual existence is bound to the collective.
            </p>

            <p className="text-lg text-cream/70 leading-loose font-light text-center">
              This profound understanding forms the heart of Ubuntu Expo. We believe that art,
              music, and culture are communal celebrations that strengthen our bonds and remind
              us of our shared humanity.
            </p>

            <p className="text-lg text-cream/70 leading-loose font-light text-center">
              On the sacred shores of Minjerribah (North Stradbroke Island), we gather at Point Lookout
              Community Hall to create a space where artists, musicians, and community can share their
              gifts and celebrate what we create together on Quandamooka Country.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-3xl mx-auto my-32" />

      {/* Mission */}
      <section className="py-24 px-6 w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-light text-foreground text-center mb-24 tracking-wide"
          >
            Our Purpose
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
              {
                title: 'Celebrate Artists',
                description: 'Provide a platform for local and emerging artists to showcase their work and connect with audiences.',
              },
              {
                title: 'Build Community',
                description: 'Strengthen bonds through shared experiences of art, music, and cultural expression.',
              },
              {
                title: 'Create Space',
                description: 'Offer a welcoming environment where everyone can share, learn, and be inspired.',
              },
              {
                title: 'Share Stories',
                description: 'Tell stories through photography, live painting, acoustic performances, and cultural expression.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <h3 className="text-2xl font-serif text-primary font-light tracking-wide">{item.title}</h3>
                <p className="text-cream/60 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-3xl mx-auto my-32" />

      {/* Location */}
      <section className="relative py-24 px-6 mb-32 w-full flex justify-center overflow-hidden">
        {/* Animated Blobs - Desktop Only */}
        {/* BLOB 1: Top left */}
        <motion.div
          data-blob="about-1"
          className="hidden lg:block absolute w-52 h-52 opacity-90 overflow-hidden pointer-events-none"
          style={{
            backgroundImage: `url(/images/straddie-aerial.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-1 14s ease-in-out infinite alternate',
            left: '5%',
            top: '10%',
            y: y1
          }}
        />

        {/* BLOB 2: Top right */}
        <motion.div
          data-blob="about-2"
          className="hidden lg:block absolute w-40 h-40 opacity-80 overflow-hidden pointer-events-none"
          style={{
            backgroundImage: `url(/images/hero.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-2 16s ease-in-out infinite alternate',
            right: '8%',
            top: '15%',
            y: y2
          }}
        />

        {/* BLOB 3: Bottom left */}
        <motion.div
          data-blob="about-3"
          className="hidden lg:block absolute w-48 h-48 opacity-85 overflow-hidden pointer-events-none"
          style={{
            backgroundImage: `url(/images/ubuntu-ii/002F20E0-7B3B-464E-A5AA-EBBEEE1EED4E-86619-00000D3A073BA9D0.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'blob-morph-3 15s ease-in-out infinite alternate',
            left: '10%',
            bottom: '20%',
            y: y3
          }}
        />

        <div className="w-full max-w-3xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-light text-foreground mb-16 tracking-wide"
          >
            Minjerribah
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-cream/70 font-light"
          >
            <p className="text-lg leading-loose">
              Ubuntu Expo takes place on Minjerribah (North Stradbroke Island, Straddie), the ancestral home
              of the Quandamooka People. This sacred island in Queensland's beautiful Moreton Bay provides
              the perfect backdrop for our celebrations of art, music, and culture. Located at Point Lookout,
              our festival brings together the island community and visitors for unique cultural experiences.
            </p>

            <p className="text-sm text-cream/50 leading-relaxed pt-8">
              We acknowledge the Traditional Custodians of this land and pay our respects to
              Elders past, present, and emerging. We are honored to gather on Country.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
