import React from "react";

export default function pieChartSVG({ fillColor }) {
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
        d="M9.75 6.79179C8.68033 6.91138 7.65088 7.28557 6.7499 7.88758C5.63987 8.62928 4.77471 9.68349 4.26382 10.9169C3.75293 12.1503 3.61925 13.5075 3.8797 14.8169C4.14015 16.1262 4.78303 17.329 5.72703 18.273C6.67104 19.217 7.87377 19.8598 9.18314 20.1203C10.4925 20.3808 11.8497 20.2471 13.0831 19.7362C14.3165 19.2253 15.3707 18.3601 16.1124 17.2501C16.7144 16.3491 17.0886 15.3197 17.2082 14.25H10.5C10.3011 14.25 10.1103 14.171 9.96967 14.0303C9.82902 13.8897 9.75 13.6989 9.75 13.5V6.79179ZM5.91655 6.64038C7.27325 5.73385 8.86831 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 15.1317 18.2661 16.7267 17.3596 18.0835C16.4531 19.4402 15.1646 20.4976 13.6571 21.122C12.1497 21.7464 10.4909 21.9098 8.89051 21.5915C7.29017 21.2732 5.82016 20.4874 4.66637 19.3336C3.51259 18.1798 2.72685 16.7098 2.40853 15.1095C2.0902 13.5092 2.25357 11.8504 2.878 10.3429C3.50242 8.83537 4.55984 7.5469 5.91655 6.64038Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C15.688 2.25 17.7865 3.11919 19.3336 4.66637C20.8808 6.21354 21.75 8.31196 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25L13.5 11.25C13.3011 11.25 13.1103 11.171 12.9697 11.0303C12.829 10.8897 12.75 10.6989 12.75 10.5V3ZM14.25 3.79177V9.75L20.2082 9.75C20.039 8.23573 19.3608 6.81485 18.273 5.72703C17.1851 4.63921 15.7643 3.96103 14.25 3.79177Z"
        fill={fillColor}
      />
    </svg>
  );
}