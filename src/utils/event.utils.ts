import { CalendarEvent } from '../hooks/useEventManager';

/** Filter events for a specific date */
export const getEventsForDate = (events: CalendarEvent[], date: Date): CalendarEvent[] => {
  return events.filter((e) => {
    return (
      e.startDate.toDateString() === date.toDateString() ||
      (e.startDate < date && e.endDate > date)
    );
  });
};

/** Sort events by start time */
export const sortEvents = (events: CalendarEvent[]): CalendarEvent[] => {
  return [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
};
