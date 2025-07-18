import React from 'react'
import { FavouriteContext } from '../Context/FavouriteContext';
import { useContext } from 'react';
function FavouriteSkeleton() {
     const {  fullFavourites } = useContext(FavouriteContext);
     return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto ">
          {Array.from({ length: fullFavourites.length }).map((_, i) => (
               <div
                    key={i}
                    className="bg-[#1F2937] max-w-[400px] p-2 rounded-md
                 hover:-translate-y-1 transition-all duration-300 ease-out
                 border border-gray-700/80 backdrop-blur-sm  m-5"
               >
                    <div className="p-2 rounded-md backdrop-blur-sm ">
                         <div className="text-white text-sm">
                              <div className="animate-pulse bg-gray-300 w-full h-80 rounded-md"></div>
                              <div className="mt-3">
                                   <div className="animate-pulse bg-gray-300 w-48 h-5 rounded-md mb-1"></div>
                                   <div className="animate-pulse bg-gray-300 w-68 h-5 rounded-md"></div>
                              </div>
                              <div className="flex justify-between mt-2">
                                   <div></div>
                                   <div className="animate-pulse bg-gray-300 w-12 h-5 rounded-full"></div>
                              </div>
                         </div>
                    </div>
               </div>
          ))}
     </div>


     
     )
}

export default FavouriteSkeleton
