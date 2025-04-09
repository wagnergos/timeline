import React from "react";

interface ITimeline {
  children: React.ReactNode;
}

export function Timeline({ children }: ITimeline) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <div className="overflow-x-auto border rounded bg-white">{children}</div>
    </div>
  );
}
