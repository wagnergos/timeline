import React from "react";
import ReactDOM from "react-dom/client";

import { timelineItems } from "./utils/timelineItems";

import { Timeline } from "./components/Timeline";
import { TimelineHeader } from "./components/TimelineHeader";
import { TimelineLane } from "./components/TimelineLane";
import { TimelineItem } from "./components/TimelineItem";

import "./index.css";

function App() {
  return (
    <Timeline>
      <TimelineHeader />
      {timelineItems.map((item, index) => (
        <TimelineLane key={index}>
          <TimelineItem item={item} />
        </TimelineLane>
      ))}
    </Timeline>
  );
}

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found in the DOM.");
}
