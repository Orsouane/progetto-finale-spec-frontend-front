import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext,useEffect } from 'react'
function DetailsPage() {
  const chiave = ["title", "category", "developer", "rating", "releaseYear", "price", "description"]
    const { id } = useParams()
    const { gameDetail, getGame }=useContext(GlobalContext)
    useEffect(() => { getGame(id); }, [id, getGame]);
       
  return (
    <div>
     {gameDetail && 
    (  <div> 
        <img src={gameDetail.image} />
        {chiave.map((el,index) => <p key={index}> {`${el}:${gameDetail[el]}`}  </p>)}
       </div>)}
      </div>
  )
}

export default DetailsPage
