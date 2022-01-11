import { Items, EventsChildProps, DateFilter } from "../Interface";

export function humanReadableDateHandler(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function replaceStr(str: string) {
  return str.replace(", ", "\n");
}

export function getFeaturedEvents(eventArr: Items[]) {
  return eventArr.filter((event) => event.isFeatured);
}

export function transformData(obj: EventsChildProps) {
  const newArr: Items[] = Object.values(obj);

  return newArr;
}

export async function fetchEventsData(url: string) {
  const response = await fetch(url);

  const data: EventsChildProps = await response.json();

  return data;
}

export function getEventById(eventArr: Items[], id: string) {
  return eventArr.find((event) => event.id === id);
}

export function getFilteredEvents(eventArr: Items[], dateFilter: DateFilter) {
  const { year, month } = dateFilter;

  const filteredEvents = eventArr.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
