import React, { useContext, useEffect, useState } from 'react'
import { CompareContext } from '../Context/CompareContext'
import EmptyPage from '../Components/UiComponents/EmptyPage';

function ComparatorPage() {
     //* Giochi 
     const { gameCompare1, gameCompare2 } = useContext(CompareContext);
     const chiaveComparator = ["title", "rating", "releaseYear", "price"]
     //! Avviso utente
     const [messageEmptyPage, setMessageEmptyPage] = useState("")
     useEffect(() => {
          if (!gameCompare1 || !gameCompare2) {
               setMessageEmptyPage("You need to select 2 games to compare");
          }
     }, [gameCompare1, gameCompare2]);

     return (
          <section className='mx-4'>
               {gameCompare1 && gameCompare2 ? (

                    <section className='max-w-[800px] m-auto text-xs sm:text-base mt-2'>
                         {/* le due Games da confrontare  */}
                         <section className='flex justify-between gap-5  '>
                              {/* il primo giocho  */}
                             
                              <div className='  text-sm max-w-92 shadow-2xl bg-[#1F2937]  p-2 rounded-md  hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm '>
                                   <div className='text-white text-center  rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50  m-auto my-2 shadow-2xl border border-stone-700 w-fit '>Game 1</div>
                                   <img src={gameCompare1.image} className='border-[#8E95A2] border shadow-2xl'/>
                                   <div className='grid sm:grid-cols-2 gap-2  pt-2'>
                                        {chiaveComparator.map((el, index) => <p key={index}>

                                             <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                             <span className='text-white'> {gameCompare1[el]} </span>

                                        </p>

                                        )}
                                   </div>
                              </div>




                              {/* il secondo  giocho  */}
                              <div className='  text-sm max-w-92 shadow-2xl bg-[#1F2937]  p-2 rounded-md  hover:border-[#8E95A2] 
                           hover:transform hover:-translate-y-1 
                           transition-all duration-300 ease-out
                           border border-gray-700/80
                           backdrop-blur-sm '>
                                   <div className='text-white text-center  rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50  m-auto my-2 shadow-2xl border border-stone-700 w-fit '>Game 2</div>
                                   <img src={gameCompare2.image}
                                        className='border-[#8E95A2] border shadow-2xl' />
                                   <div className='grid sm:grid-cols-2 gap-2   pt-2'>
                                        {chiaveComparator.map((el, index) => <p key={index} className=''>

                                             <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                             <span className='text-white'> {gameCompare2[el]} </span>

                                        </p>

                                        )}
                                   </div>
                              </div>

                         </section>

                         {/* Paragrafo e tabella  */}
                         <section className='my-10'>

                              <>
                              {/* paragrafo */}
                                   <div className='bg-[#1F2937] p-2 text-white max-w-[800px] m-auto rounded-md text-xs sm:text-base  border-[#8E95A2]/20 border shadow-2xl '>
                                        <div className='text-white text-center flex gap-1  rounded-md px-5 py-1 w-fit  bg-[#0F1923]/50  m-auto mb-2 shadow-2xl border border-stone-700  justify-center'> Games Overview</div>
                                       
                                        <p>{gameCompare1.title} is {gameCompare1.description} developed by {gameCompare1.developer} and released in {gameCompare1.releaseYear}. On the other hand, {gameCompare2.title} is {gameCompare2.description} developed by {gameCompare2.developer} and released in {gameCompare2.releaseYear}.</p>
                                   </div>


                                   <div className='w-fit  m-auto mt-10 bg-[#1F2937] p-3  rounded-md  border-[#8E95A2]/20 border '>
                                        {/* tabella  */}
                                        <div className='text-white text-center flex gap-1  rounded-md p-1  bg-[#0F1923]/50  m-auto mb-2 shadow-2xl border border-stone-700  justify-center'>{gameCompare1.title} <span className='px-2 permanent-marker-regular'>Vs</span> {gameCompare2.title}</div>
                                        <table className=' max-w-[450px] h-40 sm:h-58 text-center border-[#8E95A2]/20 border   m-auto '>
                                             <thead className=' border-[#8E95A2]/20 border shadow-2xl '>
                                                  <tr className='text-[#60A5FA]'>
                                                       <th >Game : </th>
                                                       <th className='w-35 p-2'>{gameCompare1.title}</th>
                                                       <th className='w-35'>{gameCompare2.title}</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr>
                                                       <td className='text-[#60A5FA] px-10'>
                                                            <strong>Rating</strong>
                                                       </td>
                                                       <td className={`text-white ${gameCompare1.rating < gameCompare2.rating ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare1.rating}
                                                       </td>
                                                       <td className={`text-white ${gameCompare2.rating < gameCompare1.rating ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare2.rating}
                                                       </td>
                                                  </tr>
                                                  <tr className=' border-[#8E95A2]/20 border shadow-2xl '>
                                                       <td className='text-[#60A5FA] '>
                                                            <strong>Price</strong>
                                                       </td>
                                                       <td className={`text-white ${gameCompare1.price > gameCompare2.price ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare1.price}
                                                       </td>
                                                       <td className={`text-white ${gameCompare2.price > gameCompare1.price ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare2.price}
                                                       </td>
                                                  </tr>

                                                  <tr className=' border-[#8E95A2]/20 border shadow-2xl '>
                                                       <td className='text-[#60A5FA]'>
                                                            <strong>ReleaseYear</strong>
                                                       </td>
                                                       <td className={`text-white ${gameCompare1.releaseYear < gameCompare2.releaseYear ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare1.releaseYear}
                                                       </td>
                                                       <td className={`text-white ${gameCompare2.releaseYear < gameCompare1.releaseYear ? 'bg-red-500' : 'bg-green-500'}`}>
                                                            {gameCompare2.releaseYear}
                                                       </td>
                                                  </tr>
                                             </tbody>

                                        </table>
                                   </div>
                              </>
                         </section>
                    </section>

               ) : <EmptyPage messageEmptyPage={messageEmptyPage} />}
          </section>


     )
}

export default ComparatorPage