"use client";

const backgrounds = [
  "/assets/images/print1.jpeg",
  "/assets/images/print2.jpeg",
];

import React, { useState } from "react";

const HomeVisual = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [backgroundImage, setBackgroundImage] = useState(
    backgrounds[Math.floor(Math.random() * backgrounds.length)]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setBackgroundPosition(`${xPercent}% ${yPercent}%`);
  };

  const handleMouseClick = () => {
    setBackgroundImage(
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    );
  };

  return (
    <div
      className="w-full text-center 2xl:w-[1440px]"
      onClick={handleMouseClick}
    >
      <p
        className="chalet_comprimé cursor-default text-wrap text-[40vw] 2xl:text-[576px] drop-shadow-2xl home-text leading-extra-tight pb-6 sm:pb-10 md:pb-14 xl:pb-20 2xl:pb-24"
        onMouseMove={handleMouseMove}
        style={{
          backgroundPosition,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        Vintage Archive Jungle
      </p>
    </div>
  );
};

export default HomeVisual;
