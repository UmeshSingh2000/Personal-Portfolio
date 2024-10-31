import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import ContactMe from './Pages/ContactMe'


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ background: 'linear-gradient(180deg, #F5F5F5 0%, #E0E0E0 100%)', }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
