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
                    <div className='bg-[#1F2937] p-3 rounded-md mt-10 flex justify-center flex-col text-sm sm:text-base max-w-[820px] m-auto hover:border-[#8E95A2]  transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm'>
                         <div className='flex gap-2 mt-2 overflow-auto rounded-lg snap-x snap-mandatory sm:hidden '>
                              {gameDetail.imagesExtra.map((img, index) => (
                                   <img
                                        key={index}
                                        src={img}
                                        alt={`Mobile thumbnail ${index + 1}`}
                                        className="min-w-screen h-[37vh] object-cover snap-start"
                                   />
                              ))}
                         </div>
                         <div className="hidden sm:flex gap-2 aspect-video h-full w-full mt-4">
                              <div className="relative w-3/4">
                                   <img
                                        src={gameDetail.imagesExtra[activeIndex]}
                                        alt={`Image ${activeIndex + 1}`}
                                        className="h-full aspect-video object-cover rounded-lg"
                                   />
                              </div>
                              <div className=" w-1/4 flex flex-col gap-2 p-1 border-y border-y-gray-600 rounded-md scroll-container  ">
                                   {gameDetail.imagesExtra.map((img, index) => (
                                        <img
                                             key={index}
                                             src={img}
                                             alt={`Thumbnail ${index + 1}`}
                                             className={`w-full aspect-[3/2] object-cover rounded-md cursor-pointer hover:scale-[1.02] transition-all ${activeIndex === index ? "outline-2 outline-blue-500" : ""}`}
                                             onClick={() => handleThumbnailClick(index)}
                                        />
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




                    <div className='flex justify-center items-center  gap-2 px-3 py-2 bg-[#60A5FA] 
                         
                         text-white font-semibold rounded-lg shadow-md transition duration-800 animate-pulse cursor-pointer   '>
                         {/* add to favourite */}
                         <AddFavouriteFdetails game={gameDetail} />
                    </div>



                    <span className='font-bold text-stone-400 '>Category :
                         <span className='text-white'>
                              {gameDetail?.category}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400 '>Developer :
                         <span className='text-white'>
                              {gameDetail?.developer}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400 '>ReleaseYear :
                         <span className='text-white'>
                              {gameDetail?.releaseYear}
                         </span>
                    </span>
                    <span className='font-bold text-stone-400  '>Tags :
                         <span className='text-white flex gap-3 my-2'>
                              {gameDetail && gameDetail.tags.map((el, index) => {
                                   return <div key={index} >
                                        <span className='bg-[#60A5FA] p-2 rounded-2xl text-xs shadow-2xl'> {el} </span>
                                   </div>
                              })}
                         </span>
                    </span>
                    <hr className='stroke-stone-50 mt-5  opacity-20' />

                    <div className='flex justify-between w-48 m-auto'>
                         <span className='font-bold text-stone-500 text-xl flex flex-col justify-between items-center'> <span className='text-[#60A5FA]'>Rating </span><span className={
                              gameDetail?.rating.slice(0, 3) >= 9 ? "text-green-600" :
                                   gameDetail?.rating.slice(0, 3) > 5 ? "text-green-300" :
                                        "text-red-800"
                         }>
                              {gameDetail?.rating.slice(0, 3)}
                         </span>

                         </span>
                         <span className='font-bold text-stone-500 text-xl flex flex-col justify-between items-center'> <span className='text-[#60A5FA]'>Price </span><span className={
                              gameDetail?.price.slice(1)<50 ? "text-green-400" :
                                   gameDetail?.price.slice(1) < 10 ? "text-green-600" :
                                        "text-red-800"
                         }>
                              {gameDetail?.price.slice(1)}
                         </span>

                         </span>
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
