'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';

interface RelatedArticle {
  id: string;
  title: string;
  image?: string;
}

interface AIArticleModuleProps {
  articleTitle?: string;
  articleContent?: string;
  defaultExpanded?: boolean;
  mode?: 'auto' | 'collapsed' | 'expanded';
  relatedArticles?: RelatedArticle[];
  followUpQuestions?: string[];
}

const DEFAULT_ARTICLES: RelatedArticle[] = [
  { id: '1', title: "Bitcoin ETF: What's Next in Grayscale's Battle With the SEC" },
  { id: '2', title: '7 Best Private Credit ETFs to Buy in 2023' },
  { id: '3', title: '7 Best Long-Term ETFs to Buy and Hold' },
  { id: '4', title: '7 Best International Stock Funds to Buy for 2026' },
];

const DEFAULT_QUESTIONS: string[] = [
  'Do I need a lot of money upfront to take advantage of higher yields?',
  'How does the Fed rate affect borrowers?',
  'Will my savings rate continue to increase even without Federal Reserve action?',
];

export function AIArticleModule({
  defaultExpanded = false,
  mode = 'auto',
  relatedArticles = DEFAULT_ARTICLES,
  followUpQuestions = DEFAULT_QUESTIONS,
}: AIArticleModuleProps) {
  // Determine initial state based on mode
  const getInitialExpanded = () => {
    if (mode === 'expanded') return true;
    if (mode === 'collapsed') return false;
    // 'auto' mode: default to defaultExpanded
    return defaultExpanded;
  };

  const [isExpanded, setIsExpanded] = useState(getInitialExpanded());
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [followUpInput, setFollowUpInput] = useState('');

  const handleFollowUpClick = (question: string) => {
    setFollowUpInput(question);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFollowUpInput(e.target.value);
  };

  // Collapsed state - visible on all breakpoints
  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="w-full bg-[#1263d3] hover:bg-[#0d4fa8] rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 text-white transition-colors text-left"
      >
        <div className="bg-white/20 rounded p-2 flex-shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-semibold truncate">Ask A.I. for quicker answers</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">BETA</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
    );
  }

  // Expanded state
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white rounded-lg sm:rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#1263d3] text-white px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="bg-white/20 rounded p-1.5 sm:p-2 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-semibold text-sm sm:text-base truncate">Ask A.I. for quicker answers</span>
          <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
            BETA
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="hover:bg-white/20 rounded p-1 transition-colors flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
        </button>
      </div>

      {/* Content - scrollable on mobile, normal on larger screens */}
      <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-none overflow-y-auto">
        {/* Quick Action Buttons - visible on small screens */}
        <div className="flex gap-2 sm:hidden">
          <button className="flex-1 bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-3 py-2 text-xs font-semibold transition-colors">
            SUMMARIZE
          </button>
          <button className="flex-1 bg-white border border-[#1263d3] text-[#1263d3] rounded-lg px-3 py-2 text-xs font-semibold hover:bg-blue-50 transition-colors">
            CHAT
          </button>
        </div>

        {/* User Query */}
        <div className="flex justify-end">
          <div className="bg-[#448aff] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 max-w-xs sm:max-w-sm text-xs sm:text-sm">
            <p>Summarize this article for me.</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm text-gray-700 font-medium">
            The Fed paused rate hikes, but high-yield savings accounts and CDs can still keep your cash growing at strong rates.
          </p>

          {/* Bullet Points with Numbers */}
          <div className="space-y-2 sm:space-y-3">
            {[
              'After 10 straight hikes, the Fed didn\'t raise the federal funds rate this time.',
              'Savings APYs may rise more slowly, but banks can still adjust rates to attract deposits.',
              'The federal funds rate affects products like savings accounts and credit cards.',
            ].map((text, idx) => (
              <div key={idx} className="flex gap-2 sm:gap-3">
                <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 flex gap-2 sm:gap-3">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-900">
              <span className="font-semibold">Disclaimer:</span> The information provided is for general educational use only. Consult a financial professional for advice specific to your situation.
            </p>
          </div>

          {/* Related Articles */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Related Articles</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-16 sm:h-20 w-full" />
                  <div className="p-2 sm:p-3">
                    <p className="text-xs font-medium text-gray-700 line-clamp-2">{article.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helpfulness */}
          <div className="flex items-center justify-between pt-2 sm:pt-4 border-t">
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

          {/* Follow-up Questions */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
            <p className="text-xs font-medium text-gray-700">Is there anything else we can help you with?</p>
            <div className="space-y-2">
              {followUpQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFollowUpClick(question)}
                  className="w-full text-left bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#1263d3] transition-colors font-medium"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-3 sm:p-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your question..."
          value={followUpInput}
          onChange={handleInputChange}
          className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1263d3]"
        />
        <button className="bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors flex-shrink-0">
          Send
        </button>
      </div>
    </div>
  );
}
