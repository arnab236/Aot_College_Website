import React from 'react'
import SubNavbar from './SubNavbar'
import { useState } from 'react'
import Search from './Search';
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import "./Academics.css"
import aotLogo from "../assets/aotlogo.png";
import open from "../assets/open.png";
import close from "../assets/close.png";
import search from "../assets/search.png";

function SecNav() {
    const [on,off] = useState(false)
    const [searchOn,searchOff] = useState(false)
  return (
     <>
        <nav className='flex items-center justify-between shadow-lg shadow-slate-600 static '>
            <div className=' bg-transparent flex items-center font-medium justify-between  w-full'>
            <div className=' bg-transparent px-2 z-50 md:w-100% w-full flex justify-between'>
                    <img className=' h-16 bg-transparent ' src={aotLogo}></img>
                    <div className=' bg-transparent md:hidden py-3' onClick={()=>off(!on)}>
                        <img src={`${on ? `${close}`:`${open}`}`} className='bg-transparent h-8'></img>
                    </div>
            </div>
            </div>
            <ul className=' md:flex hidden items-center  justify-center gap-10 bg-transparent font-[para]'>            
                <Navlinks />
            </ul>
            <div className='bg-transparent md:block hidden p-4 pl-20'>
            <button className=''onClick={()=>searchOff(!searchOn)}>
            <img src={`${searchOn ? `${close}`: `${search}`}`} className='bg-transparent h-10 w-16'></img>
            </button>
            
            </div>

            
            

{/* ------------------------For MOBILE---------------------- */}

            <ul className={` md:hidden absolute w-full h-screen text-white md:text-black top-0 py-[60px] pl-4 font-[para] duration-500 bg-[rgba(17,25,40,0.7)] rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 ${on ? 'left-0':'left-[-100%]'}`}>

        
    
            <Navlinks />
            <div className=' absolute  top-24 right-2 '> 
            <SubNavbar/>
            </div>
            </ul>
        </nav>
        <div className=' md:block hidden md:h-10 '>
        <SubNavbar/>
        </div>
        <div className=' md:block hidden '>
        <div className={` ${searchOn ?' block ' : ' hidden' }`}>
        <Search/>
        </div>
        </div>
        </>
  )
}

export default SecNav