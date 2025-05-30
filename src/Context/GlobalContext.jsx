import { createContext, useEffect, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext()
function GlobalProvider({ children }) {
     //*all games list 
     const [records, setRecords] = useState([])
     //*Game to show it details
     const [gameDetail, setGameDetail] = useState(null)

  //! GET DI TUTTI I DATI
     const getData = async () => {
          try {
               const response = await fetch(url)
               const data = await response.json()
               setRecords(data)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }

     useEffect(() => { getData() }, [])

    
     //! GET one game 
     const getGame =async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameDetail(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }

     

   
     return (
          <GlobalContext.Provider value={{ records, gameDetail, getGame}}>
               {children}
          </GlobalContext.Provider>
     )
}
export { GlobalProvider, GlobalContext }
