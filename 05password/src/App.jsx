import { useState , useCallback, useEffect , useRef} from 'react'

import './App.css'

function App() {
  const passRef = useRef(null)
  const [len, setLen ] = useState(8);
  const [numberAllow  , setnumberAllow ] = useState(false);
  const [charAllow  , setcharAllow] = useState(false);
  const [ password , setpassword ] =useState('');

  const passwordGenerator = useCallback( ()=>{
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllow ) str += "0123456789";
    if (charAllow )  str  += `~!@#$%^&*()_-=+/*?:;`;

    for ( let i=1 ; i <= len ; i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
    }

    setpassword(pass);
  } , [ len , numberAllow ,charAllow , setpassword])

  useEffect( () => {
    passwordGenerator()
  } , [len, numberAllow, charAllow, passwordGenerator])


  const CopytoClib =() =>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 500);
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef }
        />
        <button
        onClick={CopytoClib}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={25}
        value={length}
          className='cursor-pointer'
          onChange={(e) => {setLen(e.target.value)}}
          />
          <label>Length: {len }</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={() => {
            setnumberAllow((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                setcharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
