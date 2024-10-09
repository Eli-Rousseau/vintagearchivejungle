"use client";

import img1 from "@/public/assets/images/aboutme1.jpg";
import img2 from "@/public/assets/images/aboutme2.jpg";
import img3 from "@/public/assets/images/aboutme3.jpg";
import img4 from "@/public/assets/images/aboutme4.jpg";
import img5 from "@/public/assets/images/aboutme5.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

const pictures = [img1, img2, img3, img4, img5];

const AboutMePictures = () => {
  const [activePictureIndex, setActivePictureIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setActivePictureIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
        setFadeClass("fade-in");
      }, 100); // Should match the fade out transition time: 100 miliseconds
    }, 5000); // Change image every: 5 seconds

    return () => clearInterval(interval);
  }, [pictures.length]);

  return (
    <div
      className="relative flex justify-center w-full aspect-[4/5] max-w-[30rem] mb-8 lg:my-8 lg:mx-8 lg:pt-[50%]"
    >
      <div
        className={`absolute inset-0 duration-600 ease-in-out ${fadeClass}`}
      >
        <Image
          className="object-cover shadow-xl"
          src={pictures[activePictureIndex]}
          alt={`About me picture ${activePictureIndex}`}
          key={activePictureIndex}
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw, 80px"
        />
      </div>
      <div className="absolute bottom-10 flex">
        {pictures.map((_, index) => (
          <nav
            key={index}
            className={`h-2 ${
              index === activePictureIndex ? "w-4" : "w-2"
            } inline-block rounded-full ${
              index === activePictureIndex ? "bg-gray-400" : "bg-gray-200"
            } mx-1 transition-all duration-600 ease-in-out`}
          ></nav>
        ))}
      </div>
    </div>
  );
};

export default AboutMePictures;
