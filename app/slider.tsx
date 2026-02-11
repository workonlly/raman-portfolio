import React from "react";

const people = [
  {
    name: "ROBO VERSE",
    subtitle: "93K Subscribers",
    image: "/ROBO.png",
  },
  {
    name: "PIXONOIDS",
    subtitle: "5.66K Subscribers",
    image: "/PIXO.png",
  },
  {
    name: "ZEVEN 7",
    subtitle: "38.5K Subscribers",
    image: "/ZEVEN.png",
  },
];

export default function WorkedWith() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <h2 className="text-center text-3xl md:text-5xl font-medium text-white mb-20 tracking-tight">
          Worked with the <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">best</span>
        </h2>

        {/* Creators Grid */}
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {people.map((person, index) => (
            <div key={index} className="group flex flex-col items-center cursor-default">
              
              {/* Avatar Container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                
                {/* 1. Static Outer Glow */}
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-80" />
                
                {/* 2. Rotating Gradient Border */}
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />

                {/* 3. Image Frame */}
                <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-b from-white/10 to-white/5 group-hover:from-purple-500/50 group-hover:to-indigo-500/50 transition-colors duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                        {/* The Image */}
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Glossy Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full pointer-events-none" />
                    </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-2 group-hover:text-purple-100 transition-colors">
                    {person.name}
                </h3>
                
                {/* Subtitle Badge */}
                <div className="inline-block px-3 py-1 rounded-full border border-white/5 bg-white/5 group-hover:bg-purple-900/20 group-hover:border-purple-500/30 transition-colors duration-300">
                    <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-purple-300 tracking-wider uppercase">
                    {person.subtitle}
                    </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation for the slow rotation */}
      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}