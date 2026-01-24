export interface Character {
  id: string;
  name: string;
  gender: string;
  alignment: string; // 성향
  nickname: string;
  age: string;
  personality: string;
  origin: string;
  job: string;
  strength: string;
  weapon: string;
  speechStyle: string;
  backstory: string;
  image?: string; // Character portrait URL (thumbnail)
  largeImage?: string; // Character large portrait URL (modal)
  gallery?: string[]; // New: Array of image URLs for the gallery
  
  // New Physical Stats
  height: string;
  weight: string;
  cupSize?: string;
  specialStatus?: string; // e.g. 처녀
}

export interface Faction {
  id: string;
  name: string;
  koreanName: string; // New: Korean Name
  fullName: string;
  slogan: string; // New: Introduction Quote
  description: string[];
  logo: string; // Faction Logo URL
  style: {
    accentColor: string; // Hex code for accent
  };
  characters: Character[];
}

export interface Location {
  name: string;
  description: string[];
}