import React from "react";
import Image from "next/image";

import Button from "../UI/Button";
import DateIcon from "../Icons/DateIcon";
import AddressIcon from "../Icons/AddressIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import styles from "./EventItem.module.css";

import { humanReadableDateHandler, replaceStr } from "../../helper";

import { Items } from "../../Interface";

interface EventItemProps {
  item: Items;
}

const EventItem: React.FC<EventItemProps> = ({ item }) => {
  const { title, image, date, location, id } = item;

  const humanReadbleDate = humanReadableDateHandler(date);
  const formatAddress = replaceStr(location);

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image alt={title} src={image} width={500} height={300} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadbleDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore new event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
