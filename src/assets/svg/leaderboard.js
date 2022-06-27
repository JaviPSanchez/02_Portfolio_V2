import React from "react";

export default function MarketingSVG({ fillColor }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 12V8C16 6.34315 14.6569 5 13 5H11C9.34315 5 8 6.34315 8 8V10H5C3.34315 10 2 11.3431 2 13V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V15C22 13.3431 20.6569 12 19 12H16ZM13 6.5H11C10.1716 6.5 9.5 7.17157 9.5 8V17.5H14.5V8C14.5 7.17157 13.8284 6.5 13 6.5ZM16 13.5V17.5H20.5V15C20.5 14.1716 19.8284 13.5 19 13.5H16ZM5 11.5H8V17.5H3.5V13C3.5 12.1716 4.17157 11.5 5 11.5Z"
        fill={fillColor}
      />
    </svg>
  );
}
