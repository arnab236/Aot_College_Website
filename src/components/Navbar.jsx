import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import Navlinks from './Navlinks';
import Search from './Search';
import '../index.css';
import close from "../assets/close.png";
import open from "../assets/open.png";
import aotLogo from "../assets/aotlogo.png";
import search from "../assets/search.png";
function Navbar() {
    const [on,off] = useState(false)
    const [searchOn,searchOff] = useState(false)
    return (
        <>
        <nav className='flex items-center justify-between bg-transparent w-full'>
            <div className=' bg-transparent flex items-center font-medium justify-between w-full'>
            <div className=' bg-transparent px-2 z-50 md:w-100% w-full flex justify-between'>
                    <img className='LogoAot h-16 bg-transparent' src={aotLogo}/>
                    <div className=' bg-transparent md:hidden py-3' onClick={()=>off(!on)}>
                        <img src={`${on ? `${close}` : `${open}` }`} className='bg-transparent h-8'/>
                    </div>
            </div>
            </div>
            <ul className=' md:flex hidden items-center  justify-center gap-10 bg-transparent'>
            
            <Navlinks />
            </ul>
            <div className='bg-transparent md:block hidden p-4 pl-20'>
            <button className=''onClick={()=>searchOff(!searchOn)}>
            <img src={`${searchOn ? `${close}` : `${search}` }`} className='bg-transparent h-8 w-36 lg:h-8 lg:w-24 xl:h-10 xl:w-16'></img>
            </button>
            
            </div>


            

{/* ------------------------For MOBILE---------------------- */}

            <ul className={`md:hidden subnav fixed w-full h-screen top-0 py-[60px] pl-4 duration-500 text-white ${on ? 'left-0':'left-[-100%]'}`}>
            <Navlinks/>
            </ul>
        </nav>
        <div className=' md:block hidden'>
        <div className={` ${searchOn ?' block ' : ' hidden' }`}>
        <Search/>
        </div>
        </div>
        </>
    )
}

export default Navbar
