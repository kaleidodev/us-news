'use client';

import { AskArticleWidget } from './AskArticleWidget';
import { FinancialTools } from './FinancialTools';
import { YouMayAlsoLike } from './YouMayAlsoLike';

const adImageSrc = '/figma-assets/cf309d3af0ac7a0083d9ccf31caedfc0c2a105b1.png';

export function ArticleSidebar() {
  return (
    <aside className="hidden xl:flex xl:w-[357px] xl:shrink-0 xl:flex-col xl:gap-6">
      {/* Ad slot */}
      <div className="relative h-[1336px] w-full overflow-hidden">
        <img
          alt=""
          className="absolute h-[307.46%] left-[-279.55%] max-w-none top-[-35.02%] w-[403.36%]"
          src={adImageSrc}
        />
      </div>

      {/* Sticky section */}
      <div className="sticky top-4 flex flex-col gap-6">
        <AskArticleWidget />

        {/* Financial Tools */}
        <FinancialTools />

        {/* You May Also Like */}
        <YouMayAlsoLike />
      </div>
    </aside>
  );
}
