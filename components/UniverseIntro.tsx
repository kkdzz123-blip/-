import React from 'react';
import { UNIVERSE_INFO, LOCATIONS, OTHER_LOCATIONS } from '../constants';

const UniverseIntro: React.FC = () => {
  return (
    <div className="relative w-full mb-16 group border-b border-white/5">
      {/* Background Image - Full Screen Width */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105"
        style={{ backgroundImage: "url('https://itimg.kr/1987/11/aa/배경.jpg')" }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ws-black via-black/60 to-black/30"></div>
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

      {/* Content Container - Centered */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 max-w-7xl flex flex-col justify-end min-h-[600px]">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-ws-gold mb-4 drop-shadow-2xl animate-fade-in tracking-tight">
          1878년의 세계
        </h2>
        <div className="h-1.5 w-32 bg-ws-red mb-10 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* General Setting */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-ws-gold pl-4 font-sans">
              세계관 배경
            </h3>
            <ul className="space-y-3 text-stone-200 leading-relaxed font-medium text-lg text-shadow-md">
              {UNIVERSE_INFO.map((info, idx) => (
                <li key={idx} className="flex items-start gap-3">
                   <span className="text-ws-gold mt-1">✦</span> {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-8">
             <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-l-4 border-ws-red pl-4 mb-6 font-sans">
                  주요 지역
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="bg-black/60 p-4 rounded border border-white/10 backdrop-blur-md hover:bg-black/80 transition-colors">
                      <span className="text-ws-gold font-bold block text-lg">{loc.name}</span>
                      <span className="text-sm text-stone-400">{loc.description[0]}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-8 text-sm pt-6 border-t border-white/20">
                <div className="flex-1">
                   <span className="text-stone-400 uppercase font-bold text-xs block mb-2 tracking-wider">동부 (안전지대)</span>
                   <p className="text-stone-100 text-base font-sans font-bold tracking-wide">{OTHER_LOCATIONS.east.join('  •  ')}</p>
                </div>
                <div className="flex-1">
                   <span className="text-stone-400 uppercase font-bold text-xs block mb-2 tracking-wider">서부 (무법지대)</span>
                   <p className="text-ws-red text-base font-sans font-bold tracking-wide">{OTHER_LOCATIONS.west.join('  •  ')}</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UniverseIntro;