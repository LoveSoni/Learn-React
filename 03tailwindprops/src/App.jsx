import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetSignInComponent from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  let myObject = { username: 'love', age: 30 }
  let myArray = ['gmail', 'yahoo'];

  return (
    <>

      <GetSignInComponent userEmailPattern='username@gmail.com' someObject={myObject} someArray={myArray} />
    </>
  )
}

export default App
