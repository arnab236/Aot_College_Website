import React from 'react'
import { NavLink } from 'react-router-dom'

function SubNavbar() {
  return (
    <>
        <div className=' flex justify-center items-center bg-transparent text-white md:text-black'> 
            <ul className=' flex md:gap-10 md:flex-row flex-col gap-2  text-lg'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/"}>Placement & Activities</NavLink></li>
                <li><NavLink to={"/"}>Achivement</NavLink></li>
                <li><NavLink to={"/"}>Join Us</NavLink></li>
                <li><NavLink to={"/Contact"}>Contact</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default SubNavbar