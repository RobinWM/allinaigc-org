'use client';

import Image from 'next/image';

export default function Logo() {

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <Image
          src="/logo.png"
          alt="All In AIGC Logo"
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        All In AIGC
      </span>
    </div>
  );
}