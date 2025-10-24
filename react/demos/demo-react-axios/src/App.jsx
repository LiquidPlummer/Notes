import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  useEffect(()=>{
      (async ()=>{
      let response = await axios.get(baseURL);
      let body = response.data;
          
      console.log(body);
    })()
    console.log("outside")
  }, [])

  return (
    <>

    </>
  )
}

export default App
