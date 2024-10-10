import Image from "next/image";
import React, { useState } from "react";

interface ISlider {
  images: string[];
}

export const Slider = ({ images }: ISlider) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${index === current ? "block" : "hidden"} w-full`}
        />
      ))}
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 left-0"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 right-0"
      >
        Next
      </button>
    </div>
  );
};
