import React from "react";

interface ITimelineLane {
  children: React.ReactNode;
}

export const TimelineLane = ({ children }: ITimelineLane) => {
  return <div className="h-16 border-b relative">{children}</div>;
};
