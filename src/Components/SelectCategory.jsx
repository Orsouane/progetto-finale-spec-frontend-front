import React from 'react'

function SelectCategory({ filteredRecordsByTitle, setSelect }) {
     //!Creo un array che contiene solo le categorie uniche 
     let filtredCategory = []
     filteredRecordsByTitle.forEach(el => { if (!filtredCategory.includes(el.category)) filtredCategory.push(el.category) })
     return (
          <div>
               <select name="categories" id="categories" onChange={e => { setSelect(e.target.value) }} className=' bg-[#1F2937] rounded-md text-[#8E95A2] border border-[#8E95A2]  text-xs max-w-40 p-1 cursor-pointer '>
                    <option value="All categories" >
                         All categories</option>
                    {
                         filtredCategory.map((el, index) => {
                              return (
                                   <option value={el} key={index} >{el}</option>
                              )
                         })
                    }
               </select>
          </div>
     )
}

export default SelectCategory
