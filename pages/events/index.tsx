import React from "react";

import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";

import EventList from "../../Components/Event/EventList";
import EventSearch from "../../Components/Event/EventSearch";
import { fetchEventsData, transformData } from "../../helper";
import { EventsProps } from "../../Interface";

const AllEventPage: NextPage<EventsProps> = ({ events }) => {
  const allEvents = transformData(events);
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchEventsData(
    "https://next-js-course-e9232-default-rtdb.firebaseio.com/events.json"
  );

  return {
    props: {
      events: data,
    },
    revalidate: 60,
  };
};

export default AllEventPage;
