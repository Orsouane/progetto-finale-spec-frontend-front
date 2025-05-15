import React from 'react'
import FavouriteButton from "./FavouriteButton"
import { CgGames } from "react-icons/cg";
import { NavLink } from 'react-router-dom'


function Header() {
     return (
          <div className='p-4 sticky top-0 z-50 bg-[#0F1923] h-18'>
               <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md h-full'>
                    <NavLink to={"/"} className='text-[#60A5FA]'>BoolStation store</NavLink>
                    <div className='flex gap-x-1 items-center'>
                         <NavLink to={"/"} className='text-white p-1 rounded-md text-sm font-light flex items-center  hover:bg-[#8E95A2]'> <CgGames /> All Games </NavLink>
                         <FavouriteButton />
                    </div>
               </div>
          </div>
     )
}

export default Header
