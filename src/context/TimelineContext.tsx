import React, { createContext, useContext, useState } from "react";

interface TimelineContextValue {
  dayWidth: number;
  zoomIn: () => void;
  zoomOut: () => void;
}

const TimelineContext = createContext<TimelineContextValue | undefined>(
  undefined
);

export const TimelineProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dayWidth, setDayWidth] = useState(80);

  const zoomIn = () => setDayWidth((w) => Math.min(w + 20, 160));
  const zoomOut = () => setDayWidth((w) => Math.max(w - 20, 40));

  return (
    <TimelineContext.Provider value={{ dayWidth, zoomIn, zoomOut }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context)
    throw new Error("useTimeline must be used within a TimelineProvider");
  return context;
};
