import React from 'react';
import stackImage from '../assets/about/mansi-avatar.png';
import { profiles, education, personalInfo } from '../data/portfolioData';

// Custom icons based on tech name
const TechBadge = ({ name }) => {
  const getIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'node.js':
      case 'nodejs':
        return '🟢';
      case 'python':
        return '🐍';
      case 'typescript':
        return '🔷';
      case 'react':
        return '⚛️';
      case 'next.js':
      case 'nextjs':
        return '▲';
      case 'postgresql':
      case 'sql':
        return '🐘';
      case 'aws':
        return '☁️';
      case 'power bi':
        return '📊';
      case 'streamlit':
        return '🎈';
      default:
        return '💻';
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-black/20 rounded-2xl border border-white/10 hover:border-[#ff2a2a]/30 transition-all duration-300 w-24">
      <span className="text-3xl">{getIcon(name)}</span>
      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider text-center select-none">{name}</span>
    </div>
  );
};

const About = ({ activeRole }) => {
  const currentProfile = profiles[activeRole] || profiles.software_engineer;

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[1/1] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent mb-4">
                <img 
                  src={stackImage} 
                  alt="Mansi Mantri" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge Details */}
              <div className="text-center font-mono text-xs text-white/50 tracking-wider">
                <h4 className="text-white font-bold text-sm tracking-normal uppercase">{personalInfo.name}</h4>
                <p className="text-[#ff2a2a] text-[10px] font-bold mt-1 uppercase">{currentProfile.roleTitle}</p>
                <div className="mt-3 pt-3 border-t border-white/5 text-[10px] text-left space-y-1">
                  <p>📍 {personalInfo.location}</p>
                  <p>📧 {personalInfo.emails.primary}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          
          <p 
            className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: currentProfile.bio }}
          />

          {/* Education Details */}
          <div className="mb-10 bg-black/10 border border-black/10 p-6 rounded-2xl max-w-3xl backdrop-blur-sm">
            <h3 className="text-lg font-black text-black uppercase tracking-wider mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start flex-wrap">
                  <span className="font-extrabold text-white text-base">{education.degree}</span>
                  <span className="font-mono text-xs text-red-100">{education.duration}</span>
                </div>
                <p className="text-red-50 text-sm font-semibold">{education.institution} - {education.location}</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="flex justify-between items-start flex-wrap">
                  <span className="font-extrabold text-white text-base">{education.undergrad.degree}</span>
                  <span className="font-mono text-xs text-red-100">{education.undergrad.duration}</span>
                </div>
                <p className="text-red-50 text-sm font-semibold">{education.undergrad.institution} - {education.undergrad.location}</p>
              </div>
            </div>
          </div>

          {/* Core Tech Stack Section */}
          <div>
            <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-4">Core Technology Focus</h3>
            <div className="flex flex-wrap gap-4">
              {currentProfile.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
