'use client';

const reviewerIconSrc = '/figma-assets/36f4e946bd6014365fcdd18aac8d9509211d1b10.svg';
const saveShareBarSrc = '/figma-assets/cf309d3af0ac7a0083d9ccf31caedfc0c2a105b1.png';

interface ArticleHeaderProps {
  title: string;
  subtitle: string;
  author: string;
  reviewer: string;
  date: string;
}

export function ArticleHeader({
  title,
  subtitle,
  author,
  reviewer,
  date,
}: ArticleHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h1
        className="text-[34px] font-bold leading-tight text-[#090909] md:text-[48px]"
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="text-[20px] leading-7 text-[#040710]"
        style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      >
        {subtitle}
      </p>

      {/* Author / Reviewer / Date bar */}
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-[14px] leading-5 text-[#4c5263]"
        style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      >
        <span>
          By{' '}
          <a className="text-black underline" href="#">
            {author}
          </a>
        </span>

        <span className="text-[#737d8c]">|</span>

        <span className="inline-flex items-center gap-1.5">
          <img
            alt=""
            className="h-[22px] w-[23px]"
            src={reviewerIconSrc}
          />
          Reviewed by{' '}
          <a className="text-black underline" href="#">
            {reviewer}
          </a>
        </span>

        <span className="text-[#737d8c]">|</span>

        <span>{date}</span>
      </div>

      {/* Save / Share actions bar */}
      <div className="flex items-center gap-2">
        {/* Save button */}
        <button className="flex items-center gap-2 rounded-full border border-[#d1d1d1] px-[17px] py-[9px] text-[14px] leading-5 text-[#1f252e] hover:bg-[#f3f5f6] transition-colors">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.33 2.5H12.67C13.4 2.5 14 3.1 14 3.83V14L8 11.5L2 14V3.83C2 3.1 2.6 2.5 3.33 2.5Z"
              stroke="#1f252e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Save
        </button>

        {/* Social share actions (from Figma asset) */}
        <div className="h-[49px] w-[177px] overflow-hidden">
          <img
            alt="Share actions"
            className="relative left-[-95.48%] top-[-722.11%] h-[8382.95%] max-w-none w-[813.56%]"
            src={saveShareBarSrc}
          />
        </div>
      </div>
    </div>
  );
}
