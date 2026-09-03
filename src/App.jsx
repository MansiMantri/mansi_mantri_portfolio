import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeRole, setActiveRole] = useState('software_engineer'); // software_engineer, full_stack, data_analyst

  return (
    <>
      <Preloader />
      <Navbar activeRole={activeRole} />
      <Hero activeRole={activeRole} setActiveRole={setActiveRole} />
      <About activeRole={activeRole} />
      <TechnicalSkills activeRole={activeRole} />
      <Internships activeRole={activeRole} />
      <Services />
      <Projects activeRole={activeRole} />
      <Leadership />
      <SoftSkills activeRole={activeRole} />
      <Contact activeRole={activeRole} />
      <Footer activeRole={activeRole} />
    </>
  )
}

export default App

