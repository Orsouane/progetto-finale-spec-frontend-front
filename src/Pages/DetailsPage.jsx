import React from 'react'
import { useParams } from 'react-router-dom'
function DetailsPage() {
    const {id}=useParams()
  return (
    <div>
      hello from detail page {id}
    </div>
  )
}

export default DetailsPage
