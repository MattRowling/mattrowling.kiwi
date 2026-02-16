import * as fs from "fs";

import type { Fixture } from "../src/sports/types.ts";

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

function generateFixtures() {
  try {
    const lines = fs
      .readFileSync("src/sports/data/Fixtures - Data.csv", "utf-8")
      .split(/\r?\n/)
      .slice(1);

    const fixtures: Fixture[] = [];

    for (let i = 0; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);

      fixtures.push({
        id: fixtures.length + 1,
        sport: values[0],
        competition: values[1],
        name: values[2] || undefined,
        event: values[3] || undefined,
        home: values[4] || undefined,
        away: values[5] || undefined,
        timestamp: parseInt(values[6]),
        venue: values[7],
        city: values[8],
      });
    }

    const outputContent = `
      // This file is auto-generated from src/sports/data/Fixtures - Data.csv

      import type { Fixture } from "./../types";

      const fixtures: Fixture[] = ${JSON.stringify(fixtures, null, 2)};

      export default fixtures;
      `
      .split("\n")
      .map((line) => line.replace(/^      /, ""))
      .join("\n")
      .trim();

    fs.writeFileSync("src/sports/data/fixtures-data.ts", outputContent);

    console.log(`Generated fixtures-data.ts with ${fixtures.length} fixtures`);
  } catch (error) {
    console.error("Error generating fixtures:", error);
    process.exit(1);
  }
}

generateFixtures();
