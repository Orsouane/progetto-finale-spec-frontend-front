import React from 'react'
import { useNavigate } from 'react-router-dom'
function AddComponent() {
    const navigate = useNavigate()
  return (

      <section className='w-[1000px] ml-10 mt-50 '>
          <div className=' text-center'>
              <div className='flex-col flex  '>
                  <p className='font-bold  text-5xl  text-red-900'>At least two games required. Would you like to add them now?
                  </p>

                  <div className='mt-10 w-full flex justify-center'>

                      <div className=' flex justify-center align-middle h-92'>

                          <div
                              className="hover:scale-110 transition-all ease-in-out cursor-pointer hover:shadow-xl hover:shadow-neutral-700 delay-1000 animate-spin duration-1000 bg-gradient-to-br border-4 shadow-inner shadow-neutral-700 border-neutral-950 from-white/80 to-gray-600 rounded-full grid place-items-center z-0 h-20 w-20 relative  " onClick={() => navigate("/")}
                          >
                              <div
                                  className="rounded-full bg-neutral-900 absolute rotate-[90deg] z-20 h-20 scale-50 w-2"
                              ></div>
                              <div
                                  className="rounded-full bg-neutral-900 absolute rotate-[180deg] z-20 h-20 scale-50 w-2"
                              ></div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>


      </section>
        

  )
}

export default AddComponent
