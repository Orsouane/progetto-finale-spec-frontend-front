import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { FavouriteContext } from '../Context/FavouriteContext'
import { toast } from 'react-toastify'

function AddFavouriteFdetails({ game }) {
     const notifyAdd = () => toast("Game added as Favourite !");
     const notifyExists = () => toast("Game Already added as Favourite !");

     const { records } = useContext(GlobalContext);
     const { favouriteGames, setFavouriteGames } = useContext(FavouriteContext);
     //*  Controllo se gia inserita nell favourite
     const isFav = favouriteGames.some(el => el?.id === game.id);

     const handleFavourite = () => {
          if (isFav) {
               notifyExists();
          } else {
               notifyAdd();
               const findGame = records.find(el => el.id === game.id);
               const updated = [...favouriteGames, findGame];
               setFavouriteGames(updated);
               localStorage.setItem('favouriteGames', JSON.stringify(updated));
          }
     };

     return (
          <button
               className='font-bold cursor-pointer'
               onClick={handleFavourite}
               title="Favourite"
          >  
          <span className='flex items-center gap-2'> 
                Add to Favourites
               
                </span> 
             
          </button>
     );
}

export default AddFavouriteFdetails;
