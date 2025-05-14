import React from 'react'

function SelectCategory({ filtredCategory, setSelect }) {
  return (
    <div>
      <select name="categories" id="categories" onChange={e => { setSelect(e.target.value) }} className=' bg-[#1F2937] rounded-md text-[#8E95A2] text-xs w-40 p-1 cursor-pointer '>
              <option value="Select by categories" >Select by categories</option>
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
