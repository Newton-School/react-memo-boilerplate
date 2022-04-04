import React, { useState } from 'react'
import '../styles/App.css';
import { Footer } from './Footer';
// use the relevant function here to MemoizeFooter
const MemoizedFooter = Footer


const App = () => {
  const [name,setName] = useState('')

  return (
    <div id="main">
        <label>
            Name
             <input value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <MemoizedFooter content={`Copyrights Newton School 2022`} />
    </div>
  )
}


export default App;
