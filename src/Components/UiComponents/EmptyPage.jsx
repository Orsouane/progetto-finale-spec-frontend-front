import React from 'react'
import { useNavigate } from 'react-router-dom'
function EmptyPage({ messageEmptyPage, RefSearch, setQuery }) {
    
     const navigate = useNavigate()

     return (
          <section className='  sm:min-h-[600px] bg-[#0F1923] to-neutral-200 flex items-center justify-center p-5 '>
               <div className='max-w-2xl w-full text-center'>
                    {/* Background decorative elements */}
                    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                         <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-red-900/5 rounded-full blur-xl animate-pulse'></div>
                         <div className='absolute bottom-1/3 right-1/4 w-48 h-48 bg-neutral-600/5 rounded-full blur-2xl animate-pulse delay-1000'></div>
                    </div>

                    {/* Main content container */}
                    <div className='relative z-10 bg-[#1F2937]  backdrop-blur-sm rounded-3xl p-12 shadow-2xl shadow-neutral-900/10 border border-white/20'>
                         {/* Message text with enhanced styling */}
                         <div className='mb-4'>
                              <h1 className='font-black  md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-700 leading-tight mb-4 drop-shadow-sm '>
                                   {messageEmptyPage}
                              </h1>
                              <div className='w-24 h-1 bg-gradient-to-r from-red-900 to-neutral-600 mx-auto rounded-full'></div>
                         </div>

                         {/* Enhanced spinning button */}
                         <div className='flex justify-center mb-4'>
                              <div className='relative group'>
                                   {/* Outer glow ring */}
                                   <div className='absolute inset-0 bg-gradient-to-r from-red-900/20 to-neutral-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse'></div>

                                   {/* Main button */}
                                   <div
                                        className="relative hover:scale-110 transition-all duration-500 ease-out cursor-pointer group-hover:shadow-2xl group-hover:shadow-red-900/30 animate-spin hover:animate-none bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-full grid place-items-center h-13  w-13 sm:h-18  sm:w-18 border-4 border-neutral-800 shadow-xl shadow-neutral-700/50 hover:border-red-900"
                                        onClick={() => {
                                              
                                             navigate("/")
                                                 //? per il search
                                             RefSearch.current.value=""
                                             setQuery("") 
                                           
                                        }}

                                   >
                                        {/* Inner design elements */}
                                        <div className="rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 absolute rotate-[90deg] h-20 scale-50 w-2 shadow-inner"></div>
                                        <div className="rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 absolute rotate-[180deg] h-20 scale-50 w-2 shadow-inner"></div>

                                        {/* Center dot */}
                                        <div className="absolute w-3 h-3 bg-red-900 rounded-full shadow-lg"></div>

                                        {/* Hover effect overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 to-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                   </div>
                              </div>
                         </div>

                         {/* Additional interactive element */}
                         <div className='text-neutral-600 font-medium sm:text-lg mb-6'>
                              Click the icon to return to the home page.

                         </div>

                         {/* Subtle call-to-action */}
                         <div className='flex justify-center space-x-2'>
                              <div className='w-2 h-2 bg-red-900 rounded-full animate-bounce'></div>
                              <div className='w-2 h-2 bg-neutral-600 rounded-full animate-bounce delay-150'></div>
                              <div className='w-2 h-2 bg-red-900 rounded-full animate-bounce delay-300'></div>
                         </div>
                    </div>

                    {/* Bottom accent */}
                    <div className='mt-8 flex justify-center'>
                         <div className='w-16 h-1 bg-gradient-to-r from-transparent via-neutral-400 to-transparent rounded-full'></div>
                    </div>
               </div>
          </section>
     )
}

export default EmptyPage
