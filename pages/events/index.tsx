import React from "react";
import { useRouter } from "next/router";

import EventList from "../../Components/Event/EventList";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../Components/Event/EventSearch";

const AllEventPage: React.FC = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const filterDataHandler = (month: string, year: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={filterDataHandler} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventPage;
