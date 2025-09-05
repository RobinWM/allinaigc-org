'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('AboutSection');
  return (
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
              {t('title')}
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
              <h3 className="text-2xl font-semibold text-primary">{t('visionTitle')}</h3>
              <p className="text-muted-foreground">
                {t('visionContent')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">{t('missionTitle')}</h3>
              <p className="text-muted-foreground">
                {t('missionContent')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <Card className="bg-primary/5 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">3+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t('yearsOfInnovation')}</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100K+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t('globalUsers')}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
