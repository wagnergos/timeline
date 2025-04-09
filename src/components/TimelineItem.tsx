import React from "react";
import dayjs from "dayjs";

import { useTimeline } from "../context/TimelineContext";

import { TimelineItem as ItemType } from "../types/timeline";
import { getItemPosition } from "../utils/dateUtils";

interface ITimelineItem {
  item: ItemType;
  timelineStart: dayjs.Dayjs;
}

export const TimelineItem = (props: ITimelineItem) => {
  const { dayWidth } = useTimeline();

  const { item, timelineStart } = props;
  const { left, width } = getItemPosition(item, timelineStart, dayWidth);

  return (
    <div
      className="absolute top-2 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow"
      style={{ left, width }}
      aria-label={`${item.name}`}
    >
      {item.name}
    </div>
  );
};
