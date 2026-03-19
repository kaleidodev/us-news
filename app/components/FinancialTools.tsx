'use client';

interface ToolCard {
  category: string;
  title: string;
  image?: string;
}

const TOOL_CARDS: ToolCard[] = [
  {
    category: 'CREDIT CARDS',
    title: 'Best Credit Cards',
  },
  {
    category: 'PERSONAL LOANS',
    title: 'Best Personal Loan Rates',
    image: '/figma-assets/9a3fc032dc38f40fae01213fa849fbfeee28be1a.png',
  },
  {
    category: 'MORTGAGES',
    title: 'Best Mortgages',
    image: '/figma-assets/a22a017a76d8208b14a78bc76836fc1d1aa6f613.png',
  },
  {
    category: 'BANKING',
    title: '10 Best Savings Accounts of January 2026: Up to 5.00%',
    image: '/figma-assets/52ef795d30fa2dea034129ca5c50399e6dd2f2e4.png',
  },
];

function ToolCardItem({ card }: { card: ToolCard }) {
  return (
    <a
      href="#"
      className="block rounded-[4px] border border-[#dae0e7] p-[17px] hover:bg-[#f3f5f6] transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p
            className="text-[12px] font-bold uppercase leading-4 tracking-[0.6px] text-[#737d8c]"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            {card.category}
          </p>
          <p
            className="mt-1 text-[15.8px] leading-6 text-[#333d4d]"
            style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
          >
            {card.title}
          </p>
        </div>
        {card.image && (
          <img
            alt=""
            className="h-16 w-16 shrink-0 rounded-[4px] object-cover"
            src={card.image}
          />
        )}
      </div>
    </a>
  );
}

export function FinancialTools() {
  return (
    <div>
      <div className="border-t-4 border-[#bb1b40] pt-5">
        <h3
          className="text-[18px] uppercase leading-7 tracking-[0.45px] text-[#333d4d]"
          style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
        >
          The Best Financial Tools for You
        </h3>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {TOOL_CARDS.map((card) => (
          <ToolCardItem key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
