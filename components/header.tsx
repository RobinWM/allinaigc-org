'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Logo from './logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-foreground/60 hover:text-primary transition-colors">
            {t('home')}
          </a>
          <a href="#services" className="text-foreground/60 hover:text-primary transition-colors">
            {t('services')}
          </a>
          <a href="#products" className="text-foreground/60 hover:text-primary transition-colors">
            {t('products')}
          </a>
          <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
            {t('about')}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="hover:text-primary"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                <a href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  {t('home')}
                </a>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors">
                  {t('services')}
                </a>
                <a href="#products" className="text-foreground/60 hover:text-primary transition-colors">
                  {t('products')}
                </a>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  {t('about')}
                </a>
                <div className="pt-4 border-t">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}