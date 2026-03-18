'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';

interface RelatedArticle {
  id: string;
  title: string;
  image?: string;
}

interface AISummarizerLargeProps {
  isExpanded?: boolean;
  relatedArticles?: RelatedArticle[];
}

const DEFAULT_ARTICLES: RelatedArticle[] = [
  { id: '1', title: "Bitcoin ETF: What's Next in Grayscale's Battle With the SEC" },
  { id: '2', title: '7 Best Private Credit ETFs to Buy in 2023' },
  { id: '3', title: '7 Best Long-Term ETFs to Buy and Hold' },
  { id: '4', title: '7 Best International Stock Funds to Buy for 2026' },
];

export function AISummarizerLarge({ 
  isExpanded = true,
  relatedArticles = DEFAULT_ARTICLES,
}: AISummarizerLargeProps) {
  const [isCollapsed, setIsCollapsed] = useState(!isExpanded);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    const newSelected = new Set(selectedQuestions);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedQuestions(newSelected);
  };

  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        className="w-full bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-6 py-4 flex items-center justify-between transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded p-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-semibold">Ask A.I. for quicker answers</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold inline-flex items-center gap-1">
            BETA <HelpCircle className="w-3 h-3" />
          </span>
        </div>
        <ChevronDown className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="w-full bg-[#f4f7f9] rounded-3xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-[#1263d3] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded p-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-semibold">Ask A.I. for quicker answers</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold inline-flex items-center gap-1">
            BETA <HelpCircle className="w-3 h-3" />
          </span>
        </div>
        <button
          onClick={() => setIsCollapsed(true)}
          className="hover:bg-white/20 rounded p-1 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 p-6 max-h-[70vh] overflow-y-auto">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-[#448aff] text-white rounded-xl px-4 py-3 max-w-xs">
            <p className="text-sm">Summarize this article for me.</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="space-y-4">
          <p className="text-sm text-gray-900 font-medium">
            The Fed paused rate hikes, but high-yield savings accounts and CDs can still keep your cash growing at strong rates.
          </p>

          {/* Bullet Points */}
          <div className="space-y-3 relative">
            <div className="flex gap-3">
              <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
              <p className="text-sm text-gray-800">
                After 10 straight hikes, the Fed didn't raise the federal funds rate this time.
                <span className="inline-flex gap-1 ml-2">
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">2</span>
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">4</span>
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
              <p className="text-sm text-gray-800">
                Savings APYs may rise more slowly, but banks can still adjust rates to attract deposits.
                <span className="inline-flex gap-1 ml-2">
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">1</span>
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">5</span>
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
              <p className="text-sm text-gray-800">
                The federal funds rate affects products like savings accounts and credit cards.
                <span className="inline-flex gap-1 ml-2">
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">3</span>
                  <span className="bg-[#1263d3] text-white rounded-full px-2 py-0.5 text-xs font-bold">6</span>
                </span>
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-blue-900">
                <span className="font-bold">Disclaimer:</span> The information provided is for general educational use only. Consult a financial professional for advice specific to your situation.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedArticles.map((article) => (
                <div key={article.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-20 w-full" />
                  <div className="p-3">
                    <p className="text-xs font-medium text-gray-700 line-clamp-2">{article.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helpfulness */}
          <div className="flex items-center justify-between pt-2 border-t">
            <p className="text-xs font-medium text-gray-700">Was this response helpful?</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsHelpful(true)}
                className={`p-1 rounded transition-colors ${
                  isHelpful === true ? 'bg-green-100' : 'hover:bg-gray-100'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${isHelpful === true ? 'text-green-600' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={() => setIsHelpful(false)}
                className={`p-1 rounded transition-colors ${
                  isHelpful === false ? 'bg-red-100' : 'hover:bg-gray-100'
                }`}
              >
                <ThumbsDown className={`w-4 h-4 ${isHelpful === false ? 'text-red-600' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>

          {/* Follow-up Section */}
          <div className="bg-white rounded-lg p-4 space-y-3">
            <p className="text-xs font-medium text-gray-900">Is there anything else we can help you with?</p>
            <div className="space-y-2">
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors font-medium">
                Do I need a lot of money upfront to take advantage of higher yields?
              </button>
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors font-medium">
                How does the Fed rate affect borrowers?
              </button>
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors font-medium">
                Will my savings rate continue to increase even without Federal Reserve action?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Summarize this article for me."
            className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1263d3]"
          />
          <button className="bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-6 py-3 text-sm font-semibold transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
