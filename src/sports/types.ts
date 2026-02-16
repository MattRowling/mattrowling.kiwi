export interface Fixture {
  id: number;
  sport: string;
  competition: string;
  name?: string; // For event sports
  event?: string; // For event sports
  home?: string; // For home vs away sports
  away?: string; // For home vs away sports
  timestamp: number;
  venue: string;
  city: string;
}
