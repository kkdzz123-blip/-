import React from 'react';
import { Character } from '../types';
import { X, User, Shield, Target, MessageSquare } from 'lucide-react';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
  accentColor: string;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose, accentColor }) => {
  const displayImage = character.largeImage || character.image;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content - Full screen on mobile, Centered card on desktop */}
      <div className="relative bg-ws-panel w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl md:rounded-xl shadow-2xl border-0 md:border border-white/10 overflow-hidden flex flex-col md:flex-row animate-scale-in">
        
        {/* Close Button - Always visible, fixed position for mobile access */}
        <button 
          onClick={onClose}
          aria-label="Close character details"
          className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-red-900/80 rounded-full text-white transition-colors border border-white/20 backdrop-blur-md shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Large Image Area */}
        {/* Mobile: 45% height, Desktop: 45% width */}
        <div className="w-full h-[45vh] md:h-auto md:w-[45%] bg-ws-black relative flex-shrink-0 overflow-hidden">
          {/* 1. Blurred Background for fill */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-110"
            style={{ backgroundImage: `url(${displayImage})` }}
          ></div>
          
          {/* 2. Main Image - Contained to show full face/body */}
          <img 
            src={displayImage} 
            alt={character.name} 
            loading="eager"
            className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
          />

          {/* Gradient Overlay for smooth transition to content */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ws-panel via-ws-panel/80 to-transparent h-16 md:h-32 z-20"></div>
        </div>

        {/* Right: Details - Scrollable */}
        <div className="w-full flex-1 md:w-[55%] p-6 md:p-10 overflow-y-auto bg-ws-panel relative z-20">
          
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-western text-white mb-3 drop-shadow-lg">{character.name}</h2>
            <div className="flex flex-wrap gap-2 md:gap-3 items-center">
              <span className="text-lg md:text-xl font-bold font-sans uppercase tracking-widest" style={{ color: accentColor }}>
                "{character.nickname}"
              </span>
              <div className="flex gap-2">
                <span className="px-2 md:px-3 py-1 bg-white/5 rounded text-[10px] md:text-xs text-stone-400 font-mono border border-white/10 whitespace-nowrap">
                  {character.job}
                </span>
                <span className="px-2 md:px-3 py-1 bg-white/5 rounded text-[10px] md:text-xs text-stone-400 font-mono border border-white/10 whitespace-nowrap">
                  {character.age}세 / {character.gender}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 pb-10">
            {/* Stats / Traits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-black/20 p-4 rounded-lg border border-white/5">
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase mb-1">
                    <User className="w-3 h-3 md:w-4 md:h-4" /> Personality
                  </div>
                  <p className="text-stone-300 text-sm">{character.personality}</p>
               </div>
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase mb-1">
                    <Target className="w-3 h-3 md:w-4 md:h-4" /> Strength
                  </div>
                  <p className="text-stone-300 text-sm">{character.strength}</p>
               </div>
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase mb-1">
                    <Shield className="w-3 h-3 md:w-4 md:h-4" /> Weapon
                  </div>
                  <p className="text-stone-300 text-sm">{character.weapon}</p>
               </div>
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase mb-1">
                    <MessageSquare className="w-3 h-3 md:w-4 md:h-4" /> Speech
                  </div>
                  <p className="text-stone-300 text-sm">{character.speechStyle}</p>
               </div>
            </div>

            {/* Backstory */}
            <div>
              <h3 className="text-sm font-bold text-ws-gold uppercase mb-3 border-b border-white/10 pb-2">Background Story</h3>
              <p className="text-stone-300 leading-relaxed text-sm md:text-base italic opacity-90">
                {character.backstory}
              </p>
            </div>

            {/* Appearance */}
            <div className="bg-black/30 p-4 rounded border border-white/5">
               <h3 className="text-xs font-bold text-stone-500 uppercase mb-2">Appearance & Outfit</h3>
               <p className="text-sm text-stone-300 mb-1">{character.appearance}</p>
               <p className="text-xs text-stone-500">{character.outfit}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CharacterModal;