import React from "react";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../Components/Event/EventList";

const HomePage = () => {
  const features = getFeaturedEvents();

  return (
    <div>
      <EventList items={features} />
    </div>
  );
};

export default HomePage;
