import React from 'react'

function Card({record}) {
  return (
    <div className='flex  border gap-1'>
      <p><span className='font-bold'>title:</span>{record.title}-</p>
      <p><span className='font-bold'>category : </span>  {record.category}</p>
    </div>
  )
}

export default Card
