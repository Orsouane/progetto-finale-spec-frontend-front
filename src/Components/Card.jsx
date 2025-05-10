import React from 'react'
import { NavLink } from 'react-router-dom'
function Card({record}) {
  const id=record.id
  return (
    <div className='flex  border gap-1'>
      <NavLink to={`/games/${id}`}><span className='font-bold'>title:</span>{record.title}-</NavLink>
      <NavLink to={`/games/${id}`} ><span className='font-bold'>category : </span>  {record.category}</NavLink>
    </div>
  )
}

export default Card
