import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BentoGridDemo } from "./BentoGridDemo";
import { BentoGridDemoOne } from "./BentoGridDemoOne";
import { useGSAP } from "@gsap/react";
import { useSpring, animated } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import EventSlider from "./EventSlider";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Announce from "./Announcement/Announce";
import Footer from "./Footer";
import Theme from "./Chatbot/Theme";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import slide_image_1 from "../assets/Ablock.jpg";
import slide_image_2 from "../assets/admin_campus.jpg";
import slide_image_4 from "../assets/mech_block.jpg";
import slide_image_5 from "../assets/canteen.jpg";
import slide_image_3 from "../assets/hostelpic.jpg";
import slide_image_6 from "../assets/clgcampus.jpg";
import slide_image_7 from "../assets/campus2.jpg";


function Number({ n }) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !startAnimation) {
        setStartAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startAnimation]);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: startAnimation ? n : 0 },
    config: { mass: 1, tension: 20, friction: 20, duration: 2000 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Head() {


  // sticky nav
  const [scroll, setScroll] = useState(false);
  function setFixed() {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  gsap.registerPlugin(useGSAP,ScrollTrigger);

  const container = useRef();
  var tl = gsap.timeline();
  useGSAP(
    () => {
      tl.to(".cloud", {
        y: -450,
        duration: 1,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.to(".clg", {
        y: -200,
        duration: 1,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.from(".aotmain", {
        y: 50,
        duration: 1,
        opacity:0,
        // scale:0
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      tl.to(".cloud", {
        y: -455,
        duration: 1,
        repeat:-1,
        yoyo:true
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.to(".counter", {
        y: -280,
        duration: 2,
      });
    },
    { scope: container }
  );

  ScrollTrigger.refresh();
  useGSAP(
    ()=>{
      gsap.from(".news-feed h1, .news-feed p, .news-feed bar, .news-feed button",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
          trigger: ".news-feed",
          pin:true,
          start: "top 60%",
          end: "top 55%",
          // scrub: 1,
          toggleActions: "restart none reverse none"
        }

      })
    },
    { scope: container }
  )
  useGSAP(
    ()=>{
      gsap.from(".aboutclg h1, .aboutclg p, .aboutclg bar, .aboutclg button",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
          trigger: ".aboutclg",
          pin:true,
          start: "top 60%",
          end: "top 55%",
          // scrub: 1,
          toggleActions: "restart none reverse none"
        }

      })
    },
    { scope: container }
  )
  useGSAP(
    ()=>{
      gsap.from(".elem2 h1, .elem2 p, .elem2 bar, .elem2 button",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
          trigger: ".elem2",
          pin:true,
          start: "top 60%",
          end: "top 55%",
          // scrub: 1,
          toggleActions: "restart none reverse none"
        }

      })
    },
    { scope: container }
  )


  return (
    <>
    
      <div
        ref={container}
        className=" w-full md:h-full h-screen  selection:bg-black selection:text-white main"
      >
        <div
          className={
            scroll
              ? `z-50 fixed w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100`
              : `z-50 fixed bg-transparent w-full transition-all ease-in-out duration-400`
          }
        >
          <Navbar />
        </div>
        
        <div className="md:pt-0 pt-[85%] static landpage">
          <img
            className="cloud w-full top-[65%] h-[30%] absolute md:h-[60%] md:top-[48%] "
            rel="preload"
            src="../assets/cloud.png"
          ></img>
          <img
            className="clg w-full pt-[100%] h-full md:pt-[18%]"
            rel="preload"
            src="../assets/aot_landing.png"
          ></img>
          <h1 className="text-6xl text-center font-bold xl:mx-[18%] xl:text-9xl lg:text-8xl lg:mx-[10%] lg:top-[30%] md:mx-[20%] md:top-[20%] md:text-6xl sm:mx-[25%] xs:mx-[10%] mx-[5%] xl:top-[45%] top-[45%] break-words text-wrap absolute aotmain text-blue-950">Academy of Technology</h1>

          <div className="counter w-full bg-transparent z-40 pt-[10%] md:pt-0">
            <div className=" mx-[22%] bg-yellow-400 py-6 shadow-xl  shadow-black rounded-3xl">
              <div className=" lg:flex lg:flex-row items-center justify-between flex flex-col">
                <div className=" lg:px-[8%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={2400} />
                    <h1 className="">+</h1>
                  </div>
                  <h2 className="font-['para']">Students</h2>
                </div>
                <div className="lg:px-[1%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={130} />
                    <h1 className="">+</h1>
                  </div>

                  <h2 className=" font-['para']">Faculties</h2>
                </div>
                <div className="lg:px-[5%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={8000} />
                    <h1 className="">+</h1>
                  </div>

                  <h2 className=" font-['para']">Alumunis</h2>
                </div>
                <div className="lg:px-[2%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={7} />
                    <h1 className=" ">+</h1>
                  </div>

                  <h2 className=" font-['para']">Courses</h2>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>

        <section className="news-feed h-auto">
        <div class="text-center mb-20 ">
              <h1 class="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
                Campus News
              </h1>
              <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              A place for learning, discovery, innovation, expression and discourse, the campus is full of life and is always active with events.
              </p>
              <div class="flex mt-6 mb-6 justify-center bar">
                <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              <NavLink to="https://www.aotingenium.com/#thesliderofnewsoflp">
              Explore News
              </NavLink>  
            </button>
            </div>
          <div className="moving-news whitespace-nowrap flex-nowrap flex">
            <Marquee pauseOnHover autoFill speed={100} style={{width:1600,justifyContent:"center",margin:"0 auto",zIndex: 0}}>
            <BentoGridDemo/>
            <BentoGridDemoOne/>
            </Marquee>
          </div>
        </section>

          
        <section class="text-gray-600 md:mt-32 aboutclg">
            <div class="text-center mb-20 ">
              <h1 class="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              About the College

              </h1>
              <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
              </p>
              <div class="flex mt-6 mb-6 justify-center bar">
                <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                <NavLink to="https://aot.edu.in/about-aot/">
              More about AOT
                </NavLink>
            </button>
            </div>
            

            <div className="slide-container static">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                autoplay={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows:true
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                style={{zIndex: 0, marginLeft: "32px", marginRight: "32px", marginBottom: "32px"}}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container text-white font-['Headline'] h-1/2"
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}    
              >
                <SwiperSlide>
                  <img src={slide_image_1} alt="slide_image"/>
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">A block</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_2} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">Admin block</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_3} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">Hostel</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_4} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">Mechanical block</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_5} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">Canteen</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_6} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">College Campus</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_7} alt="slide_image" />
                  <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">Basketball Ground</h1>
                </SwiperSlide>

                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrows">
                    <SlArrowLeft className="arrow"/>
                  </div>
                  <div className="swiper-button-next slider-arrows">
                    <SlArrowRight className="arrow"/>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
        </section>
        
        <section className="mt-20">
        <div class="text-center elem2">
              <h1 class="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
                Upcoming Events
              </h1>
              <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              At University's beautiful campus, you willl find a diverse and welcoming community that will teach you life skills along with having fun.
              </p>
              <div class="flex mt-6 mb-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                Explore Events
            </button>
            </div>
          <EventSlider/>
        </section>
       
        <div className="notice-bar fixed bottom-28 right-8">
          <Announce/>
        </div>
        <div className="chatbar absolute">
          <Theme/>
        </div>

      <Footer/>
      </div>
    </>
  );
}

export default Head;
