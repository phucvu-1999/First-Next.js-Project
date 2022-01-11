import React from "react";
import { GetStaticProps, NextPage } from "next";

import { getFeaturedEvents, fetchEventsData, transformData } from "../helper";
import EventList from "../Components/Event/EventList";

import { EventsProps } from "../Interface";

const HomePage: NextPage<EventsProps> = ({ events }) => {
  const data = transformData(events);

  const features = getFeaturedEvents(data);

  return (
    <div>
      <EventList items={features} />
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
    revalidate: 1800,
  };
};

export default HomePage;
