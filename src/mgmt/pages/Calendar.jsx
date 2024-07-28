import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { CalendarEvent, CelendarModal, Navbar } from "../components";
import { localizer, getMessagesES } from "../../helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const events = [
  {
    title: "Cumpleaños del Jefe Maestro",
    notes: "Hay que comprar pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Jesús Velasco",
    },
  },
];

export function CalendarPage() {
  const [view, setView] = useState(() => {
    const viewSelected = window.localStorage.getItem("view");

    if (!viewSelected) {
      return "week";
    }

    return viewSelected;
  });
  // Esta función hace que el estilo de los eventos cambie!
  // eslint-disable-next-line no-unused-vars
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#327cf7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  const handleDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const handleSelect = (event) => {
    console.log({ click: event });
  };

  const handleViewChanged = (event) => {
    setView(event);
    window.localStorage.setItem("view", event);
  };

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={view}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 78px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={handleDoubleClick}
        onSelectEvent={handleSelect}
        onView={handleViewChanged}
      />

      <CelendarModal />
    </div>
  );
}
