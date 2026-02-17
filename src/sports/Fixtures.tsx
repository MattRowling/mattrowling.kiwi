import { Card, CardContent, Box, Chip } from "@mui/material";

import fixtures from "./data/fixtures-data";
import FootballSvg from "./icons/soccer-ball-noto.svg";
import RugbySvg from "./icons/rugby-football-noto.svg";
import CricketSvg from "./icons/cricket-game-noto.svg";
import Formula1Svg from "./icons/racing-car-noto.svg";
import Contest from "./Contest";

const getSvgForSport = (sport: string) => {
  const style = { width: 24, height: 24 };
  switch (sport.toLowerCase()) {
    case "football":
      return <img src={FootballSvg} style={style} />;
    case "rugby":
      return <img src={RugbySvg} style={style} />;
    case "cricket":
      return <img src={CricketSvg} style={style} />;
    case "formula 1":
      return <img src={Formula1Svg} style={style} />;
  }
  return null;
};

const getDateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("en-AU", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const getTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "numeric",
  });
};

const sortedFixtures = fixtures.sort((a, b) => a.timestamp - b.timestamp);

function Fixtures() {
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
      {sortedFixtures.map((fixture) => (
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {getSvgForSport(fixture.sport)}
              <Chip
                label={fixture.competition}
                size="small"
                sx={{ fontWeight: "bold" }}
              />
            </Box>

            {/* Date & Time */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                fontSize: "0.875rem",
                color: "text.secondary",
                justifyContent: "space-between",
              }}
            >
              <Box>{getDateFromTimestamp(fixture.timestamp)}</Box>
              <Box>{getTimeFromTimestamp(fixture.timestamp)}</Box>
            </Box>

            {/* Contest */}
            <Contest
              name={fixture.name}
              event={fixture.event}
              home={fixture.home}
              away={fixture.away}
            />

            {/* Venue & City */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                fontSize: "0.875rem",
                color: "text.secondary",
                justifyContent: "space-between",
              }}
            >
              <Box>{fixture.venue}</Box>
              <Box>{fixture.city}</Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Fixtures;
