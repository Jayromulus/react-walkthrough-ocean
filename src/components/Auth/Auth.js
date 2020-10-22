import React, { useState } from 'react'
import './Auth.scss'

export default (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, setLogin] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `http://localhost:3791/user/${login ? 'signin' : 'signup'}`
    const body = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }

    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    }).then(r => r.json())
      .then(robj => props.setSessionToken(robj.sessionToken))
  }


  const loginToggle = () => {
    setLogin(!login)
  }

  const signupFields = () => {
    if (!login) {
      return (
        <div>
          <label htmlFor="firstName">First Name</label>
          <br/>
          <input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <form>
      <h1>{ login ? "Login" : "Signup" }</h1>
      <label htmlFor="email">Email</label>
      <br/>
      <input id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input type="password" id="password" value={password} onChange={e => {setPassword(e.target.value); console.log(password)}} />
      <br/>
      {signupFields()}
      <br/>
      <button type="button" onClick={loginToggle}>{ login ? "Need an account? Click here!" : "Already have an account? Click here!" }</button>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

// if login is true, button should have caption "Need an account? Click here!"
// if login is false, button should have caption "Already have an account? Click here!"