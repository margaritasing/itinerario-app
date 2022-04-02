import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css"



// import required modules
import { Pagination, Navigation } from "swiper";


import Destination1 from "../../img/Destination1.png";
import Destination2 from "../../img/Destination2.png";
import Destination3 from "../../img/Destination3.png";
import Destination4 from "../../img/Destination4.png";
import Destination5 from "../../img/Destination5.png";
import Destination6 from "../../img/Destination6.jpg";


export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Destination1}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination2}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination3}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination4}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination5}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination6}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination1}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination2}  alt=".."/></SwiperSlide>
        <SwiperSlide><img src={Destination3}  alt=".."/></SwiperSlide>
      </Swiper>
    </>
  );
}
