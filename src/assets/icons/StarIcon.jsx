import React from "react";

function StarIcon({ color }) {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0293 0L9.45274 3.66442L13.6867 4.83688L10.9505 8.27408L11.1438 12.6631L7.0293 11.123L2.9148 12.6631L3.10809 8.27408L0.371901 4.83688L4.60586 3.66442L7.0293 0Z"
        fill={color}
      />
    </svg>
  );
}

export default StarIcon;
