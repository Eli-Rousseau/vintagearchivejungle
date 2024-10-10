"use client";

import React, { useRef, useState, useEffect } from "react";
import ArticleCard, { Article } from "@/components/ArticleCard";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import article1 from "@/public/assets/images/img1.jpg";
import article2 from "@/public/assets/images/img2.jpg";
import article3 from "@/public/assets/images/img3.jpg";
import article4 from "@/public/assets/images/img4.jpg";

const FavoriteArticles = () => {
  const articles: Article[] = [
    {
      identifier: 1,
      title: "Printed top",
      price: 45.0,
      src: article1,
      sale: 0,
      liked: false,
    },
    {
      identifier: 2,
      title: "Printed trousers",
      price: 75.0,
      src: article2,
      sale: 20,
      liked: false,
    },
    {
      identifier: 3,
      title: "Sheer dress",
      price: 145.0,
      src: article3,
      sale: 0,
      liked: true,
    },
    {
      identifier: 4,
      title: "Leather boots",
      price: 78.0,
      src: article4,
      sale: 0,
      liked: false,
    },
  ];

  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider;

      const tolerance = 1;

      setShowLeftChevron(scrollLeft > 0);

      setShowRightChevron(scrollLeft < scrollWidth - clientWidth - tolerance);
    }
  };

  const slideLeft = () => {
    let slider = sliderRef.current;
    let cardWidth = document.querySelector(".article-card")?.clientWidth || 0;
    slider!.scrollLeft -= cardWidth;
  };

  const slideRight = () => {
    let slider = sliderRef.current;
    let cardWidth = document.querySelector(".article-card")?.clientWidth || 0;
    slider!.scrollLeft += cardWidth;
  };

  useEffect(() => {
    // Check the scroll position on component mount
    handleScroll();
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex w-full justify-center lg:w-1/2 px-6">
        <h2 className="text-4xl font-bold border-gray-700 border-b-2 pb-1 flex-grow max-w-[37rem] lg:mr-4">
          Our Favorites
        </h2>
      </div>
      <div className="relative w-full">
        {/* Left Chevron */}
        {showLeftChevron && (
          <HiOutlineChevronLeft
            className="absolute bottom-1/2 left-2 z-10 opacity-50 cursor-pointer mx-5 hover:opacity-100"
            size={45}
            onClick={slideLeft}
          />
        )}

        {/* Slider Container */}
        <div
          id="slider"
          ref={sliderRef}
          className="flex w-full overflow-x-scroll justify-around scroll-smooth scrollbar-hide snap-x snap-mandatory"
          onScroll={handleScroll} // Attach scroll event
        >
          {articles.map((article) => (
            <div
              className="w-full flex-shrink-0 flex max-w-[25rem] justify-center cursor-default hover:scale-[102%] ease-in-out duration-300 snap-center article-card"
              key={article.identifier}
            >
              <div className="w-[80%] my-3">
                <ArticleCard article={article} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        {showRightChevron && (
          <HiOutlineChevronRight
            className="absolute bottom-1/2 right-2 z-10 opacity-50 cursor-pointer mx-5 hover:opacity-100"
            size={45}
            onClick={slideRight}
          />
        )}
      </div>
    </div>
  );
};

export default FavoriteArticles;
