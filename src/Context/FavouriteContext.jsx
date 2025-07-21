import React, { createContext, useEffect, useState } from 'react'
const FavouriteContext = createContext()
const url = import.meta.env.VITE_URL;

function FavouriteProvider({ children }) {
     //* Giochi preferiti completi
     const [fullFavourites, setFullFavourites] = useState([]);
     //* Ids
     const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem('favouriteGames') || '[]'));

     useEffect(() => {
          //* Leggo i dati salvati
          const savedDetails = JSON.parse(localStorage.getItem("fullFavourites") || "[]");

          //* Se dati salvati e preferiti hanno stessa lunghezza
          if (savedDetails.length === favouriteGames.length) {
               setFullFavourites(savedDetails);
               return;
          }

          //* Funzione per fetchare dettagli di un singolo gioco 
          const fetchGameDetails = async (game) => {
               try {
                    const res = await fetch(`${url}/${game.slug}`)
                    const data = await res.json(); JSON
                    // console.log(data.game)
                    return data.game; 
               } catch (error) {
                    console.error("Errore fetch gioco:", error);
                    
               }
          };

          //* Funzione per fare fetch di tutti i giochi preferiti
          async function fetchDetails() {
               try {
                    const requests = favouriteGames.map(fetchGameDetails); 
                    // console.log(requests)
                    const detailed = await Promise.all(requests); 
                    // console.log(detailed)
                    setFullFavourites(detailed); 
                    localStorage.setItem("fullFavourites", JSON.stringify(detailed)); 
               } catch (error) {
                    console.error("Errore fetch dettagli:", error);
               }
          }

          //*eseguo fetch dettagli solo se ci sono preferite
          if (favouriteGames.length) fetchDetails();
          else {
               setFullFavourites([]); 
               localStorage.removeItem("fullFavourites"); 
          }
     }, [favouriteGames]); 

     return (
          <FavouriteContext.Provider value={{ favouriteGames, setFavouriteGames, fullFavourites, setFullFavourites }}>
               {children}
          </FavouriteContext.Provider>
     )
}

export { FavouriteProvider, FavouriteContext };


// FavouriteContext.jsx si fa fetch ogni volta che utente accede al FavouritePage 🥵 per il performance
// import React, { createContext, useEffect, useState } from 'react';
// const FavouriteContext = createContext();
// const url = import.meta.env.VITE_URL;

// function FavouriteProvider({ children }) {
//      const [favouriteGames, setFavouriteGames] = useState(
//           JSON.parse(localStorage.getItem('favouriteGames') || '[]')
//      );
//      const [fullFavourites, setFullFavourites] = useState([]);

//      useEffect(() => {
//           localStorage.setItem('favouriteGames', JSON.stringify(favouriteGames));
//           if (favouriteGames.length === 0) {
//                setFullFavourites([]);
//                return;
//           }
//           async function fetchDetails() {
//                try {
//                     const results = await Promise.all(
//                          favouriteGames.map(async (slug) => {
//                               const res = await fetch(`${url}/${slug}`);
//                               const data = await res.json();
//                               return data.game;
//                          })
//                     );
//                     setFullFavourites(results.filter(Boolean));
//                } catch {
//                     setFullFavourites([]);
//                }
//           }
//           fetchDetails();
//      }, [favouriteGames]);

//      const updateFavourites = (slug) => {
//           setFavouriteGames((prev) =>
//                prev.includes(slug) ? prev.filter((f) => f !== slug) : [...prev, slug]
//           );
//      };

//      return (
//           <FavouriteContext.Provider
//                value={{ favouriteGames, updateFavourites, fullFavourites, setFavouriteGames }}
//           >
//                {children}
//           </FavouriteContext.Provider>
//      );
// }

// export { FavouriteProvider, FavouriteContext };

