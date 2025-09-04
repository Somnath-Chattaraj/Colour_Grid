import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChaosGrid from './game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorChaosGrid />
    </>
  )
}

export default App
