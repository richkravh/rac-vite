import { useState } from 'react'
import Hero from '../src/component/home/Hero'
import Intro from '../src/component/home/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Hero />
      <Intro />
    </section>
  )
}

export default App;
