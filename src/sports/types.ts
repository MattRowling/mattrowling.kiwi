export interface Fixture {
  id: number;
  sport: string;
  competition: string;
  name?: string; // For event sports
  event?: string; // For event sports
  home?: string; // For home vs away sports
  away?: string; // For home vs away sports
  date?: string; // for fixtures without a time (e.g. "04/07/2026")
  endDate?: string; // End date for multi-day events (e.g. "04/07/2026")
  timestamp: number | null;
  primaryLocation: string; // e.g. venue, start location
  secondaryLocation: string; // e.g. city, end location
}
