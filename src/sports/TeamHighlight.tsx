import { Box } from "@mui/material";

import WellingtonPhoenixSvg from "./icons/teams/wellington-phoenix.svg";
import HurricanesSvg from "./icons/teams/hurricanes.svg";
import WestHamSvg from "./icons/teams/west-ham.svg";
import NewZealandCricketSvg from "./icons/teams/new-zealand-cricket.svg";
import NewZealandFootballSvg from "./icons/teams/new-zealand-football.svg";

interface TeamHighlightProps {
  sport: string;
  home: string | undefined;
  away: string | undefined;
}

const TEAM_HIGHLIGHTS: Record<
  string,
  Record<string, { svg: string; bottom: string; right: string }>
> = {
  football: {
    "wellington phoenix": {
      svg: WellingtonPhoenixSvg,
      bottom: "-8%",
      right: "-8%",
    },
    "west ham": { svg: WestHamSvg, bottom: "-8%", right: "-5%" },
    "new zealand": {
      svg: NewZealandFootballSvg,
      bottom: "-10%",
      right: "-10%",
    },
  },
  rugby: {
    hurricanes: { svg: HurricanesSvg, bottom: "-15%", right: "-20%" },
  },
  cricket: {
    "new zealand": { svg: NewZealandCricketSvg, bottom: "-5%", right: "-5%" },
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
      src={match.svg}
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
