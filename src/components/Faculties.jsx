import React from 'react'
import TableFaculty from './TableFaculty'
import "./Faculty.css"
import SecNav from './SecNav'
import Footer from './Footer'
import facImg from '../assets/all_faculties.jpg'
function Faculties() {
  return (
    <>
    <main className="w-full selection:bg-black selection:text-white" >
      <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <SecNav />
      </div>
      <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
        <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
          <img
            src={facImg}
            className="w-full h-full filter blur-[2px] brightness-75 object-cover md:object-fill rounded-xl"
          />
          <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold absolute xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[30%] md:mx-[30%] sm:mx-[34%] xs:mx-[26%] mx-[20%] top-[20%]  text-white font-['headline'] ">
            Our Faculties
          </h1>
          {/* <p className="text-center sm:text-2xl xl:text-3xl font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[28.5%] md:mx-[24%] sm:mx-[16%]  text-white font-['para'] xl:px-72 text-pretty">
          Quality education starts with its educators
          </p> */}
        </div>
      </section>
      <section className='w-full mt-24'>
        <div className='w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 bg-white'>
        <h2 className='text-lg md:text-xl leading-5'>AOT believes in creating an environment that helps the students to enhance their intellectual, emotional and physical development.</h2>
        <h3 className='text-lg md:text-xl leading-7'>Prof. (Dr.) Dilip Bhattacharya, renowned Professor of Electronics & Electrical Communication Engineering from IIT Kharagpur and the Director of Academy of Technology, leads a team of 111 qualified and experienced faculty members conforming to AICTE stipulated teacher-student ratio.</h3>
        <ul className='pt-8 md:text-lg leading-7'>
          <li>♦ 81 regular faculty members are having specialization in Industry 4.0 Technologies, e.g., Internet of Things (IOT), 3D Technology, Machine Learning, Data Science, Cloud Computing, Cyber Security, Renewable Energy & Energy Management.</li>
          <li>♦ Average teaching experience of faculty members is 11 years 8 months</li>
          <li>♦ Faculty members of AOT have published 84 papers in various International & National Journals.</li>
          <li>♦ Existing faculty members of AOT have authored 11 books.</li>
        </ul>
        </div>
      </section>
    <section className='p-4 py-32 md:p-52 mt-8'>
      <div className='text-sm md:text-xl lg:text-2xl mx-auto flex items-center justify-center'>
      <TableFaculty/>
      </div>
    </section>
      <Footer/>
      </main>
    </>
  )
}

export default Faculties