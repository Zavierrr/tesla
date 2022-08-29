import React, { lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Custom from './pages/Custom'
import Header from './components/Header'
import Footer from './components/Footer'
const BuyTesla = lazy(() => import('./pages/BuyTesla'))

function App() {
  return (
    <div className="App">
      <Suspense>
        <Header />
        <Routes>
          <Route path='/' element={<Custom />}></Route>
          <Route path='/buy_tesla' element={<BuyTesla />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App