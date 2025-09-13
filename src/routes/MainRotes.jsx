import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import HistoryPage from "../pages/HistoryPage"
import SearchPage from "../pages/SearchPage"
import ProfilePage from "../pages/ProfilePage"

function MainRotes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
       <Route path='/history' element={<HistoryPage />} />
       <Route path='/profile' element={<ProfilePage />} />
       <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default MainRotes