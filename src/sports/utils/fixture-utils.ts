import type { Fixture } from "../types";

const COMPLETION_TIMES: Record<string, number> = {
  // sport, time in seconds
  football: 2 * 60 * 60, // 2 hours
  rugby: 2 * 60 * 60, // 2 hours
  "formula 1": 2 * 60 * 60, // 2 hours
  cycling: 4 * 60 * 60, // 4 hours
};

export const getFixtureCompletionTime = (fixture: Fixture): number => {
  const sport = fixture.sport.toLowerCase();

  // Cricket special cases
  if (sport === "cricket") {
    if (fixture.competition.toLowerCase().includes("test")) {
      return 5 * 24 * 60 * 60; // 5 days
    }
    return 3 * 60 * 60; // 3 hours for T20
  }

  // Formula 1 special cases
  if (sport === "formula 1") {
    const event = fixture.event?.toLowerCase() || "";
    if (
      event.includes("practice") ||
      event.includes("qualifying") ||
      event.includes("sprint")
    ) {
      return 1 * 60 * 60; // 1 hour
    }
    return 2 * 60 * 60; // 2 hours for race
  }

  return COMPLETION_TIMES[sport] || 2 * 60 * 60; // Default 2 hours
};

export const isFixtureCompleted = (fixture: Fixture): boolean => {
  if (!fixture.timestamp) return false;

  const completionTime = getFixtureCompletionTime(fixture);
  const completionTimestamp = fixture.timestamp + completionTime;
  const now = Math.floor(Date.now() / 1000);

  return now > completionTimestamp;
};
