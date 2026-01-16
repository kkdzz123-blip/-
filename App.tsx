import React, { useState } from 'react';
import { FACTIONS } from './constants';
import { Faction, Character } from './types';
import UniverseIntro from './components/UniverseIntro';
import FactionCard from './components/FactionCard';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import { ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleFactionClick = (faction: Faction) => {
    setSelectedFaction(faction);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedFaction(null);
    setSelectedCharacter(null);
  };

  const isMap = selectedFaction?.id === 'world-map';

  return (
    <div className="min-h-screen bg-ws-black text-stone-200 font-sans selection:bg-ws-gold selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="text-2xl font-western text-white tracking-widest cursor-pointer hover:text-ws-gold transition-colors" onClick={handleBack}>
          WESTERN <span className="text-ws-gold">SUNSET</span>
        </div>
        <div className="text-xs font-mono text-stone-500">
          EST. 1878
        </div>
      </nav>

      <main className="relative min-h-[calc(100vh-80px)]">
        
        {!selectedFaction ? (
          /* Main Dashboard */
          <div className="animate-fade-in relative z-10 pb-20">
            
            {/* Full Width Intro Section */}
            <UniverseIntro />

            {/* Faction Grid Section - Containerized */}
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/10 flex-1"></div>
                <h2 className="text-3xl font-western text-white tracking-widest drop-shadow-lg">Select Faction</h2>
                <div className="h-px bg-white/10 flex-1"></div>
              </div>
              
              {/* Changed Grid to 3 columns as requested */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FACTIONS.map((faction) => (
                  <FactionCard 
                    key={faction.id} 
                    faction={faction} 
                    onClick={handleFactionClick} 
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Detail View */
          <div className="animate-slide-up relative">
            
            {/* Background Layer for Faction Detail */}
            <div className="fixed inset-0 top-[80px] z-0 overflow-hidden pointer-events-none">
              {/* Blurred Logo Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm scale-105"
                style={{ 
                  backgroundImage: `url(${selectedFaction.logo})`,
                  backgroundColor: 'transparent' 
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-ws-black/95 to-ws-black"></div>
            </div>

            <div className={`container mx-auto px-4 py-8 relative z-10 ${isMap ? 'max-w-full' : 'max-w-7xl'}`}>
              <button 
                onClick={handleBack}
                className="group mb-8 flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:border-ws-gold bg-black">
                   <ArrowLeft className="w-4 h-4" /> 
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">Back to Map</span>
              </button>

              <div className="flex flex-col items-center text-center mb-16">
                 {/* Title Section (Image + Text) */}
                 <div className="mb-8 w-full flex justify-center">
                    {/* If it's a map, constrain height to viewport so it fits without scroll. If faction, standard size */}
                    <img 
                      src={selectedFaction.logo} 
                      alt={selectedFaction.name} 
                      className={`${isMap ? 'h-auto max-h-[70vh] w-auto max-w-[90vw] rounded shadow-2xl border border-white/10' : 'h-64 md:h-96 w-auto object-contain'} drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] animate-scale-in`}
                    />
                 </div>
                 
                 <h1 
                    className="text-7xl md:text-8xl lg:text-9xl font-western text-white mb-2 tracking-tight"
                    style={{ textShadow: `0 0 40px ${selectedFaction.style.accentColor}40` }}
                  >
                    {selectedFaction.name}
                  </h1>
                  
                  {/* Slogan Added Here */}
                  <p 
                    className="text-xl md:text-2xl font-serif italic mb-4 font-bold opacity-90"
                    style={{ color: selectedFaction.style.accentColor }}
                  >
                    {selectedFaction.slogan}
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold font-sans tracking-[0.2em] uppercase text-stone-500 mb-8">
                    {selectedFaction.fullName}
                  </h2>

                 {/* Description */}
                 <div className="max-w-4xl bg-black/60 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
                   {selectedFaction.description.map((line, i) => (
                      <p key={i} className="text-stone-200 leading-relaxed text-lg md:text-xl mb-3 last:mb-0 font-medium">{line}</p>
                    ))}
                 </div>
              </div>

              {/* Character Grid - Hide if it is a Map */}
              {!isMap && (
                <div className="border-t border-white/10 pt-16 pb-20">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-10 text-center flex items-center justify-center gap-4">
                    <span className="w-16 h-px bg-gradient-to-r from-transparent to-ws-gold"></span>
                    Key Members
                    <span className="w-16 h-px bg-gradient-to-l from-transparent to-ws-gold"></span>
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {selectedFaction.characters.map(char => (
                      <CharacterCard 
                          key={char.id} 
                          character={char} 
                          onClick={setSelectedCharacter}
                          colorTheme={selectedFaction.style.accentColor}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Modal Overlay */}
      {selectedCharacter && selectedFaction && (
        <CharacterModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)}
          accentColor={selectedFaction.style.accentColor}
        />
      )}

      <footer className="py-8 text-center text-stone-600 text-xs border-t border-white/5 bg-black relative z-10">
        <p>&copy; 1878 Western Sunset. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;