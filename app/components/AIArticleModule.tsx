'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';
import Image from 'next/image';

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
  layout?: 'default' | 'popup';
  onCollapse?: () => void;
  relatedArticles?: RelatedArticle[];
  followUpQuestions?: string[];
}

interface SummaryPoint {
  text: string;
  refs: string[];
}

interface PromptSuggestion {
  text: string;
  mobileOnly?: boolean;
}

interface ReferencePreview {
  id: string;
  text: string;
}

const DEFAULT_ARTICLES: RelatedArticle[] = [
  { id: '1', title: "Bitcoin ETF: What's Next in Grayscale's Battle With the SEC" },
  { id: '2', title: '7 Best Private Credit ETFs to Buy in 2023' },
  { id: '3', title: '7 Best Long-Term ETFs to Buy and Hold' },
  { id: '4', title: '7 Best International Stock Funds to Buy for 2026' },
];
const US_NEWS_LOGO_SRC = '/figma-assets/5b8eb72d625e6b7705425a98a5513b9c1502893d.png';

const DEFAULT_QUESTIONS: string[] = [
  'Do I need a lot of money upfront to take advantage of higher yields?',
  'How does the Fed rate affect borrowers?',
  'Will my savings rate continue to increase even without Federal Reserve action?',
];
const INITIAL_PROMPTS: PromptSuggestion[] = [
  { text: 'Summarize this article for me.' },
  { text: 'Will my savings rate continue to increase even without Federal Reserve action?', mobileOnly: true },
  { text: 'How can I increase my savings rate today?', mobileOnly: true },
];

const SUMMARY_POINTS: SummaryPoint[] = [
  { text: 'After 10 straight hikes, the Fed didn\'t raise the federal funds rate this time.', refs: ['2', '4'] },
  { text: 'Savings APYs may rise more slowly, but banks can still adjust rates to attract deposits.', refs: ['1', '5'] },
  { text: 'The federal funds rate affects products like savings accounts and credit cards.', refs: ['3', '6'] },
];
const REFERENCE_PREVIEWS: ReferencePreview[] = [
  { id: '1', text: 'Much of that supply is expected to come from nuclear energy. Unlike natural gas and coal, nuclear power does not produce greenhouse gas emissions while providing stable baseload power.' },
  { id: '2', text: 'The green aspect of nuclear energy is particularly attractive to Big Tech companies that want to strengthen their sustainability credentials.' },
  { id: '3', text: 'The U.S. government is also getting behind the nuclear theme through executive orders and earlier legislative support.' },
  { id: '4', text: 'The U.S. government has ramped up its efforts to support nuclear energy growth through tax credits, grants, loans and more.' },
  { id: '5', text: 'Cameco is the world\'s second-biggest uranium miner, making it less risky than exploration companies that are not yet in production.' },
  { id: '6', text: 'GE Vernova is a play on small modular reactors, with early commercial operation expected after the first unit is completed.' },
];
const POSITIVE_FEEDBACK_OPTIONS = [
  'This response was clear and concise',
  'This response saved me time',
  'The response was prompt',
];
const NEGATIVE_FEEDBACK_OPTIONS = [
  'My question was not answered',
  'This is not accurate',
  'Took too long',
  'Other',
];
const DEFAULT_QUERY = 'Summarize this article for me.';

