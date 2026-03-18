'use client';

import { AISummarizer } from './AISummarizer';
import { Bookmark, Share2, MessageCircle, Mail, Link2 } from 'lucide-react';

interface ArticlePageProps {
  title?: string;
  subtitle?: string;
  author?: string;
  reviewer?: string;
  date?: string;
  breadcrumbs?: string[];
}

export function ArticlePage({
  title = "5 Best Nuclear Energy Stocks and ETFs to Buy",
  subtitle = "Renewed interest in nuclear energy stocks and ETFs comes amid the growth in artificial intelligence.",
  author = "Marc Guberti",
  reviewer = "Rachel McVearry",
  date = "Jan. 23, 2026, at 2:18 p.m.",
  breadcrumbs = ["Home", "Money", "Investing", "Cryptocurrency", "The Battle for a Spot Bitcoin E..."]
}: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-[#333333] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 px-3 py-1 rounded text-xs font-bold">US NEWS</div>
          <span className="text-lg font-semibold">MONEY</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="border border-white px-4 py-1 rounded text-sm font-semibold hover:bg-white hover:text-gray-800 transition-colors">
            Sign In
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b px-6 py-3 text-xs text-gray-600 flex items-center gap-2">
        {breadcrumbs.map((crumb, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {idx > 0 && <span className="text-gray-400">/</span>}
            <span className={idx === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : 'cursor-pointer hover:text-gray-900'}>
              {crumb}
            </span>
          </div>
        ))}
      </div>

      {/* Article Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {subtitle}
          </p>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>By <a href="#" className="text-gray-900 font-semibold hover:underline">{author}</a></span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Reviewed by <a href="#" className="text-gray-900 font-semibold hover:underline">{reviewer}</a></span>
            </div>
            <span>|</span>
            <span>{date}</span>
          </div>

          {/* Article Actions */}
          <div className="flex items-center gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center justify-center gap-1 w-10 h-10 rounded-full border border-gray-300 text-blue-600 hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.535 6.247A5 5 0 0112.5 5c2.07 0 3.883 1.023 5 2.565M9.535 6.247A6.52 6.52 0 0012.5 3c3.59 0 6.767 2.666 7.31 6.167M9.535 6.247c.5-.149 1.028-.23 1.565-.23.537 0 1.065.081 1.565.23m0 0A6.487 6.487 0 0115 7h0a6.487 6.487 0 012.335 1.217" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-1 w-10 h-10 rounded-full border border-gray-300 text-red-600 hover:bg-red-50 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-1 w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="19" r="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* AI Summarizer - Primary Feature */}
        <div className="mb-8">
          <AISummarizer 
            articleTitle={title}
            articleContent={subtitle}
          />
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden bg-gray-200 h-96 w-full flex items-center justify-center">
          <div className="text-gray-400">Featured Image Placeholder</div>
        </div>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none mb-12">
          <p>
            If you're looking for a picks-and-shovels way to play the artificial intelligence boom, you could do worse than invest in the supply chain that provides it with electricity.
          </p>
          <p>
            Because of the computing power needed for AI calculations and the cooling that is needed for those computers, the data centers that house AI servers consume a lot of electricity. An April report from the International Energy Agency projected that electricity consumption from data centers will grow to 945 terawatt-hours by 2030 from 415 TWh in 2024, a rise of about 15% per year. According to a July report from Goldman Sachs, the peak power demand from artificial intelligence data centers could exceed the annual electricity consumption of Argentina.
          </p>
        </article>

        {/* Sidebar would go here in full layout */}
      </div>
    </div>
  );
}
