import React from "react";

export default function mobile({ fillColor }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fillColor}
        d="M7.375 22.3q-.725 0-1.225-.5-.5-.5-.5-1.2V3.4q0-.7.5-1.2t1.225-.5h9.25q.725 0 1.225.5.5.5.5 1.2v17.2q0 .7-.5 1.2t-1.225.5Zm-.325-4.1h9.9V5.8h-9.9Zm0 1.4v1q0 .1.1.2t.225.1h9.25q.125 0 .225-.1t.1-.2v-1Zm0-15.2h9.9v-1q0-.1-.1-.2t-.225-.1h-9.25q-.125 0-.225.1t-.1.2Zm0-1.3v1.3-1.3Zm0 17.8v-1.3 1.3Z"
      />
    </svg>
  );
}