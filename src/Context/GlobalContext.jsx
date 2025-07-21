import { createContext, useEffect, useState } from "react";
import ServerError from "../Components/UiComponents/ServerError";

import Loader from "../Components/UiComponents/Loader" ;

const url = import.meta.env.VITE_URL;
const GlobalContext = createContext();

function GlobalProvider({ children }) {
     const [records, setRecords] = useState([]);
     const [serverError, setServerError] = useState(false);
     const [loading, setLoading] = useState(true);

     const getData = async () => {
          try {
               const response = await fetch(url);
               if (!response.ok) throw new Error();
               const data = await response.json();
               setRecords(data.games || data);
          } catch (error) {
               console.error("errore nel recupero dei dati", error);
               setServerError(true);
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          getData();
     }, []);

     if (serverError) return <ServerError />;
     if (loading) return <Loader/>;

     return (
          <GlobalContext.Provider value={{ records, getData }}>
               {children}
          </GlobalContext.Provider>
     );
}

export { GlobalProvider, GlobalContext };
