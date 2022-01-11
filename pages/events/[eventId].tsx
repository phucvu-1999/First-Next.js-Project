import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";

import EventSummary from "../../Components/EventDetail/EventSummary";
import EventLogistics from "../../Components/EventDetail/EventLogistics";
import EventContent from "../../Components/EventDetail/EventContent";
import ErrorAlert from "../../Components/UI/ErrorAlert";
import Button from "../../Components/UI/Button";

const EventDetailPage = () => {
  console.log("branch commit");
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
        <Button link="/">Home</Button>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
