import React from "react";

type Props = {
  size?: number;
  color?: string;
  icon: string;
};

export default function Icon({ size, color, icon }: Props) {
  return (
    <>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d={icon} fill={color} />
      </svg>
    </>
  );
}