export function AIArticleModule({
  defaultExpanded = false,
  mode = 'auto',
  layout = 'default',
  onCollapse,
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
  const [followUpInput, setFollowUpInput] = useState(DEFAULT_QUERY);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeRef, setActiveRef] = useState<string | null>(null);
  const [feedbackSelections, setFeedbackSelections] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const generatingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isPopup = layout === 'popup';

  const handleCollapse = () => {
    if (onCollapse) return onCollapse();
    setIsExpanded(false);
  };

  const handleFollowUpClick = (question: string) => {
    setHasStartedChat(true);
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setFollowUpInput('');
    let index = 0;
    typingTimerRef.current = setInterval(() => {
      index += 1;
      setFollowUpInput(question.slice(0, index));
      if (index >= question.length && typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    }, 20);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    setHasStartedChat(true);
    setFollowUpInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasStartedChat(true);
    setIsGenerating(true);
  };

  const toggleFeedbackSelection = (value: string) => {
    setFeedbackSelections((current) => (
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    ));
  };

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (generatingTimerRef.current) clearTimeout(generatingTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isGenerating) return;
    if (generatingTimerRef.current) clearTimeout(generatingTimerRef.current);
    generatingTimerRef.current = setTimeout(() => {
      setIsGenerating(false);
      generatingTimerRef.current = null;
    }, 1200);
    return () => {
      if (generatingTimerRef.current) clearTimeout(generatingTimerRef.current);
    };
  }, [isGenerating]);

  // Collapsed state - visible on all breakpoints
  if (!isExpanded) {
    return (
      <>
        <button
          onClick={() => {
            setIsExpanded(true);
            setHasStartedChat(false);
            setFollowUpInput(DEFAULT_QUERY);
          }}
          type="button"
          className="w-full rounded-[4px] bg-[#1263d3] px-2 py-2 text-left text-white transition-colors hover:bg-[#0d4fa8] md:hidden"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <Image
                alt="U.S. News"
                className="h-6 w-6 shrink-0"
                src="/usn-logo-large.svg"
                width={408}
                height={104}
                priority
              />
              <span className="truncate text-[12px] font-bold leading-4" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
                Ask A.I
              </span>
              <span className="flex shrink-0 items-center rounded-[10px] bg-[#d6eefd] px-2 py-[2px] text-[10px] font-bold leading-none text-[#033493]">
                BETA
                <svg className="ml-1 h-4 w-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="#033493"/>
                <mask id="mask0_335_17070" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="3" width="14" height="14">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_335_17070)">
                </g>
              </svg>
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <span className="rounded-[4px] bg-white px-2 py-1 text-[12px] font-medium leading-none text-[#1263d3]">SUMMARIZE</span>
              <span className="flex items-center gap-1 rounded-[4px] bg-white px-2 py-1 text-[12px] font-medium leading-none text-[#1263d3]">
                <svg className="h-[14px] w-[14px]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M17.5 9.6C17.5 13.49 14.14 16.67 10 16.67C9.01 16.67 8.07 16.48 7.22 16.14L3.33 17.5L4.57 13.96C3.64 12.77 3.09 11.3 3.09 9.71C3.09 5.82 6.45 2.64 10.59 2.64C14.73 2.64 17.5 5.71 17.5 9.6Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                CHAT
              </span>
            </div>
          </div>
        </button>

        <button
          onClick={() => {
            setIsExpanded(true);
            setHasStartedChat(false);
            setFollowUpInput(DEFAULT_QUERY);
          }}
          type="button"
          className="hidden h-[68px] w-full items-center justify-between rounded-[8px] bg-[#1263d3] px-6 text-left text-white transition-colors hover:bg-[#0d4fa8] md:flex"
        >
          <div className="flex items-center gap-4">
            <img alt="US News" className="h-[46px] w-[46px] shrink-0 object-cover" src={US_NEWS_LOGO_SRC} />
            <span className="text-[14px] font-bold leading-5" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Ask A.I. for quicker answers
            </span>
            <span className="flex items-center rounded-[10px] bg-[#d6eefd] px-2 text-[12px] font-bold leading-5 text-[#033493]">
              BETA
              <svg className="ml-1 h-4 w-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="#033493"/>
                <mask id="mask0_335_17070" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="3" width="14" height="14">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_335_17070)">
                </g>
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-[8px] bg-white px-3 py-2 text-[14px] font-bold leading-5 text-[#1263d3]">SUMMARIZE</span>
            <span className="flex items-center gap-2 rounded-[8px] bg-white px-3 py-2 text-[14px] font-bold leading-5 text-[#1263d3]">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M17.5 9.6C17.5 13.49 14.14 16.67 10 16.67C9.01 16.67 8.07 16.48 7.22 16.14L3.33 17.5L4.57 13.96C3.64 12.77 3.09 11.3 3.09 9.71C3.09 5.82 6.45 2.64 10.59 2.64C14.73 2.64 17.5 5.71 17.5 9.6Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              CHAT
            </span>
          </div>
        </button>
      </>
    );
  }

  // Expanded state
  return (
    <div className={`w-full overflow-hidden border border-gray-200 bg-gradient-to-b from-blue-50 to-white shadow-lg ${layout === 'popup' ? 'flex h-full max-h-[min(923px,calc(100vh-48px))] flex-col rounded-[20px]' : 'rounded-lg md:rounded-2xl'}`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 bg-[#1263d3] p-4 text-white">
        <div className="flex min-w-0 items-center gap-2">
          <Image alt="US News" className="h-6 w-6 shrink-0 object-cover" src={US_NEWS_LOGO_SRC} width={24} height={24} />
          <span className="shrink-0 whitespace-nowrap text-[14px] font-bold leading-5" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Ask A.I. for quicker answers</span>
          <span className="flex h-5 shrink-0 items-center rounded-[10px] bg-[#d6eefd] px-2 text-[#033493]">
            <span className="shrink-0 text-[12px] font-bold leading-none" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>BETA</span>
            <svg className="ml-1 h-4 w-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="#033493"/>
                <mask id="mask0_335_17070" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="3" width="14" height="14">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.875 10C16.875 13.797 13.797 16.875 10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625C6.8934 15.625 4.375 13.1066 4.375 10C4.375 6.8934 6.8934 4.375 10 4.375C13.1066 4.375 15.625 6.8934 15.625 10ZM9.28329 6.48199C9.1361 6.63665 9.0625 6.81859 9.0625 7.02784C9.0625 7.24163 9.13836 7.42585 9.29008 7.58051C9.4418 7.73517 9.62636 7.8125 9.84375 7.8125C10.0566 7.8125 10.24 7.73631 10.394 7.58392C10.548 7.43154 10.625 7.24618 10.625 7.02784C10.625 6.8095 10.548 6.62527 10.394 6.47516C10.24 6.32505 10.0566 6.25 9.84375 6.25C9.6173 6.25 9.43048 6.32733 9.28329 6.48199ZM11.5625 13.4375V12.5H10.625V9.375V8.4375H9.375H8.4375V9.375H9.375V12.5H8.4375V13.4375H11.5625Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_335_17070)">
                </g>
              </svg>
          </span>
        </div>
        <button
          onClick={handleCollapse}
          type="button"
          className="shrink-0 rounded-[4px] p-[6px] transition-colors hover:bg-white/10"
        >
          <ChevronDown className={`h-5 w-5 ${isPopup ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {/* Content - scrollable on mobile, normal on larger screens */}
      <div className={`space-y-4 overflow-y-auto p-3 md:space-y-6 md:p-6 ${layout === 'popup' ? 'min-h-0 flex-1' : 'max-h-[60vh] md:max-h-none'}`}>
        {!hasStartedChat ? (
          <div className={`flex flex-col items-center justify-center gap-8 ${layout === 'popup' ? 'min-h-[320px] lg:min-h-[360px]' : 'min-h-[420px] lg:min-h-[520px]'}`}>
            <div className="flex flex-col items-center gap-4">
              <Image
                alt="U.S. News"
                className="h-[30px] w-auto"
                src="/usn-logo-large.svg"
                width={408}
                height={104}
                priority
              />
              <p className="text-center text-[24px] font-medium leading-6 text-[#1a1d26]" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
                Hello, how can I help?
              </p>
            </div>

            <div className="flex w-full max-w-[312px] flex-col gap-3">
              {INITIAL_PROMPTS.map((prompt) => (
                <button
                  key={prompt.text}
                  onClick={() => handleFollowUpClick(prompt.text)}
                  type="button"
                  className={`rounded-[56px] border border-[#c2d6f0] bg-[#f0f7ff] px-6 py-3 text-center text-[14px] text-[#1263d3] ${prompt.mobileOnly ? 'md:hidden' : ''}`}
                  style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
                >
                  {prompt.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
        {/* Quick Action Buttons - visible on small screens */}
        <div className="flex gap-2 md:hidden">
          <button type="button" className="flex-1 bg-[#1263d3] hover:bg-[#0d4fa8] text-white rounded-lg px-3 py-2 text-xs font-semibold transition-colors">
            SUMMARIZE
          </button>
          <button type="button" className="flex-1 bg-white border border-[#1263d3] text-[#1263d3] rounded-lg px-3 py-2 text-xs font-semibold hover:bg-blue-50 transition-colors">
            CHAT
          </button>
        </div>

        {/* User Query */}
        <div className="flex justify-end">
          <div className="max-w-xs rounded-lg bg-[#448aff] px-3 py-2 text-xs text-white md:max-w-sm md:rounded-xl md:px-4 md:py-3 md:text-sm">
            <p>Summarize this article for me.</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="space-y-3 md:space-y-4">
          {isGenerating ? (
            <div className="flex items-start">
              <div className="h-4 w-4 rounded-full bg-[#1263d3]" />
            </div>
          ) : (
            <>
          <p className="text-xs font-medium text-gray-700 md:text-sm">
            The Fed paused rate hikes, but high-yield savings accounts and CDs can still keep your cash growing at strong rates.
          </p>

          {/* Bullet Points with Numbers */}
          <div className="space-y-2 md:space-y-3">
            {SUMMARY_POINTS.map((point, idx) => (
              <div key={idx} className="flex gap-2 md:gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1263d3] text-xs font-bold text-white">
                  {idx + 1}
                </div>
                <p className="text-xs text-gray-700 md:text-sm">
                  {point.text}
                  <span className="ml-2 inline-flex gap-1 align-middle">
                    {point.refs.map((ref) => (
                      <button
                        key={ref}
                        onClick={() => setActiveRef(ref)}
                        type="button"
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white transition-colors ${activeRef === ref ? 'bg-[#1263d3]/60' : 'bg-[#1263d3] hover:bg-[#0d4fa8]'}`}
                      >
                        {ref}
                      </button>
                    ))}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {activeRef ? (
            <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setActiveRef(null)}>
              <div
                className="absolute left-5 top-1/4 w-[calc(100vw-40px)] max-w-[443px] rounded-[20px] bg-white px-5 py-4 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-h-[280px] overflow-y-auto pr-3 text-[14px] leading-8 text-[#333d4d]" style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>
                  <p>{REFERENCE_PREVIEWS.find((item) => item.id === activeRef)?.text}</p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Disclaimer */}
          <div className="flex gap-2 overflow-clip rounded-[8px] bg-[#e9eefc] px-3 py-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#515767]" />
            <p className="text-[12px] italic leading-5 text-[#515767] md:text-[14px]" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
              <span className="font-bold">Disclaimer:</span> The information provided is for general educational use only. Consult a financial professional for advice specific to your situation.
            </p>
          </div>

          {/* Related Articles */}
          <div className="space-y-2 pt-2 md:space-y-3 md:pt-4">
            <h3 className="sr-only">Related Articles</h3>
            <div className="-mx-3 overflow-x-auto px-3 pb-1 md:mx-0 md:px-0">
              <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-4 md:gap-3">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="w-[178px] overflow-hidden rounded-[16px] border border-[rgba(0,0,0,0.1)] bg-white transition-shadow hover:shadow-md md:w-auto"
                >
                  <div className="h-[98px] w-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  <div className="px-3 pb-3 pt-[14px]">
                    <p className="text-[14px] leading-[18px] text-[#626262]">{article.title}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Helpfulness */}
          <div className="flex items-center justify-between border-t pt-2 md:pt-4">
            <p className="text-xs font-medium text-gray-700">Was this response helpful?</p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsHelpful(true);
                  setFeedbackSelections([]);
                  setFeedbackMessage('');
                }}
                type="button"
                className={`p-1 rounded transition-colors ${
                  isHelpful === true ? 'bg-green-100' : 'hover:bg-gray-100'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${isHelpful === true ? 'text-green-600' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={() => {
                  setIsHelpful(false);
                  setFeedbackSelections([]);
                  setFeedbackMessage('');
                }}
                type="button"
                className={`p-1 rounded transition-colors ${
                  isHelpful === false ? 'bg-red-100' : 'hover:bg-gray-100'
                }`}
              >
                <ThumbsDown className={`w-4 h-4 ${isHelpful === false ? 'text-red-600' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>

          {isHelpful !== null ? (
            <div className="w-full rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-6">
              <div className="w-full text-[14px] leading-[1.35] text-[#1a1d26]">
                <p className="font-bold">{isHelpful ? 'Thanks for your feedback!' : 'Thanks for your feedback!'}</p>
                <p className="mt-2">{isHelpful ? 'We’re glad that you found this helpful! Please share more details about your experience.' : 'Please let us know how we can improve. What issue did you encounter?'}</p>
                <p className="mt-2 font-bold">Select all that apply</p>
              </div>

              <div className="mt-4 space-y-3">
                {(isHelpful ? POSITIVE_FEEDBACK_OPTIONS : NEGATIVE_FEEDBACK_OPTIONS).map((option) => {
                  const selected = feedbackSelections.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleFeedbackSelection(option)}
                      type="button"
                      className={`flex w-full items-center gap-2 rounded-[24px] border px-4 py-2 text-left text-[14px] ${selected ? 'border-[#1263d3] bg-[#d6eefd] text-[#1263d3]' : 'border-[#9297a1] bg-white text-[#1a1d26]'}`}
                    >
                      <span className={`flex h-4 w-4 items-center justify-center rounded-[4px] border ${selected ? 'border-[#1263d3] bg-[#1263d3] text-white' : 'border-[#6f7480]'}`}>
                        {selected ? '✓' : ''}
                      </span>
                      <span className={selected ? 'font-bold' : ''}>{option}</span>
                    </button>
                  );
                })}
              </div>

              {!isHelpful && feedbackSelections.includes('Other') ? (
                <div className="mt-4">
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="Message..."
                    className="h-[111px] w-full rounded-[15px] border border-[rgba(26,29,38,0.2)] px-4 py-3 text-[14px] outline-none"
                  />
                  <p className="mt-1 text-[10px] text-[#969696]">100 Characters Feedback Mix</p>
                </div>
              ) : null}

              <button type="button" className="mt-4 w-full rounded-[12px] bg-[#1263d3] py-[10px] text-[16px] font-bold text-white">
                DONE
              </button>
            </div>
          ) : null}
            </>
          )}

          {/* Follow-up Questions */}
          <div className="space-y-2 pt-2 md:space-y-3 md:pt-4">
            <p className="text-xs font-medium text-gray-700">Is there anything else we can help you with?</p>
            <div className="space-y-2">
              {followUpQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFollowUpClick(question)}
                  type="button"
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-left text-xs font-medium text-[#1263d3] transition-colors hover:bg-blue-100 md:px-4 md:py-3 md:text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
          </>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gray-200 bg-white p-3 md:p-4">
        <input
          type="text"
          placeholder="Type your question..."
          value={followUpInput}
          onChange={handleInputChange}
          className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1263d3] md:px-4 md:py-3 md:text-sm"
        />
        <button type="submit" className="rounded-lg bg-[#1263d3] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0d4fa8] flex-shrink-0 md:px-6 md:py-3 md:text-sm">
          Send
        </button>
      </form>
    </div>
  );
}
