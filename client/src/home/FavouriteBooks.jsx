import React from 'react'
import FavouriteImage from '../assets/bookimages/book.gallery1.jpg'
import { Link } from 'react-router-dom'

function FavouriteBooks() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col sm:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2 h-full'>
            <img src={FavouriteImage} alt='Favourite Image' className='rounded md:w-10/12 h-96'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-4xl font-bold my-5 md:w-3/5 leading-snug'>Find Your Favourite <span className='text-blue-700'> Book Here!</span></h2>
            <p className='text-xl mb-10 md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis id diam semper mattis. Donec finibus ex id massa facilisis, ac ultricies mi viverra. Quisque ac justo in ex tristique malesuada.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Books Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
                
            </div>
            <Link to={'/shop'} className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-blue-950 transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavouriteBooks