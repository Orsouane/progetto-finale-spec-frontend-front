import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import EmptyPageCompare from "../Components/UiComponents/EmptyPageCompare"
function ComparatorPage() {
     const { gameCompare1, gameCompare2 } = useContext(GlobalContext);
     const chiaveComparator = ["title", "rating", "releaseYear", "price"]

     return (
          <>
               {gameCompare1 && gameCompare2 ? (
                    <section className='max-w-[800px] m-auto bg-red-200 '>
                         <section className='flex justify-center gap-100 '>

                              <div className=' p-2 rounded-md'>
                                   <div className='flex  gap-50'>


                                        <div className='bg-[#1F2937]  p-3 rounded-md text-sm w-92 '>
                                             <img src={gameCompare1.image} />
                                             <div className='grid grid-cols-2 gap-2  pt-2'>
                                                  {chiaveComparator.map((el, index) => <p key={index} className=''>

                                                       <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                                       <span className='text-white'> {gameCompare1[el]} </span>

                                                  </p>

                                                  )}
                                             </div>
                                        </div>


                                        <div className='bg-[#1F2937] p-2 rounded-md'>


                                             <div className='bg-[#1F2937] w-92  p-3 rounded-md text-sm '>
                                                  <img src={gameCompare2.image} />
                                                  <div className='grid grid-cols-2 gap-2   pt-2'>
                                                       {chiaveComparator.map((el, index) => <p key={index} className=''>

                                                            <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                                            <span className='text-white'> {gameCompare2[el]} </span>

                                                       </p>

                                                       )}
                                                  </div>
                                             </div>


                                        </div>

                                   </div>


                              </div>

                         </section>
                         <section className='mt-10'>

                              <>
                                   <div className='bg-[#1F2937] p-2 text-white w-[800px] m-auto rounded-md'>
                                        <p>{gameCompare1.title} is {gameCompare1.description} developed by {gameCompare1.developer} and released in {gameCompare1.releaseYear}. On the other hand, {gameCompare2.title} is {gameCompare2.description} developed by {gameCompare2.developer} and released in {gameCompare2.releaseYear}.</p>
                                   </div>


                                   <div className='w-fit  m-auto mt-10 bg-[#1F2937] p-3  rounded-md'>
                                        <table className='w-92 h-52 text-center border m-auto '>
                                             <thead className='border'>
                                                  <tr className='text-[#60A5FA]'>
                                                       <th >Game : </th>
                                                       <th className='w-32 p-2'>{gameCompare1.title}</th>
                                                       <th className='w-32'>{gameCompare2.title}</th>
                                                  </tr>
                                             </thead>
                                             <tbody >
                                                  <tr>
                                                       <td className='text-[#60A5FA]'>
                                                            <strong>Rating</strong>
                                                       </td>
                                                       <td style={{
                                                            backgroundColor: gameCompare1.rating < gameCompare2.rating ? 'red' : 'green'
                                                       }} className='text-white' >{gameCompare1.rating}
                                                       </td>
                                                       <td className='text-white' style={{
                                                            backgroundColor: gameCompare2.rating < gameCompare1.rating ? 'red' : 'green'
                                                       }}>{gameCompare2.rating}</td>
                                                  </tr>
                                                  <tr className='border'>
                                                       <td className='text-[#60A5FA]'>
                                                            <strong>Price</strong></td>
                                                       <td className='text-white' style={{ backgroundColor: gameCompare1.price > gameCompare2.price ? "red" : "green" }}>{gameCompare1.price}</td>
                                                       <td className='text-white' style={{ backgroundColor: gameCompare2.price > gameCompare1.price ? "red" : "green" }}>{gameCompare2.price}</td>
                                                  </tr>
                                                  <tr className='border'>
                                                       <td className='text-[#60A5FA]'>
                                                            <strong>ReleaseYear</strong></td>
                                                       <td className='text-white' style={{
                                                            backgroundColor: gameCompare1.releaseYear < gameCompare2.releaseYear ? 'red' : 'green'
                                                       }} >{gameCompare1.releaseYear}</td>
                                                       <td className='text-white' style={{
                                                            backgroundColor: gameCompare2.releaseYear < gameCompare1.releaseYear ? 'red' : 'green'
                                                       }} >{gameCompare2.releaseYear}</td>
                                                  </tr>
                                             </tbody>
                                        </table>
                                   </div>
                              </>
                         </section>
                    </section>

               ) : <EmptyPageCompare />}
          </>

     )
}

export default ComparatorPage