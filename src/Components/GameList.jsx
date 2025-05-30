import React, { useEffect, useState } from 'react'
import EmptyPage from '../Components/UiComponents/EmptyPage';
import GameCard from "../Components/GameCard"
function GameList({ GameToShow, RefSearch,setQuery }) {
     


     //! Messagio da visualizzare quando la pagina  è vuota dopo la ricerca 
     const [messageEmptyPage, setMessageEmptyPage] = useState("")
     useEffect(() => {
          if (GameToShow.length === 0) {
               setMessageEmptyPage("No games found matching your search ");
          }
     }, [GameToShow]);
  return (
    <div>
            {GameToShow.length > 0 ? (
                 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  max-w-[1300px] m-auto'>

                      {GameToShow.map((game, index) => (
                           <div key={index} >
                                <GameCard game={game} />
                           </div>

                      ))}

                 </section>
            ) : <EmptyPage messageEmptyPage={messageEmptyPage} RefSearch={RefSearch} setQuery={setQuery} />}
    </div>
  )
}

export default GameList
