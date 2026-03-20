'use client';

const heroImageSrc = '/figma-assets/bcabc5f6e79ce65286eba40f5afa8ec8ea91b58b.png';

const STOCK_TABLE = [
  { name: 'Cameco Corp.', ticker: 'CCJ', marketCap: '$52.9 billion' },
  { name: 'GE Vernova Inc.', ticker: 'GEV', marketCap: '$178.2 billion' },
  { name: 'Constellation Energy Corp.', ticker: 'CEG', marketCap: '$105.0 billion' },
  { name: 'VanEck Uranium and Nuclear ETF', ticker: 'NLR', marketCap: '$4.7 billion' },
  { name: 'Range Nuclear Renaissance ETF', ticker: 'NUKZ', marketCap: '$829.8 million' },
];

const ARTICLE_TAGS = [
  'nuclear power',
  'investing',
  'money',
  'artificial intelligence',
  'energy',
];

/** Inline stock ticker link */
function Ticker({ symbol }: { symbol: string }) {
  return (
    <a
      href="#"
      className="font-semibold text-[#005fcc] hover:underline"
      style={{ fontFamily: 'var(--font-open-sans), sans-serif', fontSize: '17px', lineHeight: '27.63px' }}
    >
      {symbol}
    </a>
  );
}

/** Inline hyperlink */
function InlineLink({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="hover:underline"
      style={{ color: '#005fcc', fontFamily: 'var(--font-open-sans), sans-serif' }}
    >
      {text}
    </a>
  );
}

/** Gray left-bordered callout box */
function RelatedBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[4px] border-l-4 border-[#bb1b40] bg-[#f3f5f6] pl-5 pr-4 py-4">
      {children}
    </div>
  );
}

/** Italic blockquote */
function Blockquote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <blockquote className="rounded-br-[4px] rounded-tr-[4px] border-l-4 border-[#bb1b40] bg-[#f3f5f6] pl-5 pr-4 py-4">
      <p
        className="italic text-[#333d4d] text-[17px] leading-[27.63px]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        {quote}
      </p>
      <footer
        className="mt-2 text-[14px] font-semibold leading-5 text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        {attribution}
      </footer>
    </blockquote>
  );
}

/** Section heading with stock ticker link */
function SectionHeading({ prefix, ticker, suffix }: { prefix: string; ticker: string; suffix?: string }) {
  return (
    <h2
      className="text-[24px] leading-8 text-[#333d4d]"
      style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700 }}
    >
      {prefix}
      <a href="#" className="text-[#005fcc] hover:underline">{ticker}</a>
      {suffix ?? ')'}
    </h2>
  );
}

/** Article body paragraph */
function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[17px] leading-[27.63px] text-[#333d4d]"
      style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
    >
      {children}
    </p>
  );
}

