import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './home.css';

import Hbg from "../../image/bg/h1.jpg";
import Hbg1 from "../../image/bg/h2.jpg";
import Hbg2 from "../../image/bg/h3.jpg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AllCardB, AllCardS } from '../../Component/AllCard/AllCard';

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



<div className="offer">
<div className="my-row">
<Link to='/' className="left">
  <img src={Hbg1} alt="" />
  <div className="box-inner">
<h6>low price</h6>
<h4>High Coziness</h4>
<h6>UPTO 50% OFF</h6>

  <button className="my-btn" >
  explore it
  </button>

</div>
</Link>
<Link to='/' className="right">
  <img src={Hbg2} alt="" />
  <div className="box-inner">
<h6>Beyoung presents</h6>
<h4>Breezy Summer
Style</h4>
<h6>UPTO 50% OFF</h6>

  <button className="my-btn" >
  explore it
  </button>

</div>
</Link>
</div>
</div>
<section>
<AllCardS src='/arr' swipe={true}  title={'New Arrival'} />

</section>

<section>
<AllCardB src='/men' swipe={true} arrow={false} title={'New Arrival'}/>

</section>

    </div>
  )
}
