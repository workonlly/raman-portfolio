import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Long",
    subtitle: "Form",
    category: "Edits",
    description: "YouTube videos with clean cuts and viral flow.",
    theme: "red",
    gradientBorder: "from-red-600 via-orange-900/40 to-black",
    gradientGlow: "from-red-600/20",
    textHighlight: "text-red-500",
    link: "/longform",
    icon: (
      <div className="bg-red-600 w-16 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50">
        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
      </div>
    )
  },
  {
    title: "Mo",
    subtitle: "Graph",
    category: "Visuals",
    description: "High-end motion graphics and kinetic typography.",
    theme: "purple",
    gradientBorder: "from-violet-600 via-fuchsia-900/40 to-black",
    gradientGlow: "from-violet-600/20",
    textHighlight: "text-violet-500",
    link: "/mo",
    icon: (
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 border-2 border-violet-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-2 left-2 w-6 h-6 bg-fuchsia-500 rounded-full mix-blend-screen blur-sm"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 bg-violet-600 rounded-lg rotate-12 shadow-lg shadow-violet-900/50 flex items-center justify-center text-white font-bold text-xs">
          Ae
        </div>
      </div>
    )
  },
  {
    title: "SaaS",
    subtitle: "Product",
    category: "Demos",
    description: "Sleek product walkthroughs and B2B explainer assets.",
    theme: "blue",
    gradientBorder: "from-cyan-500 via-blue-900/40 to-black",
    gradientGlow: "from-cyan-500/20",
    textHighlight: "text-cyan-400",
    link: "/saas",
    icon: (
      <div className="bg-gradient-to-br from-cyan-900 to-blue-900 w-14 h-14 rounded-lg flex flex-col items-center justify-center gap-1 border border-cyan-500/30 shadow-lg shadow-cyan-900/50">
        <div className="w-8 h-1 bg-cyan-400 rounded-full opacity-80" />
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-white/20 rounded-sm" />
          <div className="w-3 h-3 bg-white/20 rounded-sm" />
          <div className="w-3 h-3 bg-cyan-400/80 rounded-sm" />
        </div>
        <div className="w-8 h-1 bg-white/20 rounded-full" />
      </div>
    )
  },
  {
    title: "Short",
    subtitle: "Form",
    category: "Reels",
    description: "Vertical content designed for retention and loops.",
    theme: "pink",
    gradientBorder: "from-pink-500 via-rose-900/40 to-black",
    gradientGlow: "from-pink-500/20",
    textHighlight: "text-pink-500",
    link: "/shortform",
    icon: (
      <div className="bg-gradient-to-tr from-orange-600 to-pink-600 w-10 h-16 rounded-lg border-2 border-white/10 shadow-lg shadow-pink-900/50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-2 w-3 h-0.5 bg-white/50 rounded-full" />
        <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
      </div>
    )
  }
];

export default function ServicesGrid() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8 md:p-14">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <Link key={index} href={service.link} className="group relative block focus:outline-none">
            {/* Outer Gradient Border */}
            <div className={`relative h-full rounded-[2rem] p-[1px] bg-gradient-to-br ${service.gradientBorder} transition-all duration-500 group-hover:p-[2px] group-hover:shadow-2xl group-hover:shadow-${service.theme}-900/20`}>
              {/* Inner Card */}
              <div className="relative h-full rounded-[2rem] bg-[#080808] overflow-hidden p-10 md:p-12 flex flex-col justify-between min-h-[400px]">
                {/* Dynamic Subtle Glow */}
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl ${service.gradientGlow} via-transparent to-transparent opacity-40 blur-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-700`} />
                {/* Top Section: Icon & Title */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h1 className="text-white text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.9]">
                      {service.title}
                      <span className="block text-3xl md:text-4xl font-medium opacity-60 mt-1">
                        {service.subtitle}
                      </span>
                    </h1>
                    <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mt-2 ${service.textHighlight} opacity-90`}>
                      {service.category}
                    </h2>
                  </div>
                  {/* Icon Badge (Rotated) */}
                  <div className="transform rotate-12 group-hover:rotate-6 transition-transform duration-500 ease-out">
                    {service.icon}
                  </div>
                </div>
                {/* Bottom Description */}
                <div className="relative z-10 mt-12">
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-700 to-transparent mb-6 group-hover:w-24 transition-all duration-500" />
                  <p className="text-white text-xl font-medium">
                    {service.title} {service.subtitle} {service.category}
                  </p>
                  <p className="text-gray-500 mt-2 text-lg leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}