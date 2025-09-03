'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Globe, Code, Newspaper, Mic2, Navigation, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const floatingAnimation = {
  y: ['-10%', '10%'],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  },
};

const pulseAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  },
};

const products = [
  {
    title: 'Wotushe',
    description: 'AI Explorer, focused on creating educational content about AI series, suitable for learning and communication for those interested in AI.',
    image: "/images/wotushe.png",
    link: "https://www.52wts.cn"
  },
  {
    title: 'WTAIGC',
    description: 'Sharing the latest and most comprehensive AI tools from around the world.',
    image: "/images/wtaigc.png",
    link: "https://www.wtaigc.com"
  },
  {
    title: 'WTAI Navigation',
    description: 'High-quality, latest, and most comprehensive AI navigation.',
    image: "/images/wtai.png",
    link: "https://wtai.cc"
  },
  {
    title: 'WTSea',
    description: 'Sharing experiences and solutions for overseas business challenges.',
    image: "/images/wtsea.png",
    link: "https://wtsea.cn"
  },
  {
    title: 'AI Translation Assistant',
    description: 'All-in-one multilingual translation solution supporting text, image, PDF, voice, and video translation.',
    image: "/images/aitranslation.png",
    link: "https://aitranslate.site"
  },
  {
    title: 'VoiceCanvas',
    description: 'Instant text-to-speech in over 40 languages, supporting voice cloning, delivering clear and natural voice synthesis based on advanced AI technology.',
    image: "/images/voicecanvas.png",
    link: "https://voicecanvas.org"
  }
];

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent min-h-[96px] md:min-h-[120px] flex items-center justify-center">
                <Typewriter
                  options={{
                    strings: ['Professional SEO & AI Tools', 'Transform Your Digital Presence', 'Future of Digital Marketing'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Professional SEO tools and AI-powered solutions to enhance your business digital presence and marketing effectiveness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="#products">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating blobs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={floatingAnimation}
          />

          {/* Centered rotating geometric shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="absolute -top-16 -left-16 w-32 h-32 border-2 border-primary/20 rounded-lg"
              animate={rotateAnimation}
            />
            <motion.div
              className="absolute -bottom-16 -right-16 w-32 h-32 border-2 border-primary/20 rotate-45"
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5
                },
              }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-24 h-24 border-2 border-primary/20"
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1
                },
              }}
            />
            <motion.div
              className="absolute -top-16 -right-16 w-24 h-24 border-2 border-primary/20 rounded-full"
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1.5
                },
              }}
            />
          </div>

          {/* Centered floating particles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="absolute -top-24 -left-24 w-3 h-3 bg-primary/40 rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -bottom-24 -right-24 w-2 h-2 bg-primary/40 rounded-full"
              animate={{
                y: ['-10%', '10%'],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  ease: 'easeInOut',
                  delay: 0.5
                },
              }}
            />
            <motion.div
              className="absolute -bottom-24 -left-24 w-2 h-2 bg-primary/40 rounded-full"
              animate={{
                y: ['-10%', '10%'],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  ease: 'easeInOut',
                  delay: 1
                },
              }}
            />
            <motion.div
              className="absolute -top-24 -right-24 w-3 h-3 bg-primary/40 rounded-full"
              animate={{
                y: ['-10%', '10%'],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  ease: 'easeInOut',
                  delay: 1.5
                },
              }}
            />
          </div>
        </div>

        {/* Grid pattern with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(142_76%_67%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(142_76%_67%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Newspaper,
                title: 'SEO Tools',
                description: 'Comprehensive SEO tools and analytics to improve your website ranking and visibility.'
              },
              {
                icon: Briefcase,
                title: 'AI-Powered Solutions',
                description: 'Advanced AI tools to automate and optimize your digital marketing campaigns.'
              },
              {
                icon: Code,
                title: 'Digital Marketing Tools',
                description: 'Complete suite of digital marketing tools for businesses of all sizes.'
              },
              {
                icon: Navigation,
                title: 'AI Navigator',
                description: 'The most comprehensive and up-to-date collection of global AI tools.'
              },
              {
                icon: Globe,
                title: 'AI Translation Services',
                description: 'Advanced AI-powered translation services for seamless global communication.'
              },
              {
                icon: Mic2,
                title: 'AI Voice Cloning',
                description: 'Create natural-sounding voice clones for various applications.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br from-background to-primary/5 h-full flex flex-col">
                  <CardHeader>
                    <div className="relative w-12 h-12 mb-4">
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <service.icon className="w-12 h-12 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Our Products
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col">
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {product.description}
                      </p>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/about-us.jpg"
                  alt="AI Innovation and Education"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  All In AIGC is dedicated to democratizing digital marketing technology, making professional SEO and AI tools accessible and beneficial for businesses worldwide. We believe in the transformative power of technology to create a more efficient, innovative, and connected digital world.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to empower businesses through professional SEO tools and AI innovation, helping them achieve digital success and create a better future for all.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <Card className="bg-primary/5 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">3+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Years of Innovation</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">100K+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Global Users</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}