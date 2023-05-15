import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      const handleGoogleSignIn = () =>{
        console.log('lmao')
      }
    return (
        <div>
            
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;