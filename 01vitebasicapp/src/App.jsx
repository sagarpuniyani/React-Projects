import  { useState } from 'react';
import './App.css';
import {MyCom} from './MyCom'

function App() {
  console.log("App rerender " , Math.random());
  const [value, setValue] = useState({
    value : 0 
  });

  const clickMe = () => {
    console.log("Loaded");
  }

  const Multiplyby5 = () => {
    setValue({
      value : 0 
    });
  }

  return (
    <>
      <h2>Simple Vite</h2>
      <div className='flex flex-wrap justify-center items-center h-screen'>
        { MyCom() }
      </div>
      <h1> Main value: {value.value} </h1>
      <button onClick={clickMe}> ClickMe </button>
      <button onClick={Multiplyby5}> Multiplyby5 </button>
    </>
  );
}

export default App;
