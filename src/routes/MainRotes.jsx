import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import HistoryPage from "../pages/HistoryPage"
import SearchPage from "../pages/SearchPage"
import ProfilePage from "../pages/ProfilePage"
import FoodReel from '../pages/FoodReel'
import OrderFood from '../components/OrderFood'
import HotelDetail from '../components/HotelDetail'

function MainRotes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
       <Route path='/history' element={<HistoryPage />} />
       <Route path='/profile' element={<ProfilePage />} />
       <Route path='/search' element={<SearchPage />} />
       <Route path='/food-reel' element={<FoodReel />} />
       <Route path='/order-food/:id' element={<OrderFood />} />
       <Route path='/hotel-detail/:id' element={<HotelDetail />} />
    </Routes>
  )
}

export default MainRotes