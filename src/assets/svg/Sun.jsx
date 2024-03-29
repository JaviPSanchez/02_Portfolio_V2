export default function Sun({ fillColor, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>sun</title>
      <path
        d="M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3zm0 16a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm1-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-9-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H3zm16 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zm-.707-8.707a1 1 0 0 1 1.414 1.414l-1.581 1.581a1 1 0 0 1-1.414-1.414l1.58-1.581zM5.707 19.707a1 1 0 1 1-1.414-1.414l1.581-1.581a1 1 0 1 1 1.414 1.414l-1.58 1.581zm-1.414-14a1 1 0 0 1 1.414-1.414l1.581 1.581a1 1 0 0 1-1.414 1.414l-1.581-1.58zm15.414 12.586a1 1 0 0 1-1.414 1.414l-1.581-1.581a1 1 0 0 1 1.414-1.414l1.581 1.58z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  );
}
