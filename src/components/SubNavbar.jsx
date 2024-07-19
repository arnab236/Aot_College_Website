import React from 'react'
import { NavLink } from 'react-router-dom'

function SubNavbar() {
  return (
    <>
        <div className=' flex justify-center items-center bg-transparent text-white md:text-black my-4'> 
            <ul className=' flex md:gap-10 md:flex-row flex-col gap-2 text-lg font-[para] '>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/"}>Home</NavLink></li>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/Placement"}>Placement & Activities</NavLink></li>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/"}>Achivement</NavLink></li>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/NSS"}>NSS</NavLink></li>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/"}>Join Us</NavLink></li>
                <li className='text-slate-400 hover:text-blue-700'><NavLink to={"/Contact"}>Contact</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default SubNavbar