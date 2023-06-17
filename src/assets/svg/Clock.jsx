const Clock = ({ fillColor, width, height, textStyles }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={`${textStyles}`}
      fill={fillColor}
    >
      <g id="_9-Clock" data-name="9-Clock">
        <path d="M18,4.16V2h1a2,2,0,0,0,2-2L13,.06A.22.22,0,0,1,13,0H11a2,2,0,0,0,2,2h1V4.16a14,14,0,1,0,4,0ZM16,30A12,12,0,1,1,28,18,12,12,0,0,1,16,30Z" />
        <path d="M17,11H15v7a1,1,0,0,0,.29.71l4,4,1.41-1.41L17,17.59Z" />
      </g>
    </svg>
  );
};

export default Clock;
