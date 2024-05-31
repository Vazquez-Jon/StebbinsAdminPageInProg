import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'

import  '../pageCSS/Login.css'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInFail, setSignInFail] = useState(false);
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setSignInFail(true);
        });
       
    }
 
    return(
        <div className='mainContainer'>
            <main>
                <img src={ require('../assets/bat_horizontalSCCRLarger.png') }
                    className='logoImg'
                />    
                <section className='sectionContainer'>
                    <div>                                                                         
                        <form>                                              
                            <div className='inputContainer'>
                                <label htmlFor="email-address" 
                                className='labels'
                                >
                                    Email address: 
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className='anInput'
                                />
                            </div>
                            <div className='inputContainer'>
                                <label htmlFor="password"
                                    className='labels'
                                >
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className='anInput'
                                />
                            </div>
                            <div className='signInFailContainer'>
                                {signInFail && <p className='signInFailP'>Username or password was incorrect</p>}
                            </div>             
                            <div className='buttonContainer'>
                                <button                                    
                                    onClick={onLogin}
                                    className='button9'                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>                          
                    </div>
                </section>
            </main>
        </div>
    )
}
 
export default Login