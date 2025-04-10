import React from "react";

interface ITimelineLane {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const TimelineLane = (props: ITimelineLane) => {
  const { children, onClick } = props;
  return (
    <div className="h-16 border-b relative" onClick={onClick}>
      {children}
    </div>
  );
};
