export interface Fixture {
  id: number;
  sport: string;
  competition: string;
  name?: string; // For event sports
  event?: string; // For event sports
  home?: string; // For home vs away sports
  away?: string; // For home vs away sports
  date?: string; // for fixtures without a time (e.g. "2026-07-04")
  timestamp: number | null;
  primaryLocation: string; // e.g. venue, start location
  secondaryLocation: string; // e.g. city, end location
}
