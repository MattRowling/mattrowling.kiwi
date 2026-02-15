import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import FIXTURES from "./data/FixturesData";

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
              <TableCell>Sport</TableCell>
              <TableCell>Home</TableCell>
              <TableCell>Away</TableCell>
              <TableCell>Time (UTC)</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Competition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FIXTURES.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td": { border: 0 },
                }}
              >
                <TableCell>{row.sport}</TableCell>
                <TableCell>{row.home}</TableCell>
                <TableCell>{row.away}</TableCell>
                <TableCell>{row.timeUTC}</TableCell>
                <TableCell>{row.date}</TableCell>
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
