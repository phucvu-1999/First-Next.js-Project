import React from "react";

import { Items } from "../../Interface";
import EventItem from "./EventItem";

import styles from "./EventList.module.css";

interface EventListProps {
  items: Items[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem item={event} key={event.id}></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
