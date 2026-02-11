import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-black min-h-[600px] flex items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden">
      
      {/* --- Global Background Ambience (Matched to Theme) --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1200px] w-full relative group">
        
        {/* Animated Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-purple-500/30 to-blue-500/30 rounded-[42px] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

        {/* Main Card Content */}
        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
          
          {/* --- Inner Decorative Background --- */}
          <div className="absolute inset-0 z-0">
             {/* Purple Radial Gradient (Matched) */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
             {/* Noise Overlay */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
          </div>

          {/* --- Left Content Section --- */}
          <div className="w-full md:w-[60%] flex flex-col gap-10 z-10">
            
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05]">
              Want <span className="text-gray-400">Scroll-Stopping</span> <br />
              {/* Gradient Text Effect */}
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-white to-purple-300 animate-gradient-x">
                videos?
              </span>
            </h2>

            {/* Services List */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-2">
              
              {/* Service 1 */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 mb-1">
                    <VideoIcon className="text-white" />
                    <h3 className="text-white text-lg font-semibold tracking-wide">Long-Form</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">
                  Clean, engaging edits for YouTube with dynamic motion and viral storytelling flows.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 mb-1">
                    <FlashIcon className="text-white" />
                    <h3 className="text-white text-lg font-semibold tracking-wide">Short-Form</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">
                   Punchy edits for Reels & TikToks. High retention, fast-paced, and built for the algorithm.
                </p>
              </div>

            </div>

            {/* Shimmer Button (Matched to Theme) */}
            <a href="https://discord.com/users/1373184488988872706" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#5865F2] transition-colors"
                  aria-label="Join my Discord">
            <button className="group w-fit relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center gap-3">
                    Start Project
                    <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
            </button>
              </a>
          </div>

          {/* --- Right Image Section --- */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end relative z-10">
              
              {/* Glowing Halo behind object (Matched to Theme) */}
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

              {/* Rotating Ring (Dashed to match previous) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-30"></div>

              {/* Avatar Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <img 
                    src="/cofee.png" 
                    alt="Avatar with Coffee" 
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(100,100,255,0.3)] animate-float"
                  />
              </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
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
    </div>
  );
};

// --- Icon Components ---

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const VideoIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
);

const FlashIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
);

export default ServicesSection;