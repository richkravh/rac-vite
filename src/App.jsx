import { useState } from 'react'
import Hero from '../src/component/home/Hero'
import Intro from '../src/component/home/Intro'
import HelpRomo from './component/home/HelpRomo'
import Disclaimer from './component/home/Disclaimer'

function App() {

  return (
    <section>
      <Hero />
      <Intro />
      <HelpRomo />
      <Disclaimer />
    </section>
  )
}

export default App;
