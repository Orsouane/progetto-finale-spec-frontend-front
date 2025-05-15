import React from 'react'
import { CiSearch } from "react-icons/ci"
function SearchBar({ debounceSearch, RefSearch }) {
     return (

          <div className='flex items-center border border-[#8E95A2] h-fit rounded-md mt-3 w-full bg-[#1F2937] max-w-[800px] m-auto'>
               <label className=' mx-1 '>
                    <CiSearch className='text-[#8E95A2]' />
               </label>
               <input type="text" className='w-full focus:outline-none focus:ring-0 focus:border-transparent text-white  text-xs p-1 ' ref={RefSearch} onChange={e => debounceSearch(e.target.value)} placeholder='Search games..' />
          </div>


     )
}

export default SearchBar
