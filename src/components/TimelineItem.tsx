import React from "react";

import { TimelineItem as ItemType } from "../types/timeline";

interface ITimelineItem {
  item: ItemType;
}

export function TimelineItem({ item }: ITimelineItem) {
  return (
    <div
      className="absolute top-2 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow"
      style={{
        left: "100px",
        width: "120px",
      }}
    >
      {item.name}
    </div>
  );
}
