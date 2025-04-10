import React, { useState } from "react";
import dayjs from "dayjs";
import { Pencil } from "lucide-react";
import clsx from "clsx";

import { useTimeline } from "../context/TimelineContext";

import { TimelineItem as ItemType } from "../types/timeline";
import { getItemPosition } from "../utils/dateUtils";

interface ITimelineItem {
  item: ItemType;
  timelineStart: dayjs.Dayjs;
  isEditing: boolean;
  onStartEdit: () => void;
  onSaveName: (newName: string) => void;
}

export const TimelineItem = (props: ITimelineItem) => {
  const { item, timelineStart, isEditing, onStartEdit, onSaveName } = props;

  const { dayWidth } = useTimeline();

  const [inputValue, setInputValue] = useState(item.name);

  const { left, width } = getItemPosition(item, timelineStart, dayWidth);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onStartEdit();
    setInputValue(item.name);
  };

  return (
    <div
      className={clsx(
        "absolute top-2 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow",
        "hover:bg-blue-600 group"
      )}
      style={{ left, width }}
      aria-label={`${item.name}`}
    >
      {!isEditing && (
        <button
          onClick={handleEdit}
          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Edit event"
        >
          <Pencil size={12} />
        </button>
      )}
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => onSaveName(inputValue)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSaveName(inputValue);
            if (e.key === "Escape") onSaveName(item.name);
          }}
          className="bg-blue-500 outline-none w-full pr-4"
        />
      ) : (
        <span>{item.name}</span>
      )}
    </div>
  );
};
