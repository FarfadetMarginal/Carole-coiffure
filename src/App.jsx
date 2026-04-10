import { useState } from 'react'
import './styles/1.scss'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Carousel from './components/s1.jsx'
import Ou from './components/ou.jsx'
import HorairesTarifs from './components/tarif.jsx'

function App() {

  return (
    <>
    <Header />
    <Carousel />
    <HorairesTarifs />
    <Ou />
    <Footer />
    </>
  )
}

export default App
