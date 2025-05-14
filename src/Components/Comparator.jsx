import React, {useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
function Comparator({ orderArray }) {
    const navigate=useNavigate()
    const { compare, setCompare, compare2, setCompare2 }= useContext(GlobalContext)
  // Resettare il compare al refresh ()
  useEffect(() => {
    setCompare("Add to compare")
    setCompare2("Add to compare")
  }, [])
//* function to navigate to compare page 
    const handleCompare = (e) =>{
             e.preventDefault()
             navigate("/Compare")
            }

  return (
    <div className='flex rounded-md w-full gap-1 my-10   bg-[#1F2937] text-white p-2  '>
      <div className='flex justify-between w-full mx-2 '>
        <div className='flex flex-col gap-2' >
            <p className='text-sm'>Comparing two Games</p>
            <div className='flex gap-1'>
            <select onChange={e => setCompare(e.target.value)} className='bg-[#8E95A2] rounded-md text-xs p-1'>
              <option value="">{compare}</option>

              {/* options first game */}
              {
                orderArray.map((element, index) => <option value={element.title} key={index}>{element.title}   </option>

                )
              }
            </select>
            {/* options  second game */}
            <select onChange={e => setCompare2(e.target.value)} className='bg-[#8E95A2] rounded-md text-xs p-1'>
              <option value="">{compare2}</option>

              {
                orderArray.map((element, index) => <option value={element.title} key={index}>{element.title}   </option>

                )
              }
            </select>
            </div>
           
          </div>
        
        <div className='flex flex-col justify-center'>
          {/* button to navigate to compare page */}
          <button onClick={handleCompare} className=' my-1 mx-2 bg-[#8E95A2] rounded-md text-xs p-1'>Compare</button>
        </div>
      </div>
     
   
    </div>
  )
}

export default Comparator
