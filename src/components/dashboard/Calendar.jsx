import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  // Day of week the 1st falls on (0=Sun … 6=Sat)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // Total days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  // Build an array of cells: nulls for leading blank days, then 1…daysInMonth
  const cells = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="calendar">
      {/* Header: prev arrow, "Month Year", next arrow */}
      <div className="calendar-header">
        <button className="cal-nav-btn" onClick={handlePrev} type="button">
          &#8249;
        </button>
        <span className="cal-title">
          {MONTHS[month]} {year}
        </span>
        <button className="cal-nav-btn" onClick={handleNext} type="button">
          &#8250;
        </button>
      </div>

      {/* Day-of-week labels */}
      <div className="calendar-grid">
        {DAYS.map((d) => (
          <div key={d} className="cal-day-label">
            {d}
          </div>
        ))}

        {/* Day cells */}
        {cells.map((day, idx) => (
          <div
            key={idx}
            className={`cal-day-cell ${day === null ? "cal-day-empty" : ""} ${isToday(day) ? "cal-day-today" : ""}`}
          >
            {day !== null ? day : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
