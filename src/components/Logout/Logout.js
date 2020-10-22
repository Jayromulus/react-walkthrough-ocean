import React from 'react';
import './Logout.css'
import logoutPic from '../../assets/logout.png'

const Logout = (props) => {

  const logout = () => {
    props.setSessionToken(undefined)
  }


  return(
    <div>
      <img id="logout" className="logout" src={logoutPic} alt="logout" onClick={logout} />
    </div>
  )
}

export default Logout;