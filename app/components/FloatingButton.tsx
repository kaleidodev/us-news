'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AIArticleModule } from './AIArticleModule';

const usnLogoSrc = '/figma-assets/5b8eb72d625e6b7705425a98a5513b9c1502893d.png';
const recommendationCards = [
  {
    title: "Bitcoin ETF: What's Next in Grayscale's Battle With the SEC",
    imageSrc: '/figma-assets/bcabc5f6e79ce65286eba40f5afa8ec8ea91b58b.png',
  },
  {
    title: '7 Best Private Credit ETFs to Buy in 2023',
    imageSrc: '/figma-assets/e48e30b066c2529c4fa856912bf2a3b9237f4270.png',
  },
  {
    title: '7 Best Long-Term ETFs to Buy and Hold',
    imageSrc: '/figma-assets/e42c932e2a48f3a74566aee97e9ab0a3af314138.png',
  },
  {
    title: '7 Best International Stock Funds to Buy for 2026',
    imageSrc: '/figma-assets/ca92f056fe688300ad9915ea3904f19eb2e3c985.png',
  },
];
const suggestedQuestions = [
  'Do I need a lot of money upfront to take advantage of higher yields?',
  'How does the Fed rate affect borrowers?',
  'Will my savings rate continue to increase even without Federal Reserve action?',
];
const summaryPoints = [
  {
    text: "After 10 straight hikes, the Fed didn't raise the federal funds rate this time.",
    badges: ['2', '4'],
  },
  {
    text: 'Savings APYs may rise more slowly, but banks can still adjust rates to attract deposits.',
    badges: ['1', '5'],
  },
  {
    text: 'The federal funds rate affects products like savings accounts and credit cards.',
    badges: ['3', '6'],
  },
];

type FloatingState = 'collapsed' | 'expanded-button' | 'expanded-panel';

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 15.8333C12.662 15.8333 15.8333 12.662 15.8333 8.75C15.8333 4.83798 12.662 1.66666 8.75 1.66666C4.83798 1.66666 1.66666 4.83798 1.66666 8.75C1.66666 12.662 4.83798 15.8333 8.75 15.8333Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 18.3333L13.9167 13.9167"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 text-[#033493]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px] text-[#515767]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" fill="currentColor" fillOpacity="0.12" />
      <path d="M10 5.5V10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.25" r="1" fill="currentColor" />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path
        d="M6.4 6.2L8.2 2.3C8.45 1.78 9.13 1.56 9.65 1.81C10.07 2.01 10.31 2.46 10.24 2.92L9.8 6H13.09C13.94 6 14.56 6.81 14.34 7.63L13.12 12.13C12.96 12.71 12.43 13.11 11.83 13.11H6.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.44 6H4.84C5.18 6 5.44 6.27 5.44 6.6V12.51C5.44 12.84 5.18 13.11 4.84 13.11H2.44C2.11 13.11 1.84 12.84 1.84 12.51V6.6C1.84 6.27 2.11 6 2.44 6Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ThumbsDownIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.6 9.8L7.8 13.7C7.55 14.22 6.87 14.44 6.35 14.19C5.93 13.99 5.69 13.54 5.76 13.08L6.2 10H2.91C2.06 10 1.44 9.19 1.66 8.37L2.88 3.87C3.04 3.29 3.57 2.89 4.17 2.89H9.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.56 10H11.16C10.82 10 10.56 9.73 10.56 9.4V3.49C10.56 3.16 10.82 2.89 11.16 2.89H13.56C13.89 2.89 14.16 3.16 14.16 3.49V9.4C14.16 9.73 13.89 10 13.56 10Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2.33331V13.6666"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.33334 6.99998L8 2.33331L12.6667 6.99998"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseDotButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      aria-label="Close AI panel"
      className="flex h-8 w-8 items-center justify-center rounded-[4px] p-[6px] text-white/90 transition-colors hover:bg-white/10"
      onClick={onClick}
      type="button"
    >
      <ChevronDownIcon className="h-5 w-5" />
    </button>
  );
}

export function FloatingButton({ className = '' }: { className?: string }) {
  const [state, setState] = useState<FloatingState>('collapsed');

  useEffect(() => {
    if (state !== 'expanded-button') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setState('collapsed');
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [state]);

  return (
    <div className={`fixed bottom-6 left-5 z-50 ${className}`}>
      {state === 'collapsed' ? (
        <button
          aria-label="Open AI summary"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1263d3] shadow-[0_10px_15px_-3px_rgba(61,71,81,0.1),0_4px_6px_-4px_rgba(61,71,81,0.08)] transition-colors hover:bg-[#0e52b3]"
          onClick={() => setState('expanded-button')}
          type="button"
        >
          <Image alt="US News" className="h-6 w-6 object-cover" height={24} src={usnLogoSrc} width={24} />
        </button>
      ) : null}

      {state === 'expanded-button' ? (
        <button
          aria-label="Open AI panel"
          className="flex h-12 w-auto max-w-[400px] items-center gap-3 rounded-full bg-[#1263d3] px-5 py-3 text-left text-white shadow-[0_10px_15px_-3px_rgba(61,71,81,0.1),0_4px_6px_-4px_rgba(61,71,81,0.08)] transition-colors hover:bg-[#0e52b3]"
          onClick={() => setState('expanded-panel')}
          type="button"
        >
          <Image alt="US News" className="h-6 w-6 shrink-0 object-cover" height={24} src={usnLogoSrc} width={24} />
          <span
            className="flex-1 text-[16px] font-medium leading-6 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-source-sans-3), var(--font-open-sans), sans-serif' }}
          >
            Summarize this article for me
          </span>
          <SearchIcon className="h-5 w-5 shrink-0" />
        </button>
      ) : null}

      {state === 'expanded-panel' ? (
        <section className="h-[min(923px,calc(100vh-48px))] w-[474px] max-w-[calc(100vw-40px)]">
          <AIArticleModule defaultExpanded={true} mode="expanded" layout="popup" onCollapse={() => setState('expanded-button')} />
        </section>
      ) : null}
    </div>
  );
}
