import { useState } from 'react'
import './App.css'
import Celcius from './components/Celcius'
import { Fahrenheit } from './components/Fahrenheit'

function App() {
  const [fah, setFah] = useState("")
  const [cel, setCel] = useState("")

    function convertCtoF(cel) {
        // F = C*(9/5)+32
        let f = cel*(9/5)+32;
    }

    function convertFtoC(fah) {
        //C = (F-32)*(5/9)
        let c = fah*(9/5)+32;
    }

  return (
    <>
      <Fahrenheit setInput={convertFtoC} />
      <Celcius setInput={convertCtoF} />
    </>
  )
}

export default App
