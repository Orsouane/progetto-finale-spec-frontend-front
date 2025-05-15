import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import DeleteButton from '../Components/UiComponents/DeleteButton';
import EmptyPageFav from '../Components/UiComponents/EmptyPageFav';
function FavouritePage() {
     const { favouriteGames, setFavouriteGames } = useContext(GlobalContext);
     //!   DELETE GAME FROM FAVORITE
     const handleDeleteFavourite = (favourite) => {
          const deleteFavourite = favouriteGames.filter(el => el.id !== favourite.id)
          console.log(deleteFavourite)
          setFavouriteGames(deleteFavourite)
          localStorage.setItem("favouriteGames", JSON.stringify(deleteFavourite))
          return deleteFavourite
     }
     return (
          <>
               {favouriteGames.length !== 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-[1200px] m-auto '>
                         {favouriteGames.map((favourite, index) => (
                              <div
                                   className='bg-[#1F2937] max-w-[400px] p-2 rounded-md m-5'
                                   key={index}
                              >
                                   <div className='text-white text-sm'>
                                        <img src={favourite.image} />
                                        <div className='mt-3'>
                                             <p>
                                                  <span className='text-sm text-[#60A5FA]'>Title : </span>
                                                  {favourite.title}
                                             </p>
                                             <p>
                                                  <span className='text-sm text-[#60A5FA]'> Rating : </span>
                                                  {favourite.description}
                                             </p>
                                        </div>

                                        <div className='flex justify-between'>
                                             <div></div>
                                             <span
                                                  className='cursor-pointer text-white p-1 rounded-md mt-1'
                                                  onClick={() => handleDeleteFavourite(favourite)}
                                             >
                                                  <DeleteButton />
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               ) : (
                    <EmptyPageFav />
               )}
          </>
     );

}

export default FavouritePage;
