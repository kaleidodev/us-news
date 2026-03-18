'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, ThumbsUp, ThumbsDown, X } from 'lucide-react';

interface AISummarizerProps {
  articleTitle?: string;
  articleContent?: string;
}

export function AISummarizer({ 
  articleTitle = "5 Best Nuclear Energy Stocks and ETFs to Buy",
  articleContent = "Renewed interest in nuclear energy stocks and ETFs comes amid the growth in artificial intelligence."
}: AISummarizerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);

  return (
    <div className="w-full">
      {/* Collapsed State - AI Summarizer Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full bg-[#1263d3] hover:bg-[#0d4fa8] rounded-lg px-6 py-4 flex items-center gap-4 text-white transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-white/20 rounded p-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Ask A.I. for quicker answers</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">BETA</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      )}

      {/* Expanded State - Full AI Panel */}
      {isExpanded && (
        <div className="w-full bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#1263d3] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded p-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">Ask A.I. for quicker answers</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                BETA
                <HelpCircle className="w-4 h-4" />
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="hover:bg-white/20 rounded p-1 transition-colors"
            >
              <ChevronDown className="w-5 h-5 rotate-180" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* User Query */}
            <div className="flex justify-end">
              <div className="bg-[#448aff] text-white rounded-lg px-4 py-3 max-w-sm">
                <p className="text-sm">Summarize this article for me.</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                The Fed paused rate hikes, but high-yield savings accounts and CDs can still keep your cash growing at strong rates.
              </p>

              {/* Bullet Points with Numbers */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-gray-700">After 10 straight hikes, the Fed didn't raise the federal funds rate this time.</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-gray-700">Savings APYs may rise more slowly, but banks can still adjust rates to attract deposits.</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#1263d3] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                  <p className="text-sm text-gray-700">The federal funds rate affects products like savings accounts and credit cards.</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900">
                  <span className="font-semibold">Disclaimer:</span> The information provided is for general educational use only. Consult a financial professional for advice specific to your situation.
                </p>
              </div>

              {/* Related Articles */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900">Related Articles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-20 w-full" />
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-700">Bitcoin ETF: What's Next in Grayscale's Battle With the SEC</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-green-200 to-green-300 h-20 w-full" />
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-700">7 Best Private Credit ETFs to Buy in 2023</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-amber-200 to-amber-300 h-20 w-full" />
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-700">7 Best Long-Term ETFs to Buy and Hold</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-purple-200 to-purple-300 h-20 w-full" />
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-700">7 Best International Stock Funds to Buy for 2026</p>
                    </div>
                  </div>
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

              {/* Follow-up Questions */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-medium text-gray-700">Is there anything else we can help you with?</p>
                <div className="space-y-2">
                  <button className="w-full text-left bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors">
                    Do I need a lot of money upfront to take advantage of higher yields?
                  </button>
                  <button className="w-full text-left bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors">
                    How does the Fed rate affect borrowers?
                  </button>
                  <button className="w-full text-left bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg px-4 py-3 text-sm text-[#1263d3] transition-colors">
                    Will my savings rate continue to increase even without Federal Reserve action?
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white border-t p-4 flex gap-2">
            <input
              type="text"
              placeholder="Summarize this article for me."
              defaultValue="Summarize this article for me."
              className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1263d3]"
            />
            <button className="bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
