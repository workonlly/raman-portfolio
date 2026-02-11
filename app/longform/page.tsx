import React from 'react';

const LongFormShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 pb-20 px-4 font-sans selection:bg-purple-500/30 relative overflow-hidden">
      
      {/* --- Ambient Background Decoration (Purple Theme) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>

      {/* --- Top Section: Avatar --- */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-10 group">
         {/* Animated Glow effect behind the avatar */}
         <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-500/20 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-700 pointer-events-none animate-pulse" />
         
         {/* Service Avatar (Increased Size) */}
         <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center">
             <img 
                src="/cool.png" 
                alt="Longform Service Avatar" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_40px_80px_rgba(147,51,234,0.5)]"
             />
         </div>
      </div>

      {/* --- Typography Section --- */}
      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
        
        {/* Title with Mixed Fonts */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
          Long-Form Edits{' '}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300 animate-gradient-x ml-2">
            showcase
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light border-t border-white/5 pt-6">
          Premium, viral-ready edits featuring dynamic motion graphics and immersive sound design that elevate every frame.
        </p>

        {/* 'Go Back' Button */}
        <div className="pt-2">
            <button className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95">
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <span>Go Back</span>
                    <ArrowUpRightIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </button>
        </div>
      </div>

      {/* --- Video Grid Section --- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24 max-w-6xl w-full px-2 md:px-0">
        
        {/* Video Card 1 */}
        <VideoCard 
          image="/screenshots/long-1.jpeg" 
          duration="12:45"
          title="Sales & Service"
          link="https://drive.google.com/file/d/1vPwvHiwP9sqHuDhvzM8LmG3rcB6MrfYo/view?usp=sharing"
        />

        {/* Video Card 2 */}
        <VideoCard 
          image="/screenshots/long-2.jpeg" 
          duration="08:20"
          title="Talking Head & VSL"
          link="https://drive.google.com/file/d/1zr2Rypk6FaFYNdrofuF8CwW-P87jHNPD/view?usp=sharing"
        />
        <VideoCard 
          image="/screenshots/long-3.jpeg" 
          duration="08:20"
          title="Talking Head & VSL"
          link="https://drive.google.com/file/d/1C33KZ6uU6_OXIPbeSDz3ZDKszrO7pZlC/view?usp=sharing"
        />
        <VideoCard 
          image="/screenshots/long-4.jpeg" 
          duration="08:20"
          title="Talking Head & VSL"
          link="https://drive.google.com/file/d/1Hvn4WMcqTMqj9LTIzKCsd-2EP9QyssGp/view?usp=sharing"
        />
        <VideoCard 
          image="/screenshots/long-5.jpeg" 
          duration="08:20"
          title="Talking Head & VSL"
          link="https://drive.google.com/file/d/1iMJliqsx1aDM3JHwHlOHVMkuyPas1qbl/view?usp=sharing"
        />

      </div>

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
    </div>
  );
};

// --- Sub-Components ---

interface VideoCardProps {
  image: string;
  duration?: string;
  title?: string;
  link?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, duration, title,link }) => {
  return (
    <div className="group relative aspect-video rounded-[32px] overflow-hidden bg-[#0a0a0a] cursor-pointer shadow-2xl shadow-black/50 ring-1 ring-white/5 hover:ring-white/20 transition-all duration-500 hover:shadow-purple-900/20">
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
      {/* Background Image with Zoom Effect */}
      <img 
        src={image} 
        alt="Video Thumbnail" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" 
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
           <PlayIcon />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div>
            {title && <h3 className="text-white font-medium text-lg tracking-wide mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{title}</h3>}
            <div className="h-1 w-12 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
        </div>
        
        {duration && (
            <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-xs text-white/90 font-mono tracking-wider">
                {duration}
            </div>
        )}
      </div>
      </a>
    </div>
  );
};

// --- Icons ---

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-8 h-8 text-white fill-white translate-x-0.5" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default LongFormShowcase;