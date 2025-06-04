import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFavourite from './AddFavourite'
import { ToastContainer, Bounce } from 'react-toastify'

function Card({ game }) {
     const id = game.id

     return (
          <>
               <div className='mb-6 max-w-80 bg-[#1F2937] flex justify-between p-2 rounded-xl m-auto cursor-pointer 
                    hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm shadow-2xl'>

                    <div className='flex flex-col w-80 gap-2'>
                         <div className='flex justify-between'>
                              <span className='font-bold text-white'>{game.title}</span>
                              {/* Details */}
                              <NavLink to={`/games/${id}`}>
                                   <button className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#0000" stroke=" rgb(129, 110, 216)" data-name="Layer 1" viewBox="0 0 24 24" id="github"
                                             strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle">
                                             <circle cx="12" cy="12" r="10" />
                                             <line x1="12" y1="8" x2="12" y2="16" />
                                             <line x1="8" y1="12" x2="16" y2="12" />
                                        </svg>
                                   </button>
                              </NavLink>
                         </div>

                         <div className='flex justify-between items-center'>
                              <span className='text-xs text-[#60A5FA]'>{game.category}</span>
                              {/* add to favourite */}
                              <AddFavourite game={game} />
                         </div>
                    </div>
               </div>

               {/* Notif di conferma */}
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
          </>
     )
}

export default Card