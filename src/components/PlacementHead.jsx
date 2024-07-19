import React from 'react'

function PlacementHead() {
  return (
   <>
   <div className='flex w-4/5 mx-[10%] md:h-[200px] gap-12 justify-center items-center flex-col md:flex-row '>
    <div className='md:w-[15%] bg-white flex flex-col items-center justify-center p-4 gap-4 rounded-lg'>
        <h2 className=' text-left text-4xl'>147.89 %</h2>
        <div class=" items-center w-full h-1 rounded-full bg-blue-800 inline-flex"></div>
        <h3 className='text-xl text-center'> in 2023</h3>
    </div>
    <div className='md:w-[15%] bg-white flex flex-col items-center justify-center p-4 gap-4 rounded-lg'>
        <h2 className=' text-left text-4xl'>191.49 %</h2>
        <div class=" items-center w-full h-1 rounded-full bg-blue-800 inline-flex"></div>
        <h3 className='text-xl text-center'> in 2022</h3>
    </div>
    <div className='md:w-[15%] bg-white flex flex-col items-center justify-center p-4 gap-4 rounded-lg'>
        <h2 className=' text-left text-4xl'>103.49 %</h2>
        <div class=" items-center w-full h-1 rounded-full bg-blue-800 inline-flex"></div>
        <h3 className='text-xl text-center'> in 2021</h3>
    </div>  
   </div>
   </>
  )
}

export default PlacementHead