import React, { useState } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import './App.css';

function App() {
  //  let sessionToken, function setSessionToken(newVal) { sessionToken = newVal }
  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);

  
  return (
    <div className="App">
      <Navbar setSessionToken={setSessionToken} />
      { !sessionToken ? <Auth setSessionToken={setSessionToken} /> : <MondayContent sessionToken={sessionToken} /> }
    </div>
  );
}

function MondayContent (props) {

  const [example, setExample] = useState('');

  return (
    <div>
      <h1>This is a test of React!</h1>
      <p>{props.sessionToken}</p>
      <br />
      EXAMPLE OF QUICKER DOM MANIPULATION
      <br />

      <input value={example} onChange={(event) => setExample(event.target.value)} />

      <h3>{example} {"->"} {example.split('').reverse().join('')}</h3>
    </div>
  )
}

export default App;
