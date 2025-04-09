import React from "react";
import { Dayjs } from "dayjs";

interface ITimelineHeader {
  days: Dayjs[];
}
export const TimelineHeader = (props: ITimelineHeader) => {
  const { days } = props;

  return (
    <div className="flex border-b text-sm bg-gray-100">
      {days.map((day, index) => (
        <div
          key={index}
          className="w-20 text-center border-r py-2 font-medium text-gray-600"
          aria-label={`Timeline date ${day.format("MMM D, YYYY")}`}
        >
          {day.format("MMM D")}
        </div>
      ))}
    </div>
  );
};
