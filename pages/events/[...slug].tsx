import React, { Fragment } from "react";

import { NextPage } from "next";
import { GetServerSideProps } from "next";

import EventList from "../../Components/Event/EventList";
import ResultsTitle from "../../Components/Event/ResultTitle";
import ErrorAlert from "../../Components/UI/ErrorAlert";
import Button from "../../Components/UI/Button";

import { Items } from "../../Interface";

import {
  fetchEventsData,
  transformData,
  getFilteredEvents,
} from "../../helper";

interface FilterEventsPageProps {
  hasError?: boolean;
  events: Items[];
  dates: {
    year: number;
    month: number;
  };
}

const FilterEventsPage: NextPage<FilterEventsPageProps> = ({
  hasError,
  events,
  dates,
}) => {
  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid filter, please adjust your values</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center ">No events found for that choosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(dates.year, dates.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date.toString()} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params?.slug as string[];

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const data = await fetchEventsData(
    "https://next-js-course-e9232-default-rtdb.firebaseio.com/events.json"
  );

  const events = transformData(data);

  const filteredEvents = getFilteredEvents(events, {
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      dates: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
};

export default FilterEventsPage;
