import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar]=useState(false)
  return (
    <div className="App">
      <h2>Is Familiar : {familiar.toString()}</h2>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
  
    
    </div>
  );
}

export default App;
