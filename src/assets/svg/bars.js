import React from "react";

export default function bars({ fillColor }) {
  return (
    <svg
      width="20"
      height="20"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.4 61.2"
      fill="none"
    >
      <path
        fill={fillColor}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.6 0h8.7c2.8 0 5 2.2 5 5v51.1c0 2.8-2.2 5-5 5h-8.7c-2.8 0-5-2.2-5-5V5c0-2.7 2.2-5 5-5zM5 24.9h8.7c2.8 0 5 2.2 5 5v26.2c0 2.8-2.2 5-5 5H5c-2.8 0-5-2.2-5-5V29.9c0-2.8 2.2-5 5-5zM31.4 17.8h8.7c2.8 0 5 2.2 5 5v33.4c0 2.8-2.2 5-5 5h-8.7c-2.8 0-5-2.2-5-5V22.8c0-2.8 2.3-5 5-5z"
      />
    </svg>
  );
}
