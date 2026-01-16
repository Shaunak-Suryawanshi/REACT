import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter]=useState(0)

 

  const addValue=()=>{

    setCounter(prev =>{

      if(prev < 20){
        return prev + 1;
      }

      return prev;
    })
    
    
  }

  const subValue=()=>{

   setCounter(prev=>{

    if(prev > 0){

      return prev -1;
    }

    return prev;
   })
  }

  const reset=()=>{
    counter = 0;
    setCounter(counter)
  }

  
  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter value :{counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={reset}>Reset</button><br/>
    <br/>
    <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
