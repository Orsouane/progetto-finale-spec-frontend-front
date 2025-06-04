import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgGames } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";

function Header() {
     return (
          <div className='p-4 sticky top-0 z-50 bg-[#0F1923] h-18 text-xs sm:text-base'>
               <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md h-full shadow-2xl'>
                    <div className='text-[#60A5FA] flex items-center gap-1 '>  
                         <div className=' rounded-[50%] p-0.5 sm:p-1 font-bold text-[#0F1923] bg-[#60A5FA] border-2 border-[#0F1923] '>BS </div>
                          BoolStation store</div>
                    <div className='flex gap-x-1 items-center '>
                         <NavLink to={"/"} className='text-white p-1 rounded-md text-sm font-light flex items-center  hover:bg-[#8E95A2]/30'> <CgGames className='mr-0.5' />  <span className='text-xs sm:text-base'>All Games </span>  </NavLink>
                         <NavLink to={`/Favourite`} className="bg-[#1F2937] text-white p-1 rounded-md text-sm  font-light flex items-center hover:bg-[#8E95A2]/30 " >
                              <IoMdHeart className='pr-0.5' /> <span className='text-xs sm:text-base'>Favourites</span>
                         </NavLink>
                    </div>
               </div>
          </div>
     )
}

export default Header
