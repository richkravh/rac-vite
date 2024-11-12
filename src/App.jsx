import { useState } from 'react'
import Hero from '../src/component/home/Hero'
import Intro from '../src/component/home/Intro'
import HelpRomo from './component/home/HelpRomo'

function App() {

  return (
    <section>
      <Hero />
      <Intro />
      <HelpRomo />
    </section>
  )
}

export default App;
