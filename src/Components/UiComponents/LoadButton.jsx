import React from 'react'

function LoadButton({ GameToShow, loadLess, loadMore, orderArray }) {
     
  return (
     <>
     
            <div className='mb-2 max-w-80  flex justify-between p-2 rounded-md m-auto cursor-pointer'>
                 <div>
                      {/* LoadMore */}
                      {orderArray.length > GameToShow.length && <button onClick={loadMore}
                           className="cursor-pointer relative after:content-['Load_More'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-400 p-4   h-8 rounded-full border text-sm border-[#8E95A2] bg-[#1F2937] pointer flex items-center justify-center duration-300 hover:rounded-[25px] hover:w-20 group/button overflow-hidden active:scale-90  "
                      >
                           <svg
                                className="w-3 fill-white delay-50 duration-1200 
                                   animate-bounce
                                   group-hover/button:translate-y-12 rotate-180"
                                viewBox="0 0 384 512"
                           >
                                <path
                                     d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                ></path>
                           </svg>
                      </button>
                      }
                 </div>

                 {/* Loadless */}
                 <div>
                      {GameToShow.length > 12 && <button onClick={loadLess}
                           className="cursor-pointer relative
                              after:content-['Load_Less'] 
                              after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 p-4   h-8 rounded-full border text-sm border-[#8E95A2] bg-[#1F2937] pointer flex items-center justify-center duration-300 hover:rounded-[25px] hover:w-20 group/button overflow-hidden active:scale-90  "
                      >
                           <svg
                                className="w-3 fill-white delay-50 duration-1200 
                                   animate-bounce group-hover/button:-translate-y-12"
                                viewBox="0 0 384 512"
                           >
                                <path
                                     d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                ></path>
                           </svg>
                      </button>}



                 </div>

            </div>
          
            
     </>
      
  )
}

export default LoadButton
