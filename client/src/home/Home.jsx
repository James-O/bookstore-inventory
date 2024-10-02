import React from 'react'
import Banner from '../components/banner'
import BestSellingBooks from './BestSellingBooks'
import FavouriteBooks from './FavouriteBooks'
import PromoBanner from './PromoBanner'
import Otherbooks from './Otherbooks'
import Reviews from './Reviews'

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellingBooks/>
      <FavouriteBooks/>
      <PromoBanner/>
      <Otherbooks/>
      <Reviews/>
      {/* <div className='h-screen'>
        <Banner/>
      </div>
      <div className='h-screen bg-red-600'></div> */}
    </div>
  )
}

export default Home