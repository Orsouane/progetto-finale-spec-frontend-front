import {createContext, useCallback, useEffect, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext()
function GlobalProvider({children}) {
const [records,setRecords]=useState([])
  const [gameDetail, setGameDetail]=useState(null)
 
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
    <GlobalContext.Provider value={{ records, gameDetail, getGame }}>
    {children}
   </GlobalContext.Provider>
  )
}
export  {GlobalProvider,GlobalContext}
