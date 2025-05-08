import React, { useEffect,useMemo,useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Card from "./Card"
function RecordsList() {
  const records = useContext(GlobalContext)
  const [query, setQuery] = useState("")
  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
 }
  //! Barra di ricerca per cercare nei titoli (title)
  const filteredRecordsByTitle =useMemo(()=>{
    return records.filter(record => record.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }, [query, records])

  return (
    <div className='w-fit m-auto mt-10 ' >
      <div className='w-fit m-auto'>
        <label>
          Search by Title
        </label>
        <input type="text" className='border mt-3 ml-1 ' value={query} onChange={handleInput} />
      </div>
      {filteredRecordsByTitle.length> 0 ? filteredRecordsByTitle.map((record, index) => {
        return (<div key={index}>
          <Card record={record} />
        </div>)
      }):" No games founded"}

    </div>
  )
}

export default RecordsList
