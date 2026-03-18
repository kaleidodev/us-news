'use client';

import { AISummarizer } from '../components/AISummarizer';
import { AISummarizerLarge } from '../components/AISummarizerLarge';

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">US News AI Summarizer Components</h1>
          <p className="text-gray-600">A comprehensive collection of AI summarizer components for the Money section</p>
        </div>

        {/* Component 1: Inline AISummarizer */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Inline AI Summarizer (Collapsed)</h2>
          <p className="text-gray-600 mb-6">Compact version that expands to show full summarization panel</p>
          <AISummarizer />
        </div>

        {/* Component 2: Large Panel Version */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Large AI Summarizer Panel</h2>
          <p className="text-gray-600 mb-6">Full-screen version with all features visible</p>
          <AISummarizerLarge isExpanded={true} />
        </div>

        {/* Component 3: Large Panel Collapsed */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Large AI Summarizer Panel (Collapsed)</h2>
          <p className="text-gray-600 mb-6">Collapsed state for the large panel</p>
          <AISummarizerLarge isExpanded={false} />
        </div>

        {/* Features List */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Expandable/collapsible interface for space efficiency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>AI-generated article summaries with numbered bullet points</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Related articles carousel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Helpfulness feedback with thumbs up/down</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Follow-up question suggestions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Disclaimer notice for financial information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>BETA badge with help tooltip</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Responsive design for mobile and desktop</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Chat input area for follow-up questions</span>
            </li>
          </ul>
        </div>

        {/* Design Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Design Information</h2>
          <div className="space-y-3 text-blue-900">
            <p><span className="font-semibold">Primary Color:</span> #1263d3 (Science Blue)</p>
            <p><span className="font-semibold">Background:</span> White (#FFFFFF), Light Gray (#f4f7f9)</p>
            <p><span className="font-semibold">Font:</span> Montserrat (Headers), Roboto (Body)</p>
            <p><span className="font-semibold">Framework:</span> React 19 + Next.js 16 + Tailwind CSS 4</p>
            <p><span className="font-semibold">Icons:</span> Lucide React</p>
          </div>
        </div>

        {/* Implementation Notes */}
        <div className="bg-gray-100 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Notes</h2>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">State Management:</span> Uses React hooks (useState) for expand/collapse and feedback states</p>
            <p><span className="font-semibold">Responsiveness:</span> Tailwind grid layout with proper spacing and overflow handling</p>
            <p><span className="font-semibold">Accessibility:</span> Semantic HTML, proper button elements with hover states</p>
            <p><span className="font-semibold">Customization:</span> Props allow for different article titles, content, and related articles</p>
            <p><span className="font-semibold">Browser Support:</span> Modern browsers with CSS Grid and Flexbox support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
