import React, { useEffect,useMemo,useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Card from "./Card"
function RecordsList() {
  const records = useContext(GlobalContext)
  const [query, setQuery] = useState("")
  const [select, setSelect] = useState("Select by categories")
  const [order, setOrder] = useState("Order by")

  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
 }

  const handleSelect = (e)=>{
        e.preventDefault() 
        setSelect(e.target.value)
  }

   const handleOrder=(e)=>{
 e.preventDefault() 
 setOrder(e.target.value)
}
  //! Barra di ricerca per cercare nei titoli (title)
  let filteredRecordsByTitle =useMemo(()=>{
    return (records.filter(record => record.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
  }, [query,records])

  //! select per selezionare le categorie 
  let finalFilter = useMemo(() => {
    return (
      select === "Select by categories" ? filteredRecordsByTitle : filteredRecordsByTitle.filter(el => el.category === select)
    )
  }, [select, filteredRecordsByTitle])

  //!Creazione array  di categorie senza duplicate  
  let filtredCategory = [];
  filteredRecordsByTitle.forEach(el => {
    if (!filtredCategory.includes(el.category)) {
      filtredCategory.push(el.category)}
  })
 
//!Order Array
  let orderArray = useMemo(() => {
    const ArrayOrdinato = [...finalFilter]
    if (order === "Title A-Z") {
      return ArrayOrdinato.sort((a, b) => a.title.localeCompare(b.title)

      )
    }
    if (order === "Title Z-A") {
      return ArrayOrdinato.sort((a, b) => b.title.localeCompare(a.title)

      )
    }
    if (order === "Category A-Z") {
      return ArrayOrdinato.sort((a, b) => a.category.localeCompare(b.category)

      )
    }
    if (order === "Category Z-A") {
      return ArrayOrdinato.sort((a, b) => b.category.localeCompare(a.category)

      )
    }
    return finalFilter
  }, [order, finalFilter])

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
      <section className='flex justify-between my-2'>
   
            
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
       <select name="" id="" className='border' onChange={handleOrder}>
         <option value="">Order by</option>
         <option value="Title A-Z" >Title A-Z</option>
         <option value="Category A-Z">category A-Z</option>
         <option value="Title Z-A" >Title Z-A</option>
         <option value="Category Z-A">Category Z-A</option>
       </select>
     </section>
      {orderArray.length> 0 ? orderArray.map((record, index) => {
        return (<div key={index}>
          <Card record={record} />
        </div>)
      }):" No games founded"}

    </div>
  )
}

export default RecordsList
