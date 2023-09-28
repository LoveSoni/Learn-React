import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState()


  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += '12345678';
    }
    if (charAllowed) {
      str += '!@#@#$@#$%#$%'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword])
  // generatePassword();
  //  this is not allowed
  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white py-2 text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-2 my-4  text-pink-600'
          placeholder='password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white h-8 px-3 py-1.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(event.target.value) }}
          />
          <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            value={numberAllowed}
            className='cursor-pointer'
            onChange={(e) => { setNumberAllowed((prev) => { !prev }) }}
          />
          <label>Numbers</label>
        </div>
        <input
          type="checkbox"
          value={numberAllowed}
          className='cursor-pointer'
          onChange={(e) => { setCharAllowed((prev) => { !prev }) }}
        />
        <label>Characters</label>
      </div>
    </div>

  );
}

export default App
