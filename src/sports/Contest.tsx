import { Box } from "@mui/material";
import type { Fixture } from "./types";

type ContestProps = Pick<Fixture, "name" | "event" | "home" | "away">;

function Contest({ name, event, home, away }: ContestProps) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}
    >
      {home && away ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{home}</Box>
          <Box sx={{ fontSize: "0.875rem", color: "text.secondary" }}>vs</Box>
          <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{away}</Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            gap: 0.5,
            alignItems: "center",
          }}
        >
          <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{name}</Box>
          <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{event}</Box>
        </Box>
      )}
    </Box>
  );
}

export default Contest;
