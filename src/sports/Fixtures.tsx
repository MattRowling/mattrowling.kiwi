import { Card, CardContent, Box, Chip } from "@mui/material";

import fixtures from "./data/fixtures-data";
import FootballSvg from "./icons/soccer-ball-noto.svg";
import RugbySvg from "./icons/rugby-football-noto.svg";
import CricketSvg from "./icons/cricket-game-noto.svg";

const getSvgForSport = (sport: string) => {
  const style = { width: 24, height: 24 };
  switch (sport.toLowerCase()) {
    case "football":
      return <img src={FootballSvg} style={style} />;
    case "rugby":
      return <img src={RugbySvg} style={style} />;
    case "cricket":
      return <img src={CricketSvg} style={style} />;
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
            height: "13rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Sport Icon & Competition */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              {getSvgForSport(fixture.sport)}
              <Chip
                label={fixture.competition}
                size="small"
                sx={{ fontWeight: "bold" }}
              />
            </Box>

            {/* Teams and Match Details Side by Side */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flex: 1,
              }}
            >
              {/* Teams */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {fixture.home}
                </Box>
                <Box
                  sx={{
                    fontSize: "0.875rem",
                    color: "text.secondary",
                  }}
                >
                  vs
                </Box>
                <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {fixture.away}
                </Box>
              </Box>

              {/* Match Details */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.875rem",
                  color: "text.secondary",
                  justifyContent: "space-between",
                  textAlign: "right",
                }}
              >
                {/* Date and Time at top */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                  }}
                >
                  <Box>{getDateFromTimestamp(fixture.timestamp)}</Box>
                  <Box>{getTimeFromTimestamp(fixture.timestamp)}</Box>
                </Box>

                {/* Venue and City at bottom */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                  }}
                >
                  <Box>{fixture.venue}</Box>
                  <Box>{fixture.city}</Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Fixtures;
