import React from 'react';

const PortfolioHero = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden relative">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* --- Left Card (Content) --- */}
        <div className="lg:col-span-8 group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-14 flex flex-col justify-between min-h-[600px] overflow-hidden">
          
          {/* Subtle Inner Highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Header Section */}
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            
            {/* Profile Info */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  <img 
                    src="profile.jpeg" 
                    alt="Profile" 
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                {/* Status Dot */}
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                   <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl tracking-tight text-white">Hey, I'm Raman.</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                  <span className="text-white/60">Motion Designer</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="text-white/60">3D Artist</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <SocialButton icon={<YoutubeIcon />} />
                <SocialButton icon={<InstagramIcon />} />
                <SocialButton icon={<XIcon />} />
              </div>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold text-sm tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                <span>Let's Talk</span>
                <ArrowUpRightIcon />
              </button>
            </div>
          </div>

          {/* Main Hero Text */}
          <div className="relative z-10 mt-auto pt-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-8 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for projects</span>
             </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-white">
              Crafting visual <br />
              <span className="font-serif italic font-light text-gray-400 pr-4">masterpieces</span>
              with premium <br />
              edits and motion.
            </h1>
            
            <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent mt-12" />
          </div>
        </div>

       {/* --- Right Card (Visual) --- */}
        <div className="lg:col-span-4 relative group h-full min-h-[500px] lg:min-h-auto rounded-[40px] overflow-hidden border border-white/5 bg-[#0a0a0a]">
            
            {/* --- Sliding "Aurora" Background Transition --- */}
            {/* This container is larger than the card and spins slowly to create a sliding effect */}
            <div className="absolute inset-[-50%] pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#4c1d95_80%,#3b82f6_100%)] animate-[spin_20s_linear_infinite] blur-[100px] opacity-60 origin-center" />
            </div>
            
            {/* Noise Overlay (Kept for texture) */}
            <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Image Container */}
            <div className="absolute inset-0 flex items-end justify-center z-10 p-1 pb-28">
               {/* 1. Updated src to local path (assumes it's in public folder) 
                  2. Added 'drop-shadow' for the gradient glow on the character
               */}
               <img 
                 src="/tweaking.png" 
                 alt="3D Character" 
                 className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_0_50px_rgba(124,58,237,0.6)]"
               />
            </div>

            {/* Overlay Text on Image */}
            
        </div>

      </div>
    </div>
  );
};

// --- Icons ---

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white group">
    <div className="transform group-hover:scale-110 transition-transform">
        {icon}
    </div>
  </button>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const ArrowUpRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

export default PortfolioHero;