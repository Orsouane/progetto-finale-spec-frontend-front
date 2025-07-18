
import React from 'react'

function DetailsSkeleton() {
  return (
    <div className='m-5'>
            <div className='bg-[#1F2937] p-3 rounded-md mt-10 flex flex-col sm:flex-row justify-center text-sm sm:text-base max-w-[820px] m-auto hover:border-[#8E95A2] transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm h-92 overflow-hidden  '>
            <div className="relative sm:w-3/4 h-full sm:h-85 mt-1 ">
          <div className="animate-pulse bg-gray-300 max-w-[500px] h-full sm:h-85 m-auto rounded-md "></div>
        </div>
                 <div className=" sm:w-1/4 flex sm:flex-col gap-2 p-1 border-y border-y-gray-600 rounded-md  overflow-hidden sm:h-[400px] scroll-container pb-5">
          {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="animate-pulse bg-gray-300 w-full aspect-[3/2] object-cover rounded-md overflow-hidden"></div>
          ))}
        </div>
      </div>

      <div className='text-white mt-2 py-2 bg-[#1F2937] p-2 max-w-[1200px] m-auto hover:border-[#8E95A2] rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm'>
        <p className="animate-pulse bg-gray-300 w-72 h-3 rounded-md mb-1"></p>
      </div>

      <div className='mt-2 bg-[#1F2937] flex flex-col rounded-xl p-2 gap-1 max-w-[1200px] m-auto hover:border-[#8E95A2] hover:transform hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-300 w-48 h-3 rounded-md mb-1"></div>
        ))}
      </div>

      <div className='flex flex-col p-2 gap-2 mt-2 bg-[#1F2937] max-w-[1200px] m-auto hover:border-[#8E95A2] rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm'>
        <div className="animate-pulse bg-gray-300 w-48 h-3 rounded-md mb-1"></div>
        <span className='font-bold text-stone-400 flex items-center gap-1'>
          <div className="animate-pulse bg-gray-300 w-48 h-3 rounded-md mb-1"></div>
        </span>
        <span className='font-bold text-stone-400 flex items-center gap-1'>
          <div className="animate-pulse bg-gray-300 w-48 h-3 rounded-md mb-1"></div>
        </span>
        <span className='font-bold text-stone-400 flex items-center gap-1'>
          <div className="animate-pulse bg-gray-300 w-48 h-3 rounded-md mb-1"></div>
        </span>
        <span className='font-bold text-stone-400 flex items-center gap-1'>
          <span className='text-white flex gap-3'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-300 w-12 h-5 rounded-md mb-1"></div>
            ))}
          </span>
        </span>

        <div className="animate-pulse bg-gray-300 w-full h-5 rounded-md mb-1"></div>
        <hr className='stroke-stone-50 mt-2 opacity-20' />

        <div className='flex flex-col items-center justify-center w-58 m-auto gap-2'>
          <span className='font-semibold text-white text-2xl'>Purchase On</span>
          <div className='flex gap-2'>
            <div className="animate-pulse bg-gray-300 w-8 h-5 rounded-md mb-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsSkeleton
