import React, { useRef } from "react";

import Button from "../UI/Button";
import styles from "./EventSearch.module.css";

interface EventSearchProps {
  onSearch: (month: string, year: string) => void;
}

const EventSearch: React.FC<EventSearchProps> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHander = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const selectedMonth = monthInputRef.current?.value as string;
    const selectedYear = yearInputRef.current?.value as string;

    onSearch(selectedMonth, selectedYear);
  };

  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button link="btn" onClick={submitHander}>
        Find Event
      </Button>
    </form>
  );
};

export default EventSearch;
