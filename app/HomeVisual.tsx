"use client";

const backgrounds = [
  "/assets/images/print1.jpeg",
  "/assets/images/print2.jpeg",
];

import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";

const HomeVisual = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    backgrounds[Math.floor(Math.random() * backgrounds.length)]
  );

  const handleMouseClick = () => {
    setBackgroundImage(
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    );
  };

  return (
    <div
      className="w-full h-full flex gap-y-10 flex-col items-center justify-evenly text-center"
      onClick={handleMouseClick}
    >
      <p
        className="chalet_comprimé cursor-default text-wrap drop-shadow-2xl home-text text-[32vw] md:text-[26vw] lg:text-[15vw] leading-tight"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        Vintage
        Archive
        Jungle
      </p>
      <Link href={"/"} className="flex items-center">
        <Button text={"Shop Now"} className={"md:text-2xl lg:text-2xl"}/>
      </Link>
    </div>
  );
};

export default HomeVisual;
