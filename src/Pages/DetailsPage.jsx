import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext, useEffect } from 'react'
function DetailsPage() {
     const chiaveDetails = ["title", "category", "developer", "rating", "releaseYear", "price"]
     const { id } = useParams()
     const { gameDetail, getGame } = useContext(GlobalContext)
     useEffect(() => { getGame(id); }, [id, getGame]);

     return (
          <div className=' max-w-[600px]  m-auto'>
               {gameDetail &&
                    (<div className='bg-[#1F2937] p-3 rounded-md mt-10 m-5 flex justify-center flex-col text-sm '>
                         <img src={gameDetail.image} />
                         <div className='grid grid-cols-3 gap-2 m-3'>
                              {chiaveDetails.map((el, index) => <p key={index} className=''>

                                   <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                   <span className='text-white'> {gameDetail[el]} </span>

                              </p>

                              )}
                         </div>

                         <p className='text-white m-3'> <span className='text-[#60A5FA]'>Description: </span>{gameDetail.description}</p>
                    </div>)}
          </div>
     )
}

export default DetailsPage
