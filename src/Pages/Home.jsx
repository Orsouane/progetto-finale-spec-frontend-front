import RecordsList from "../Components/RecordsList"
import React from 'react'
import FavouriteComponente from "../Components/FavouriteComponente"
function Home() {
  return (
    <div>
       <div className="flex justify-between bg-red-200">
        <div></div>
        <FavouriteComponente/>
       </div>
          <RecordsList />
    </div>
  )
}

export default Home
