'use client';

interface ArticlePageProps {
  title?: string;
  subtitle?: string;
  author?: string;
  reviewer?: string;
  date?: string;
  breadcrumbs?: string[];
}

const TOOL_CARDS = [
  { category: 'CREDIT CARDS', title: 'Best Credit Cards' },
  {
    category: 'PERSONAL LOANS',
    title: 'Best Personal Loan Rates',
    image: '/assets/9a3fc032dc38f40fae01213fa849fbfeee28be1a.png',
  },
  {
    category: 'MORTGAGES',
    title: 'Best Mortgages',
    image: '/assets/a22a017a76d8208b14a78bc76836fc1d1aa6f613.png',
  },
  {
    category: 'BANKING',
    title: '10 Best Savings Accounts of January 2026: Up to 5.00%',
    image: '/assets/52ef795d30fa2dea034129ca5c50399e6dd2f2e4.png',
  },
];

const ARTICLE_POINTS = [
  'Nuclear stocks gaining on clean energy demand',
  'Top picks: CCJ, CEG, and nuclear ETFs',
  'Policy tailwinds from IRA tax credits',
];

const NAV_ITEMS = [
  'Credit Cards',
  'Mortgages',
  'Personal Loans',
  'Student Loans',
  'Banking',
  'Investing',
  'Retirement',
  'Other',
];

