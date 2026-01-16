import React from 'react';
import { Faction } from '../types';

interface FactionCardProps {
  faction: Faction;
  onClick: (faction: Faction) => void;
}

const FactionCard: React.FC<FactionCardProps> = ({ faction, onClick }) => {
  // Logic simplified: All cards now have images, so standard rendering applies.
  
  return (
    <div 
      onClick={() => onClick(faction)}
      className="group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-lg bg-ws-dark shadow-xl border border-white/5 hover:border-ws-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black"
    >
      {/* Background Image/Logo - Dual Layer Strategy */}
      {/* Layer 1: Blurred background fill to cover the box */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500 scale-125"
        style={{ backgroundImage: `url(${faction.logo})` }}
      ></div>

      {/* Layer 2: Main Image - Contain (Full visibility, no cropping) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pb-20">
         <img 
          src={faction.logo} 
          alt={faction.name} 
          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Area - Bottom */}
      {/* Strong gradient to make text readable over any image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col justify-end h-full pointer-events-none">
        <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          
          {/* Slogan */}
          <p 
            className="text-sm md:text-base font-serif italic font-bold mb-1 leading-tight drop-shadow-md text-white opacity-90"
          >
            {faction.slogan}
          </p>

          {/* Name Section */}
          <div className="mb-2">
            <h3 
              className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tighter transition-colors duration-300 drop-shadow-lg"
              style={{ color: faction.style.accentColor }}
            >
              {faction.name}
            </h3>
            <p className="text-xs text-stone-400 font-bold font-sans group-hover:text-stone-300 transition-colors">
              {faction.koreanName}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 border-t border-white/10 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
             <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: faction.style.accentColor }}></span>
             {faction.id === 'world-map' ? 'WORLD MAP' : `${faction.characters.length} MEMBERS`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactionCard;