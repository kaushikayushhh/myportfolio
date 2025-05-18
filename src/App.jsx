import React from 'react'
import { motion } from "motion/react"
// import {ReactLenis} from 'lenis/react';
// import Lenis from 'lenis'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Education from './Components/Education'

const App = () => {
  return (
    <motion.div>
  <Header/>
  <About/>
  <Education/>
  <Skills/>
  <Work/>
  <Review/>
  <Contact/>
  <Footer/>
  </motion.div>
  )
}

export default App