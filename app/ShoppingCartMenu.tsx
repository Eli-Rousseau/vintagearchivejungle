"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import img1 from "@/public/assets/images/img1.jpg";
import img2 from "@/public/assets/images/img2.jpg";
import img3 from "@/public/assets/images/img3.jpg";
import img4 from "@/public/assets/images/img4.jpg";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

const ShoppingCartMenu = () => {
  const [loading, setLoading] = useState(true);

  // These are test article objects
  const articles: {title: string; price: number, src: StaticImageData}[] = [
    { title: "Printed top", price: 45.0, src: img1 },
    { title: "Printed trousers", price: 75.0, src: img2 },
    { title: "Sheer dress", price: 145.0, src: img3 },
    { title: "Leather boots", price: 78.0, src: img4 },
  ];

  const totalPrice = articles.reduce((sum, article) => sum + article.price, 0);

  if (articles.length === 0) {
    return (
      <div>
        {/* Title of shopping cart */}
        <div className="flex justify-center items-center my-4">
          <h2 className="text-lg">Shopping Cart</h2>
        </div>

        {/* Content of shopping cart */}
        <div className="flex justify-center border-y-2 py-3 italic">
            <p>Empty</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Title of shopping cart */}
      <div className="flex justify-center items-center my-4">
        <h2 className="text-lg">Shopping Cart</h2>
      </div>

      {/* Content of shopping cart */}
      <div className="flex flex-col gap-y-2 border-y-2 pt-2 pb-4">
        {articles.map((article, index) => (
          <div key={index} className="flex mb-4 items-center">
            {/* Image of article with loader */}
            <div className="w-[80px] h-[100px] flex-shrink-0 relative overflow-hidden flex items-center justify-center">
              {loading && <Loader />}
              <Image
                src={article.src}
                alt={article.title}
                fill
                className="object-cover"
                onLoad={() => setLoading(false)}
                sizes="(max-width: 768px) 100vw, 80px"
              />
            </div>
            {/* Title and price of article */}
            <div className="ml-4 text-base">
              <div>
                <span>Article: </span>
                <span>{article.title}</span>
              </div>
              <div>
                <span>Price:</span>
                <span className="ml-1">{`€ ${article.price.toFixed(2)}`}</span>
              </div>
            </div>
            {/* Close button */}
            <button className="ml-auto mr-3">
              <IoCloseOutline size={25} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="flex items-center my-3 text-base">
        <span>Total price: </span>
        <span className="ml-1">{`€ ${totalPrice.toFixed(2)}`}</span>
      </div>
      <div>
        <Button text="Checkout" />
      </div>
    </div>
  );
};

export default ShoppingCartMenu;
