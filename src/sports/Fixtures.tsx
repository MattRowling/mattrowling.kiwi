import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import FixturesData from "./data/FixturesData";
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

const getStartFromTimestamp = (timestamp: number) => {
  // TODO: display year if not current year

  const date = new Date(timestamp * 1000);
  return date.toLocaleString("en-AU", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

const sortedFixtures = FixturesData.sort((a, b) => a.timestamp - b.timestamp);

function Fixtures() {
  return (
    <div className="w-fit">
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: "auto" }}>
          <TableHead
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiTableCell-root": { fontWeight: "bold", fontSize: "1rem" },
            }}
          >
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Home</TableCell>
              <TableCell>Away</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Competition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedFixtures.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td": { border: 0 },
                }}
              >
                <TableCell>{getSvgForSport(row.sport)}</TableCell>
                <TableCell>{row.home}</TableCell>
                <TableCell>{row.away}</TableCell>
                <TableCell>{getStartFromTimestamp(row.timestamp)}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.competition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Fixtures;
