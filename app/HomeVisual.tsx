"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Loader from "@/components/Loader";

const backgrounds = [
  "/assets/images/print1.jpeg",
  "/assets/images/print2.jpeg",
  "/assets/images/print3.jpg",
  "/assets/images/print4.jpg",
  "/assets/images/print5.jpg",
  "/assets/images/print6.jpg",
  "/assets/images/print7.jpg",
  "/assets/images/print8.jpg",
  "/assets/images/print9.jpg",
  "/assets/images/print10.jpg",
];

const HomeVisual = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [loading, setLoading] = useState(true);

  const loadImage = (imageSrc: string) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setLoading(false);
    };
  };

  useEffect(() => {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(randomImage);
    setLoading(true);
    loadImage(randomImage);
  }, []);

  const handleMouseClick = () => {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(randomImage);
    setLoading(true);
    loadImage(randomImage);
  };

  return (
    <div className="h-full flex flex-col justify-around items-center relative overflow-hidden">
      <div
        className="responsive-paragraph chalet-comprimé cursor-default responsive-visual relative"
        onClick={handleMouseClick}
      >
        {loading && (
          <div className="absolute w-full h-full flex justify-center items-center">
            <Loader />
          </div>
        )}
        <p
          className="overlapping-paragraph p-8 home-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: loading ? 0 : 1,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          Vintage Archive Jungle
        </p>
      </div>
      <Link href={"/"} className="flex items-center">
        <Button text={"Shop Now"} className={"md:text-2xl lg:text-2xl"} />
      </Link>
    </div>
  );
};

export default HomeVisual;
