import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { CalendarEvent, Navbar } from "../components";
import { localizer, getMessagesES } from "../../helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";

const events = [
  {
    title: "Cumpleaños del Jefe",
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

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 78px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );
}
