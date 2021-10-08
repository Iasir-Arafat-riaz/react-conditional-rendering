import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './Component/User/User';

function App() {
  const [familiar, setFamiliar]=useState(true)
  const functio=()=>setFamiliar(!familiar)
  return (
    <div className="App">
      <h2>Is Familiar : {familiar.toString()}</h2>
      <button onClick={functio}>Toggle Friend</button>
      <User familiar={familiar}></User>
  
    
    </div>
  );
}

export default App;

//Thanks