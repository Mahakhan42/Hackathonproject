import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input_Field } from '../Components/Input_Field';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Config/Firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  const Change_Handle = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  }
  
  const LoginHandle = () => {
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setData({});
        navigate('/Home');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage); // Set error state
        console.error(errorMessage);
      });
  }

  const auth = getAuth(app);
  const Submit_Handle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setData({});
        navigate('/Home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); // Set error state
        console.error(errorMessage);
      });
  }

  return (
    <div className='container' style={{maxWidth:'500px', border:'2px solid red',background:'#fff',marginTop:'70px'}}>
      <div className='form-content'>
        <br />
        <h2 align='center'><b>Login</b></h2><br />
        <form>
          <Input_Field id='email' type='email' onChange={Change_Handle} required={true} placeholder='Email Address' /> <br /><br />
          <Input_Field id='password' type='password' onChange={Change_Handle} required={true} placeholder='Password' /> <br />
          <br />
          <center><button type='submit' onClick={Submit_Handle} className='bg-red text-white hover:bg-red-600' style={{ background: 'red', padding: '10px 20px', border: 'none', width: '50%' }}>Login</button></center>
        </form>
        {error && <div className="text-red-500">{error}</div>} {/* Render error message if error exists */}
        <br />
        <center>
          <span>____OR___</span> 
          <br /><br />
          <button  className='bg-red text-white hover:bg-red-600' style={{ background: 'grey', padding: '10px 20px', border: 'none', width: '50%' }} onClick={LoginHandle}> <b>LogIn With Google</b> </button>
          <br /><br />
          <p>Create Have An Account? <Link to='/'>Signup</Link></p>
        </center>
      </div>
    </div>
  );
}
