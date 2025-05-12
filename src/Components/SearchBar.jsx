import React from 'react'
function SearchBar({ debounceSearch, RefSearch }) {
  return (
    <div>
          <label>
              Search by Title
          </label>
          <input type="text" className='border mt-3 ml-1 ' ref={RefSearch} onChange={e => debounceSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar
