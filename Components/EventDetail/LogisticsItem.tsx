import React from "react";
import classes from "./LogisticsItem.module.css";

interface LogisticsItemProps {
  icon: React.FC;
}

const LogisticsItem: React.FC<LogisticsItemProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
