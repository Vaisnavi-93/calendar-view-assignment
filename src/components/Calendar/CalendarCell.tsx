import React from "react";
import { CalendarEvent } from "../../hooks/useEventManager";

interface CalendarCellProps {
  date: Date;
  events: CalendarEvent[];
  isToday: boolean;
  isCurrentMonth: boolean;
  onClick: () => void;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  events,
  isToday,
  isCurrentMonth,
  onClick,
}) => {
  const dayNumber = date.getDate();
  return (
    <div
      className={`h-24 p-2 border border-neutral-200 cursor-pointer transition-colors 
        ${isCurrentMonth ? "bg-white" : "bg-neutral-50 text-neutral-400"} 
        hover:bg-neutral-100`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <span
          className={`text-sm font-medium ${
            isToday ? "text-blue-600" : "text-neutral-800"
          }`}
        >
          {dayNumber}
        </span>
        {events.length > 0 && (
          <span className="text-xs text-neutral-500">
            {events.length} event{events.length > 1 && "s"}
          </span>
        )}
      </div>

      <div className="mt-1 space-y-1 overflow-hidden">
        {events.slice(0, 2).map((event) => (
          <div
            key={event.id}
            className="truncate text-xs px-1 rounded"
            style={{
              backgroundColor: event.color || "#e5e7eb",
              color: "#111827",
            }}
          >
            {event.title}
          </div>
        ))}
        {events.length > 2 && (
          <span className="text-xs text-blue-600">+{events.length - 2} more</span>
        )}
      </div>
    </div>
  );
};
