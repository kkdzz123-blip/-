import React, { useState } from 'react';
import { Character } from '../types';
import { X, User, Shield, Target, MessageSquare, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
  accentColor: string;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose, accentColor }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const displayImage = character.largeImage || character.image;
  const hasGallery = character.gallery && character.gallery.length > 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Main Modal Content */}
      {!isGalleryOpen && (
        <div className="relative bg-ws-panel w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl md:rounded-xl shadow-2xl border-0 md:border border-white/10 overflow-hidden flex flex-col md:flex-row animate-scale-in">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            aria-label="Close character details"
            className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-red-900/80 rounded-full text-white transition-colors border border-white/20 backdrop-blur-md shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Large Image Area */}
          <div className="w-full h-[45vh] md:h-auto md:w-[45%] bg-ws-black relative flex-shrink-0 overflow-hidden group">
            {/* 1. Blurred Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-110"
              style={{ backgroundImage: `url(${displayImage})` }}
            ></div>
            
            {/* 2. Main Image */}
            <img 
              src={displayImage} 
              alt={character.name} 
              loading="eager"
              className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
            />

            {/* Gallery Trigger Button (If gallery exists) */}
            {hasGallery && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-fade-in w-max">
                <button 
                  onClick={() => setIsGalleryOpen(true)}
                  className="flex items-center gap-3 bg-ws-gold hover:bg-white text-black border-2 border-black/50 px-8 py-4 rounded shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse-slow"
                >
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-xl font-western tracking-widest">OPEN GALLERY</span>
                  <span className="bg-black/10 px-2 py-0.5 rounded text-sm font-bold border border-black/10">{character.gallery?.length}</span>
                </button>
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ws-panel via-ws-panel/80 to-transparent h-16 md:h-32 z-20 pointer-events-none"></div>
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

              {/* Physical Attributes Section */}
              <div className="bg-black/30 p-5 rounded border border-white/5">
                 <h3 className="text-xs font-bold text-stone-500 uppercase mb-3 flex items-center gap-2">
                   Physical Attributes
                 </h3>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-stone-400 text-xs">Height</span>
                      <span className="text-stone-200 font-mono text-sm">{character.height}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-stone-400 text-xs">Weight</span>
                      <span className="text-stone-200 font-mono text-sm">{character.weight}</span>
                    </div>
                    
                    {character.cupSize && (
                       <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-stone-400 text-xs">Cup Size</span>
                          <span className="text-stone-200 font-mono text-sm">{character.cupSize}</span>
                       </div>
                    )}

                    {character.specialStatus && (
                       <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-stone-400 text-xs">Note</span>
                          <span className="text-ws-red font-bold text-sm">{character.specialStatus}</span>
                       </div>
                    )}
                 </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Gallery Overlay View */}
      {isGalleryOpen && hasGallery && (
        <div className="fixed inset-0 z-[110] bg-black flex flex-col animate-fade-in">
           {/* Header */}
           <div className="flex items-center justify-between p-4 border-b border-white/10 bg-ws-dark/50 backdrop-blur-md z-50">
              <button 
                 onClick={() => setIsGalleryOpen(false)}
                 className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
              >
                 <ArrowLeft className="w-5 h-5" />
                 <span className="text-sm font-bold uppercase">Back to Details</span>
              </button>
              <h3 className="text-lg font-western text-ws-gold">{character.name} Gallery</h3>
              <div className="w-8"></div> {/* Spacer for balance */}
           </div>

           {/* Grid Content */}
           <div className="flex-1 overflow-y-auto p-2 sm:p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-w-7xl mx-auto">
                 {character.gallery!.map((imgUrl, index) => (
                    <div 
                      key={index} 
                      className="aspect-[2/3] bg-ws-panel rounded overflow-hidden relative group border border-white/5 cursor-pointer hover:border-ws-gold/50 transition-colors"
                      onClick={() => setSelectedGalleryImage(imgUrl)}
                    >
                       <img 
                          src={imgUrl} 
                          alt={`${character.name} ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                       />
                       <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-stone-300 font-mono">#{index + 1}</span>
                       </div>
                    </div>
                 ))}
              </div>
              
              {/* Footer text */}
              <div className="text-center py-8 text-stone-600 text-xs font-mono">
                 END OF GALLERY
              </div>
           </div>

           {/* Fullscreen Image Viewer (Lightbox) */}
           {selectedGalleryImage && (
             <div 
                className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedGalleryImage(null)}
             >
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-50"
                  onClick={() => setSelectedGalleryImage(null)}
                >
                  <X className="w-10 h-10" />
                </button>

                {/* Full Image */}
                <img 
                  src={selectedGalleryImage} 
                  alt="Full Size" 
                  className="max-w-full max-h-full object-contain shadow-2xl animate-scale-in"
                  onClick={(e) => e.stopPropagation()}
                />
             </div>
           )}
        </div>
      )}

    </div>
  );
};

export default CharacterModal;