'use client';

const aiEtfImageSrc = '/figma-assets/bc0a6596e0906806fdc65755bd2b7d9a5360dcf0.png';

interface RelatedArticle {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const RELATED_ARTICLES: RelatedArticle[] = [
  {
    image: aiEtfImageSrc,
    title: '6 of the Best AI ETFs to Buy for 2026',
    description:
      'AI ETFs can help investors capture shifts in leadership across hardware, software and infrastructure without relying on precise timing or single-stock bets.',
    author: 'Tony Dong',
    date: 'Jan. 23, 2026',
  },
];

export function YouMayAlsoLike() {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-[18px] leading-7 text-[#333d4d]"
        style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
      >
        You May Also Like
      </h3>
      <div className="flex flex-col gap-4">
        {RELATED_ARTICLES.map((article) => (
          <a key={article.title} href="#" className="group block">
            <div className="relative h-48 w-full overflow-hidden rounded-[4px]">
              <img
                alt=""
                className="absolute left-0 top-[-8.11%] h-[116.21%] w-full max-w-none object-cover"
                src={article.image}
              />
            </div>
            <p
              className="mt-3 text-[16px] leading-6 text-[#333d4d] group-hover:underline"
              style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
            >
              {article.title}
            </p>
            <p
              className="mt-2 text-[14px] leading-5 text-[#737d8c]"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              {article.description}
            </p>
            <p
              className="mt-3 text-[14px] leading-5 text-[#737d8c]"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              {article.author} · {article.date}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