export function ArticleBody() {
  return (
    <article className="article-body flex flex-col gap-5">
      {/* Hero Image */}
      <figure className="w-full">
        <img
          alt="Nuclear energy facility"
          className="aspect-[1712/948] w-full object-cover"
          src={heroImageSrc}
        />
      </figure>

      {/* Opening paragraphs */}
      <P>
        If you&apos;re looking for a picks-and-shovels way to play the artificial intelligence boom, you could do worse
        than invest in the supply chain that provides it with electricity.
      </P>

      <P>
        Because of the computing power needed for AI calculations and the cooling that is needed for those computers,
        the data centers that house AI servers consume a lot of electricity. An April report from the International
        Energy Agency projected that electricity consumption from data centers will grow to 945 terawatt-hours by 2030
        from 415 TWh in 2024, a rise of about 15% per year. According to a July report from consulting firm Ducker
        Carlisle, U.S. data center electricity demand is expected to rise by roughly 400 TWh, or 23%, between 2024 and
        2030.
      </P>

      {/* Related callout */}
      <RelatedBox>
        <div className="flex flex-col items-start gap-[8.5px]">
          <p
            className="text-[14px] font-semibold leading-5 text-[#333d4d]"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Related:
          </p>
          <a
            href="#"
            className="text-[14px] leading-5 text-[#005fcc] hover:underline"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Sign up for stock news with our Invested newsletter.
          </a>
        </div>
      </RelatedBox>

      <p
        id="ai-ref-1"
        className="scroll-mt-24 text-[17px] leading-[27.63px] text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        Much of that supply is expected to come from nuclear energy. Unlike{' '}
        <InlineLink text="natural gas" /> and coal, nuclear power doesn&apos;t produce greenhouse gas emissions even while
        being able to generate stable baseload power for homes and businesses when intermittent solar and wind power
        can&apos;t.
      </p>

      <p
        id="ai-ref-2"
        className="scroll-mt-24 text-[17px] leading-[27.63px] text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        The <InlineLink text="green aspect of nuclear energy" /> is particularly attractive to Big Tech companies that
        want to burnish their sustainability credentials. Microsoft Corp. (ticker:{' '}
        <Ticker symbol="MSFT" />
        ), Alphabet Inc.&apos;s ( <Ticker symbol="GOOG" />, <Ticker symbol="GOOGL" />) Google, Meta Platforms Inc. (
        {' '}<Ticker symbol="META" />) and Amazon.com Inc. ( <Ticker symbol="AMZN" />) have all indicated they want
        nuclear-powered data centers.
      </p>

      {/* Blockquote */}
      <Blockquote
        quote='"Power-hungry AI data centers crave reliable baseload power around the clock. This is why Microsoft, Amazon, Meta and Alphabet are all signing deals with nuclear energy companies to power their energy-intensive AI growth."'
        attribution="— Benjamin Rains, stock strategist at Zacks Investment Research"
      />

      <p
        id="ai-ref-3"
        className="scroll-mt-24 text-[17px] leading-[27.63px] text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        The U.S. government is also getting behind the <InlineLink text="nuclear theme" />. Executive orders from
        President Donald Trump have added to Joe Biden-era support in the Infrastructure Investment and Jobs Act and
        the Inflation Reduction Act, on top of other congressional action.
      </p>

      <p
        id="ai-ref-4"
        className="scroll-mt-24 text-[17px] leading-[27.63px] text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        &quot;The U.S. government, under Biden and now Trump, has ramped up its efforts to support nuclear energy growth,
        aiming to help cut red tape and actively support the industry through tax credits, grants, loans and more,&quot;
        Rains says.
      </p>

      <p
        className="text-[17px] font-semibold leading-[27.63px] text-[#333d4d]"
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        With that in mind, here are five ways to invest in the nuclear renaissance:
      </p>

      {/* Stock/ETF table */}
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#141f2e]">
              <th
                className="px-4 pt-[11.5px] pb-[13px] text-left text-[17px] font-semibold leading-[27.63px] text-[#333d4d]"
                style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
              >
                Stock/ETF
              </th>
              <th
                className="px-4 pt-[11.5px] pb-[13px] text-left text-[17px] font-semibold leading-[27.63px] text-[#333d4d]"
                style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
              >
                Market Cap/Assets
              </th>
            </tr>
          </thead>
          <tbody>
            {STOCK_TABLE.map((row, idx) => (
              <tr
                key={row.ticker}
                className={`border-b border-[#dae0e7] ${idx % 2 === 0 ? 'bg-[#f3f5f6]' : 'bg-white'}`}
              >
                <td
                  className="flex items-center gap-1 px-4 py-3 text-[17px] leading-[27.63px] text-[#333d4d]"
                  style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                >
                  {row.name} ( <Ticker symbol={row.ticker} /> )
                </td>
                <td
                  className="px-4 py-3 text-[17px] leading-[27.63px] text-[#333d4d]"
                  style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                >
                  {row.marketCap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section: Cameco */}
      <section id="ai-ref-5" className="scroll-mt-24 flex flex-col gap-5">
        <SectionHeading prefix="Cameco Corp. ( " ticker="CCJ" />
        <P>
          During a slump after the 2011 Fukushima Daiichi nuclear reactor disaster in Japan, the{' '}
          <InlineLink text="uranium" /> mining industry cut back on investment and is now playing catch-up.
        </P>
        <P>
          While many small mining companies have been ramping up uranium production and exploration, they can be quite
          risky, although their upside can be substantial. In contrast, Cameco is the world&apos;s second-biggest
          uranium miner, which means the company is less risky than exploration companies that aren&apos;t yet in
          production.
        </P>
        <P>
          &quot;As a portfolio manager, I am most excited about Cameco in the nuclear energy space,&quot; says Tyler
          Kocon of Split Rock Private Trading. The stock is the third-biggest holding in the company&apos;s North Shore
          Equity Rotation ETF ( <Ticker symbol="KOOL" />), right behind AI processing powerhouse Nvidia Corp. (
          {' '}<Ticker symbol="NVDA" />).
        </P>
      </section>

      {/* Section: GE Vernova */}
      <section id="ai-ref-6" className="scroll-mt-24 flex flex-col gap-5">
        <SectionHeading prefix="GE Vernova Inc. ( " ticker="GEV" />
        <P>
          This company is a play on small modular reactors, or SMRs. These reactors represent the next generation of
          nuclear power generation alongside micro reactors, advanced enrichment methods and new fuel types.
        </P>
        <P>
          GE Vernova and Hitachi are working on an SMR design, with construction of the first unit expected to be
          complete by 2029 and commercial operation by the end of the following year.
        </P>
        <P>
          &quot;SMR companies such as GEV envision a not-so-distant future where they build their small-scale nuclear
          reactors directly on site at AI data centers, industrial buildings, military bases and really anywhere, even
          the moon,&quot; Rains says.
        </P>
      </section>

      {/* Section: Constellation Energy */}
      <section className="flex flex-col gap-5">
        <SectionHeading prefix="Constellation Energy Corp. ( " ticker="CEG" />
        <P>
          There are two main ways investors can play the nuclear theme through <InlineLink text="utilities" />. One is
          by owning utilities with nuclear plants that can charge premiums to tech companies. The other is with nuclear
          utilities that could benefit if regulators decide they want to prioritize nuclear development.
        </P>
        <P>
          Constellation falls into the first bucket. With the biggest fleet of nuclear plants in the U.S., Constellation
          is an obvious choice as a source for Big Tech to turn to for its nuclear energy needs. Meta has a 20-year
          nuclear agreement with Constellation. And Microsoft has agreed to purchase energy from a Constellation-revived
          unit at the Three Mile Island nuclear power plant in Pennsylvania.
        </P>
      </section>

      {/* Tags */}
      <div className="flex flex-col gap-3 border-t border-[#dae0e7] pt-6">
        <p
          className="text-[14px] font-semibold leading-5 text-[#333d4d]"
          style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
          Tags:
        </p>
        <div className="flex flex-wrap gap-2">
          {ARTICLE_TAGS.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-[14px] leading-5 text-[#005fcc] hover:underline"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
