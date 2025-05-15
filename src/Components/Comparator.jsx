import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
function Comparator({ orderArray }) {
     const navigate = useNavigate()
     const { compare, setCompare, compare2, setCompare2 } = useContext(GlobalContext)
     // Resettare il compare al refresh ()
     useEffect(() => {
          setCompare("Add to compare")
          setCompare2("Add to compare")
     }, [])
     //* function to navigate to compare page 
     const handleCompare = (e) => {
          e.preventDefault()
          navigate("/Compare")
     }

     return (
          <div className='flex rounded-md max-w-[400px] gap-1  mb-10 pb-5  bg-[#0F1923] text-white p-2  m-auto '>
               <div className='flex flex-col justify-between w-full   '>

                    {/*Title  Comparing two Games */}
                    <div className='pb-2 '>
                         <p className='text-sm text-center font-semibold'>Comparing two Games</p>
                    </div>

                    {/* Select to compare */}
                    <div className='flex  gap-5 justify-center'>

                         {/* options first game */}
                         <select onChange={e => setCompare(e.target.value)} className='bg-[#8E95A2] rounded-md text-xs p-1  cursor-pointer'>
                              <option value="">{compare}</option>

                              {
                                   orderArray.map((element, index) => <option value={element.title} key={index}>{element.title}   </option>

                                   )
                              }
                         </select>

                         {/* options  second game */}

                         <select onChange={e => setCompare2(e.target.value)} className='bg-[#8E95A2] rounded-md text-xs p-1 cursor-pointer'>
                              <option value="">{compare2}</option>

                              {
                                   orderArray.map((element, index) => <option value={element.title} key={index}>{element.title}   </option>

                                   )
                              }
                         </select>
                         {/* button to navigate to compare page */}
                         <button onClick={handleCompare} className=' my-1 mx-2 bg-[#8E95A2] hover:bg-[#60A5FA] rounded-md text-xs p-1 cursor-pointer w-fit '>Compare</button>
                    </div>
               </div>

          </div>



     )
}

export default Comparator
