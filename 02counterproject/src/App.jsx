import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;
  let [counter, updateCounter] = useState(5);
  const addValue = () => {
    // counter is the value i.e. 5 and increaseCounter is the function which will be used to mannipulate this value
    // counter++;
    // here if we are even updating the value of counter
    // it will not upade the our Counter value: label
    if (counter < 20) {
      updateCounter(counter + 1);
      console.log(counter)
    }
  }

  const decreaseValue = () => {
    console.log(counter >= 0)
    if (counter > 0) {
      updateCounter(counter - 1);
    }
  }


  return (
    <>
      <h1>Hey this is counter project</h1>
      <h2 id='counter'>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button><br />

      <button onClick={decreaseValue}>Decrease Value{counter}</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
