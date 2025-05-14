import React, {useCallback, useEffect, useMemo,useRef,useState } from 'react'
import { useContext } from 'react';

import { GlobalContext } from "../Context/GlobalContext"
import Comparator from "../Components/Comparator"
import GameCard from "../Components/GameCard"
import { debounce } from 'lodash';
import SearchBar from '../Components/SearchBar';
import SelectOrder from '../Components/SelectOrder';
import SelectCategory from '../Components/SelectCategory';
import SearchError from '../Components/UiComponents/SearchError';

function RecordsList() {

  const {records} = useContext(GlobalContext)
  const [query, setQuery] = useState("")
  const RefSearch=useRef("")
  const [select, setSelect] = useState("Select by categories")
  const [order, setOrder] = useState("Order by")



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


  //! La lista di giochi da far vedere
  const [GameToShow, setGameToShow] = useState(orderArray.slice(0, 6))
   const loadMore= ()=>{
   setGameToShow(prev => [...prev, ...orderArray.slice(prev.length, prev.length+6)])
 }
   const loadLess= ()=>{
   setGameToShow(prev => prev.slice(0, prev.length - 6));
 }
  useEffect(() => { setGameToShow(orderArray.slice(0, 6)) }, [orderArray])
  return (<>
    <div className=' m-4 ' >
      <section className='mb-4'>
        
          {/* search by title */}
          <SearchBar debounceSearch={debounceSearch} RefSearch={RefSearch}/>
      </section>

       {/* SELECT */}
      <section className='flex justify-between gap-2 max-w-[800px] m-auto mb-4 '>
          {/* Select by category */}
          <SelectCategory setSelect={setSelect} filtredCategory={filtredCategory}/>
      

          {/* Orderby */}
          <SelectOrder setOrder={setOrder}/>
     </section>
      {/* la selezione dei giochi da comparare */}
      <Comparator orderArray={GameToShow} />

     {/* vizualizzare la lista dei giochi */}
   
      {GameToShow.length > 0 ? (<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '> {GameToShow.map((game, index) => {
        return (<div key={index} >
          <GameCard game={game} />
        </div>)
      }) }   </section>) :<SearchError/>} 
    {/* Continuo a fare load finche non raggiungo tutta la lista dei giochi  */}
      {
        GameToShow.length<orderArray.length && (
          <>
            <button onClick={loadMore}>Load</button>
         </>
        
        ) 
      }

      {/* dopo che vieni caricata la seconda pagina appaia un altro buttone che mi permette di redure la lilsta dei giochi da far vizualizzare */}
      {GameToShow.length > 6 && GameToShow.length <= orderArray.length &&
       (
        <button onClick={loadLess}>LoadLess</button>
      )}
        
      
     
   
    </div> 
  
     </>
  )
}

export default RecordsList
