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
    <div className='flex border gap-1 my-2 justify-between'>
          <select onChange={e=>setCompare(e.target.value)}>
                    <option value="">{compare}</option>
                
                {/* options first game */}
                    {
                            orderArray.map((element,index)=> <option value={element.title  } key={index}>{element.title  }   </option>

                            )
                    }
           </select>
           {/* options  second game */}
          <select onChange={e=>setCompare2(e.target.value)}>
                    <option value="">{compare2}</option>

                    {
                        orderArray.map((element, index) => <option value={element.title}  key={index}>{element.title}   </option>

                        )
                    }
          </select>
    {/* button to navigate to compare page */}
      <button onClick={handleCompare} className='border my-1 mx-2'>Compare</button>
    </div>
  )
}

export default Comparator
