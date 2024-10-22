import React from "react";
import { ToolbarProps, NavigateAction } from "react-big-calendar";
import { Button, Box, IconButton, ButtonGroup } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Calendar as CustomCalendar,
  dateFnsLocalizer,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from "date-fns/locale";
import "./../../../public/styles/calendar.css";
import Image from "next/image";
import Typography from "./typography";

interface Event {
  title: string;
  start: Date;
  end: Date;
  imageUrl: string[];
}
interface CalendarProps {
  events: Event[];
}
interface EventProp {
  event: Event;
}

const CustomToolbar: React.FC<ToolbarProps> = ({ label, onNavigate }) => {
  const handleNavigate = (action: NavigateAction) => {
    onNavigate(action);
  };

  return (
    <Box
      sx={{
        paddingY: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: Today Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: "secondary.main",
          padding: "8px 16px",
          borderRadius: "15px",
        }}
      >
        Today
      </Button>

      {/* Center: Date Range */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Arrow Icon */}
        <IconButton>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        {/* Date Range Typography */}
        <Typography
          variant="body1"
          sx={{ color: "secondary.main", mx: 2 }}
          textlabel="Mon 12 - 18, 2024"
        />

        {/* Right Arrow Icon */}
        <IconButton>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Right: Button Group for Week, Month, Year */}
      <ButtonGroup variant="outlined" sx={{ borderRadius: "8px" }}>
        <Button
          variant="contained"
          sx={{
            color: "secondary.main",
            borderColor: "secondary.main",
            backgroundColor: "#fff",
            padding: "8px 16px",
            borderRadius: "15px",
          }}
        >
          Week
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "secondary.main",
            borderColor: "secondary.main",
            backgroundColor: "#fff",
            padding: "8px 16px",
            borderRadius: "15px",
          }}
        >
          Month
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "secondary.main",
            borderColor: "secondary.main",
            backgroundColor: "#fff",
            padding: "8px 16px",
            borderRadius: "15px",
          }}
        >
          Year
        </Button>
      </ButtonGroup>
    </Box>
  );
};

const CustomEvent: React.FC<EventProp> = ({ event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "4px",
        borderRadius: "4px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          marginBottom: "4px",
          alignItems: "center",
        }}
      >
        {event.imageUrl.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={event.title}
            width={20}
            height={20}
            style={{
              borderRadius: "30%",
            }}
          />
        ))}
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: "semibold",
          textAlign: "left",
          color: "secondary.main",
          fontSize: "0.7rem",
          flexGrow: 1,
        }}
        textlabel={event.title}
      />
    </Box>
  );
};

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const locales = {
    "en-US": enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date()),
    getDay,
    locales,
  });

  const eventStyleGetter = (event) => {
    const backgroundColor = "#FFEBCC";
    const border = "2px solid orange";
    const style = {
      backgroundColor,
      border,
      color: "black",
      borderRadius: "0px",
      paddingX: "9px",
      paddingY: "20px",
      height: "100%",
    };
    return {
      style,
    };
  };
  return (
    <Box sx={{ height: "700px" }}>
      <CustomCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day"]}
        defaultView="month"
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
        }}
      />
    </Box>
  );
};

export default Calendar;
