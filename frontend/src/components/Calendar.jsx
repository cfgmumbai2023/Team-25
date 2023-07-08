import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function CalendarComponent() {
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = allEvents[i].start;
      const d2 = newEvent.start;
      const d3 = allEvents[i].end;
      const d4 = newEvent.end;

      if (
        (d1 <= d2 && d2 <= d3) ||
        (d1 <= d4 && d4 <= d3)
      ) {
        alert("CLASH");
        return;
      }
    }

    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title: "", start: null, end: null });
  }

  return (
    <div className="App">
       <h3>You've completed all the sessions!</h3>
      <div className="heading">
      
        <h2>Select a timeslot for your evaluation:</h2>
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="Enter Your Name..."
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Select Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <input placeholder="Start Time"/>
        <input placeholder="End Time"/>
        <DatePicker
          // placeholderText="End Time"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Examination
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="start"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default CalendarComponent;
