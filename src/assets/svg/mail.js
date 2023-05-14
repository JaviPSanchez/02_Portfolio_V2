import React from "react";

export default function EmailSVG({ fillColor }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM5 5.5H19C19.6497 5.5 20.203 5.91311 20.4114 6.49101L12.6934 11.6364C12.2735 11.9163 11.7265 11.9163 11.3066 11.6364L3.58857 6.491C3.79701 5.91311 4.35026 5.5 5 5.5ZM3.5 8.23473V17C3.5 17.8284 4.17157 18.5 5 18.5H19C19.8284 18.5 20.5 17.8284 20.5 17V8.23474L13.5254 12.8845C12.6017 13.5003 11.3983 13.5003 10.4746 12.8845L3.5 8.23473Z"
        fill={fillColor}
      />
    </svg>
  );
}
