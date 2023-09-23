import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const App = () => {

  return (
    <>
      <header>
        <h1 className='text-4xl'>What Video Games character is this?</h1>
        <h2 className=''>Are you a Gamer!?!? Well lets test your video game knowledge! 🎮</h2>
      </header>
      <Card />
    </>
  )
}

export default App
