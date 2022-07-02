import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Custom from './pages/Custom'
import Header from './components/Header'
import Footer from './components/Footer'
import { getCarParams } from './api/request'


function App() {
  const [carParams, setCarParams] = useState([]);
  const [showEdition, setShowEdition] = useState('1')
  useEffect(() => {
    (async () => {
      let { data: carParamsData } = await getCarParams()
      setCarParams(carParamsData)
    })()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Custom carParams={carParams} showEdition={showEdition} setShowEdition={setShowEdition} />}></Route>
      </Routes>
      <Footer carParams={carParams} showEdition={showEdition} />
    </div>
  )
}

export default App