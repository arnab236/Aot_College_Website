import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link,NavLink } from 'react-router-dom'
import "./Academics.css";
import { BentoGridDemoAcademics } from "./BentoGridDemoAcademics";
import { BentoGridDemoAcademicsOne } from "./BentoGridDemoAcademicsOne";
import Marquee from "react-fast-marquee";
import AcademicsCaraousel from "./AcademicsCaraousel";
import DeptNotice from "./DeptNotice";
import SubNavbar from "./SubNavbar";
import SecNav from "./SecNav";


function Academics() {

  return (

      <main className="w-full selection:bg-black selection:text-white">
      <div
          className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <SecNav/>
        </div>
        <section className="vid-con w-full h-screen  bg-center bg-no-repeat bg-cover">
          <div className="rounded-xl w-full h-full xl:flex xl:justify-center xl:items-center xl:mx-auto z-[-100] fixed">
            <video autoPlay loop muted src="../assets/AOT_dept.mp4" className="vid w-full h-screen overflow-hidden object-cover filter brightness-[40%] contrast-125 "/>
          <h1 class="Dept text-center md:text-7xl text-5xl font-bold absolute md:top-[50%] xl:mx-auto lg:mx-[30%] sm:mx-[25%] xs:mx-[10%] mx-[5%]  top-[40%]  text-white font-['headline']">
            DEPARTMENTS
          </h1>
          <p className="text-center text-4xl font-bold absolute top-[55%] md:top-[60%] xl:mx-auto lg:mx-[30%] sm:mx-[25%] xs:mx-[10%] mx-[5%]  text-white font-['para']">CSE | CSBS | ECE | EE | EEE | ME | MCA </p>
          </div>
        </section>
        <div className="h-full w-full bg-white">
        <section className="p-12 mt-5">
          <div className="ugpart">
            <h2 className="text-center text-4xl p-8 mb-4 font-['headline']">UG Programs</h2>
          <div className="page-content-ug p-4">
            <div className="card">
              <div className="content">
                <h2 className="title">CSE</h2>
                <p className="copy">
                Here students delve into the principles of computer systems, software development, and cutting-edge technologies.<br/><br/>Seats - 180
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-computer-science-engineering/"}>Know more</NavLink></button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">ECE</h2>
                <p className="copy">
                 In ECE, Students can learn about signal processing, embedded systems, wireless communication and more. <br/><br/> Seats - 180
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-electronics-communication-engineering/"}>Know more</NavLink></button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">CSBS</h2>
                <p className="copy">The Computer Science and Business Systems program combines technical expertise with business acumen to make leaders in tech industry.<br/><br/>Seats - 60 </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-information-technology/"}>Know more</NavLink></button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">EE</h2>
                <p class="copy">
                Electrical Engineering at AOT encompasses a broad range of disciplines, including power systems, control systems, and renewable energy.<br/><br/>Seats - 60 
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-electrical-engineering/"}>Know more</NavLink></button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">EEE</h2>
                <p className="copy">
                Electrical and Electronics Engineering at AOT offers students a comprehensive education in both electrical and electronic systems, power generation and telecommunications.<br/><br/>Seats - 60
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-electronics-instrumentation-engineering/"}>Know more</NavLink></button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">ME</h2>
                <p className="copy">
                  In Mechanical Engineering, students will know how to shape the world with engines and robotics.<br/><br/>Seats- 60          
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-mechanical-engineering/"}>Know more</NavLink></button>
              </div>
            </div>
          </div>
        </div>

        <div className="pgpart">
            <h2 className="text-center text-4xl p-8 mb-4 font-['headline']">PG Programs</h2>
          <div className="page-content-pg">
            <div className="card1">
              <div className="content">
                <h2 className="title">MCA</h2>
                <p className="copy">
                  MCA will give an upper edge on other topics. Students can pursue their interests in various computaional thing.<br/><br/>Seats - 60
                </p>
                <button class="btn"><NavLink to={"https://aot.edu.in/department-of-computer-application/"}>Know more</NavLink></button>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="p-4 mt-5">
        <div className="text-center mb-20 ">
              <h1 className="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
                Departmental News 
              </h1>
              <p className="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              News and achievements from various departments all together.
              </p>
              <div className="flex mt-6 mb-6 justify-center bar">
                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button className="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg font-['para']">
                <NavLink to={"https://www.aotingenium.com/#thesliderofnewsoflp"}>Explore News</NavLink>
            </button>
            </div>
            <div className="moving-news whitespace-nowrap flex-nowrap flex">
            <Marquee pauseOnHover autoFill={true} speed={100} style={{width:1600,justifyContent:"center",margin:"0 auto",zIndex: 0}}>
            <BentoGridDemoAcademics/>
            </Marquee>
            </div>
            <div className="moving-news whitespace-nowrap flex-nowrap flex">
            <Marquee pauseOnHover autoFill={true} speed={100} direction="right" style={{width:1600,justifyContent:"center",margin:"0 auto",zIndex: 0}}>
            <BentoGridDemoAcademicsOne/>
            </Marquee>
            </div>
        </section>
        <section className="mt-20 mb-20">
        <div className="text-center mb-20">
              <h1 className="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
                Departmental Events
              </h1>
              <p className="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
                Come explore the events happend or upcoming events in various departments.
              </p>
              <div className="flex mt-6 mb-6 justify-center bar">
                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button className=" font-['para'] flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              <NavLink>Explore Events</NavLink>

            </button>
            </div>
          <AcademicsCaraousel/>
        </section>
        <section className="md:p-8 md:px-32">
        <div className="text-center mb-20 ">
              <h1 className="sm:text-6xl text-2xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
                Notice
              </h1>
              <p className="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              All new announcements and notices will be put here.
              </p>
              <div className="flex mt-6 mb-6 justify-center bar">
                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
              </div>
              <button className=" font-['para'] flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                Explore Notice
            </button>
            </div>
          <DeptNotice/>
        </section>
        <Footer/>
        </div>
      </main>
  );
}

export default Academics;
