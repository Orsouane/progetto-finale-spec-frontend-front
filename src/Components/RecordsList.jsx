import React, {useCallback, useMemo,useRef,useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Comparator from './Comparator';
import GameCard from "./GameCard"
import { debounce } from 'lodash';

function RecordsList() {

  const {records} = useContext(GlobalContext)
  const [query, setQuery] = useState("")
  const RefSearch=useRef("")
  const [select, setSelect] = useState("Select by categories")
  const [order, setOrder] = useState("Order by")

 



  const handleSelect = (e)=>{
        e.preventDefault() 
        setSelect(e.target.value)
  }

   const handleOrder=(e)=>{
 e.preventDefault() 
 setOrder(e.target.value)
}

  //! Barra di ricerca per cercare nei titoli (title)
  //*Debounce per la ricerca : 
  const debounceSearch = useCallback(debounce(setQuery, 800), [])
  //* la lista dei giochi aggiornata dopo e durante la ricerca 
  let filteredRecordsByTitle =useMemo(()=>{
    return (records.filter(record => record.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
  }, [query,records])

  //!Creazione array  di categorie senza duplicate  
  let filtredCategory = [];
  filteredRecordsByTitle.forEach(el => {
    if (!filtredCategory.includes(el.category)) {
      filtredCategory.push(el.category)
    }
  })
  //! select per selezionare le categorie
  //* la lista dei giochi aggiornata dopo il selezionamento della categoria
  let finalFilter = useMemo(() => {
    return (
      select === "Select by categories" ? filteredRecordsByTitle : filteredRecordsByTitle.filter(el => el.category === select)
    )
  }, [select, filteredRecordsByTitle])


 
//!Order Array
//*Ordinare la lista dei giochi 
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
       <input type="text" className='border mt-3 ml-1 ' ref={RefSearch} onChange={e => debounceSearch(e.target.value)} />
      </div>
       
      <section className='flex justify-between my-2'>
       {/* Select by category */}
      <select name="categories" id="categories" onChange={handleSelect} className='border '>
        <option value="Select by categories">All categories</option>
        {
         filtredCategory.map((el,index)=>{
          return (
            <option value={el} key={index}>{el}</option>
          ) })
        }  
      </select>
       {/* Orderby */}
       <select name="" id="" className='border' onChange={handleOrder}>
         <option value="">Order by</option>
         <option value="Title A-Z" >Title A-Z</option>
         <option value="Category A-Z">category A-Z</option>
         <option value="Title Z-A" >Title Z-A</option>
         <option value="Category Z-A">Category Z-A</option>
       </select>
     </section>
      {orderArray.length> 0 ? orderArray.map((game, index) => {
        return (<div key={index}>
          <GameCard game={game}
                />
        </div>)
      }):" No games founded"}
     <Comparator orderArray={orderArray}/>
    </div>
  )
}

export default RecordsList
