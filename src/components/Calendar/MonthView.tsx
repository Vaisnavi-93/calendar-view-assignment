import React from "react";
import { CalendarCell } from "./CalendarCell";
import { getCalendarGrid, isSameDay } from "../../utils/date.utils";
import { CalendarEvent } from "../../hooks/useEventManager";

interface MonthViewProps {
  currentDate: Date;
  events: CalendarEvent[];
  onDayClick: (date: Date) => void;
}

export const MonthView: React.FC<MonthViewProps> = ({
  currentDate,
  events,
  onDayClick,
}) => {
  const days = getCalendarGrid(currentDate);
  const today = new Date();

  return (
    <div className="grid grid-cols-7 border border-neutral-200">
      {days.map((date, index) => {
        const dayEvents = events.filter((e) => isSameDay(e.startDate, date));
        const isCurrentMonth = date.getMonth() === currentDate.getMonth();

        return (
          <CalendarCell
            key={index}
            date={date}
            isToday={isSameDay(date, today)}
            isCurrentMonth={isCurrentMonth}
            events={dayEvents}
            onClick={() => onDayClick(date)}
          />
        );
      })}
    </div>
  );
};
