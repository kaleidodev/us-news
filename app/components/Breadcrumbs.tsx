'use client';

interface BreadcrumbsProps {
  items: string[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] leading-5">
      {items.map((crumb, idx) => (
        <div key={`${crumb}-${idx}`} className="flex items-center gap-2">
          {idx > 0 && (
            <span className="text-[#737d8c]">/</span>
          )}
          <span
            className={
              idx === items.length - 1
                ? 'font-normal text-[#3f4658]'
                : 'font-semibold text-[#3f4658] cursor-pointer hover:underline'
            }
            style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
          >
            {crumb}
          </span>
        </div>
      ))}
    </nav>
  );
}
