import React from 'react'

function ComparatorSkeleton() {
     return (
          <section className='mx-4'>


               <section className='max-w-[800px] m-auto text-xs sm:text-base mt-2'>
                    {/* le due Games da confrontare  */}
                    <section className='flex justify-between gap-5  '>
                         {/* il primo giocho  */}
                         <div className='  text-sm max-w-92 shadow-2xl bg-[#1F2937]  p-2 rounded-md  hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm w-92 '>
                              <div className='text-white text-center  rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50  m-auto my-2 shadow-2xl border border-stone-700 w-fit '>Game 2</div>
                              <div className="animate-pulse bg-gray-300 h-34 rounded-md mb-1 "></div>
                              <div className='grid sm:grid-cols-2 gap-2   pt-2'>

                                   {
                                        Array.from({ length: 4 }).map((_, i) => {
                                             return <div key={i} className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 "></div>
                                        })
                                   }

                              </div>
                         </div>
                         {/* il secondo  giocho  */}
                         <div className='  text-sm max-w-92 shadow-2xl bg-[#1F2937]  p-2 rounded-md  hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm w-92 '>
                              <div className='text-white text-center  rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50  m-auto my-2 shadow-2xl border border-stone-700 w-fit '>Game 2</div>
                              <div className="animate-pulse bg-gray-300 h-34 rounded-md mb-1 "></div>
                              <div className='grid sm:grid-cols-2 gap-2   pt-2'>

                                   {
                                        Array.from({ length: 4 }).map((_, i) => {
                                             return <div key={i} className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 "></div>
                                        })
                                   }

                              </div>
                         </div>

                    </section>

                    {/* Paragrafo e tabella  */}
                    <section className='my-10'>

                         <>
                              {/* paragrafo */}
                              <div className='bg-[#1F2937] p-2 text-white max-w-[800px] m-auto rounded-md text-xs sm:text-base  border-[#8E95A2]/20 border shadow-2xl '>
                                   <div className='text-white text-center flex gap-1  rounded-md px-5 py-1 w-fit  bg-[#0F1923]/50  m-auto mb-2 shadow-2xl border border-stone-700  justify-center'> Games Overview</div>

                                   <div className="animate-pulse bg-gray-300 h-3 rounded-md mb-1 w-full"></div>
                                   <div className="animate-pulse bg-gray-300 h-3 rounded-md mb-1 w-full"></div>
                                   <div className="animate-pulse bg-gray-300 h-3 rounded-md mb-1 w-full"></div>
                              </div>


                              <div className='w-fit  m-auto mt-10 bg-[#1F2937] p-3  rounded-md  border-[#8E95A2]/20 border '>
                                   {/* tabella  */}
                                   <div className='text-white text-center flex gap-1 rounded-md p-1 bg-[#0F1923]/50 m-auto mb-2 shadow-2xl border border-stone-700 justify-center'>
                                        <div className="animate-pulse bg-gray-300 w-24 h-3 rounded-md mb-1"></div>
                                        <span className='px-2 permanent-marker-regular'>Vs</span>
                                        <div className="animate-pulse bg-gray-300 w-24 h-3 rounded-md mb-1"></div>
                                   </div>

                                   <table className='max-w-[450px] h-40 sm:h-58 text-center border-[#8E95A2]/20 border m-auto'>
                                        <thead className='border-[#8E95A2]/20 border shadow-2xl'>
                                             <tr className='text-[#60A5FA]'>
                                                  <th>Game :</th>
                                                  <th className='w-28 p-2'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </th>
                                                  <th className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td className='text-[#60A5FA] px-10'><strong>Rating</strong></td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                             </tr>
                                             <tr className='border-[#8E95A2]/20 border shadow-2xl'>
                                                  <td className='text-[#60A5FA]'><strong>Price</strong></td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                             </tr>
                                             <tr className='border-[#8E95A2]/20 border shadow-2xl'>
                                                  <td className='text-[#60A5FA]'><strong>ReleaseYear</strong></td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                                  <td className='w-28'>
                                                       <div className="animate-pulse bg-gray-300 w-28 h-3 rounded-md mb-1 inline-block"></div>
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>

                              </div>
                         </>
                    </section>
               </section>


          </section>


     )
}

export default ComparatorSkeleton
