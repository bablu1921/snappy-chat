import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
export default function Login() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/')
    }
  
    catch (err) {
      setErr(true);
      setLoading(false);
    }
  }
  return (
   <div className="formContainer">
    <div className="formWrapper">
        <span className='logo' >Snappy Chat</span>
        <span className='title' >Login</span>
        <form onSubmit={handleSubmit}>
            <input required type="email" placeholder='email' />
            <input required type="password" placeholder='password' />
           
              <button disabled={loading}>{loading?"Signing In":'Login'}</button>
          {loading && <span style={{color:'black'}}>Logging You in please wait...</span>}
            {err && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link>  </p>
    </div>
   </div>
  )
}
