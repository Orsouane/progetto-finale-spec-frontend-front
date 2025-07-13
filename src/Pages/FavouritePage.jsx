import React, { useContext, useEffect, useRef, useState } from 'react';
import { FavouriteContext } from "../Context/FavouriteContext"
import DeleteButton from '../Components/UiComponents/DeleteButton';
import EmptyPage from '../Components/UiComponents/EmptyPage';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import ScrollIndicator from '../Components/UiComponents/ScrollIndicator';
import BackTopButton from '../Components/UiComponents/BackTopButton';

function FavouritePage() {
     const { favouriteGames, setFavouriteGames, fullFavourites, setFullFavourites } = useContext(FavouriteContext);
     //* Ref per tornare al inzio della pagina 
     const backRef = useRef(null)

     //! Messagio da visualizzare quando la pagina favourite è vuota
     const [messageEmptyPage, setMessageEmptyPage] = useState("")
     useEffect(() => {
          if (fullFavourites.length === 0) {
               setMessageEmptyPage("No games found. Want to add one now?");
          }
     }, [fullFavourites]);

    
     //! Mostro una notifica toast quando un gioco viene rimosso dai preferiti.
     const notify = () => toast("Game Deleted from  Favourite !");

    
     //!  DELETE GAME FROM FAVORITE
     const handleDeleteFavourite = (favourite) => {
          const deleteFavourite = favouriteGames.filter(el => el?.id !== favourite?.id)
          // console.log(deleteFavourite)
          setFavouriteGames(deleteFavourite)
          localStorage.setItem("favouriteGames", JSON.stringify(deleteFavourite))
          setFullFavourites(fullFavourites.filter(game => game?.id !== favourite?.id));

     }


     return (

          <>
               <ScrollIndicator />
               <article ref={backRef}>
                    <ToastContainer
                         position="bottom-right"
                         autoClose={1000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="dark"
                         transition={Bounce}
                    />
                    {fullFavourites.length !== 0 ? (
                         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto  ' >
                              {fullFavourites && fullFavourites.map((favourite, index) => (
                                   <div className='bg-[#1F2937] max-w-[400px] p-2 rounded-md m-5 hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm' key={index}>
                                        <div className='text-white text-sm'>
                                             <img src={favourite?.imagesExtra[0]} alt={favourite?.title} className='border-[#8E95A2] border shadow-2xl h-80' />
                                             <div className='mt-3'>
                                                  <p><span className='text-sm text-[#60A5FA]'>Title : </span>{favourite?.title}</p>
                                                  <p><span className='text-sm text-[#60A5FA]'>Description : </span>{favourite?.description}</p>
                                             </div>
                                             <div className='flex justify-between'>
                                                  <div></div>
                                                  <span
                                                       className='cursor-pointer text-white p-1 rounded-md mt-1'
                                                       onClick={() => { handleDeleteFavourite(favourite); notify(); }}
                                                  >
                                                       <DeleteButton />
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    ) : (
                              <EmptyPage messageEmptyPage={messageEmptyPage} />
                    )}
               </article>
               {fullFavourites.length > 6 ? <BackTopButton backRef={backRef} /> :""

               }
               
          </>
     );

}

export default FavouritePage;
