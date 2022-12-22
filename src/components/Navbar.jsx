import React, { useContext } from 'react'
import { auth } from '../firebase'
import {signOut} from 'firebase/auth' 
import Search from './Search'
import { AuthContext } from '../Context/AuthContext'

export default function () {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className="logo">Snappy Chat</span>
      <div className="user">

        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logut</button>
      </div>
      
    </div>
  )
}
