import React from 'react'

function SelectCategory({ filtredCategory, setSelect }) {
  return (
    <div>
          <select name="categories" id="categories" onChange={e => { setSelect(e.target.value) }} className='border '>
              <option value="Select by categories">All categories</option>
              {
                  filtredCategory.map((el, index) => {
                      return (
                          <option value={el} key={index}>{el}</option>
                      )
                  })
              }
          </select>
    </div>
  )
}

export default SelectCategory
