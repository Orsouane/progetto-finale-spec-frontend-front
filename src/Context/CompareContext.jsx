import { createContext, useState } from "react";
import React from 'react'
const url = import.meta.env.VITE_URL;
const CompareContext = createContext()
function CompareProvider({ children }) {

     //* Giochi da confrontare
     const [gameCompare1, setGameCompare1] = useState(null);
     const [gameCompare2, setGameCompare2] = useState(null);

     //* Titoli selezionati per il confronto
     const [compare, setCompare] = useState("Add to compare");
     const [compare2, setCompare2] = useState("Add to compare");

     //?   1° Game to compare
     const getGame1 = async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameCompare1(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }

     //?   2° Game to compare
     const getGame2 = async (id) => {
          try {
               const response = await fetch(`${url}/${id}`)
               const data = await response.json()
               setGameCompare2(data.game)
          } catch (error) {
               console.error("errore nel recupero dei dati", error)
          }
     }

     return (
          <CompareContext.Provider value={{ compare, setCompare, compare2, setCompare2, getGame1, getGame2, gameCompare1, gameCompare2 }}>
               {children}
          </CompareContext.Provider>
     )
}
export { CompareProvider, CompareContext }
