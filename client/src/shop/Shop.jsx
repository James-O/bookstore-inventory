import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

function Shop() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5001/all-books')
     .then(res=>res.json())
     //.then(data=>console.log(data))
     .then(data=>setBooks(data))
     .catch(err=>console.log(err))
  },[])
  return (
    <div className='mt-24 mx-4 lg:mx-24'>
      <h1 className='text-5xl font-bold text-center text-blue-950'>Welcome to the Bookstore!</h1>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book=>(
          <Card
          className="max-w-sm"
          key={book._id}
        >
          <img src={book.imageUrl} alt={book.bookTitle} className='h-72'/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className='bg-blue-700 font-semibold rounded py-2 text-white'>Buy Now</button>
        </Card>
        ))}
      </div>
    </div>
  )
}

export default Shop