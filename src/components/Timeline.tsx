import React from "react";

import { useTimeline } from "../context/TimelineContext";
import { useZoomControls } from "../hooks/useZoomControls";

interface ITimeline {
  children: React.ReactNode;
}

export const Timeline = ({ children }: ITimeline) => {
  const { zoomIn, zoomOut } = useTimeline();

  useZoomControls(zoomIn, zoomOut);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Timeline</h2>
        <div className="space-x-2">
          <button onClick={zoomOut} className="px-2 py-1 bg-gray-200 rounded">
            -
          </button>
          <button onClick={zoomIn} className="px-2 py-1 bg-gray-200 rounded">
            +
          </button>
        </div>
      </div>
      <div className="overflow-x-auto border rounded bg-white">
        <div className="min-w-max">{children}</div>
      </div>
    </div>
  );
};
