import { createContext, useCallback, useEffect, useState } from "react";
import React from "react";
const url = import.meta.env.VITE_URL;
const GlobalContext = createContext();

function GlobalProvider({ children }) {
     const [records, setRecords] = useState([]);
     const [gameDetail, setGameDetail] = useState(null);

     const getData = async () => {
          try {
               const response = await fetch(url);
               const data = await response.json();
               setRecords(data.games || data);
          } catch (error) {
               console.error("errore nel recupero dei dati", error);
          }
     };

     useEffect(() => {
          getData();
     }, []);

     const getGame = useCallback(async (slug) => {
          try {
               const response = await fetch(`${url}/${slug}`);
               const data = await response.json();
               setGameDetail(data.game || data);
          } catch (error) {
               console.error("errore nel recupero dei dati", error);
          }
     }, []);

     return (
          <GlobalContext.Provider value={{ records, gameDetail, getGame }}>
               {children}
          </GlobalContext.Provider>
     );
}

export { GlobalProvider, GlobalContext };
