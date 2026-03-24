import { useCallback, useEffect, useRef, useState } from "react"


function App() {

    const [lenght,setLength]=useState(8)
    const [numbersAllowd,setNumberAllowd]=useState(false)
    const [charAllowd,setCharAllowd]=useState(false)
    const [password,setPassword]=useState("")
    const passwordRef = useRef(null)

    const rendompassword = useCallback(()=>{
          let pass = ""
          let str ="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"

          if(numbersAllowd) str += "0123456789"
          if(charAllowd) str += "`~!@#$%^&*()_+{}[]"

          for (let i = 0; i < lenght; i++) {
            const casr = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(casr)

            setPassword(pass)
            
          }
    },[lenght,numbersAllowd,charAllowd,setPassword])

    const copypassword = useCallback(()=>{
      passwordRef.current?.select(password)
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      rendompassword()
    },[lenght,numbersAllowd,charAllowd])
    console.log(password)
  return (
    <>
      <div className="bg-purple-900 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8">
        <h1 className=" text-4xl text-white text-center my-4">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            placeholder="password"
            value={password}
            className="outline-none bg-white w-full p-1 px-3"
            readOnly 
            ref={passwordRef}
          />
          <button 
          className="bg-blue-600 px-3 py-0.5 shrink-0 text-white"
          onClick={copypassword}
          >copy</button>
        </div>
        <div className="flex texr-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={100}
              value={lenght}
              onChange={(e)=>{setLength(e.target.value)}}
              className="cursor-pointer"
            />
            <label>Length: ({lenght})</label>
            <label><input type="checkbox" 
            defaultChecked={numbersAllowd}
            onClick={()=>{
              setNumberAllowd((prev)=>!prev)
            }}
         /> Numbers</label>
            <label><input type="checkbox"
             defaultChecked={charAllowd}
             onClick={()=>{
              setCharAllowd((prev)=>!prev)
             }}
            /> Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
