

import GetImg from '../../utils/GetImg';
import React, { useState , useEffect } from 'react';
import CardB from '../CardB/CardB.jsx';
import CardS from "../CardS/CardS";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './AllCard.css';
import { Pagination } from 'swiper/modules';










////////////////////////////get width of screen ///////////////////////////

const getWidthBreakpoints = () => ({
    ll: window.matchMedia('(max-width: 1440px)'),
    lg: window.matchMedia('(max-width: 1189px)'),
    md: window.matchMedia('(max-width: 1009px)'),
    xs: window.matchMedia('(max-width: 670px)'),
    sx: window.matchMedia('(max-width: 460px)'),
  });
  
  const getSwipValue = () => {
    const widthBreakpoints = getWidthBreakpoints();
    
    if (widthBreakpoints.sx.matches) return 1;
    if (widthBreakpoints.xs.matches) return 1.7;
    if (widthBreakpoints.md.matches) return 2;
    if (widthBreakpoints.lg.matches) return 3;
    
    return 4; // Default value for large screens
  };
  

//////////////////////////////////////////////////////////////////////////

export function AllCardB({ src , swipe , arrow , title }) {
  const [imgs, setImageUrls] = useState([]);
  const [swip, setSwip] = useState(getSwipValue());
console.log(swip)
  GetImg({ src, setImageUrls });

  useEffect(() => {
    const handleResize = () => {
      setSwip(getSwipValue());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='allcardB'>
      
<h4 className="title"> <span></span>{title}</h4>

       
       
   {  swipe?   <div className="sipe">
      {imgs.length > 0 ? (
        <Swiper
          slidesPerView={swip}
          spaceBetween={swip*12}
          pagination={{
            clickable: true,
          }}
        
          className="mySwiper1"
        >
          {imgs.map((img, index) => (
            <SwiperSlide key={index} className='slide'>
              <CardB img={img} arrow={arrow} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>Loading...</div>
      )}
</div>
: 
<div className="box-container" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${280}px, ${290}px)` }}>
     {imgs.map((img, index) => (
            <div key={index} className='box'>
              <CardB img={img} arrow={arrow} />
            </div>
          ))}
</div>
}

    </div>
  );
}



export function AllCardS({ src , swipe , title }) {
    const [imgs, setImageUrls] = useState([]);
    const [swip, setSwip] = useState(getSwipValue());
  console.log(swip)
    GetImg({ src, setImageUrls });
  
    useEffect(() => {
      const handleResize = () => {
        setSwip(getSwipValue());
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className='allcardS'>
         
<h4 className="title"> <span></span>{title}</h4>
         
     {  swipe?   <div className="sipe">
        {imgs.length > 0 ? (
          <Swiper
            slidesPerView={swip}
            spaceBetween={swip*12}
            pagination={{
              clickable: true,
            }}
          
            className="mySwiper1"
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index} className='slide'>
                <CardS img={img}  />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>Loading...</div>
        )}
  </div>
  : 
  <div className="box-container" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${280}px, ${290}px)` }}>
       {imgs.map((img, index) => (
              <div key={index} className='box'>
                <CardS img={img}  />
              </div>
            ))}
  </div>
  }
  
      </div>
    );
  }


