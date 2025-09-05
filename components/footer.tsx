'use client';

import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-md mb-8 md:mb-0 text-left">
            <h3 className="text-lg font-semibold mb-4">{t('companyName')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('companyDescription')}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-left md:text-right">{t('followUs')}</h4>
            <div className="flex space-x-4 justify-start md:justify-end">
              <a
                href="mailto:support@allinaigc.org?subject=Contact%20from%20All%20In%20AIGC%20Website"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                title={t('contactTitle')}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="/terms"
              className="hover:text-primary transition-colors underline"
            >
              {t('termsOfService')}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/privacy"
              className="hover:text-primary transition-colors underline"
            >
              {t('privacyPolicy')}
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} {t('copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}