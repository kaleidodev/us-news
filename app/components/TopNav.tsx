'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

const navItems = [
  { label: 'Credit Cards', href: '#' },
  { label: 'Mortgages', href: '#' },
  { label: 'Personal Loans', href: '#' },
  { label: 'Student Loans', href: '#' },
  { label: 'Banking', href: '#' },
  { label: 'Investing', href: '#' },
  { label: 'Retirement', href: '#' },
  { label: 'Other', href: '#' },
];

interface TopNavProps {
  activeItem?: string;
}

function normalizeLabel(value: string) {
  return value.trim().toLowerCase();
}

export function TopNav({ activeItem = 'Investing' }: TopNavProps) {
  const currentItem = normalizeLabel(activeItem);

  return (
    <header className="w-full bg-[#171923] text-white">
      <div className="mx-auto flex h-[86px] max-w-[2048px] items-center gap-3 px-4 md:px-6 xl:px-7">
        <Link href="/" aria-label="U.S. News home" className="shrink-0">
          <Image
            alt="U.S. News"
            className="h-[40px] w-auto shrink-0"
            src="/usn-logo-large.svg"
            width={408}
            height={104}
            priority
          />
        </Link>

        <Image
          alt="90th anniversary"
          className="hidden h-[60px] w-auto shrink-0 md:block"
          src="/90th.png"
          width={225}
          height={143}
          priority
        />

        <Link 
          href="#"
          className="hidden shrink-0 text-[22px] font-bold uppercase tracking-[0.12em] text-white md:block"
          style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
        >
          Money &raquo;
        </Link>

        <nav aria-label="Primary" className="hidden h-full min-w-0 flex-1 xl:block">
          <ul className="flex h-full items-stretch gap-[6px]">
            {navItems.map((item) => {
              const isActive = normalizeLabel(item.label) === currentItem;

              return (
                <li key={item.label} className="h-full">
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative flex h-full items-center whitespace-nowrap px-[18px] text-[18px] font-semibold tracking-[0.02em] transition-colors ${
                      isActive ? 'text-white' : 'text-white hover:text-white/90'
                    }`}
                    style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute inset-x-[18px] bottom-0 h-[6px] bg-[#ef3737]" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center text-white"
          >
            <Search className="h-[34px] w-[34px] stroke-[2.1]" />
          </button>

          <Link
            href="#"
            className="hidden rounded-[13px] border-[3px] border-white px-[18px] py-[9px] text-[18px] font-semibold leading-none text-white md:inline-flex"
            style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
          >
            Sign In
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center text-white"
          >
            <Menu className="h-[34px] w-[34px] stroke-[2.6]" />
          </button>
        </div>
      </div>
    </header>
  );
}
