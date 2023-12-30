import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black text-white text-3xl justify-center items-center'>
        <h2>
          Welcome back!
        </h2>
      </div>
    </>
  )
}

export default App