export function ArticlePage({
  title = '5 Best Nuclear Energy Stocks and ETFs to Buy',
  subtitle = 'Renewed interest in nuclear energy stocks and ETFs comes amid the growth in artificial intelligence.',
  author = 'Marc Guberti',
  reviewer = 'Rachel McVearry',
  date = 'Jan. 23, 2026, at 2:18 p.m.',
  breadcrumbs = ['Home', 'Money', 'Investing', 'Cryptocurrency', 'The Battle for a Spot Bitcoin E...'],
}: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="h-[60px] border-b border-[#2d3340] bg-[#1b1f2a] text-white">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4">
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="flex items-center gap-[14px]">
              <img
                alt="US News"
                className="h-[22px] w-auto md:h-[24px]"
                src="/assets/ba0887e6f6e6caf4bfecf42cf3d0c51d4870c4ff.png"
              />
              <img
                alt="90th anniversary"
                className="hidden h-[24px] w-auto md:block"
                src="/assets/e48e30b066c2529c4fa856912bf2a3b9237f4270.png"
              />
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              <span className="font-roboto text-[24px] font-bold tracking-[0.48px] text-[#f5f7fa]">
                MONEY »
              </span>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  className={`font-roboto text-[15px] font-semibold leading-5 ${
                    item === 'Investing'
                      ? 'border-b-[3px] border-[#ef4444] pb-[18px] text-white'
                      : 'text-white/90'
                  }`}
                  href="#"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button aria-label="Search" className="hidden text-white/95 md:block">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <button className="rounded-[8px] border border-white/80 px-[12px] py-[5px] font-roboto text-[13px] font-semibold leading-4 text-white">
              Sign In
            </button>
            <button aria-label="Menu" className="text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-8 md:px-14">
        <div className="font-roboto flex flex-wrap items-center gap-x-2 gap-y-2 text-[14px] text-[#3f4658]">
          {breadcrumbs.map((crumb, idx) => (
            <div key={crumb} className="flex items-center gap-2">
              {idx > 0 && <span className="text-[var(--usn-muted)]">/</span>}
              <span
                className={
                  idx === breadcrumbs.length - 1 ? 'font-normal' : 'font-semibold'
                }
              >
                {crumb}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-6 xl:items-start">
          <section className="min-w-0 flex-1">
            <h1 className="font-montserrat text-[34px] font-bold leading-[1.1] text-[#090909] md:text-[48px]">
              {title}
            </h1>
            <p className="font-roboto mt-4 text-[20px] leading-7 text-[#040710]">
              {subtitle}
            </p>

            <div className="font-roboto mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] leading-5 text-[#4c5263]">
              <span>
                By{' '}
                <a className="text-black underline" href="#">
                  {author}
                </a>
              </span>
              <span className="text-[var(--usn-muted)]">|</span>
              <span className="inline-flex items-center gap-2">
                <img
                  alt=""
                  className="h-[22px] w-[23px]"
                  src="/assets/36f4e946bd6014365fcdd18aac8d9509211d1b10.svg"
                />
                Reviewed by{' '}
                <a className="text-black underline" href="#">
                  {reviewer}
                </a>
              </span>
              <span className="text-[var(--usn-muted)]">|</span>
              <span>{date}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button className="font-roboto inline-flex h-[38px] items-center gap-2 rounded-full border border-[#d1d1d1] px-4 text-[14px] text-[#1f252e]">
                <svg
                  className="h-4 w-4 text-[var(--usn-muted)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4.75h10.5A1.75 1.75 0 0 1 18.25 6.5v13l-6.25-3-6.25 3v-13A1.75 1.75 0 0 1 6 4.75Z" />
                </svg>
                Save
              </button>

              {['#1d4ed8', '#1d9bf0', '#ff4b4b', '#6b7280'].map((color, idx) => (
                <button
                  key={idx}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d1d1d1]"
                  style={{ color }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r={idx === 3 ? '2.1' : '8'} />
                    {idx === 3 ? (
                      <>
                        <circle cx="5" cy="12" r="2.1" />
                        <circle cx="19" cy="12" r="2.1" />
                      </>
                    ) : null}
                  </svg>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_357px]">
              <article className="min-w-0">
                <img
                  alt="Article hero"
                  className="aspect-[1712/948] w-full object-cover"
                  src="/assets/bcabc5f6e79ce65286eba40f5afa8ec8ea91b58b.png"
                />
                <div className="article-body mt-5 max-w-[865px]">
                  <p>
                    If you&apos;re looking for a picks-and-shovels way to play the
                    artificial intelligence boom, you could do worse than invest
                    in the supply chain that provides it with electricity.
                  </p>
                  <p>
                    Because of the computing power needed for AI calculations and
                    the cooling that is needed for those computers, the data
                    centers that house AI servers consume a lot of electricity.
                    An April report from the International Energy Agency
                    projected that electricity consumption from data centers will
                    grow to 945 terawatt-hours by 2030 from 415 TWh in 2024, a
                    rise of about 15% per year. According to a July report from
                    consulting firm Ducker Carlisle, U.S. data center demand is
                    increasing alongside AI deployment and cloud growth.
                  </p>
                </div>
              </article>

              <aside className="hidden xl:block">
                <div className="sticky top-4 space-y-6">
                  <div className="overflow-hidden rounded-[4px] border border-[var(--usn-border)] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(187,27,64,0.1)] text-[var(--usn-red)]">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 12h8M12 8l4 4-4 4" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-merriweather text-[13.8px] leading-5 text-[#1f252e]">
                            Ask about this article
                          </div>
                          <div className="text-[12px] leading-4 text-[var(--usn-muted)]">
                            Get summaries, explanations &amp; next steps
                          </div>
                        </div>
                      </div>
                      <svg
                        className="h-4 w-4 text-[#1f252e]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>

                    <div className="px-4 pb-4">
                      {ARTICLE_POINTS.map((item) => (
                        <div key={item} className="mb-2 flex gap-2 text-[12px] leading-4">
                          <span className="text-[var(--usn-red)]">•</span>
                          <span className="text-[var(--usn-muted)]">{item}</span>
                        </div>
                      ))}
                      <button className="mt-2 h-9 w-full rounded-[2px] border border-[#e2e8f0] bg-white text-[12px] leading-4 text-[#1f252e]">
                        Generate 10-second summary
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="border-t-4 border-[var(--usn-red)] pt-5">
                      <h3 className="font-merriweather text-[18px] uppercase leading-7 tracking-[0.45px] text-[var(--usn-text)]">
                        The Best Financial Tools for You
                      </h3>
                    </div>
                    <div className="mt-4 space-y-4">
                      {TOOL_CARDS.map((tool) => (
                        <div
                          key={tool.title}
                          className="rounded-[4px] border border-[var(--usn-border)] p-[17px]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="text-[12px] font-bold uppercase tracking-[0.6px] text-[var(--usn-muted)]">
                                {tool.category}
                              </div>
                              <div className="font-merriweather mt-1 text-[15.8px] leading-6 text-[var(--usn-text)]">
                                {tool.title}
                              </div>
                            </div>
                            {tool.image ? (
                              <img
                                alt=""
                                className="h-16 w-16 rounded-[4px] object-cover"
                                src={tool.image}
                              />
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-merriweather text-[18px] leading-7 text-[var(--usn-text)]">
                      You May Also Like
                    </h3>
                    <div className="mt-4">
                      <img
                        alt=""
                        className="h-48 w-full rounded-[4px] object-cover"
                        src="/assets/bc0a6596e0906806fdc65755bd2b7d9a5360dcf0.png"
                      />
                      <div className="font-merriweather mt-3 text-[16px] leading-6 text-[var(--usn-text)]">
                        6 of the Best AI ETFs to Buy for 2026
                      </div>
                      <p className="mt-2 text-[14px] leading-5 text-[var(--usn-muted)]">
                        AI ETFs can help investors capture shifts in leadership
                        across hardware, software and infrastructure without
                        relying on precise timing or single-stock bets.
                      </p>
                      <div className="mt-3 text-[14px] leading-5 text-[var(--usn-muted)]">
                        Tony Dong · Jan. 23, 2026
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed bottom-6 left-5">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1263d3] shadow-[0_10px_15px_-3px_rgba(61,71,81,0.1),0_4px_6px_-4px_rgba(61,71,81,0.08)]">
          <img
            alt="US News shortcut"
            className="h-6 w-6 object-cover"
            src="/assets/5b8eb72d625e6b7705425a98a5513b9c1502893d.png"
          />
        </button>
      </div>
    </div>
  );
}
