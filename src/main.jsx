import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth } from './Components-food/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Appp from './Appp'
// import Address from "./Address"
// import Book from "./Book"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Router>
  <React.StrictMode>
    <Routes>
      <Route exact path='/' element={<Auth/>} />
      <Route exact path='/app' element={<App/>} />
    </Routes>
  <App />
  </React.StrictMode>,
 </Router>
)
