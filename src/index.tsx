import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";

import { timelineItems } from "./utils/timelineItems";
import { getTimelineBounds, generateDateRange } from "./utils/dateUtils";
import { assignLanes } from "./utils/assignLanes";
import { TimelineItem as ItemType } from "./types/timeline";

import { useTimeline } from "./context/TimelineContext";

import { TimelineProvider } from "./context/TimelineContext";
import { Timeline } from "./components/Timeline";
import { TimelineHeader } from "./components/TimelineHeader";
import { TimelineLane } from "./components/TimelineLane";
import { TimelineItem } from "./components/TimelineItem";

import "./index.css";

function App() {
  const { dayWidth } = useTimeline();

  const [items, setItems] = useState<ItemType[]>(timelineItems);
  const [editingItemId, setEditingItemId] = useState<number | null>(null);

  const { start: timelineStart, end: timelineEnd } = getTimelineBounds(items);
  const days = generateDateRange(timelineStart, timelineEnd);
  const lanes = assignLanes(items);

  const handleLaneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const laneRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - laneRect.left;

    const daysFromStart = Math.floor(offsetX / dayWidth);
    const clickedDate = timelineStart.add(daysFromStart, "day").startOf("day");

    const newItem: ItemType = {
      id: Date.now(),
      name: "New Event",
      start: clickedDate.format("YYYY-MM-DD"),
      end: clickedDate.add(2, "day").format("YYYY-MM-DD"),
    };

    setItems((prev) => [...prev, newItem]);
  };

  const updateItemName = (id: number, newName: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
    setEditingItemId(null);
  };

  return (
    <Timeline>
      <TimelineHeader days={days} />
      {lanes.map((lane, laneIndex) => (
        <TimelineLane key={laneIndex} onClick={handleLaneClick}>
          {lane.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
              timelineStart={timelineStart}
              isEditing={editingItemId === item.id}
              onStartEdit={() => setEditingItemId(item.id)}
              onSaveName={(newName) => updateItemName(item.id, newName)}
            />
          ))}
        </TimelineLane>
      ))}
    </Timeline>
  );
}

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <TimelineProvider>
      <App />
    </TimelineProvider>
  );
} else {
  console.error("Root element not found in the DOM.");
}
