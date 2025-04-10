import React from "react";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";

import { useTimeline } from "../context/TimelineContext";

interface ITimelineHeader {
  days: Dayjs[];
}
export const TimelineHeader = (props: ITimelineHeader) => {
  const { days } = props;

  const { dayWidth } = useTimeline();

  return (
    <div className="flex border-b text-sm bg-gray-100">
      {days.map((day, index) => {
        const isToday = day.isSame(dayjs(), "day");

        return (
          <div
            key={index}
            style={{ width: `${dayWidth}px` }}
            className={clsx(
              "text-center border-r py-2 font-medium",
              isToday
                ? "bg-blue-100 text-blue-700 border-blue-500"
                : "text-gray-600"
            )}
            aria-label={`Timeline date ${day.format("MMM D, YYYY")}${
              isToday ? " (today)" : ""
            }`}
          >
            {day.format("DD/MM")}
          </div>
        );
      })}
    </div>
  );
};
