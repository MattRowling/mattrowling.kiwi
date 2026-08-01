import { Box } from "@mui/material";

import WellingtonPhoenixSvg from "./icons/teams/wellington-phoenix.svg";
import HurricanesSvg from "./icons/teams/hurricanes.svg";
import WestHamSvg from "./icons/teams/west-ham.svg";
import NewZealandCricketSvg from "./icons/teams/new-zealand-cricket.svg";
import NewZealandFootballSvg from "./icons/teams/new-zealand-football.svg";
import NewZealandRugbySvg from "./icons/teams/new-zealand-rugby.svg";
import BlueJaysSvg from "./icons/teams/blue-jays.svg";
import WellingtonLionsPng from "./icons/teams/wellington-lions.png";

interface TeamHighlightProps {
  sport: string;
  home: string | undefined;
  away: string | undefined;
}

const TEAM_HIGHLIGHTS: Record<
  string,
  Record<string, { src: string; bottom: string; right: string }>
> = {
  football: {
    "wellington phoenix": {
      src: WellingtonPhoenixSvg,
      bottom: "-8%",
      right: "-8%",
    },
    "west ham": { src: WestHamSvg, bottom: "-8%", right: "-5%" },
    "new zealand": {
      src: NewZealandFootballSvg,
      bottom: "-10%",
      right: "-10%",
    },
  },
  rugby: {
    hurricanes: { src: HurricanesSvg, bottom: "-15%", right: "-25%" },
    "new zealand": { src: NewZealandRugbySvg, bottom: "4%", right: "-5%" },
    "wellington lions": {
      src: WellingtonLionsPng,
      bottom: "2%",
      right: "-3%",
    },
  },
  cricket: {
    "new zealand": { src: NewZealandCricketSvg, bottom: "-5%", right: "-5%" },
  },
  baseball: {
    "toronto blue jays": { src: BlueJaysSvg, bottom: "-8%", right: "-8%" },
  },
};

function TeamHighlight({ sport, home, away }: TeamHighlightProps) {
  if (!home || !away) return null;

  const sportTeams = TEAM_HIGHLIGHTS[sport.toLowerCase()];
  if (!sportTeams) return null;

  const match =
    sportTeams[home.toLowerCase()] ?? sportTeams[away.toLowerCase()];
  if (!match) return null;

  return (
    <Box
      component="img"
      src={match.src}
      sx={{
        position: "absolute",
        bottom: match.bottom,
        right: match.right,
        height: "65%",
        width: "auto",
        transform: "rotate(-20deg)",
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
}

export default TeamHighlight;
