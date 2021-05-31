import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar]=useState(false)
  const functio=()=>setFamiliar(!familiar)
  return (
    <div className="App">
      <h2>Is Familiar : {familiar.toString()}</h2>
      <button onClick={functio}>Toggle Friend</button>
  
    
    </div>
  );
}

export default App;
