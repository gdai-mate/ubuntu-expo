'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
          >
            UBUNTU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif italic text-primary mb-4"
          >
            I am because we are
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Our Philosophy</h2>

            <p className="text-lg text-cream leading-relaxed">
              Ubuntu is an ancient African philosophy that speaks to the interconnectedness of all
              humanity. It teaches us that our individual existence is bound to the collective—that
              <span className="text-primary font-semibold"> I am because we are</span>.
            </p>

            <p className="text-lg text-cream leading-relaxed">
              This profound understanding forms the heart of Ubuntu Expo. We believe that art,
              music, and culture are not solitary pursuits but communal celebrations that bring
              us together, strengthen our bonds, and remind us of our shared humanity.
            </p>

            <p className="text-lg text-cream leading-relaxed">
              On the sacred shores of Minjerribah (Stradbroke Island), we gather to create a
              space where artists, musicians, photographers, and community members can share
              their gifts, tell their stories, and celebrate the amazing things we all create
              when we come together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-foreground text-center mb-16"
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Celebrate Artists',
                description: 'We provide a platform for local and emerging artists to showcase their work, connect with audiences, and be recognized for their creative contributions to our community.',
              },
              {
                title: 'Build Community',
                description: 'Through shared experiences of art, music, and culture, we strengthen the bonds within our community and create lasting connections between people.',
              },
              {
                title: 'Create Space',
                description: 'We offer a welcoming, inclusive environment where everyone can come together to share, learn, and be inspired by the diverse talents within our community.',
              },
              {
                title: 'Share Stories',
                description: 'Every exhibition is an opportunity to tell stories—through photography, live painting, acoustic performances, and the rich tapestry of cultural expression.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted border border-secondary/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-cream leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-foreground text-center mb-12"
          >
            Our Values
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Community First</h3>
              <p className="text-cream">Everything we do centers on bringing people together and celebrating our collective creativity.</p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Inclusive Expression</h3>
              <p className="text-cream">We welcome all forms of artistic expression and honor the diverse voices within our community.</p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Cultural Respect</h3>
              <p className="text-cream">We acknowledge and respect the Traditional Custodians of Minjerribah and celebrate the rich cultural heritage of this land.</p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Connection & Growth</h3>
              <p className="text-cream">We believe in creating spaces where artists can grow, audiences can be inspired, and meaningful connections can flourish.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-foreground mb-8"
          >
            Minjerribah / Stradbroke Island
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-cream"
          >
            <p className="text-lg leading-relaxed">
              Ubuntu Expo takes place on Minjerribah (Stradbroke Island), the ancestral home of
              the Quandamooka People. This sacred island, with its stunning beaches, ancient
              landscapes, and vibrant community, provides the perfect backdrop for our celebrations
              of art and culture.
            </p>

            <p className="text-lg leading-relaxed">
              We acknowledge the Traditional Custodians of this land and pay our respects to
              Elders past, present, and emerging. We are honored to gather on Country and celebrate
              the rich cultural heritage that continues to inspire and guide us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
