import { Box } from "@mui/material";
import type { Fixture } from "./types";

type DateTimeProps = Pick<Fixture, "timestamp" | "date" | "endDate">;

const formatDate = (timestamp: number, options: Intl.DateTimeFormatOptions) =>
  new Date(timestamp * 1000).toLocaleString("en-AU", options);

const getDateFromTimestamp = (timestamp: number) =>
  formatDate(timestamp, { weekday: "short", month: "short", day: "numeric" });

const getTimeFromTimestamp = (timestamp: number) =>
  formatDate(timestamp, { hour: "numeric", minute: "numeric" });

const getFormattedDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/");
  const date = new Date(`20${year}-${month}-${day}`);
  return date.toLocaleString("en-AU", { day: "numeric", month: "short" });
};

const getFormattedDateRange = (startDate: string, endDate: string) =>
  `${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`;

function DateTime({ timestamp, date, endDate }: DateTimeProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        fontSize: "0.875rem",
        color: "text.secondary",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {timestamp
          ? endDate
            ? getFormattedDateRange(date!, endDate)
            : getDateFromTimestamp(timestamp)
          : getFormattedDate(date!)}
      </Box>
      {timestamp && <Box>{getTimeFromTimestamp(timestamp)}</Box>}
    </Box>
  );
}

export default DateTime;
