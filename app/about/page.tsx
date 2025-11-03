'use client';

import { motion } from 'framer-motion';

export default function About() {
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
              On the sacred shores of Minjerribah, we gather to create a space where artists,
              musicians, and community can share their gifts and celebrate what we create together.
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
      <section className="py-24 px-6 mb-32 w-full flex justify-center">
        <div className="w-full max-w-3xl text-center">
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
              Ubuntu Expo takes place on Minjerribah, the ancestral home of the Quandamooka People.
              This sacred island provides the perfect backdrop for our celebrations of art and culture.
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
