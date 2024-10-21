import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [count, setCount] = useState(15)

const addValue = () => {
  if (count === 20) {
    return
  }
  setCount(count + 1) 
}

const removeValue = () => {
  if (count === 1) {
    return
  }
  setCount(count - 1)
  } 

  return (
    <>
     <h1>Counter</h1>
     <h2>Counter Value: {count}</h2>
     <button style={{backgroundColor: 'orange'}} onClick={addValue} >Add Value</button> <br /> <br />
     <button style={{backgroundColor: 'red'}} onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
