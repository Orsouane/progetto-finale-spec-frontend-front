import React from 'react'
import FavouriteButton from "./FavouriteButton"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='m-4'>
         <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md '>
      <NavLink to={"/"} className='text-[#60A5FA]' >BoolGame store</NavLink>
      <FavouriteButton />
    </div>
    </div>
 
  )
}

export default Header
