import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext, useEffect } from 'react'
function DetailsPage() {
     const chiaveDetails = ["title", "category", "developer", "rating", "releaseYear", "price"]
     //* Recuperare id dal URL
     const { id } = useParams()
     //* Recuperare gameDetail e getGame  dal contesto globale
     const { gameDetail, getGame } = useContext(GlobalContext)
     //* Quando id o getGame cambiano, chiama getGame con l'id per caricare dettagli
      useEffect(() => { getGame(id); }, [id, getGame]);

     return (
          //* Contenitore del Card di dettaglio
          <div className='m-5  '>
               {gameDetail &&
               //* Card di dettaglio
                    (<div className='bg-[#1F2937] p-3 rounded-md mt-10  flex justify-center flex-col text-sm sm:text-base max-w-[420px]  m-auto hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm'>
                         <img src={gameDetail.image} />
                         {/* dettagli tranne il description */}
                         <div className='grid grid-cols-2 gap-2 m-3'>
                              {chiaveDetails.map((el, index) => <p key={index} >

                                   <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                   <span className='text-white'> {gameDetail[el]} </span>

                              </p>

                              )}
                         </div>
                            {/* il description */}
                         <p className='text-white m-3'> <span className='text-[#60A5FA]'>Description: </span>{gameDetail.description}</p>
                    </div>)}
                    
          </div>
     )
}

export default DetailsPage
