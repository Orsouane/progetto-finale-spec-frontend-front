import React, {useCallback, useMemo,useRef,useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Comparator from './Comparator';
import GameCard from "./GameCard"
import { debounce } from 'lodash';
import SearchBar from './SearchBar';
import SelectOrder from './SelectOrder';
import SelectCategory from './SelectCategory';
import FavouriteList from "./FavouriteList"

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

 return (
    <div className=' mx-20 ' >
       <div className="flex justify-between pt-3">
       <div className='text-[#60A5FA]'>BoolGame store</div>
              <FavouriteList/>
             </div>
      <section className=''>
          {/* search by title */}
          <SearchBar debounceSearch={debounceSearch} RefSearch={RefSearch}/>
      </section>
       
      <section className='flex justify-between my-2'>
          {/* Select by category */}
          <SelectCategory setSelect={setSelect} filtredCategory={filtredCategory}/>
          {/* Orderby */}
          <SelectOrder setOrder={setOrder}/>
     </section>
     {/* vizualizzare la lista dei giochi */}
     <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {orderArray.length> 0 ? orderArray.map((game, index) => {
        return (<div key={index} className=''>
                    <GameCard game={game} />        
                </div>)
      }):" No games founded"} 
     </section>
     
     {/* la selezione dei giochi da comparare */}
     <Comparator orderArray={orderArray}/>
    </div>
  )
}

export default RecordsList
