import { useState, useCallback } from 'react';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  category?: string;
}

/**
 * Basic event management hook
 * Handles adding, updating, and deleting events
 */
export const useEventManager = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const addEvent = useCallback((event: CalendarEvent) => {
    setEvents((prev) => [...prev, event]);
  }, []);

  const updateEvent = useCallback((id: string, updates: Partial<CalendarEvent>) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === id ? { ...event, ...updates } : event))
    );
  }, []);

  const deleteEvent = useCallback((id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }, []);

  return {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };
};
