import React from 'react'
import { NavLink } from 'react-router-dom'
function FavouriteComponente() {
  return (
    <div>
          <NavLink to={`/Favourite`} >
            Favourites
          </NavLink>
    </div>
  )
}

export default FavouriteComponente
