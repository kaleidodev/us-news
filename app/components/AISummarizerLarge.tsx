import { AIArticleModule } from './AIArticleModule';

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

/**
 * @deprecated Use AIArticleModule instead for responsive, multi-breakpoint support
 * This wrapper maintains backward compatibility with existing code
 */
export function AISummarizerLarge({
  isExpanded = true,
  relatedArticles = DEFAULT_ARTICLES,
}: AISummarizerLargeProps) {
  return (
    <AIArticleModule
      defaultExpanded={isExpanded}
      mode={isExpanded ? 'expanded' : 'collapsed'}
      relatedArticles={relatedArticles}
    />
  );
}
