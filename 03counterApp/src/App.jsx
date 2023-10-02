import './App.css'
import { useState } from 'react';

function App() {

  // let counter = 12;
  const [counter , setcounter ] = useState(10);
  const addvalue =() => {
    if (counter <= 19)
      setcounter(counter => counter+1)
  }
  const removevalue = () => {
    if (counter >= 1 )
    setcounter(counter => counter-1)
  }
  return (
    <>
      <h2>Counter App </h2> 
      <h3> Counter is :  {counter}</h3>
      <button onClick={addvalue}> + </button>
      <button onClick={removevalue} > - </button>
    </>
  )
}

export default App
