import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function AcademicsCaraousel() {
  return (
    <>
      <div className="w-full h-[500px] flex gap-84 justify-center p-4 md:p-4 md:px-32 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent1.jpg"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-blue-400 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    CSE
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      March
                      <br />
                      23
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">Techquistive 5.0</h2>
                <p className="text-lg">
                  Have a look on Five days, 5 long events.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent2.jpg"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-green-400 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    ECE
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      March
                      <br />3
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">Devwrap</h2>
                <p className="text-lg">
                  Showcasing the power of web development of students.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent3.jpg"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-yellow-400 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    EEE
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      April
                      <br />3
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">IOT NOVA</h2>
                <p className="text-lg">
                  Get to know about the basic of IOT and Cybersecurity in a
                  simple way.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent4.jpg"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-orange-500 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    CSBS
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      April
                      <br />2
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">Uxopia</h2>
                <p className="text-lg">
                  Engaging students to make their ideas into web designs.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent5.png"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-green-400 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    ECE
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      May
                      <br />7
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">Envision</h2>
                <p className="text-lg">
                  A super fun and informative series of webinars for juniors.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col w-full h-[90%] rounded-2xl container-box transition-all ease-in duration-200 m-2 border-4 border-solid border-[#f0eded]">
              <div className="w-full h-2/3 overflow-hidden rounded-t-2xl">
                <img
                  src="src/assets/deptEvent6.jpg"
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4">
                <div className=" flex justify-between">
                  <h4 className=" bg-blue-400 p-1 px-8 inline-block rounded-3xl font-[headline] text-lg m-4 ml-0">
                    CSE
                  </h4>
                  <div className="text-white inline-block text-lg md:bottom-20 md:left-[25em] bottom-8 right-20 h-16 w-16  bg-zinc-800 border-2 border-zinc-300 p-1 text-center  z-10">
                    <h5>
                      Sep
                      <br />
                      10
                    </h5>
                  </div>
                </div>
                <h2 className="text-2xl font-[headline]">Interhackative</h2>
                <p className="text-lg">
                  The first ever inter-college hackathon happening in AOT.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default AcademicsCaraousel;
