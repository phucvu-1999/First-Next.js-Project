import React from "react";

import Button from "../UI/Button";
import { humanReadableDateHandler } from "../../helper";
import classes from "./ResultTitle.module.css";

interface ResultsTitleProps {
  date: string;
}

const ResultsTitle: React.FC<ResultsTitleProps> = (props) => {
  const { date } = props;

  const humanReadableDate = humanReadableDateHandler(date);

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
