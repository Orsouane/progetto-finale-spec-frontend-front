import React, { useCallback, useEffect, useMemo, useRef, useState, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalContext"
import Comparator from "../Components/Comparator"
import GameCard from "../Components/GameCard"
import { debounce } from 'lodash';
import SearchBar from '../Components/SearchBar';
import SelectOrder from '../Components/SelectOrder';
import SelectCategory from '../Components/SelectCategory';
import SearchError from '../Components/UiComponents/SearchError';
import Jumbotron from '../Components/UiComponents/Jumbotron';

function RecordsList() {
     //*Tutti i giochi
     const { records } = useContext(GlobalContext)
     //* Stato per salvare la query di ricerca dell'utente
     const [query, setQuery] = useState("")
     //* Ref per accedere direttamente al valore dell'input di ricerca
     const RefSearch = useRef("")
     //* Stato per la categoria selezionata dal select
     const [select, setSelect] = useState("Select by categories")
     //* Stato per l'ordine selezionato dal select
     const [order, setOrder] = useState("Order by")

     //!Debounce per il search 
     const debounceSearch = useCallback(debounce(setQuery, 800), [])
     

      //! Creo un array che contiene che i loro titolo include quello che stato cercato dal utente 
     let filteredRecordsByTitle = useMemo(() => records.filter(record => record.title.toLowerCase().includes(query.toLowerCase())), [query, records])



     //!Creo un array che contiene solo le categorie uniche 
     let filtredCategory = []
     filteredRecordsByTitle.forEach(el => { if (!filtredCategory.includes(el.category)) filtredCategory.push(el.category) })


     //! Ristituisco records che hanno la stessa categoria selezionata 
     let finalFilter = useMemo(() => select === "Select by categories" ? filteredRecordsByTitle : filteredRecordsByTitle.filter(el => el.category === select), [select, filteredRecordsByTitle])
  
  
     //!Ordine della lista dei records 
     let orderArray = useMemo(() => {
          const ArrayOrdinato = [...finalFilter]
          if (order === "Title A-Z") return ArrayOrdinato.sort((a, b) => a.title.localeCompare(b.title))
          if (order === "Title Z-A") return ArrayOrdinato.sort((a, b) => b.title.localeCompare(a.title))
          if (order === "Category A-Z") return ArrayOrdinato.sort((a, b) => a.category.localeCompare(b.category))
          if (order === "Category Z-A") return ArrayOrdinato.sort((a, b) => b.category.localeCompare(a.category))
          return finalFilter
     }, [order, finalFilter])


     //! Gestione  di giochi da visualizzare alla volta  nel Record list
     //* Stato che inizialmente contiene 12 giochi da visualizzare
     const [GameToShow, setGameToShow] = useState(orderArray.slice(0, 12))
     //* Carico piu Records
     const loadMore = () => setGameToShow(prev => [...prev, ...orderArray.slice(prev.length, prev.length + 6)])
     //* Carico meno records
     const loadLess = () => setGameToShow(prev => prev.slice(0, prev.length - 6))
     //* Al carico della pagina mi carica sempre i primi 12 giochi 
     useEffect(() => setGameToShow(orderArray.slice(0, 12)), [orderArray])

     return (
          <div className="px-4   ">
               {/* Jumbotron */}
               <Jumbotron/>
               <div className="sticky top-16 bg-[#0F1923] z-40 pt-5 mb-10">
                   {/* per la searchBar */}
                    <section className="mb-4">
                         <SearchBar debounceSearch={debounceSearch} RefSearch={RefSearch} />
                    </section>
                    {/* Section per il select order/category */}
                    <section className="flex justify-between gap-2 max-w-[800px] m-auto mb-4">
                         <SelectCategory setSelect={setSelect} filtredCategory={filtredCategory} />
                         <SelectOrder setOrder={setOrder} />
                    </section>
                    {/* Il comparatore  */}
                    <Comparator orderArray={GameToShow} />
               </div>
              {/* la lista dei giochi da vizualizzare  */}
               <div className="h-screen lg:h-[700px] overflow-y-auto relative">
                    {GameToShow.length > 0 ? (
                         <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                              {GameToShow.map((game, index) => (
                                   <div key={index}>
                                        <GameCard game={game} />
                                   </div>
                              ))}
                         </section>
                    ) : <SearchError />}
                       {/* buttons load */}
                  <section className='flex gap-5 justify-between max-w-80 mb-5 mt-4 m-auto '> 
                         {/* LoadMore */}
                      <div>
                              {GameToShow.length < orderArray.length && <button onClick={loadMore}
                                   className="cursor-pointer relative after:content-['Load_More'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-400 p-4   h-8 rounded-full border text-sm border-[#8E95A2] bg-[#1F2937] pointer flex items-center justify-center duration-300 hover:rounded-[25px] hover:w-20 group/button overflow-hidden active:scale-90  "
                              >
                                   <svg
                                        className="w-3 fill-white delay-50 duration-1200 
                                   animate-bounce
                                   group-hover/button:translate-y-12 rotate-180"
                                        viewBox="0 0 384 512"
                                   >
                                        <path
                                             d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                        ></path>
                                   </svg>
                              </button>
                              }
                      </div>
                        
                         {/* Loadless */}
                         <div>
                              {GameToShow.length > 12 && <button onClick={loadLess}
                                   className="cursor-pointer relative
                              after:content-['Load_Less'] 
                              after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 p-4   h-8 rounded-full border text-sm border-[#8E95A2] bg-[#1F2937] pointer flex items-center justify-center duration-300 hover:rounded-[25px] hover:w-20 group/button overflow-hidden active:scale-90  "
                              >
                                   <svg
                                        className="w-3 fill-white delay-50 duration-1200 
                                   animate-bounce group-hover/button:-translate-y-12"
                                        viewBox="0 0 384 512"
                                   >
                                        <path
                                             d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                        ></path>
                                   </svg>
                              </button>}
                         </div>
                       
                  </section>
                 
               </div>
          </div>
     )
}

export default RecordsList
