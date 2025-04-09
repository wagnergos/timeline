import React from "react";
import ReactDOM from "react-dom/client";

import { timelineItems } from "./utils/timelineItems";
import { getTimelineBounds, generateDateRange } from "./utils/dateUtils";
import { assignLanes } from "./utils/assignLanes";

import { TimelineProvider } from "./context/TimelineContext";
import { Timeline } from "./components/Timeline";
import { TimelineHeader } from "./components/TimelineHeader";
import { TimelineLane } from "./components/TimelineLane";
import { TimelineItem } from "./components/TimelineItem";

import "./index.css";

function App() {
  const { start: timelineStart, end: timelineEnd } =
    getTimelineBounds(timelineItems);
  const days = generateDateRange(timelineStart, timelineEnd);
  const lanes = assignLanes(timelineItems);

  return (
    <TimelineProvider>
      <Timeline>
        <TimelineHeader days={days} />
        {lanes.map((lane, laneIndex) => (
          <TimelineLane key={laneIndex}>
            {lane.map((item) => (
              <TimelineItem
                key={item.id}
                item={item}
                timelineStart={timelineStart}
              />
            ))}
          </TimelineLane>
        ))}
      </Timeline>
    </TimelineProvider>
  );
}

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found in the DOM.");
}
