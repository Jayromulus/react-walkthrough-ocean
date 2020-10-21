import React, { useState } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  //  let sessionToken, function setSessionToken(newVal) { sessionToken = newVal }
  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  const [example, setExample] = useState('');

  
  return (
    <div className="App">
      <Navbar />
      <h1>This is a test of React!</h1>
      {sessionToken}
      <br />
      EXAMPLE OF QUICKER DOM MANIPULATION
      <br />

      <input value={example} onChange={(event) => setExample(event.target.value)} />

      <h3>{example} {"->"} {example.split('').reverse().join('')}</h3>

      
    </div>
  );
}

export default App;
