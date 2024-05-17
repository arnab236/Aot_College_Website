import React from 'react'
import '../index.css'
function Search() {
  return (
    <>
    <div className='z-50 absolute  md:h-[300%] w-full font-["para"] searchbarItem'>
        <div className=' mx-[32%] my-12 flex items-center justify-center gap-10 bg-blue-950 p-[3.5rem] rounded-xl'>
                <input className=' w-full px-3 h-10 placeholder:text-xl placeholder:text-slate-950 text-xl rounded-xl' type='text' placeholder='search here . . .'></input>
                <button className=' bg-gray-300 hover:bg-gray-400 py-2 px-10 border border-black text-xl rounded-xl active:bg-gray-500' Search>Search</button>
            </div>
        </div>
    </>
    
  )
}

export default Search