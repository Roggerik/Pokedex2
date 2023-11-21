import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokedex from './Pages/Pokedex'
import FooterApp from './components/FooterMenu'
import Favoritos from './Pages/Favoritos'
import PokeInfo from './components/PokeInfo'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Pokedex/>}/>
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='/:id' element={<PokeInfo/>}/>
        </Routes>
        <FooterApp/>
      </Router>
    </>
  )
}

export default App
