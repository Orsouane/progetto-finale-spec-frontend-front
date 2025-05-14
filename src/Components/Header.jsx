import React from 'react'
import FavouriteButton from "./FavouriteButton"
function Header() {
  return (
    <div className='m-4'>
         <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md '>
      <div className='text-[#60A5FA]' onClick={() => navigate("/")}>BoolGame store</div>
      <FavouriteButton />
    </div>
    </div>
 
  )
}

export default Header
