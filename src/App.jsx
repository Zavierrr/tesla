import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Custom from './pages/Custom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Custom />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App