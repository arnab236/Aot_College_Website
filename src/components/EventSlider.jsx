import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import slide_image_1 from "../assets/events8.jpg";
import slide_image_2 from "../assets/events2.jpg";
import slide_image_3 from "../assets/events5.jpg";
import slide_image_4 from "../assets/news12.jpg";
import slide_image_5 from "../assets/events7.jpg";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const EventSlider = () => {
  return (
    <div>
        <div className="slide-container1 max-w-[1400px] md:h-[660px] w-full m-auto py-16 px-4 relative group">
              <Swiper
                effect={'fade'}
                spaceBetween={30}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                autoplay={true}
                pagination={{ el: ".swiper-pagination1", clickable: true, dynamicBullets: true}}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                  clickable: true,
                  
                }}
                fadeEffect= {{
                  crossFade: true,
                }}
                modules={[EffectFade,Pagination, Navigation, Autoplay]}
                style={{zIndex: 0}}
                className="swiper_container1 z-0 w-full h-full bg-center bg-cover duration-500 text-white text-wrap font-['Headline'] "
              >
                <SwiperSlide className=' origin-[50%_50%] rounded-2xl overflow-hidden'>
                  <img src={slide_image_1} alt="slide_image1" className='swiper-slide-cover1 filter brightness-[80%]' />
                  <h4 className='md:text-xl text-sm absolute md:bottom-52 md:left-28  bottom-32 left-4 z-10 italic'>Your gateway to 20+ events</h4>
                  <h1 className='md:text-4xl text-md md:font-normal md:bottom-40 md:left-28 font-bold absolute bottom-20 left-4 z-10'>“Have a look on one of the biggest techfest of the state.”</h1>
                  <h1 className='md:text-4xl absolute md:font-normal md:bottom-28 md:left-28 font-bold bottom-12 left-4 z-10 italic'>~ Techfiesta 2024</h1>
                  <h3 className='md:text-xl absolute md:bottom-20 md:left-28 bottom-8 left-4 z-10 text-white'>10:00 am IST</h3>
                  <div className=' text-lg absolute md:bottom-20 md:left-[25em] bottom-8 right-8 h-16 w-16 bg-zinc-800 border-2 border-zinc-300 p-1 text-center flex items-center justify-center z-10'>
                    <h5>May<br/>7</h5>
                  </div>
                  <div className='swiper-gradient absolute bg-gradient-to-t from-black to-transparent h-[50%] w-full bottom-0 z-0'></div>
                </SwiperSlide>
                <SwiperSlide className=' origin-[50%_50%] rounded-2xl overflow-hidden'>
                  <img src={slide_image_2} alt="slide_image1" className='swiper-slide-cover1 filter brightness-[80%]' />
                  <h4 className='md:text-xl text-sm absolute md:bottom-52 md:left-28  bottom-32 left-4 z-10 italic'>Like Astronomy ?</h4>
                  <h1 className='md:text-4xl text-md md:font-normal md:bottom-40 md:left-28 font-bold absolute bottom-20 left-4 z-10'>Join a seminar on Indian Women in Space Research.</h1>
                  <h1 className='md:text-3xl absolute md:font-normal md:bottom-28 md:left-28 font-bold bottom-12 left-4 z-10 italic'>~ Talks on Space</h1>
                  <h3 className='md:text-xl absolute md:bottom-20 md:left-28 bottom-8 left-4 z-10 text-white'>1:00 am IST</h3>
                  <div className=' text-lg absolute md:bottom-20 md:left-[25em] bottom-8 right-8 h-16 w-16 bg-zinc-800 border-2 border-zinc-300 p-1 text-center flex items-center justify-center z-10'>
                    <h5>May<br/>25</h5>
                  </div>
                  <div className='swiper-gradient absolute bg-gradient-to-t from-black to-transparent h-[50%] w-full bottom-0 z-0'></div>
                </SwiperSlide>
                <SwiperSlide className=' origin-[50%_50%] rounded-2xl overflow-hidden'>
                  <img src={slide_image_3} alt="slide_image1" className='swiper-slide-cover1' />
                  <h4 className='md:text-xl text-sm absolute md:bottom-52 md:left-28  bottom-32 left-4 z-10'>Have a passion for Electronics ?</h4>
                  <h1 className='md:text-4xl text-md md:font-normal md:bottom-40 md:left-28 font-bold absolute bottom-20 left-4 z-10'>Build an RC car and show your skills.</h1>
                  <h1 className='md:text-4xl absolute md:font-normal md:bottom-28 md:left-28 font-bold bottom-12 left-4 z-10 italic'>~ Techfiesta 2024</h1>
                  <h3 className='md:text-xl absolute md:bottom-20 md:left-28 bottom-8 left-4 z-10 text-white'>2:00 pm IST</h3>
                  <div className=' text-lg absolute md:bottom-20 md:left-[25em] bottom-8 right-8 h-16 w-16 bg-zinc-800 border-2 border-zinc-300 p-1 text-center flex items-center justify-center z-10'>
                    <h5>June<br/>25</h5>
                  </div>
                  <div className='swiper-gradient absolute bg-gradient-to-t from-black to-transparent h-[50%] w-full bottom-0 z-0'></div>
                  
                </SwiperSlide>
                <SwiperSlide className=' origin-[50%_50%] rounded-2xl overflow-hidden'>
                  <img src={slide_image_4} alt="slide_image1" className='swiper-slide-cover1 object-cover' />
                  <h4 className='md:text-xl text-sm absolute md:bottom-52 md:left-28  bottom-32 left-4 z-10'>Are you a sports enthusiast?</h4>
                  <h1 className='md:text-4xl text-md md:font-normal md:bottom-40 md:left-28 font-bold absolute bottom-20 left-4 z-10'>AOT has a lot of sporting activites waiting for you to kick in.</h1>
                  <h1 className='md:text-4xl absolute md:font-normal md:bottom-28 md:left-28 font-bold bottom-12 left-4 z-10 italic'>~ AOT-AGILE</h1>
                  <h3 className='md:text-xl absolute md:bottom-20 md:left-28 bottom-8 left-4 z-10 text-white'>5:00 pm IST</h3>
                  <div className=' text-lg absolute md:bottom-20 md:left-[25em] bottom-8 right-8 h-16 w-16 bg-zinc-800 border-2 border-zinc-300 p-1 text-center flex items-center justify-center z-10'>
                    <h5>May<br/>17</h5>
                  </div>
                  <div className='swiper-gradient absolute bg-gradient-to-t from-black to-transparent h-[50%] w-full bottom-0 z-0'></div>
                  
                </SwiperSlide>
                <SwiperSlide className=' origin-[50%_50%] rounded-2xl overflow-hidden'>
                  <img src={slide_image_5} alt="slide_image1" className='swiper-slide-cover1 overflow-hidden object-cover bg-auto bg-center' />
                  <h4 className='md:text-xl text-sm absolute md:bottom-52 md:left-28  bottom-32 left-4 z-10'>If tech is not your cup of tea.</h4>
                  <h1 className='md:text-4xl text-md md:font-normal md:bottom-40 md:left-28 font-bold absolute bottom-20 left-4 z-10'>AOT also has a lot of cultural events waiting for you.</h1>
                  <h1 className='md:text-4xl absolute md:font-normal md:bottom-28 md:left-28 font-bold bottom-12 left-4 z-10 italic'>~ Techfiesta 2024</h1>
                  <h3 className='md:text-xl absolute md:bottom-20 md:left-28 bottom-8 left-4 z-10 text-white'>2:00 pm IST</h3>
                  <div className=' text-lg absolute md:bottom-20 md:left-[25em] bottom-8 right-8 h-16 w-16 bg-zinc-800 border-2 border-zinc-300 p-1 text-center flex items-center justify-center z-10'>
                    <h5>July<br/>12</h5>
                  </div>
                  <div className='swiper-gradient1 absolute bg-gradient-to-t from-black to-transparent h-[50%] w-full bottom-0 z-0'></div>
                  
                </SwiperSlide>

                <div className="slider-controler">
                  <div className="swiper-prev slider-arrow invisible group-hover:visible rounded-full bg-black opacity-50 backdrop-blur-lg md:h-10 md:w-10 h-3 w-3 p-10 ">
                  <SlArrowLeft className=' align-middle absolute left-4 top-4 text-5xl'/>
                  </div>
                  <div className="swiper-next slider-arrow invisible group-hover:visible rounded-full bg-black opacity-50 backdrop-blur-lg md:h-10 md:w-10 h-3 w-3 p-10">
                  <SlArrowRight className=' align-middle absolute left-4 top-4 text-5xl'/>
                  </div>
                  <div className="swiper-pagination1"></div>
                </div>
              </Swiper>
            </div>

    </div>
  )
}

export default EventSlider