import React from 'react';
import Link from 'next/link';
const AboutFeature: React.FC = () => {
  return (
    <div className="bg-black min-h-[600px] flex items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">
      
      {/* Background Ambience (Global) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Card */}
      <div className="max-w-[1200px] w-full relative group">
        
        {/* Animated Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-[42px] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

        {/* Inner Card Content */}
        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
          
          {/* Internal Decorative Background (Noise & Gradient) */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
          </div>

          {/* --- Left Side: 3D Avatar with Glow --- */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative z-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Glowing Halo behind Avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Rotating Ring (Subtle) */}
              <div className="absolute inset-4 border border-white/5 rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-30" />

              {/* Avatar Image */}
              <img 
                src="/yoyo.png" 
                alt="Avatar gesture" 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(100,100,255,0.3)] transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* --- Right Side: Text Content --- */}
          <div className="w-full md:w-2/3 flex flex-col items-start text-left space-y-10 relative z-10">
            
            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
              What makes me <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300 animate-gradient-x">
                different?
              </span>
            </h2>

            {/* Description Paragraph */}
            <div className="relative pl-6 border-l-2 border-white/10">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                What sets me apart? A focus on <strong className="text-white font-semibold">premium quality</strong>, 
                attention-grabbing <strong className="text-white font-semibold">motion</strong>, and a deep understanding of <strong className="text-white font-semibold">what makes content go viral</strong>. 
                I blend style with strategy to deliver results that are ahead of the trend.
                </p>
            </div>

            {/* Button */}
            <Link href="/longform">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              
              <span className="relative flex items-center gap-3">
                Browse My Work
                <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
             </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- Icons ---

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg 
    className={`w-4 h-4 ${className}`} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    viewBox="0 0 24 24"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default AboutFeature;