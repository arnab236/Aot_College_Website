import React, { useRef } from "react";
import SecNav from "./SecNav";
import Marquee from "react-fast-marquee";
import cseBgImg from "../assets/csbsdeptImg.jpg";
import cseAbout from "../assets/cse4.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TableCSE from './TableCSE';
import Footer from "./Footer";
import DetailsCSE from "./DetailsCSE";
function Cse() {

// gsap.registerPlugin(useGSAP,ScrollTrigger);
// const dept = useRef();

// ScrollTrigger.refresh();
// useGSAP(
//   ()=>{
//     gsap.from(".abt-1",{
//       x:-120,
//       duration:0.5,
//       opacity:0,
//       scrollTrigger:{
//         trigger: ".abt-1",
//         pin:true,
//         start: "top 60%",
//         end: "top 55%",
//         once:true,
//         // scrub: 1,
//         toggleActions: "restart none reverse none"
//       }
//     },"anim")

//     gsap.from(".abt-2",{
//       x:120,
//       duration:0.5,
//       opacity:0,
//       scrollTrigger:{
//         trigger: ".abt-2",
//         pin:true,
//         start: "top 60%",
//         end: "top 55%",
//         once:true,
//         // scrub: 1,
//         toggleActions: "restart none reverse none"
//       }

//     },"anim")
//   },
//   { scope: dept }
// )
  return (
    <main className="w-full selection:bg-black selection:text-white" >
      <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <SecNav />
      </div>
      <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
        <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
          <img
            src={cseBgImg}
            className="w-full h-full filter blur-[2px] brightness-75 object-cover md:object-fill rounded-xl"
          />
          <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold absolute xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[10%] md:mx-[10%] sm:mx-[15%] xs:mx-[7%] mx-[5%] top-[20%]  text-white font-['headline'] ">
            Computer Science & Engineering
          </h1>
          <p className="text-center text-lg  font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[10%]  mx-[5%]  text-white font-['para'] xl:px-72 text-pretty">
            In the Department of Computer Science and Engineering, students
            delve into the principles of computer systems, software development,
            and cutting-edge technologies such as artificial intelligence and
            machine learning. Our curriculum emphasizes hands-on learning and
            real-world applications, ensuring that students are well-equipped to
            tackle the challenges of the digital age.
          </p>
        </div>
        <Marquee
          className="absolute z-10 bg-yellow-300 text-xl"
          pauseOnHover
          autoFill
          speed={100}
          style={{
            width: "100%",
            height:"5%",
            justifyContent: "center",
            margin: "0 auto",
            zIndex: 0,
          }}
        >
          &nbsp;High Tech Computer Labs&nbsp; &#x2022; &nbsp;Specialized
          Software Tools&nbsp; &#x2022; &nbsp;Networking Infrastructure&nbsp;
          &#x2022; &nbsp;Smart Classroom Facilities&nbsp; &#x2022;
          &nbsp;Research Facilities&nbsp; &#x2022;
        </Marquee>
      </section>

      <h1 className=" underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]">Department of Computer Science & Engineering</h1>
      <section className="cse-about">
      <div className="flex flex-col md:flex-row w-[90%] lg:w-3/4 xl:w-1/2 h-auto mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] ">
          <div className="w-full md:w-1/2 rounded-3xl">
            <img src={cseAbout} className="w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-l-3xl "/>
          </div>
          <div className="md:w-2/3 flex flex-col align-top p-2">
            <h3 className=" font-bold font-[headline] text-lg lg:text-xl leading-[50px] mb-2">Vision</h3>
            <p className=" font-[para] text-xs sm:text-sm lg:text-lg leading-4 md:leading-5">To be a globally recognized school through excellence in teaching, learning and research for creating Computer Science professionals, leaders and entrepreneurs of the future contributing to society and industry for sustainable growth.</p>
            <h3 className=" font-bold font-[headline] text-lg lg:text-xl leading-[50px] mb-2">Mission</h3>
            <ul className="font-[para] text-xs sm:text-sm lg:text-lg leading-4 md:leading-5 md:list-none">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta assumenda quam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta assumenda quam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta assumenda quam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta assumenda quam.</li>
            </ul>
          </div>
      </div>
      </section>
      <h1 className=" underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]">About the Department</h1>
      <section className="w-full lg:w-auto flex flex-col items-center lg:items-stretch  lg:flex-row justify-center mb-16 md:mt-12 mt-4 gap-4 lg:gap-8 xl:gap-12 mx-auto">
        <div className="abt-1 w-[90%] md:w-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8">
          <h3 className="leading-2 text-xs xs:text-base md:text-lg lg:text-xl"><span className="font-bold">Year of Establishment : </span>July 2003</h3>
          <h3 className="leading-2 mb-3 text-xs xs:text-base md:text-lg lg:text-xl text-wrap"><span className="font-bold text-wrap">Academic Programmes:</span> 4 yrs B.Tech programme in Computer Science & Engineering</h3>
          <h2 className="text-xs xs:text-base md:text-lg lg:text-xl font-bold">Overview of Departmental Infrastructure:</h2>
          <ul className="text-xs xs:text-sm md:text-base lg:text-lg">
            <li>Class / Tutorial Rooms/ Seminar Rooms</li>
            <li>HOD’s Room & Departmental Office.</li>
            <li>Faculty Rooms.</li>
            <li>Amenities Area</li>
          </ul>
        </div>
        <div className="abt-2 w-[90%] md:w-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 lg:p-4">
          <h2 className="text-xs xs:text-base md:text-lg lg:text-xl leading-8">HOD: <span className="font-bold"> Prof. Prosenjit Das </span></h2>
          <h2 className="text-xs xs:text-base md:text-lg lg:text-xl leading-8">Contact Mail Id: <span className="font-bold"> hod_cse@aot.edu.in</span></h2>
        </div>
      </section>
      <section className=" p-4 py-32 md:p-24 bg-[#edecec] mt-8">
        <div className="mx-auto flex items-center justify-center">
          <TableCSE/>
        </div>
        <h3 className="text-[#4f4f4f] text-center">Online Backup from Emerson-Libert UPS. Total Capacity 160 KVA (Range 250VA to 20KVA)</h3>
      </section>
        
      <section className="w-full xl:p-52 mx-auto">
        <DetailsCSE/>
      </section>
      <Footer/>
    </main>
  );
}

export default Cse;
