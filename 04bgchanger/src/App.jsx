import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div style={{
        backgroundColor: color
      }}>Hiii </div>
    </>
  )
}

export default App
