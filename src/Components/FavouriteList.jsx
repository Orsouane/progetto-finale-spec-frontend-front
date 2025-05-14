import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiStarSFill } from "react-icons/ri";
function FavouriteComponente() {
  return (
    <div>
      <NavLink to={`/Favourite`} className="bg-[#1F2937] text-white p-1 rounded-md text-xs  font-light flex items-center" >
        <RiStarSFill/> Favorites
          </NavLink>
    </div>
  )
}

export default FavouriteComponente
