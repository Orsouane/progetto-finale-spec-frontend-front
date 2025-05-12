import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFavourite from './AddFavourite'
function Card({ game }) {
  const id=game.id
 return (
    <div className='flex  border gap-1'>
     <NavLink to={`/games/${id}`}> Details </NavLink>
     <span className='font-bold'>title:</span> <span>{game.title}</span>
     <span className='font-bold'>category : </span> <span>{game.category} </span> 
    <AddFavourite game={game}/>
      </div>
     
  )
}

export default Card
