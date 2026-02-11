import React from 'react';

const ShortFormShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 pb-20 px-4 font-sans selection:bg-white/20">
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-orange-400/20 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-700 pointer-events-none animate-pulse" />
        <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
          <img 
            src="/cool.png" 
            alt="Shortform Service Avatar" 
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_20px_50px_rgba(236,72,153,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_40px_80px_rgba(236,72,153,0.5)]"
          />
        </div>
      </div>
      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
          Short-Form Reels{' '}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-orange-200 animate-gradient-x ml-2">
            showcase
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light border-t border-white/5 pt-6">
          Vertical content designed for retention and loops. Built for Reels, TikTok, and Shorts.
        </p>
        <div className="pt-2">
          <button className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <span>Go Back</span>
                  <ArrowUpRightIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
          </button>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24 max-w-6xl w-full px-2 md:px-0">
        <VideoCard 
          image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000"
          duration="00:45"
          title="Reel Edit"
        />
        <VideoCard 
          image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1000"
          duration="01:05"
          title="TikTok Loop"
        />
      </div>
    </div>
  );
};

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface VideoCardProps {
  image: string;
  duration?: string;
  title?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, duration, title }) => (
  <div className="group relative aspect-video rounded-[32px] overflow-hidden bg-[#0a0a0a] cursor-pointer shadow-2xl shadow-black/50 ring-1 ring-white/5 hover:ring-white/20 transition-all duration-500 hover:shadow-pink-900/20">
    <img 
      src={image} 
      alt="Video Thumbnail" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <PlayIcon />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div>
        {title && <h3 className="text-white font-medium text-lg tracking-wide mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{title}</h3>}
        <div className="h-1 w-12 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
      </div>
      {duration && (
        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-xs text-white/90 font-mono tracking-wider">
          {duration}
        </div>
      )}
    </div>
  </div>
);
    {/* Custom Keyframe Animations */}
    <style>{`
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 1.5s infinite;
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    `}</style>

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);

export default ShortFormShowcase;
