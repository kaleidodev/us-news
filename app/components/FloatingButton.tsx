'use client';

const usnLogoSrc = '/figma-assets/5b8eb72d625e6b7705425a98a5513b9c1502893d.png';

export function FloatingButton() {
  return (
    <div className="fixed bottom-6 left-5 z-50">
      <button
        aria-label="US News shortcut"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1263d3] shadow-[0_10px_15px_-3px_rgba(61,71,81,0.1),0_4px_6px_-4px_rgba(61,71,81,0.08)] hover:bg-[#0e52b3] transition-colors"
      >
        <img
          alt="US News"
          className="h-6 w-6 object-cover"
          src={usnLogoSrc}
        />
      </button>
    </div>
  );
}
