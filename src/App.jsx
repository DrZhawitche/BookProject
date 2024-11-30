import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About.jsx'
import Plot from './Plot/Plot'
import Themes from './Themes/Themes'
import Adaptations from './Adaptations/Adaptations'
import Multimedia from './Multimedia/Multimedia'
import Footer from './Footer/Footer'

import './App.css'

function App() {

  return (
    <Router>
      <Navbar />

      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/plot' element={<Plot />} />
          <Route path='/themes' element={<Themes />} />
          <Route path='/adaptations' element={<Adaptations />} />
          <Route path='/multimedia' element={<Multimedia />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App