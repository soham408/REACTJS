import { useState } from "react";
import First from "./First.jsx"
function App() {
  
let [counter, setCounter] = useState(15)

  
  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  if (counter < 0 || counter > 20){
      console.error("counter is out of range");
      return
  
  }

  return (
    <>
    <First/>
    <h1>counter project</h1>
    <h2>Counter value: {counter}</h2>
    <br/>
    <button 
    onClick={addValue}>Add value </button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
