import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext,useEffect,useState } from 'react'
function DetailsPage() {
    const { id } = useParams()
    const { gameDetail, getGame }=useContext(GlobalContext)
 console.log("game data ",gameDetail) 
    useEffect(() => { getGame(id); }, [id, getGame]);
       
           
     
   
  return (
    <div>
     {gameDetail && 
     <div>
          <p>title:{gameDetail.title}</p>
          <p>category : {gameDetail.category}</p>
          <p>developer :{gameDetail.developer}</p>
          <img src={gameDetail.image} />
          <p> rating : {gameDetail.rating}</p>
          <p> releaseYear : {gameDetail.releaseYear}</p>
          <p> price :{gameDetail.price}$</p>
          <p> description :{gameDetail.description}</p>

     </div>
   
     
     }
    </div>
  )
}

export default DetailsPage
