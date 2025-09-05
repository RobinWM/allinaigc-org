'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { floatingAnimation, rotateAnimation } from '@/lib/constants';
import { useTranslations } from 'next-intl';


export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
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
                  strings: t.raw('typewriterStrings') as string[],
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
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#products">{t('getStartedButton')}</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#services">{t('learnMoreButton')}</a>
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
  );
}
