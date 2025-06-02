import React, { useCallback, useEffect, useMemo, useRef, useState, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalContext"
import Comparator from "../Components/Comparator"
import { debounce } from 'lodash';
import SearchBar from '../Components/SearchBar';
import SelectOrder from '../Components/SelectOrder';
import SelectCategory from '../Components/SelectCategory';
import Jumbotron from '../Components/UiComponents/Jumbotron/Jumbotron';
import ScrollIndicator from '../Components/UiComponents/ScrollIndicator';
import GameList from '../Components/GameList';
import LoadButton from '../Components/UiComponents/LoadButton';


function RecordsList() {

     //*Tutti i giochi
     const { records } = useContext(GlobalContext)
     //* Stato per salvare la query di ricerca dell'utente
     const [query, setQuery] = useState("")
     //* Ref per accedere direttamente al valore dell'input di ricerca
     const RefSearch = useRef("")
     //* Stato per la categoria selezionata dal select
     const [select, setSelect] = useState("All categories")
     //* Stato per l'ordine selezionato dal select
     const [order, setOrder] = useState("Order by")
     //* Toggle params 
     const [show, setShow] = useState(false)

     //?Search
     //!Debounce per il search 
     const debounceSearch = useCallback(debounce(setQuery, 800), [])


     //! Creo un array che contiene lettere o che è uguale a quello  che stato cercato dal utente 
     let filteredRecordsByTitle = useMemo(() => records.filter(record => record.title.toLowerCase().includes(query.toLowerCase().trim())), [query, records])
  

     //? Categories
     //! Ristituisco records che hanno la stessa categoria selezionata 
     let finalFilter = useMemo(() => select === "All categories" ? filteredRecordsByTitle : filteredRecordsByTitle.filter(el => el.category === select), [select, filteredRecordsByTitle])

     //? Order
     //!Ordine della lista dei records 
     let orderArray = useMemo(() => {
          const ArrayOrdinato = [...finalFilter]
          if (order === "Title A-Z") return ArrayOrdinato.sort((a, b) => a.title.localeCompare(b.title))
          if (order === "Title Z-A") return ArrayOrdinato.sort((a, b) => b.title.localeCompare(a.title))
          if (order === "Category A-Z") return ArrayOrdinato.sort((a, b) => a.category.localeCompare(b.category))
          if (order === "Category Z-A") return ArrayOrdinato.sort((a, b) => b.category.localeCompare(a.category))
          return finalFilter
     }, [order, finalFilter])

     //? Buttons
     //! Gestione  di giochi da visualizzare alla volta  nel Record list
     const [GameToShow, setGameToShow] = useState([])

     const RefCount = useRef(12);

     useEffect(() => {
          const count = RefCount.current || 12;
          setGameToShow(orderArray.slice(0, count));
     }, [orderArray, query]);


     const loadMore = () => {
          setGameToShow(prev => {
               const newCount = prev.length + 6;
               RefCount.current = newCount;
               return orderArray.slice(0, newCount);
          });
     }

     const loadLess = () => {
          setGameToShow(prev => {
               const newCount = Math.max(12, prev.length - 6);
               RefCount.current = newCount;
               return orderArray.slice(0, newCount);
          });
     }
     //? Filter-button
     //! show/!show filtri/search/compare  
     const toggleShow = () => {
          setShow(!show)
     }

     return (
          <>
          <ScrollIndicator />
          <Jumbotron />

               <section className="sticky top-[72px] bg-[#0F1923] z-40 flex flex-col pt-2  mt-3 mb-8 w-full max-w-[1300px] m-auto rounded-b-4xl" >
                    {/* toggle show */}
                    <div className=' bg-[#1F2937]/25  rounded-b-4xl shadow-xl mx-2  p-4'>
                         <div className="flex justify-between items-center    " >
                               {/* Contatore */}
                              <p className="text-white flex flex-col">
                                   <span>All games : {GameToShow.length}</span>
                                   
                              </p>
                              {/* Filter button */}
                              <button onClick={toggleShow} className="setting-btn mt-1 cursor-pointer ">
                                   <span className="bar bar1"></span>
                                   <span className="bar bar2"></span>
                                   <span className="bar bar1"></span>
                              </button>


                         </div>

                         <div className={`${show ? "h-50 opacity-100" : "h-0 opacity-0 overflow-hidden "}  transition-all duration-200 `}  >
                              {/* barra di ricerca  */}
                              <section className="mb-4 px-4">
                                   <SearchBar debounceSearch={debounceSearch} RefSearch={RefSearch} />
                              </section>
                              {/* filter per categoria e Ordinare giochi */}
                              <section className="flex justify-between gap-2 max-w-[800px] m-auto mb-4 px-4 ">
                                   {/* filter */}
                                   <SelectCategory setSelect={setSelect} filteredRecordsByTitle={filteredRecordsByTitle} />
                                   {/* Order */}
                                   <SelectOrder setOrder={setOrder} />
                              </section>
                              <Comparator GameToShow={GameToShow} />
                         </div>
                    </div>
               </section>

               <div className="px-4">
                    {/* Games */}

                    <GameList GameToShow={GameToShow} RefSearch={RefSearch} setQuery={setQuery} />
                    {/* load buttons */}
                    <LoadButton GameToShow={GameToShow} loadLess={loadLess} loadMore={loadMore} orderArray={orderArray} />
               </div>

              
          </>


     )
}

export default RecordsList
