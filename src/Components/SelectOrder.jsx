import React from 'react'

function SelectOrder({setOrder}) {
  return (
    <div>
          <select name="" id="" className='border' onChange={(e) => setOrder(e.target.value)}>
              <option value="">Order by</option>
              <option value="Title A-Z" >Title A-Z</option>
              <option value="Category A-Z">category A-Z</option>
              <option value="Title Z-A" >Title Z-A</option>
              <option value="Category Z-A">Category Z-A</option>
          </select>
      
    </div>
  )
}

export default SelectOrder
