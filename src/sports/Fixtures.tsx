import { Card, CardContent, Box } from "@mui/material";

import fixtures from "./data/fixtures-data";
import SportCompetition from "./SportCompetition";
import DateTime from "./DateTime";
import Contest from "./Contest";
import { isFixtureCompleted } from "./utils/fixture-utils";

const sortedFixtures = fixtures.sort((a, b) => {
  const timeA =
    a.timestamp ??
    (a.date
      ? new Date(a.date.split("/").reverse().join("-")).getTime() / 1000
      : 0);
  const timeB =
    b.timestamp ??
    (b.date
      ? new Date(b.date.split("/").reverse().join("-")).getTime() / 1000
      : 0);
  return timeA - timeB;
});

function Fixtures() {
  const activeFixtures = sortedFixtures.filter(
    (fixture) => !isFixtureCompleted(fixture),
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(auto, 21rem)",
          sm: "repeat(auto-fit, minmax(21rem, 21rem))",
        },
        gap: 3,
        justifyContent: "center",
      }}
    >
      {activeFixtures.map((fixture) => (
        <Card
          key={fixture.id}
          sx={{
            boxShadow: 3,
            transition: "transform 2s, box-shadow 0.2s",
            display: "flex",
            flexDirection: "column",
            height: "13rem",
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Sport Icon & Competition */}
            <SportCompetition
              sport={fixture.sport}
              competition={fixture.competition}
            />

            {/* Date & Time */}
            <DateTime
              timestamp={fixture.timestamp}
              date={fixture.date}
              endDate={fixture.endDate}
            />

            {/* Contest */}
            <Contest
              name={fixture.name}
              event={fixture.event}
              home={fixture.home}
              away={fixture.away}
            />

            {/* Locations */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                fontSize: "0.875rem",
                color: "text.secondary",
                justifyContent: "space-between",
              }}
            >
              <Box>{fixture.primaryLocation}</Box>
              {fixture.sport.toLowerCase() === "cycling" && <Box>→</Box>}
              <Box>{fixture.secondaryLocation}</Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Fixtures;
