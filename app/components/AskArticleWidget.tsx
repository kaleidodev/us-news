'use client';

const ARTICLE_POINTS = [
  'Nuclear stocks gaining on clean energy demand',
  'Top picks: CCJ, CEG, and nuclear ETFs',
  'Policy tailwinds from IRA tax credits',
];

export function AskArticleWidget() {
  return (
    <div className="overflow-hidden rounded-[4px] border border-[#dae0e7] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Header row */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          {/* Red circle with arrow icon */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(187,27,64,0.1)]">
            <svg className="h-4 w-4 text-[#bb1b40]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8l4 4-4 4" />
            </svg>
          </div>
          <div>
            <div
              className="text-[13.8px] leading-5 text-[#1f252e]"
              style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
            >
              Ask about this article
            </div>
            <div
              className="text-[12px] leading-4 text-[#737d8c]"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              Get summaries, explanations &amp; next steps
            </div>
          </div>
        </div>
        <svg className="h-4 w-4 text-[#1f252e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
        </svg>
      </div>

      {/* Bullet points + button */}
      <div className="px-4 pb-4">
        <div className="flex flex-col gap-1.5 text-[12px] leading-4">
          {ARTICLE_POINTS.map((item) => (
            <div key={item} className="flex gap-2">
              <span className="text-[#bb1b40]">•</span>
              <span
                className="text-[#737d8c]"
                style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <button
          className="mt-3 h-9 w-full rounded-[2px] border border-[#e2e8f0] bg-white text-[12px] leading-4 text-[#1f252e] hover:bg-[#f3f5f6] transition-colors"
          style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
          Generate 10-second summary
        </button>
      </div>
    </div>
  );
}
