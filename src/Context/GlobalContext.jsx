import { createContext, useCallback, useEffect, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext()
function GlobalProvider({ children }) {
     //*all games list 
     const [records, setRecords] = useState([])
     //*Game to show it details
     const [gameDetail, setGameDetail] = useState(null)
     const [gameCompare1, setGameCompare1] = useState(null);
     const [gameCompare2, setGameCompare2] = useState(null);
     
     //*Game to compare
     const [compare, setCompare] = useState(sessionStorage.getItem("compare") || "Add to compare");
     const [compare2, setCompare2] = useState(sessionStorage.getItem("compare2") || "Add to compare");
     useEffect(() => {
          sessionStorage.setItem("compare", compare);
     }, [compare]);

     useEffect(() => {
          sessionStorage.setItem("compare2", compare2);
     }, [compare2]);


     //* add as favourite
     const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem('favouriteGames') || '[]'));



     //! GET DI TUTTI I DATI
     const getData = useCallback(async () => {
          try {
               const response = await fetch(url)
               const data = await response.json()
               setRecords(data)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }, [])
     useEffect(() => { getData() }, [])

     //! GET one game 
     const getGame = useCallback(async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameDetail(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }, [])

     
     const getGame1 = useCallback(async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameCompare1(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }, [])
     const getGame2 = useCallback(async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameCompare2(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }, [])
   
     return (
          <GlobalContext.Provider value={{ records, gameDetail, getGame, compare, setCompare, compare2, setCompare2, favouriteGames, setFavouriteGames, getGame1, getGame2, gameCompare1, gameCompare2}}>
               {children}
          </GlobalContext.Provider>
     )
}
export { GlobalProvider, GlobalContext }
