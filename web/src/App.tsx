import React, { ReactElement, useState } from 'react'
import Form from './components/Form'
import Hero from './components/Hero'
import Navbar from './components/Nav'
import { Projects } from './components/Projects'

function App(): ReactElement {
  const [login, setlogin] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}

export default App
