import Image from "next/image";
import React from "react";

interface IAvatar {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar = ({ src, alt, size = 40 }: IAvatar) => {
  return (
    <Image
      className="rounded-full"
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
    />
  );
};
