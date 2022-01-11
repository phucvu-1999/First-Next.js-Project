import React from "react";
import Image from "next/image";

import AddressIcon from "../Icons/AddressIcon";
import DateIcon from "../Icons/DateIcon";
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";

import { humanReadableDateHandler, replaceStr } from "../../helper";

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsProps> = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = humanReadableDateHandler(date);
  const addressText = replaceStr(address);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={`${image}`}
          alt={imageAlt}
          width={400}
          height={300}
          priority
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
