import {createContext, useEffect, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext()
function GlobalProvider({children}) {
const [records,setRecords]=useState([])
    const getData = async () => {
  
       try {
        const response = await fetch(url) 
        const data = await response.json()
        setRecords(data)
        // console.log(records)
        // console.log(data)
       } catch (error) {
           console.log(error)
       } 
    };
    useEffect(()=>{getData()},[])
  return (
   <GlobalContext.Provider value={records}>
    {children}
   </GlobalContext.Provider>
  )
}
export  {GlobalProvider,GlobalContext}
