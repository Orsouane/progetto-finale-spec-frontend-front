  import React, { useContext } from 'react'
  import { GlobalContext } from '../Context/GlobalContext'
function AddFavourite({game}) {
const id = game.id
    const { records } = useContext(GlobalContext)
    const { favouriteGames, setFavouriteGames } = useContext(GlobalContext)
    //! selezionare i preferite + evitare i duplicati
    const handleFavourite = () => {
      const findGame = records.find(element => element.id === id);
      const controllaDuplicati = favouriteGames.some(el => el.id === findGame.id)
      if (!controllaDuplicati) {
        const updated = [...favouriteGames, findGame];
        setFavouriteGames(updated)
        localStorage.setItem('favouriteGames', JSON.stringify(updated));
      }
    };
  return (
    <div>
      <span className='font-bold cursor-pointer' onClick={handleFavourite}>   ❤ </span>  
    </div>
  )
}

export default AddFavourite
