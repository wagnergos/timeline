import React from "react";
import { Dayjs } from "dayjs";

import { useTimeline } from "../context/TimelineContext";

interface ITimelineHeader {
  days: Dayjs[];
}
export const TimelineHeader = (props: ITimelineHeader) => {
  const { days } = props;

  const { dayWidth } = useTimeline();

  return (
    <div className="flex border-b text-sm bg-gray-100">
      {days.map((day, index) => (
        <div
          key={index}
          style={{ width: `${dayWidth}px` }}
          className="text-center border-r py-2 font-medium text-gray-600"
        >
          {day.format("DD/MM")}
        </div>
      ))}
    </div>
  );
};
