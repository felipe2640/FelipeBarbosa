import React, { ReactElement, useState } from 'react'
import Hero from './components/Hero'
import { Projects } from './components/Projects'

function App(): ReactElement {
  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}

export default App
