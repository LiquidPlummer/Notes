import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './ChildComponent'

function App() {

  let [testValue, changeTestValue] = useState(0)

  return (
    <>
      <p>This is the parent component!</p><br></br>
      <p>testValue: {testValue}</p>
      <ChildComponent name="Kyle" age={40} testValue={testValue} changeTestValue={changeTestValue}/>
      <button onClick={()=>{changeTestValue(++testValue); console.log(testValue);}}>Click here!</button>
    </>
  )
}

export default App
