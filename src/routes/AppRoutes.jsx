import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
