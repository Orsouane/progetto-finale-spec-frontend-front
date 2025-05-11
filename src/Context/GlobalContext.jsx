import {createContext, useCallback, useEffect, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext()
function GlobalProvider({children}) {
  //*all games list 
const [records,setRecords]=useState([])
  //*Game to show it details
const [gameDetail, setGameDetail]=useState(null)
//*Game to compare
 //?#1
 const [compare, setCompare] = useState(localStorage.getItem('compare') || "Add to compare");
  //?#2
  const [compare2, setCompare2] = useState(localStorage.getItem('compare2') || "Add to compare");
//* add as favourite
  const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem('favouriteGames') || '[]'));
 

//! GET DI TUTTI I DATI
  const getData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setRecords(data)
      // console.log(records)
      // console.log(data)
    } catch (error) {
      console.log("errore nel recupero dei dati", error)
    }
  },[]) 
    useEffect(()=>{getData()},[])
 
  //! GET one game 
  // const {id} = useParams()
  const getGame = useCallback(async (id) => {
    try {
      const response = await fetch(`${url}/${id}`)
      const data = await response.json()
      setGameDetail(data.game)
      console.log("data from get game detail", data.game)

    } catch (error) {
      console.log("errore nel recupero dei dati", error)
    }
  },[]) 

  return (
    <GlobalContext.Provider value={{ records, gameDetail, getGame, compare, setCompare, compare2, setCompare2, favouriteGames, setFavouriteGames }}>
    {children}
   </GlobalContext.Provider>
  )
}
export  {GlobalProvider,GlobalContext}
