import Link from "next/link";
import React from "react";

const CategorySlider = ({ card }) => {
  return (
    <Link href="/">
      <div className="w-64 text-white rounded relative cursor-pointer h-[344px]">
        <img
          src={card.img}
          alt={card.img}
          className="w-full h-full object-cover"
        />
        <span className="font-normal absolute top-[15px] left-[15px]">
          {card.desc}
        </span>
        <span className="absolute text-2xl font-medium top-10 left-[15px]">
          {card.title}
        </span>
      </div>
    </Link>
  );
};

export default CategorySlider;
