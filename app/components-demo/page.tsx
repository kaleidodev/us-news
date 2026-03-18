'use client';

import { AIArticleModule } from '../components/AIArticleModule';

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">US News AI Article Module Components</h1>
          <p className="text-gray-600">Unified responsive AI Article Module with support for small, medium, and large breakpoints</p>
        </div>

        {/* Component 1: Collapsed State */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. AI Article Module (Collapsed)</h2>
          <p className="text-gray-600 mb-6">Compact button state, click to expand. Responsive across all screen sizes.</p>
          <AIArticleModule defaultExpanded={false} mode="auto" />
        </div>

        {/* Component 2: Expanded State */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. AI Article Module (Expanded)</h2>
          <p className="text-gray-600 mb-6">Full expanded panel with all features visible. Responsive layout.</p>
          <AIArticleModule defaultExpanded={true} mode="expanded" />
        </div>

        {/* Component 3: Small Screen Simulation */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. AI Article Module (Mobile - 375px Simulation)</h2>
          <p className="text-gray-600 mb-6">Testing responsive behavior on small screens</p>
          <div className="border border-dashed border-gray-300 rounded p-4 bg-gray-50" style={{ maxWidth: '375px' }}>
            <AIArticleModule defaultExpanded={true} mode="expanded" />
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Single Component</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Unified AIArticleModule component</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Auto-responsive across breakpoints</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>No layout duplication</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Consistent interaction behavior</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Interactive Elements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Expandable/collapsible interface</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Helpfulness feedback buttons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Follow-up questions integration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Chat input with follow-up prefill</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>AI-generated summaries with bullet points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Related articles adaptive grid</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Disclaimer and educational notice</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsive Breakpoints</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Small (375px): Compact, 2-col cards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Medium (768px): Balanced layout</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Large (1200px+): Full expanded state</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Design Tokens & System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Colors</h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li><span className="font-mono bg-white px-2 py-1 rounded">#1263d3</span> Primary Blue</li>
                <li><span className="font-mono bg-white px-2 py-1 rounded">#0d4fa8</span> Primary Dark</li>
                <li><span className="font-mono bg-white px-2 py-1 rounded">#448aff</span> Accent</li>
                <li><span className="font-mono bg-white px-2 py-1 rounded">#f4f7f9</span> Light BG</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Spacing & Border Radius</h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>Radius-sm: 6px, Radius-md: 8px</li>
                <li>Radius-lg: 12px, Radius-xl: 16px</li>
                <li>Radius-2xl: 24px</li>
                <li>Framework: React 18 + Next.js 15 + Tailwind 4</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Props Interface */}
        <div className="bg-gray-100 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Component Props Interface</h2>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto font-mono">
{`interface AIArticleModuleProps {
  articleTitle?: string;
  articleContent?: string;
  defaultExpanded?: boolean;
  mode?: 'auto' | 'collapsed' | 'expanded';
  relatedArticles?: RelatedArticle[];
  followUpQuestions?: string[];
}`}
          </pre>
        </div>

        {/* Implementation Notes */}
        <div className="bg-gray-50 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Architecture</h2>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">Single Component Approach:</span> Unified AIArticleModule handles all breakpoints internally using Tailwind responsive classes (sm:, lg:, xl:)</p>
            <p><span className="font-semibold">State Management:</span> React hooks for expand/collapse state, helpfulness feedback, and follow-up question prefill</p>
            <p><span className="font-semibold">Backward Compatibility:</span> Old AISummarizer and AISummarizerLarge components now wrap AIArticleModule for gradual migration</p>
            <p><span className="font-semibold">Design Tokens:</span> Centralized in globals.css using CSS custom properties for consistent theming</p>
            <p><span className="font-semibold">Accessibility:</span> Semantic HTML, proper ARIA labels, keyboard navigation support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
