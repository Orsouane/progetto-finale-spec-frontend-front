import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

function FavouritePage() {
    const { favouriteGames } = useContext(GlobalContext);
 useEffect(()=>{console.log(favouriteGames)},[favouriteGames])
    return (
        <div>
            {favouriteGames.map((favourite,index)=>{
             return    <div key={index} className='border'>
                  <p>{favourite.title}</p>
                 <p>{favourite.category}</p>
            </div>  
            }
            ) 
          
        }
        </div>
    );
}

export default FavouritePage;
