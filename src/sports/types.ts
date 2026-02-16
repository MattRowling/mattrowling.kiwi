export interface Fixture {
  id: number;
  sport: string;
  competition: string;
  home: string;
  away: string;
  timestamp: number; // Unix Epoch (Seconds)
  venue: string;
  city: string;
}
