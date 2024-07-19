import React from 'react'
import PlacementImg from '../assets/Placement.jpg'
import SecNav from './SecNav'
import PlacementYearTable from './PlacementYearTable'
import "./Placement.css"
import PlacementChart1 from './PlacementChart1'
import PlacementChart2 from './PlacementChart2'
import Footer from './Footer'
import PlacementDataTable from './PlacementDataTable'
function Placement() {
  return (
    <>
    <main className="w-full selection:bg-black selection:text-white" >
      <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <SecNav />
      </div>
      <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
        <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
          <img
            src={PlacementImg}
            className="w-full h-full filter blur-[2px] brightness-75 object-cover md:object-fill rounded-xl"
          />
          <h1 className="text-center lg:text-7xl sm:text-6xl text-4xl font-bold absolute xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[35%] md:mx-[35%] sm:mx-[25%] xs:mx-[26%] mx-[23%] top-[20%]  text-white font-['headline']  ">
            Placements
          </h1>
          <p className="text-center xs:text-lg  font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[38%] md:mx-[33%] sm:mx-[25%] xs:mx-[13%] mx-[13%]  text-white font-['para'] xl:px-72 text-pretty">
          FOCUS &nbsp;&nbsp; DILIGENCE &nbsp;&nbsp; CONSISTENCY
          </p>
        </div>
      </section>
      <h1 className='underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]'>‘Consistent Performance in Campus Placement.’</h1>
      <section className="w-full lg:w-auto flex items-center lg:items-stretch  lg:flex-row justify-center mb-16 md:mt-12 mt-4 gap-4 lg:gap-8 xl:gap-12 mx-auto">
        <div className="bg-white w-[90%] md:w-[80%] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8">
          <h3 className="leading-2 text-xs xs:text-base md:text-lg lg:text-xl">AOT’s teaching-learning process, examination system and training for improvement of placement quotient make our students hardworking and motivated, and thus enable them to achieve right placement by their own merit. At Academy of Technology, placement assistance is not an isolated event, it is a lasting commitment. Our endeavor is to provide maximum possible number of campus interview opportunities to the students with equal emphasis on IT and Core engineering placement and prolonged placement support even after graduation and we have been successful in this mission from our very 1st batch.</h3>
          <h3 className="leading-2 mb-3 text-xs xs:text-base md:text-lg lg:text-xl text-wrap"> AOT has been accredited by Capgemini, Cyient, Tata Consultancy Services, Tech Mahindra and Wipro Technologies for campus placement. In the last 3 years, an enviable percentage of AOT’s students have been recruited by more than 100 renowned corporate houses during campus placement. With 103.49% placement offers in 2021 and 191.49% placement offers in 2022, our students have proven to be consistent performers. Even in this year 2024, AOT’s students, eligible for campus interview have already attained 61.50% placement offers till March, 2024.</h3>
        </div>
      </section>
      <section className=" p-4 py-32 md:p-24 bg-[#edecec] mt-8">
      <h2 className="text-xs xs:text-base md:text-lg lg:text-xl font-bold text-center mb-8 font-[headline]">In 2020, Academy of Technology has received Certificate of Appreciation from TATA CONSULTANCY SERVICES in recognition of an exemplary partnership and collaboration – and only very few institutes in India have achieved so.</h2>
        <div className="mx-auto flex items-center justify-center">
            <PlacementYearTable/>
        </div>
      </section>
      <section className='p-4 py-32 mdLp-12 lg:p-24  md:mt-4 lg:mt-8'>
        <div className=' w-full h-auto flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-12 items-center justify-center'>
          <div className='pb-12 w-full h-[60vw] md:w-[50%] md:h-[30vw] lg:h-[20vw] bg-white rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] lg:pb-8 p-8'>
        <PlacementChart1/>
        <h2 className=' text-center font-[para]'>Placement percentage till April (corresponding year)</h2>
          </div>
          <div className='w-full h-[60vw] md:w-[50%] md:h-[30vw] lg:h-[20vw] bg-white rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8'>
        <PlacementChart2/>
        <h2 className='text-center font-[para]'>Final Placement percentage </h2>
          </div>
        </div>
      </section>
      <section className='p-4 py-32 md:p-52 mt-8'>
      <div className='text-sm md:text-lg mx-auto flex items-center justify-center'>
      <PlacementDataTable/>
      </div>
    </section>
      <Footer/>
      </main>
    </>
  )
}

export default Placement