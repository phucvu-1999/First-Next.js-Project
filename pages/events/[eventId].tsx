import React from "react";
import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPage } from "next";

import { getEventById, transformData } from "../../helper";
import { fetchEventsData } from "../../helper";

import EventSummary from "../../Components/EventDetail/EventSummary";
import EventLogistics from "../../Components/EventDetail/EventLogistics";
import EventContent from "../../Components/EventDetail/EventContent";
import ErrorAlert from "../../Components/UI/ErrorAlert";
import Button from "../../Components/UI/Button";

import { Items } from "../../Interface";

interface EventDetailPageProps {
  selectedEvent: Items;
}

const EventDetailPage: NextPage<EventDetailPageProps> = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
        <Button link="/">Home</Button>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetchEventsData(
    "https://next-js-course-e9232-default-rtdb.firebaseio.com/events.json"
  );

  const { params } = context;
  const id = params?.eventId as string;
  const events = transformData(data);

  const selectedEvent = getEventById(events, id);

  return {
    props: {
      selectedEvent,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchEventsData(
    "https://next-js-course-e9232-default-rtdb.firebaseio.com/events.json"
  );
  const events = transformData(data);
  const ids = events.map((event) => event.title);
  const pathWithParams = ids.map((id) => ({
    params: {
      eventId: id,
    },
  }));

  return {
    paths: pathWithParams,
    fallback: true,
  };
};

export default EventDetailPage;
