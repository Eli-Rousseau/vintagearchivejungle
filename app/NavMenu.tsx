"use client";

import { IoChevronDown } from "react-icons/io5";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const categories = [
  { label: "Shop All", link: "/" },
  { label: "Tops", link: "/" },
  { label: "Bottoms", link: "/" },
  { label: "Jumpers and Sweaters", link: "/" },
  { label: "Outerwear", link: "/" },
  { label: "Dresses", link: "/" },
  { label: "Bags", link: "/" },
  { label: "Accessories", link: "/" },
  { label: "Shoes", link: "/" },
];

const NavMenu = () => {
  const [isShopOpen, setShopOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-5 w-full p-2 lg:max-w-full border-black border-2">
      {/* Top part: search box */}
      <SearchBox />

      {/* Bottom part: menu */}
      <div className="flex flex-col gap-y-1">
        {/* Link to new arrivals page */}
        <Link href="/">
          <p className="text-xl">New Arrivals</p>
        </Link>

        {/* Link to shop page with dropdown */}
        <div
          className="flex items-center gap-x-1 hover:cursor-pointer"
          onClick={() => setShopOpen(!isShopOpen)} // Toggle shop chevron
        >
          <p className="text-xl">Shop</p>
          <IoChevronDown
            className={`transition-transform duration-200 ${
              isShopOpen ? "translate-y-1" : ""
            }`}
          />
        </div>

        {/* Dropdown menu items */}
        <Transition
          show={isShopOpen}
          enter="transition-all duration-300 ease-in-out"
          enterFrom="opacity-0 max-h-0 transform -translate-y-2"
          enterTo="opacity-100 max-h-80 transform translate-y-0"
          leave="transition-all duration-300 ease-in-out"
          leaveFrom="opacity-100 max-h-80 transform translate-y-0"
          leaveTo="opacity-0 max-h-0 transform -translate-y-2"
        >
          <div className="flex flex-col gap-y-1 overflow-hidden transition-max-height duration-300 ease-in-out">
            {categories.map((category) => (
              <Link id={category.label} href={category.link} className="ml-2">
                {category.label}
              </Link>
            ))}
          </div>
        </Transition>

        {/* Link to about us */}
        <Link href="/">
          <p className="text-xl">About Us</p>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
