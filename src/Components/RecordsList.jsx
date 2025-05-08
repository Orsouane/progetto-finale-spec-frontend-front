import React, { useEffect } from 'react'
import { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import Card from "./Card"
function RecordsList() {
  const records = useContext(GlobalContext)
  useEffect(() => { console.log("da recordslist", records) }, [records])
  return (
    <div className='w-fit m-auto mt-10 ' >

      {records.map((record, index) => {
        return (<div key={index}>
          <Card record={record} />
        </div>)
      })}

    </div>
  )
}

export default RecordsList
