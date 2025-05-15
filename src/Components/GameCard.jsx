import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFavourite from './AddFavourite'
function Card({ game }) {
     const id = game.id
     return (
          <div className='  mb-2 max-w-80 bg-[#1F2937] flex justify-between p-2 rounded-md m-auto '>

               <div className='flex flex-col gap-1 '>
                    <span className='font-bold text-white'>{game.title}</span>
                    <span className='text-xs text-[#60A5FA]  '>{game.category} </span>
               </div>
               <div className='flex flex-col items-center'>
                    <NavLink to={`/games/${id}`} className=""> + </NavLink>
                    <AddFavourite game={game} />
               </div>

          </div>

     )
}

export default Card
