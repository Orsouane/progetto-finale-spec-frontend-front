import React from 'react'

function FavouriteSkeleton() {
  return (
     
       <div className="flex flex-row gap-2bg-[#1F2937] max-w-[400px] p-2 rounded-md m-5 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm" >
           
           < div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto  ' >
           
                 <div className='min-w-[300px] md:min-w-[350px]  p-2 rounded-md m-5 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                          
                           backdrop-blur-sm' >
                      <div className='text-white text-sm '>
                           <div className="animate-pulse bg-gray-300 max-w-[400px] h-80 m-auto"></div>
                           <div className='mt-3'>
                                <div className="animate-pulse bg-gray-300 w-48 h-5 rounded-md mb-1 "></div>
                                <div className="animate-pulse bg-gray-300 w-68 h-5 rounded-md "></div>
                           </div>
                           <div className='flex justify-between'>
                                <div></div>
                                <span
                                     
                                >
                                     <div className="animate-pulse bg-gray-300 w-12 h-5 rounded-full mt-2"></div>
                                </span>
                           </div>
                      </div>
                 </div>
            
       </div>
       </div>
  )
}

export default FavouriteSkeleton
