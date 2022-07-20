import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Custom from './pages/Custom'
import Header from './components/Header'
import Footer from './components/Footer'
import BuyTesla from './pages/BuyTesla'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Custom />}></Route>
        <Route path='/buy_tesla' element={<BuyTesla />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App