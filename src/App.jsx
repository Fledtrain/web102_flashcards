import './App.css'
import Card from './components/Card'

const App = () => {

  return (
    <>
      <header className='font-semibold'>
        <h1 className='text-4xl text-slate-900'>Video Game Mystery FlashCard!</h1>
        <h2 className='text-xl p-5 text-slate-900'>Are you a Gamer!?!? Well lets test your video game knowledge! 🎮</h2>
      </header>
      <Card />
    </>
  )
}

export default App
