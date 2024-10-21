import React, { useState } from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

function Editbook() {
  const { id } = useParams()
  const { bookTitle, authorName, imageUrl,price, description, bookPdfUrl } = useLoaderData()

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Children's",
    "Biographies",
    "Cookbooks",
    "Magazines",
    "Educational",
    "History",
    "Business",
    "Health",
    "Sports",
    "Travel",
    "Religion",
    "Technology",
    "Self-Help",
    "Parenting",
    "Family",
    "Science",
    "Research",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Programming",
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[''])

  const handleCategoryChange = (e) => {
    //console.log(e.target.value)
    setSelectedBookCategory(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault()

    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const updateBook = {
      bookTitle,
      authorName,
      imageUrl,
      price,
      category,
      description,
      bookPdfUrl,
    }

    // API call to update the book data
    fetch(`http://localhost:5001/update-book/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateBook),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert('Book updated successfully')
        // Redirect to the manage book page
        window.location.href = '/admin/dashboard/manage'
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold text-blue-950'>Update this Book data</h1>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name='bookTitle'
              placeholder="Book Name"
              required shadow
              defaultValue={bookTitle}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name='authorName'
              placeholder="Author Name"
              required shadow
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image Url" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name='imageUrl'
              placeholder="Book Image Url"
              required shadow
              defaultValue={imageUrl}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' className='w-full rounded' name='categoryName' defaultValue={selectedBookCategory} onChange={handleCategoryChange} shadow required >
              <option>Select Category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select>
          </div>
        </div>
        {/* third row */}
        <div className='lg:w-full'>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            type="text"
            name='description'
            placeholder="Write your book descriptions here"
            required shadow rows={5}
            defaultValue={description}
          />
        </div>
        {/* fouth row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book pdf Url" />
            </div>
            <TextInput
              id="bookPdfUrl"
              type="text"
              name='bookPdfUrl'
              placeholder="Book pdf Url"
              required shadow
              defaultValue={bookPdfUrl}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="price" />
            </div>
            <TextInput
              id="price"
              type="text"
              name='price'
              placeholder="price"
              required shadow
              defaultValue={price}
            />
          </div>
        </div>
        {/* fifth row */}
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  )
}

export default Editbook