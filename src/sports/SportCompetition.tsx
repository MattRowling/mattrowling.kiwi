import { Box, Chip } from "@mui/material";

import FootballSvg from "./icons/sports/soccer-ball-noto.svg";
import RugbySvg from "./icons/sports/rugby-football-noto.svg";
import CricketSvg from "./icons/sports/cricket-game-noto.svg";
import Formula1Svg from "./icons/sports/racing-car-noto.svg";
import CyclingSvg from "./icons/sports/person-biking-noto.svg";

import ALeagueMenSvg from "./icons/competitions/ALeagueMen_2021-IsuzuHori.svg";
import T20WorldCupSvg from "./icons/competitions/t20-world-cup-2026.svg";
import SixNationsSvg from "./icons/competitions/six-nations.svg";
import PremierLeagueSvg from "./icons/competitions/premier-league.svg";
import SuperRugbyPacificSvg from "./icons/competitions/super-rugby-pacific.svg";
import Formula1WorldChampionshipSvg from "./icons/competitions/formula-1-world-championship.svg";
import FifaWorldCupSvg from "./icons/competitions/fifa-world-cup.svg";
import ALeagueWomenSvg from "./icons/competitions/a-league-women.svg";
import TourDeFranceSvg from "./icons/competitions/tour-de-france.svg";
import FACupSvg from "./icons/competitions/fa-cup.svg";

const getSvgForSport = (sport: string) => {
  const style = { height: 24 };
  switch (sport.toLowerCase()) {
    case "football":
      return <img src={FootballSvg} style={style} />;
    case "rugby":
      return <img src={RugbySvg} style={style} />;
    case "cricket":
      return <img src={CricketSvg} style={style} />;
    case "formula 1":
      return <img src={Formula1Svg} style={style} />;
    case "cycling":
      return <img src={CyclingSvg} style={style} />;
  }
  return null;
};

const getCompetitionLogo = (competition: string) => {
  const style = { height: 24 };
  switch (competition.toLowerCase()) {
    case "a-league men":
      return <img src={ALeagueMenSvg} style={style} />;
    case "t20 world cup":
      return <img src={T20WorldCupSvg} style={style} />;
    case "six nations":
      return <img src={SixNationsSvg} style={style} />;
    case "premier league":
      return <img src={PremierLeagueSvg} style={style} />;
    case "super rugby pacific":
      return <img src={SuperRugbyPacificSvg} style={style} />;
    case "formula 1 world championship":
      return <img src={Formula1WorldChampionshipSvg} style={style} />;
    case "a-league women":
      return <img src={ALeagueWomenSvg} style={style} />;
    case "fifa world cup":
      return <img src={FifaWorldCupSvg} style={style} />;
    case "tour de france":
      return <img src={TourDeFranceSvg} style={style} />;
    case "fa cup":
      return <img src={FACupSvg} style={style} />;
  }
  return null;
};

interface SportCompetitionProps {
  sport: string;
  competition: string;
}

function SportCompetition({ sport, competition }: SportCompetitionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {getSvgForSport(sport)}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {getCompetitionLogo(competition) || (
          <Chip label={competition} size="small" sx={{ fontWeight: "bold" }} />
        )}
      </Box>
    </Box>
  );
}

export default SportCompetition;
