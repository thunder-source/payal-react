import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../carousel.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Carousel() {
  const data = [
    {
      src: "./crousel-images/Indias-best.jpg",
    },
    {
      src: "./crousel-images/nift-mdes.jpg",
    },
    {
      src: "./crousel-images/Indias-best.jpg",
    },
    {
      src: "./crousel-images/nift-mdes.jpg",
    },
    {
      src: "./crousel-images/Indias-best.jpg",
    },
    {
      src: "./crousel-images/nift-mdes.jpg",
    },
    {
      src: "./crousel-images/Indias-best.jpg",
    },
    {
      src: "./crousel-images/nift-mdes.jpg",
    },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper mt-28"
    >
      {data.map(({ src }) => {
        return (
          <SwiperSlide className="h-[460px]">
            <img src={src} alt="" className="w-full h-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
