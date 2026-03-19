'use client';

import { TopNav } from './TopNav';
import { Breadcrumbs } from './Breadcrumbs';
import { ArticleHeader } from './ArticleHeader';
import { ArticleBody } from './ArticleBody';
import { ArticleSidebar } from './ArticleSidebar';
import { FloatingButton } from './FloatingButton';

interface ArticlePageProps {
  title?: string;
  subtitle?: string;
  author?: string;
  reviewer?: string;
  date?: string;
  breadcrumbs?: string[];
}

export function ArticlePage({
  title = '5 Best Nuclear Energy Stocks and ETFs to Buy',
  subtitle = 'Renewed interest in nuclear energy stocks and ETFs comes amid the growth in artificial intelligence.',
  author = 'Marc Guberti',
  reviewer = 'Rachel McVearry',
  date = 'Jan. 23, 2026, at 2:18 p.m.',
  breadcrumbs = [
    'Home',
    'Money',
    'Investing',
    'Cryptocurrency',
    'The Battle for a Spot Bitcoin E...',
  ],
}: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <TopNav activeItem={breadcrumbs[2] ?? breadcrumbs[1] ?? 'Money'} />

      <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-8 md:px-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 flex gap-6 xl:items-start">
          {/* Main column */}
          <section className="min-w-0 flex-1">
            {/* Article header: title, author, share */}
            <ArticleHeader
              title={title}
              subtitle={subtitle}
              author={author}
              reviewer={reviewer}
              date={date}
            />

            {/* Article body: hero image, paragraphs, table, sections */}
            <div className="mt-6">
              <ArticleBody />
            </div>
          </section>

          {/* Right sidebar */}
          <ArticleSidebar />
        </div>
      </main>

      <FloatingButton />
    </div>
  );
}
