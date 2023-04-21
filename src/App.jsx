import React from 'react'
import Hero from './views/Hero'
import About from './views/About'
import Ecosystem from './views/Ecosystem'
import Tokenomics from './views/Tokenomics'
import Roadmap from './views/Roadmap'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </>
  )
}

export default App