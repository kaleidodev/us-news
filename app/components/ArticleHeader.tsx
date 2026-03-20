'use client';

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

        <span className="inline-flex items-center gap-1 align-middle">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.52344H3C1.89543 3.52344 1 4.41887 1 5.52344V20.0234C1 21.128 1.89543 22.0234 3 22.0234H17.5C18.6046 22.0234 19.5 21.128 19.5 20.0234V11.0234" stroke="#4E8FE6" strokeWidth="2"/>
         <path d="M11.7109 11.6663L6.61573 8.40567C6.34949 8.23529 6.01349 8.42604 6.06287 8.73825C6.43811 11.1105 8.44864 14.9311 10.8037 17.5801C11.2419 18.073 12.02 17.9511 12.334 17.3711C15.4399 11.6347 18.4346 6.28328 22.604 1.86528C22.7738 1.68538 22.511 1.37122 22.3101 1.51544C15.0008 6.76055 12.4323 10.611 11.7109 11.6663Z" fill="black"/>
        </svg>

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
        <button className="flex items-center gap-2 rounded-full border border-[#d1d1d1] px-[15px] py-[9px] text-[14px] leading-5 text-[#404040] hover:bg-[#f3f5f6] transition-colors">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 3.52344H3C1.89543 3.52344 1 4.41887 1 5.52344V20.0234C1 21.128 1.89543 22.0234 3 22.0234H17.5C18.6046 22.0234 19.5 21.128 19.5 20.0234V11.0234" stroke="#4E8FE6" strokeWidth="2"/>
         <path d="M11.7109 11.6663L6.61573 8.40567C6.34949 8.23529 6.01349 8.42604 6.06287 8.73825C6.43811 11.1105 8.44864 14.9311 10.8037 17.5801C11.2419 18.073 12.02 17.9511 12.334 17.3711C15.4399 11.6347 18.4346 6.28328 22.604 1.86528C22.7738 1.68538 22.511 1.37122 22.3101 1.51544C15.0008 6.76055 12.4323 10.611 11.7109 11.6663Z" fill="black"/>
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
