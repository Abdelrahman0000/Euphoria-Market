import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './home.css';

import Hbg from "../../image/bg/h1.jpg";

import Hbg1 from "../../image/bg/h2.jpg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Home() {
  return (
    <div className="Home">
  <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>

<div className=" box">
  <img src={Hbg} alt="" />
  <div className="box-inner">
<h4>T-shirt / Tops</h4>
<h1>
Summer 
Value Pack
</h1>
<h4>
cool / colorful / comfy
</h4>
<div className="above">
  <button className="my-btn" >
  Shop Now
  </button>
</div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>

<div className=" box">
  <img src={Hbg1} alt="" />
  <div className="box-inner">
<h4>T-shirt / Tops</h4>
<h1>
all brands here
</h1>
<h4>
cool / colorful / great
</h4>
<div className="above">
  <button className="my-btn" >
  Shop Now
  </button>
</div>
  </div>
</div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}
