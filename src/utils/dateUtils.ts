import dayjs, { Dayjs } from "dayjs";
import minMax from "dayjs/plugin/minMax";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(minMax);
dayjs.extend(isSameOrBefore);

import { TimelineItem } from "../types/timeline";

export function getTimelineBounds(items: TimelineItem[]) {
  const allDates = items.flatMap((item) => [item.start, item.end]);
  const start = dayjs.min(allDates.map(dayjs))!.startOf("day");
  const end = dayjs.max(allDates.map(dayjs))!.startOf("day");
  return { start, end };
}

export function getItemPosition(
  item: TimelineItem,
  timelineStart: Dayjs,
  dayWidth: number
) {
  const start = dayjs(item.start).startOf("day");
  const end = dayjs(item.end).startOf("day");
  const base = timelineStart.startOf("day");

  const offset = start.diff(base, "day");
  const duration = Math.max(1, end.diff(start, "day") + 1);

  return {
    left: offset * dayWidth,
    width: duration * dayWidth,
  };
}

export function generateDateRange(start: Dayjs, end: Dayjs): Dayjs[] {
  const days: Dayjs[] = [];
  let current = start.startOf("day");

  while (current.isSameOrBefore(end, "day")) {
    days.push(current);
    current = current.add(1, "day");
  }

  return days;
}
