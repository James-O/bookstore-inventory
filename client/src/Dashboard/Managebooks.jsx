
import { Checkbox, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Managebooks() {
  const [Books, setBooks] = useState([])
  //const {id} = useParams()

  useEffect(() => {
    fetch('http://localhost:5001/all-books')
      .then(res => res.json())
      .then(data => setBooks(data))
      //.then(book=>console.log(book))
      .catch(err => console.log(err))
  }, [])
 
  // delete a book
  const handleDelete = (id) => {
    //console.log(id)
    fetch(`http://localhost:5001/book/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      alert('Book deleted successfully')
      window.location.reload()
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-3xl font-bold text-blue-900">Manage your books</h1>
      {/* table */}
      <div>
        <Table hoverable className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Book Title</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit or Manage</Table.HeadCell>
          </Table.Head>
          {/* map through the books and display it to the client */}

          {Books.map((book, index) => (
            <Table.Body className="divide-y" >

              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>${book.price}</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(book._id)} className="bg-red-600 px-2 py-1 ml-3 font-semibold text-white rounded-md hover:bg-green-900">Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
                 
  )
}

export default Managebooks