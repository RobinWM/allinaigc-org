'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    router.refresh();
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'zh':
        return '简体中文';
      default:
        return locale.toUpperCase();
    }
  };

  const getCurrentLanguageLabel = () => {
    return getLanguageLabel(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="hover:text-primary flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{getCurrentLanguageLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`cursor-pointer ${locale === loc ? 'bg-accent' : ''
              }`}
          >
            {getLanguageLabel(loc)}
            {locale === loc && (
              <span className="ml-2 text-xs text-muted-foreground">
                {t('current')}
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
