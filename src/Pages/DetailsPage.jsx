import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext, useEffect } from 'react'
import { ToastContainer, Bounce } from 'react-toastify'
import AddFavouriteFdetails from '../Components/AddFavouriteFdetails'

function DetailsPage({ game }) {

     //* Recuperare id dal URL
     const { id } = useParams()
     //* Recuperare gameDetail e getGame  dal contesto globale
     const { gameDetail, getGame } = useContext(GlobalContext)
     //* Quando id o getGame cambiano, chiamo getGame con l'id per caricare dettagli
     useEffect(() => { getGame(id); }, [id, getGame]);

     // Stato per tracciare l'indice dell'immagine attiva
     const [activeIndex, setActiveIndex] = useState(0);

     // Funzione per cambiare l'immagine attiva quando si clicca su una miniatura
     const handleThumbnailClick = (index) => {
          setActiveIndex(index);
     };

     return (
          //* Contenitore del Card di dettaglio
          <div className='m-5  '>
               {gameDetail && (
                    <div className='bg-[#1F2937] p-3 rounded-md mt-10 flex justify-center flex-col text-sm sm:text-base max-w-[820px] m-auto hover:border-[#8E95A2]  transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm h-[420px] sm:h-full'>
                         <div className="sm:flex  gap-2 aspect-video h-full w-full mt-2 ">
                              <div className=" relative  sm:w-3/4">
                                   <img
                                        src={gameDetail.imagesExtra[activeIndex]}
                                        alt={`Image ${activeIndex + 1}`}
                                        className="sm:h-full  h-80 object-cover rounded-lg"
                                        loading="lazy"
                                   />
                              </div>
                              {/* Miniatura */}

                              <div className="  sm:w-1/4 flex sm:flex-col gap-2 p-1 border-y border-y-gray-600 rounded-md scroll-container     ">
                                   {gameDetail.imagesExtra.map((img, index) => (
                                        <div className='w-full' key={index}>
                                             <img
                                                  loading="lazy"
                                                  src={img}
                                                  alt={`Thumbnail ${index + 1}`}
                                                  className={`w-full aspect-[3/2] object-cover rounded-md cursor-pointer hover:scale-[1.02] transition-all ${activeIndex === index ? "outline-2 outline-blue-500" : ""}`}
                                                  onClick={() => handleThumbnailClick(index)}
                                             />
                                        </div>

                                   ))}
                              </div>
                         </div>
                    </div>
               )}


               <p className='text-white mt-2 py-2 bg-[#1F2937] p-2 max-w-[1200px]  m-auto hover:border-[#8E95A2]  rounded-xl
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm'> <span className='text-[#60A5FA]  font-semibold '>Description: </span>{gameDetail?.description}</p>


               <div className='mt-2 bg-[#1F2937] flex flex-col rounded-xl p-2 gap-1 max-w-[1200px]  m-auto hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm'>
                    <span className='font-bold text-[#60A5FA]  '>SystemRequirements :   </span>  <span className='text-white '> <span className='text-stone-400 font-semibold'>
                         Os  : </span>   {gameDetail?.systemRequirements[0]}</span>
                    <span className='text-white '>  <span className='text-stone-400 font-semibold'>
                         Cpu  : </span>   {gameDetail?.systemRequirements[1]}</span>
                    <span className='text-white '>  <span className='text-stone-400 font-semibold'>
                         Ram  : </span>  {gameDetail?.systemRequirements[2]}</span>
                    <span className='text-white '>  <span className='text-stone-400 font-semibold'>
                         Gpu  : </span>   {gameDetail?.systemRequirements[3]}</span>
               </div>


               <div className=' flex flex-col p-2 gap-2  mt-2 bg-[#1F2937]  max-w-[1200px]  m-auto hover:border-[#8E95A2] rounded-xl 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm '>

                    <span className='font-bold text-white text-3xl'>{gameDetail?.title}</span>






                    <span className='font-bold text-stone-400 flex items-center gap-1 '>Category :
                         <span className='text-white'>
                              {gameDetail?.category}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400 flex items-center gap-1'>Developer :
                         <span className='text-white'>
                              {gameDetail?.developer}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400 flex items-center gap-1'>ReleaseYear :
                         <span className='text-white'>
                              {gameDetail?.releaseYear}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400  flex items-center gap-1 '>Tags :
                         <span className='text-white flex gap-3'>
                              {gameDetail && gameDetail.tags.map((el, index) => {
                                   return <div key={index} >
                                        <span className=' bg-[#1F2937] rounded-md text-[#8E95A2] border border-[#8E95A2]  text-xs max-w-40 p-1 ' > {el} </span>
                                   </div>
                              })}
                         </span>
                    </span> 


                    <div className='flex justify-center items-center  px-3 py-2 mt-2 bg-[#60A5FA] 
                         
                         text-white font-semibold rounded-lg shadow-md transition duration-800 animate-pulse cursor-pointer   '>
                         {/* add to favourite */}
                         <AddFavouriteFdetails game={gameDetail} />
                    </div>
                    <hr className='stroke-stone-50 mt-2  opacity-20' />

                    <div className='flex flex-col items-center justify-center w-58 m-auto gap-2'>
                         <span className='font-semibold text-white text-2xl'>Buy Now </span>
                         <div className='flex gap-2'> {gameDetail && gameDetail.links.map((el, index) => {
                              return <button
                                   key={index}
                                   className=' bg-[#60A5FA] p-2 rounded-md text-xs shadow-2xl animate-pulse duration-150 text-white cursor-pointer'
                                   role="link"
                                   onClick={() => window.open(el.url, '_blank', 'noopener,noreferrer')}
                              >
                                   {el.platform}
                              </button>





                         })
                         }
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

          </div>

     )

}

export default DetailsPage
