import React from 'react';
import SecNav from './SecNav';
import LibraryBgImg from '../assets/LibraryBgImg.jpg'
import Library2Img from "../assets/Library2Img.jpg"
import Library3Img from "../assets/Library3Img.jpg"
import DigitalLib from "../assets/DigitalLib.jpg"
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
function Library() {
  return (

      <main className="w-full selection:bg-black selection:text-white">
        <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <SecNav />
        </div>
        <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
          <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
            <img
              src={LibraryBgImg}
              alt="student"
              className="w-full h-full filter blur-[4px] brightness-50 object-cover md:object-fill rounded-xl"
            />
            <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold absolute  xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[35%] md:mx-[30%] sm:mx-[35%] xs:mx-[27%] mx-[25%] top-[20%] text-white font-['headline'] ">
              Library Department
            </h1>
            {/* <p className="text-center xs:text-lg  font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[10%]  mx-[5%]  text-white font-['para'] xl:px-72 text-pretty">
              The Comprehensive Curriculum at Academy of Technology creates
              space for various activities beyond the university prescribed
              syllabus. AOT organizes several seminars, industrial visits,
              invited lectures and national/international conferences on a
              regular basis to enhance the academic knowledge and professional
              competence of students. Renowned academicians and experts from top
              corporate firms visit the college to speak to the students about
              recent advancements in technology. Arrangement is also made to
              broadcast webinars relevant to the academic interests of the
              students.
            </p> */}
          </div>
        </section>
        <section className="bg-white p-6 mb-6 rounded-lg shadow-lg">
          <h2 className=" text-center text-lg sm:text-2xl md:text-3xl font-[headline] ">Welcome to the Library of Academy of Technology</h2>
          <p className='md:text-xl font-[para] leading-6 mt-4 text-center'>The Library Department is dedicated to providing access to information and resources to support the academic and research needs of our community.</p>
        </section>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-4">
              <h1 className=" text-center text-lg sm:text-2xl md:text-3xl font-[headline] border-yellow-400 bg-yellow-400 border-4 rounded-xl">
                Central Library
              </h1>

            <div className="m-12 flex flex-col lg:flex-row justify-center gap-8 borde">
              <div className="w-full lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={Library3Img}
                  alt="CentralLibrary"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="lg:w-[60%] h-full">
                <p className=" md:text-xl font-[para] leading-6">
                A well-designed building with covered area of 6800 sq. ft., the Central Library of the institute presently consists of 50989 volumes of text books and reference books and more than 6172 titles on all relevant subjects.
                </p>
                <p className="md:text-xl font-[para] leading-6">
                271 national and international journals and proceedings from IEEE magazines, back volumes of periodicals and national dailies are available in the Central Library. The collection is growing both in quality and quantity with regular addition of new books, journals and reading materials from time to time. Book Bank facilities are also available to every student. Library is fully equipped with Libsys, Web OPAC and also ensures availability of Audio-Visual & Reprographic facilities. The Library remains open on all working days, on academic weekends and vacations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-4">
              <h1 className="text-center text-2xl md:text-3xl font-[headline] border-yellow-400 bg-yellow-400 border-4 rounded-xl">
                Digital Library
              </h1>

            <div className="m-12 flex flex-col-reverse lg:flex-row justify-center gap-8 ">
              <div className="lg:w-[60%] h-full">
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                    Digital Library of Academy of Technology is accessible from everywhere in the campus and is resourced with:
                </h4>
                <ul className="text-sm md:text-lg">
                  <li>
                    &#x2022; Online subscribed Journals.
                  </li>
                  <li>
                    &#x2022; 400 open access e-journals.
                  </li>
                  <li>
                    &#x2022; E-books.
                  </li>
                  <li>
                    &#x2022; Tutorial CD/DVD Service.
                  </li>
                  <li>Question Bank.</li>
                  <li>Online Assessment Software.</li>
                  <li>Video Lectures.</li>
                  <li>DELNET.</li>
                  <li>GATE study materials.</li>
                  <li>All NPTEL web/video courses.</li>
                  <li>WebOPAC (Online Library Catalogue).</li>
                </ul>
                <p className="md:text-xl font-[para] leading-6 text-[#4f4f4f] italic">
                Digital Library is equipped with IBM X3400M3 Intel Xeon 5506 (Quadra Core) Series, 10 P-IV Workstations, internet connectivity and other relevant hardware and software.
                </p>
                <p className="md:text-xl font-[para] leading-6">Click Here to go to <span className='text-blue-600'><NavLink to={"http://182.74.215.202:8001/"}>Digital Library</NavLink></span> .</p>
              </div>
              <div className="lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={DigitalLib}
                  alt="Digital library"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
              
        <section className="w-full lg:w-auto flex flex-col items-center lg:items-stretch  lg:flex-row justify-center mb-16 md:mt-12 mt-4 gap-4 lg:mx-24">
        <div className="bg-white w-[90%] md:w-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8">
          <h2 className="text-xs xs:text-base md:text-lg lg:text-xl font-bold leading-8">Types of Books :</h2>
          <ul className="text-xs xs:text-sm md:text-base lg:text-lg text-wrap leading-6 mt-4">
            <li>1. All types of coding books (C++, C Language, JAVA, Python, etc.).</li>
            <li>2. Database, Algorithms, Programming, Machine Learning, Hardware, Cloud Computing Books for CSE and CSBS students.</li>
            <li>3. Mechanics, Machinery, CAD, Fluid Dynamics, System & Controls, Robotics for ME students.</li>
            <li>4. Circuits, Digital Design, Instrumentation, Signals, Fiber Optics, Networking books for ECE & EEE students.</li>
            <li>5. Mass Transfer, Reaction Engineering, Energy, Fuel Engineering, Process & Design, Biochemical books for MCA.</li>
            <li>6. Many types of Journals, Magazines, and others.</li>
          </ul>
        </div>
        <div className=" bg-white w-[90%] md:w-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8">
          <h2 className="text-xs xs:text-base md:text-lg lg:text-xl font-bold">Overview of Departmental Infrastructure :</h2>
          <ul className="text-xs xs:text-sm md:text-base lg:text-lg text-wrap mt-4">
            <li>1. Each student must carry his/her Reference card or Lending card to the library. Without these cards, students will not be allowed to avail the various services of Central Library.</li>
            <li>2. Students can use the reading room. The reading room is open from 10 am to 2 pm and 3 pm to 5 pm.</li>
            <li>3. Students can borrow books only for 2 weeks. After 2 weeks, Rs 1 per day will be charged as a fine.</li>
            <li>4. Book issue time is from 9 am to 11 am and students can collect their books from 12 pm to 5 pm.</li>
            <li>5. Only present students, teachers, and staff of the college can avail the library services. Ex-students or outsiders are not allowed inside the Library.</li>
            <li>6. Library cards are non-transferable. If lost, students have to pay Rs 20/- as a fine and can issue a duplicate Library card.</li>
            <li>7. Please inform the college if you lose the card and make a FIR at the nearest Police Station.</li>
            <li>8. Students must return all books before form fill-up for the University examination and get the no due certificate from the Central Library.</li>
            <li>9. If books are lost or damaged, borrowers must replace a copy of the book or the latest edition available in the market.</li>
            <li>10. Damaging library property is a serious offense.</li>
          </ul>
        </div>
      </section>
        
        <section id="contact" className="bg-white p-4 mt-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-[headline] text-center border-yellow-400 bg-yellow-400 border-4 rounded-xl">Contact Us</h2>
          <p className='lg:text-xl'>Get in touch with us for more information or to ask a question.</p>
          <ul className=" space-y-2 mt-4 lg:text-lg">
            <li >Email: library@aot.edu.in</li>
            <li>Contact: 09804040523</li>
          </ul>
        </section>
        <Footer/>
      
      </main>
  );
}

export default Library;
