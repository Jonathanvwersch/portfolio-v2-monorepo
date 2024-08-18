import React from "react";
import { IconType } from "./types";

export const Frontend = ({ color, size }: IconType) => {
  return (
    <svg
      width={size ?? 12}
      height={size ?? 12}
      viewBox="0 0 576 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color ?? "#FFFFFF"}
        d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
      />
    </svg>
  );
};
