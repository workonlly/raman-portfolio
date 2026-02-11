import React from 'react';

const ProfileLocation: React.FC = () => {
  return (
    <div className="bg-black min-h-[400px] flex flex-col items-center justify-center p-8 font-sans">
      
      {/* --- Avatar --- */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 mb-6 relative group">
        {/* Pink background placeholder to match the reference image's vibe */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-purple-500"></div>
        <img 
          src="/profile.jpeg" 
          alt="Profile" 
          className="relative w-full h-full object-cover mix-blend-normal hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* --- Location Text --- */}
      <p className="text-gray-400 text-lg md:text-xl font-medium mb-8 text-center">
        Located in <span className="text-gray-200">Bengaluru, India</span>
      </p>

      {/* --- Social Icons Row --- */}
      <div className="flex items-center gap-5">
        <a 
          href="https://discord.com/users/1373184488988872706" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#5865F2] transition-colors"
            aria-label="Join my Discord"
        >
        <SocialIconLink href="#" icon={<DiscordIcon />} />
        </a>
      </div>

    </div>
  );
};

// --- Sub-components & Icons ---

const SocialIconLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href}
    className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all duration-200"
  >
    {icon}
  </a>
);

const YoutubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-2.05-9.136-4.82-13.663a.068.068 0 0 0-.03-.027ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
  </svg>
);
const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

export default ProfileLocation;