import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { CiStar } from "react-icons/ci";
function AddFavourite({ game }) {
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
                  <span className='font-bold cursor-pointer' onClick={handleFavourite}>   <span >
                       <CiStar className="text-stone-50 hover:text-amber-300" /></span> 
                  
                   </span>
                </div>
        )
}

export default AddFavourite