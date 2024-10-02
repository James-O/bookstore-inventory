import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

function BestSellingBooks() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5001/all-books')
        .then(res=>res.json())
        //.then(data=>console.log(data))
        .then(data=>setBooks(data.slice(0, 6)))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <BookCard books={books} headline='Best selling books'/>
    </div>
  )
}

export default BestSellingBooks