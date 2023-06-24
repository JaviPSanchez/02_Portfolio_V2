export default function DownArrow({ fillColor, textStyles, width, height }) {
  return (
    <svg
      fill={fillColor}
      width={width}
      className={`${textStyles}`}
      height={height}
      id="Layer_1"
      viewBox="0 0 330 330"
    >
      <path
        id="XMLID_10_"
        d="M154.394,325.606C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5
	c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.356-5.858-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15
	c-8.284,0-15,6.716-15,15v263.787l-11.893-11.894c-5.858-5.858-15.356-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213
	L154.394,325.606z"
      />
    </svg>
  );
}
