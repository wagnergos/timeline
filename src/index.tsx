import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems";

import "./index.css";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600">
        Good luck with your assignment! ✨
      </h2>
      <h3 className="text-lg mt-2">
        {timelineItems.length} timeline items to render
      </h3>
    </div>
  );
}

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found in the DOM.");
}
