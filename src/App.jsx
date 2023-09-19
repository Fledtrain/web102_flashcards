import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className='text-4xl' >What Video Games character is this?</h1>
        <h2 className=''>Lets test your video game knowledge!</h2>
      </header>
      <Card />
    </>
  )
}

export default App
