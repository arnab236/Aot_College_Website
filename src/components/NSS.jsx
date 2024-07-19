import React from 'react'
import SecNav from './SecNav'
import Footer from './Footer'
import NSSRedCross from "../assets/NSSRedCross.jpg";
import NSSTreePlant from "../assets/NSSTreePlant.jpg";
import NSSBg from "../assets/NSSBg.jpg"
import NSSLogo from "../assets/NSSLogo.png"
function NSS() {
  return (
    <>
    <main className="w-full selection:bg-black selection:text-white" >
      <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <SecNav />
      </div>
      <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
        <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
          <img
            src={NSSBg}
            className="w-full h-full filter blur-[2px] brightness-75 object-cover md:object-fill rounded-xl"
          />
          <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold absolute xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[10%] md:mx-[10%] sm:mx-[15%] xs:mx-[7%] mx-[5%] top-[20%]  text-white font-['headline'] ">
            National Service Scheme
          </h1>
          <p className="text-center text-lg  font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[10%]  mx-[5%]  text-white font-['para'] xl:px-72 text-pretty">
          The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes.The sole aim of the NSS is to provide hands on experience to young students in delivering community service.
          </p>
        </div>
      </section>

      <h1 className=" underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]">Department of Computer Science & Engineering</h1>
      <section className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <div className=" mx-auto lg:w-[20%] h-auto rounded-xl">
                <img
                  src={NSSLogo}
                  alt="Digital library"
                  className="w-full h-full rounded-xl"
                />
              </div>
          <h2 className=" text-center text-lg sm:text-2xl md:text-3xl font-[headline] ">Welcome to the NSS Department of Academy of Technology</h2>
          <p className='md:text-xl font-[para] leading-6 mt-4 text-center'>The motto of National Service Scheme is <span className='font-bold'>NOT ME BUT YOU.</span> </p>
          <p className='md:text-xl font-[para] leading-6 mt-4 text-center'>The NSS Department is dedicated to conduct some acitvities through which we can make a change in the environment and to the Earth. </p>
        </section>

        <h1 className=" underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]">Some Renowned works by AOT</h1>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white pb-4 md:pb-0 lg:p-4">
              <h1 className=" text-center text-lg sm:text-2xl md:text-3xl font-[headline] border-yellow-400 bg-yellow-400 border-4 rounded-xl">
                Tree Plantation Programme
              </h1>

            <div className="m-12 flex flex-col items-center lg:flex-row justify-center gap-8 borde">
              <div className="w-full lg:w-[30%] h-auto border-2 border-black rounded-xl">
                <img
                  src={NSSTreePlant}
                  alt="CentralLibrary"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="lg:w-[70%] h-full">
                <p className=" text-lg md:text-2xl font-[para] leading-6">
                As part of its environmental awareness Initiatives, Academy of Technology has organised a Tree Plantation Programme on 13th January, 2024 at 12:00 Noon outside the college premises. Many students have participated in this programme by planting a sapling. It was successful conducted by the faculties,students and the stafss of AOT.
                </p>
                <p className="text-lg md:text-2xl font-[para] leading-6">
                With the motto <span className='font-bold'>"Plant Trees...Save Lives"</span> and <span className='font-bold'>"Those who plant a tree, plant a hope"</span>,AOT successfully organised the programme by planting 50+ trees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 mb-12 pb-4">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white pb-4 md:pb-0 lg:p-4">
              <h1 className="text-center text-2xl md:text-3xl font-[headline] border-yellow-400 bg-yellow-400 border-4 rounded-xl">
                Red Cross
              </h1>

            <div className="m-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-8 ">
              <div className="lg:w-[70%] h-full">
                <h4 className="text-lg md:text-2xl font-[para]">
                Academy of Technology and the<span className='font-bold'> Indian Red Cross Society (IRCS)</span>, Chandannagar  signed a Memorandum of Understanding (MoU) on May 11, 2024 to foster collaboration in organizing various community welfare activities aimed at promoting health and well-being.
                </h4>
              </div>
              <div className="lg:w-[30%] h-auto border-2 border-black rounded-xl">
                <img
                  src={NSSRedCross}
                  alt="Digital library"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      
      <Footer/>
    </main>
    </>
  )
}

export default NSS