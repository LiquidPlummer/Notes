import { createContext, useState } from 'react'
import './App.css'
import One from './One';
import Two from './Two';

const DataContext = createContext();

function App() {

  const [data, setData] = useState("");
  

  return (
    <DataContext.Provider value={{data, setData}}>
      <One />
      <hr />
      <Two />
    </DataContext.Provider>
  )
}

export default App;
export { DataContext };
