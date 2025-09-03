'use client';

import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-md mb-8 md:mb-0 text-left">
            <h3 className="text-lg font-semibold mb-4">All In AIGC</h3>
            <p className="text-sm text-muted-foreground">
              Professional SEO tools and AI-powered solutions for businesses
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-left md:text-right">Follow Us</h4>
            <div className="flex space-x-4 justify-start md:justify-end">
              <a
                href="mailto:contact@allinaigc.org"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                title="Contact Us"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All In AIGC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}