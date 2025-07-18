import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CompareContext } from '../Context/CompareContext'

function Comparator({ GameToShow }) {
     const navigate = useNavigate()
     const { getGame1, getGame2, compare, setCompare, compare2, setCompare2 } = useContext(CompareContext);

     useEffect(() => {
          setCompare("Add to compare")
          setCompare2("Add to compare")
     }, [])

     const handleCompare = (e) => {
          e.preventDefault()
          navigate(`/Compare/${compare}-vs-${compare2}`)
     }

     const HandleFirstGame = (e) => {
          const game = GameToShow.find(g => g.title === e.target.value)
          if (game) {
               getGame1(game.slug)
               setCompare(game.slug)
          } else {
               setCompare(e.target.value)
          }
     }

     const handleSecondGame = (e) => {
          const game = GameToShow.find(g => g.title === e.target.value)
          if (game) {
               getGame2(game.slug)
               setCompare2(game.slug)
          } else {
               setCompare2(e.target.value)
          }
     }

     return (
          <div className='flex gap-1 w-full pb-5 text-white p-2 justify-center rounded-md border border-[#8E95A2] max-w-[320px] sm:max-w-[350px] m-auto'>
               <div className='flex flex-col'>
                    <div className='pb-3'>
                         <p className='text-sm text-center font-semibold'>Comparing two Games</p>
                    </div>
                    <div className='flex gap-3 sm:gap-5 justify-center items-center'>
                         <select onChange={HandleFirstGame} className='bg-[#1F2937] rounded-md text-[#8E95A2] border border-[#8E95A2] text-xs h-8 cursor-pointer max-w-27'>
                              <option value="">{compare === "Add to compare" ? compare : GameToShow.find(g => g.slug === compare)?.title || compare}</option>
                              {GameToShow.map((element, index) => (
                                   <option value={element.title} key={index}>{element.title}</option>
                              ))}
                         </select>
                         <select onChange={handleSecondGame} className='bg-[#1F2937] rounded-md text-[#8E95A2] border border-[#8E95A2] h-8 text-xs max-w-27 cursor-pointer'>
                              <option value="">{compare2 === "Add to compare" ? compare2 : GameToShow.find(g => g.slug === compare2)?.title || compare2}</option>
                              {GameToShow.map((element, index) => (
                                   <option value={element.title} key={index}>{element.title}</option>
                              ))}
                         </select>
                         <button onClick={handleCompare} className='my-1 rounded-md text-xs w-fit bg-[#1F2937] text-[#8E95A2] border border-[#8E95A2] hover:text-white hover:bg-[rgb(129,110,216)] p-1.5 cursor-pointer'>Compare</button>
                    </div>
               </div>
          </div>
     )
}

export default Comparator
