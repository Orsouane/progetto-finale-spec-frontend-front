import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
function Card({ game }) {
  const id=game.id
  const {records}=useContext(GlobalContext)
  const { favouriteGames, setFavouriteGames } = useContext(GlobalContext)
  const handleFavourite = () => {
    const findGame = records.find(element => element.id === id);
    const controllaDuplicati=favouriteGames.some(el=>el.id===findGame.id)
    console.log(controllaDuplicati)
     if(!controllaDuplicati) {
       const updated = [...favouriteGames, findGame];
      setFavouriteGames(updated)
       localStorage.setItem('favouriteGames', JSON.stringify(updated));
     } };
    
 return (
    <div className='flex  border gap-1'>
      <NavLink to={`/games/${id}`}><span className='font-bold'>title:</span>{game.title}-</NavLink>
      <NavLink to={`/games/${id}`} ><span className='font-bold'>category : </span>  {game.category}</NavLink>
     <span className='font-bold cursor-pointer' onClick={handleFavourite}>❤ </span> 
      </div>
     
  )
}

export default Card
