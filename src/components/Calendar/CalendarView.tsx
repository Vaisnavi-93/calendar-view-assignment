import React, { useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { useEventManager, CalendarEvent } from "../../hooks/useEventManager";
import { MonthView } from "./MonthView";
import { EventModal } from "./EventModal";

export const CalendarView: React.FC = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth, goToToday } = useCalendar();
  const { events, addEvent } = useEventManager();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [newTitle, setNewTitle] = useState("");

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (selectedDate && newTitle.trim()) {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: newTitle,
        startDate: selectedDate,
        endDate: selectedDate,
        color: "#93c5fd",
      };
      addEvent(newEvent);
    }
    setModalOpen(false);
    setNewTitle("");
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button onClick={goToPreviousMonth} className="px-3 py-1 border rounded">
            ←
          </button>
          <button onClick={goToToday} className="px-3 py-1 border rounded">
            Today
          </button>
          <button onClick={goToNextMonth} className="px-3 py-1 border rounded">
            →
          </button>
        </div>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
      </div>

      <MonthView currentDate={currentDate} events={events} onDayClick={handleDayClick} />

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      >
        <div className="space-y-3">
          <h3 className="text-base font-semibold">
            Add Event on {selectedDate?.toDateString()}
          </h3>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Event title"
            className="w-full border p-2 rounded text-sm"
          />
        </div>
      </EventModal>
    </div>
  );
};
