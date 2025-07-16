import React from 'react'
import Jumbotron from "../Components/UiComponents/Jumbotron/Jumbotron"
function RecordsSkeleton() {
     return (
          <>

               <Jumbotron />
               {/* NavBar */}
               <section className="sticky top-[72px] bg-[#0F1923] z-40 flex flex-col pt-2  mt-3 mb-8 w-full max-w-[1300px] m-auto rounded-b-4xl" >
                    {/* toggle show */}
                    <div className=' bg-[#1F2937]/25  rounded-b-4xl shadow-xl mx-2  p-4'>
                         <div className="flex justify-between items-center    " >
                              {/* Contatore */}
                              <div className="animate-pulse bg-gray-300 w-12 h-5 rounded-md mb-1 "></div>
                              {/* Filter button */}
                              <div className="animate-pulse bg-gray-300 w-12 h-10 rounded-md mb-1 "></div>
                         </div>

                    </div>
               </section>

               <div className="px-4 w-full flex justify-center flex-col ">
                    {/* Games */}
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  max-w-[1300px] m-auto '>
                         {Array.from({ length: 12 }).map((_, i) => (
                              <div key={i} className="animate-pulse bg-gray-300 w-68 h-12   mb-6 max-w-80 rounded-xl m-auto"></div>
                         ))}
                    </div>



                    {/* load buttons */}
                    <div className='flex  justify-around '>
                         <div className="animate-pulse bg-gray-300 w-8 h-5 rounded-md mb-1 "></div>
                         <div></div>
                    </div>

               </div>


          </>


     )
}

export default RecordsSkeleton
