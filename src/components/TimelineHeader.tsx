import React from "react";

export function TimelineHeader() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="flex border-b text-sm bg-gray-100">
      {days.map((day) => (
        <div
          key={day}
          className="w-20 text-center border-r py-2 font-medium text-gray-600"
        >
          {`Day ${day}`}
        </div>
      ))}
    </div>
  );
}
