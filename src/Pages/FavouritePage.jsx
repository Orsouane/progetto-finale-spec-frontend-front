import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

function FavouritePage() {
    const { favouriteGames, setFavouriteGames } = useContext(GlobalContext);
 useEffect(()=>{console.log(favouriteGames)},[favouriteGames])
    const handleDeleteFavourite = (favourite) => {
        const deleteFavourite=favouriteGames.filter(el=>el.id!==favourite.id)
        console.log(deleteFavourite)
        setFavouriteGames(deleteFavourite)
        localStorage.setItem("favouriteGames", JSON.stringify(deleteFavourite))
        return deleteFavourite
    }
    return (
        <div>
            {favouriteGames.map((favourite,index)=>{
             return    <div key={index} className='border'>
                  <p>{favourite.title}</p>
                 <p>{favourite.category}</p>
                 <button className='cursor-pointer' onClick={()=>handleDeleteFavourite(favourite)}>Delete</button>
            </div>  
            }
            ) 
          
        }
        </div>
    );
}

export default FavouritePage;
