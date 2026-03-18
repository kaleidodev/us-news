import { AIArticleModule } from './AIArticleModule';

interface AISummarizerProps {
  articleTitle?: string;
  articleContent?: string;
}

/**
 * @deprecated Use AIArticleModule instead for responsive, multi-breakpoint support
 * This wrapper maintains backward compatibility with existing code
 */
export function AISummarizer({
  articleTitle = "5 Best Nuclear Energy Stocks and ETFs to Buy",
  articleContent = "Renewed interest in nuclear energy stocks and ETFs comes amid the growth in artificial intelligence."
}: AISummarizerProps) {
  return (
    <AIArticleModule
      articleTitle={articleTitle}
      articleContent={articleContent}
      defaultExpanded={false}
      mode="auto"
    />
  );
}
