import React, { useEffect,useMemo,useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Card from "./Card"
function RecordsList() {
  const records = useContext(GlobalContext)
  const [query, setQuery] = useState("")
  const [select, setSelect] = useState("Select by categories")
  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
 }

  const handleSelect = (e)=>{
        e.preventDefault() 
        setSelect(e.target.value)
  }

  //! Barra di ricerca per cercare nei titoli (title)
  let filteredRecordsByTitle =useMemo(()=>{
    return (records.filter(record => record.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
  }, [query,records])

  //!Creazione array  di categorie senza duplicate  
  let filtredCategory = [];
  filteredRecordsByTitle.forEach(el => {
    if (!filtredCategory.includes(el.category)) {
      filtredCategory.push(el.category)}
  })
 
  //! select per selezionare le categorie 
  let finalFilter = useMemo(() => {
  return(
  select === "Select by categories" ? filteredRecordsByTitle : filteredRecordsByTitle.filter(el=>el.category===select)
)},[select,filteredRecordsByTitle])
  
 
 return (
    <div className='w-fit m-auto mt-10 ' >
      <div className='w-fit m-auto'>
       {/* search by title */}
        <label>
          Search by Title
        </label>
        <input type="text" className='border mt-3 ml-1 ' value={query} onChange={handleInput} />
      </div>
            {/* Select by category */}
      <select name="categories" id="categories" onChange={handleSelect} className='border '>
        <option value="Select by categories">All categories</option>
        {
         filtredCategory.map((el,index)=>{
          return (
            <option value={el} key={index}>{el}</option>
          )
         })
        }
        
      </select>
      {finalFilter.length> 0 ? finalFilter.map((record, index) => {
        return (<div key={index}>
          <Card record={record} />
        </div>)
      }):" No games founded"}

    </div>
  )
}

export default RecordsList
