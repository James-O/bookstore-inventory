import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Singlebook() {
    const {_id,bookTitle,imageUrl} = useLoaderData();
  return (
    <div className='mt-28 mx-4 lg:mx-24'>
        <h1>{bookTitle}</h1>
        <img src={imageUrl} alt={bookTitle} className='h-96'/>
    </div>
  )
}

export default Singlebook