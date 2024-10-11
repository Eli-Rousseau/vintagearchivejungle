"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import Loader from "@/components/Loader";

export interface Article {
  identifier: number;
  src: StaticImageData;
  title: string;
  price: number;
  sale: number;
  liked: boolean;
  link: string;
}

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const [liked, setLiked] = useState(article.liked);
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-start w-full shadow-lg">
      {/* Article container */}
      <div className="relative w-full pb-[125%]">
        {loading && (
          <div className="absolute w-full h-full flex justify-center items-center">
            {" "}
            <Loader />
          </div>
        )}
        <Link href={article.link}>
          <Image
            src={article.src}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80px"
            onLoad={() => setLoading(false)}
          />
        </Link>
        <GoHeartFill
          className="absolute right-4 top-4 cursor-pointer transition-colors duration-300 ease-in-out"
          fill={liked ? "pink" : "none"}
          stroke={liked ? "pink" : "black"}
          strokeWidth={1.5}
          strokeOpacity={0.2}
          size={35}
          onClick={() => setLiked(!liked)}
        />

        {article.sale !== 0 && (
          <p className="bg-black absolute text-xs top-3 left-3 px-3 py-1 text-white">
            On sale
          </p>
        )}
      </div>

      {/* Article title and price */}
      <div className="my-4 aspect-[4/1] pl-2 w-full text-left">
        <h3 className="text-lg font-semibold">{article.title}</h3>
        {article.sale !== 0 ? (
          <>
            <p className="text-sm text-gray-500 line-through inline-block">
              €{article.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-700 inline-block ml-1">
              €{(article.price * (1 - article.sale / 100)).toFixed(2)}
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-500">€{article.price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
