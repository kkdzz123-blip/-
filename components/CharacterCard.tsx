import React from 'react';
import { Character } from '../types';
import { Crosshair } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onClick: (char: Character) => void;
  colorTheme: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick, colorTheme }) => {
  
  // Alignment Icon Helper - Changed to Hanja as requested
  const getAlignmentBadge = (align: string) => {
    let char = '中';
    let bg = 'bg-stone-500';
    let text = 'text-white';

    if (align.includes('악')) {
      char = '惡'; // Evil
      bg = 'bg-red-800';
      text = 'text-red-100';
    } else if (align.includes('선')) {
      char = '善'; // Good
      bg = 'bg-blue-800';
      text = 'text-blue-100';
    } else {
      char = '中'; // Neutral
      bg = 'bg-stone-600';
      text = 'text-stone-200';
    }

    return (
      <div className={`${bg} ${text} w-6 h-6 flex items-center justify-center rounded font-serif text-xs border border-white/20 shadow-md`}>
        {char}
      </div>
    );
  };

  return (
    <div 
      onClick={() => onClick(character)}
      className="group bg-ws-panel rounded cursor-pointer border border-white/5 hover:border-ws-gold/50 transition-all duration-300 hover:bg-ws-dark relative overflow-hidden flex flex-col h-full shadow-lg"
      role="button"
      aria-label={`View details for ${character.name}`}
    >
      {/* Image Area */}
      <div className="w-full aspect-[4/5] bg-black relative overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name} 
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-2 left-2 z-10">
          {getAlignmentBadge(character.alignment)}
        </div>
      </div>

      {/* Simple Info Area */}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-lg font-bold text-white font-sans uppercase tracking-wide group-hover:text-ws-gold transition-colors truncate">
          {character.name}
        </h4>
        <p className="text-xs text-stone-500 font-mono mb-2 uppercase truncate">{character.nickname}</p>
        
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
           <div className="flex items-center gap-1 truncate">
             <Crosshair className="w-3 h-3 flex-shrink-0"/> <span className="truncate">{character.job}</span>
           </div>
        </div>
      </div>
      
      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-ws-gold group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default CharacterCard;