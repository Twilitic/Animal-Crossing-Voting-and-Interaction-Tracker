
export type Gender = 'Male' | 'Female';

export type Personality = 'Jock' | 'Cranky' | 'Peppy' | 'Sisterly' | 'Lazy' | 'Normal' | 'Snooty' | 'Smug';

export interface Villager {
  id: string;
  name: string;
  gender: Gender;
  species: string;
  personality: Personality;
  birthday: string;
  gameAppearances: string;
}

export type Screen = 'setup' | 'dashboard' | 'player1_voting' | 'player2_voting';

export interface AppState {
  villagers: (Villager | null)[];
  player1Ranks: string[];
  player2Ranks: string[];
  dailyToggles: string[];
  settings: {
    showBirthdays: boolean;
  }
}