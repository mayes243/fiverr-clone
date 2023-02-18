"use client";
import React from "react";
import Slider from "infinite-react-carousel";
import "./style.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="flex justify-center py-[100px] px-0">
      <div className="relative w-[1400px] custom-slider">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
