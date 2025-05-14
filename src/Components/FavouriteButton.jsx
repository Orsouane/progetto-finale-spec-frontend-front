import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiStarSFill } from "react-icons/ri";
function FavouriteButton() {
  return (
    <div>
      <NavLink to={`/Favourite`} className="bg-[#1F2937] text-white p-2 rounded-md text-sm  font-light flex items-center hover:bg-[#8E95A2]" >
        <RiStarSFill/> Favorites
          </NavLink>
    </div>
  )
}

export default FavouriteButton
