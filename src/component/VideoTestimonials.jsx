import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const VideoSlider = () => {
  const data = [
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
    {
      src: "/file_example_MP4_480_1_5MG.mp4",
    },
  ];
  return (
    <div className="font-semibold text-3xl mt-20">
      Video Testimonials
      <h4 className="text-2xl text-gray-700">
        Discover your perfect program in our courses
      </h4>
      <div className=" p-16 mb-16">
        <div className="container relative mx-auto h-[200px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className=" h-[10rem] "
          >
            {data.map(({ src }) => {
              return (
                <SwiperSlide className="h-[200px]">
                  <iframe
                    className="mx-auto"
                    width="380"
                    height="215"
                    src="https://www.youtube.com/embed/wYpCWwD1oz0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button class="bg-orange-500 hover:bg-black text-white font-semibold  text-xl py-1 px-6  rounded mt-11">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
