import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import '../index.css';
import { FaCaretDown } from "react-icons/fa";
function Navlinks() {
    const links =[
        {
            name : "Academics▾", submenu : true , sublinks : [
                {name : 'Department', link : "/Academics"},
                {name : 'UG Prog', link : "/Academics"},
                {name : 'PG Prog', link : "/Academics"},
                {name : 'Library', link : "/Library"},
                {name : 'Moodle', link : "http://182.74.215.198/moodle/"},
            ]
        },
        {
            name : "Research▾",linked : "/Research",  submenu : true , sublinks : [
                {name : 'Current Research', link : "/Research"},
                {name : 'Past Research', link : "/Research"},
                {name : 'Research facility', link : "/Research"},
                
            ]
        },
        {
            name : 'Students▾',linked:"/Students" , submenu : true , sublinks : [
                {name : 'Life at AOT', link : "/Students"},
                {name : 'Career Services', link : "/Students"},
                {name : 'Campus facility', link : "/Students"},
                {name : 'Events', link : "/Students"},
            ]
        },
        {
            name : "Faculties▾",linked:"/Faculties" , submenu : true , sublinks : [
                {name : 'Faculty list', link : "/Faculties"},
                {name : 'Faculty position', link : "/Faculties"},
                {name : '@aot', link : "/Faculties"},
            ]
        },
    ]
  return (
    <>
        {links.map((link) => (
            <div className=' bg-transparent md:py-[24px] pb-[17px] pt-[10px] group font-["para"]'>
            <NavLink className={({isActive})=>` text-2xl hover:cursor-pointer  navtext  bg-transparent px-2 text-left  ${isActive ? " text-red-700":"text-black"}`} 
             >{link.name }</NavLink>
            <div>

            </div>
                {link.submenu && <div>
                    <div className='bg-slate-200 absolute top-[76px] hidden group-hover:md:block hover:md:block text-nowrap '>
                    
                        <div className=' bg-transparent px-10 py-2 font-["para"] '> {
                            link.sublinks.map((mylinks) => (
                                <div className=' bg-transparent flex gap-10 '>
                                    
                                    <li className=' bg-transparent text-lg text-gray-800 my-2'>
                                        <NavLink className=" bg-transparent navsubtext" to={mylinks.link}>
                                            {mylinks.name}
                                        </NavLink>
                                        
                                    </li>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>}




                {/* ----------------------mobile-------------------- */}
                            <div className='bg-transparent md:hidden block'>
                                {
                                    link.sublinks.map((slinks) => (
                                        <div className=' bg-transparent '>
                                        <div className=' bg-transparent '>
                                            <NavLink className=' bg-transparent py-2 pl-7 font-semibold text-lg pr-5 md:pr-0' to={slinks.link}>
                                                {slinks.name}
                                            </NavLink>
                                        </div> 
                                        </div>
                                    ))
                                }
                            </div>

            </div>
        ))}
    </>
  )
}

export default Navlinks