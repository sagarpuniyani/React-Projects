import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor ] = useState('black')

  return (
    <>
    <div className="w-full h-screen duration-200 " style = {{backgroundColor : color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-1 px-2 ">
        <div className="flex flex-wrap justify-center gap-2 rounded-md h-12 bg-white">
          <button className='outline-none px-4 '
              style={{backgroundColor : "red "}} 
              onClick={() => setColor(() => 'red')}>Red</button>
          <button className='outline-none px-4 '
              style={{backgroundColor : "white "}} 
              onClick={() => setColor(() => 'white')}>white</button>
          <button className='outline-none px-4 '
              style={{backgroundColor : "orange "}} 
              onClick={() => setColor(() => 'orange')}
              >orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
