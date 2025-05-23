import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgGames } from "react-icons/cg";
import { RiStarSFill } from "react-icons/ri";

//*Il Header che contiene le due Link  1 per visitare la pagina dei giochi preferite e uno per tornare alla pagine dei recordlist di tutti i giochi
function Header() {
     return (
          <div className='p-4 sticky top-0 z-50 bg-[#0F1923] h-18'>
               <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md h-full'>
                    <NavLink to={"/"} className='text-[#60A5FA]'>BoolStation store</NavLink>
                    <div className='flex gap-x-1 items-center'>
                         <NavLink to={"/"} className='text-white p-1 rounded-md text-sm font-light flex items-center  hover:bg-[#8E95A2]'> <CgGames /> All Games </NavLink>
                         <NavLink to={`/Favourite`} className="bg-[#1F2937] text-white p-1 rounded-md text-sm  font-light flex items-center hover:bg-[#8E95A2]" >
                              <RiStarSFill /> Favorites
                         </NavLink>
                    </div>
               </div>
          </div>
     )
}

export default Header
