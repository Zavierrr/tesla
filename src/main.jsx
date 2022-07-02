import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import './assets/styles/reset.css'
import './assets/icon/iconfont.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
