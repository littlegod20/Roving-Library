"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { slides } from "@/app/lib/landingSlides";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const changeSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(changeSlide, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  let slide = slides[index];
  return (
    <section className="flex flex-col justify-around items-center h-[400px] ">
      <Image
        key={slide.id}
        src={slide.img}
        width={slide.width}
        height={slide.height}
        alt={slide.alt}
        quality={80}
        loading="lazy"
      />
      <p className="w-full text-center">{slide.description}</p>
    </section>
  );
}
