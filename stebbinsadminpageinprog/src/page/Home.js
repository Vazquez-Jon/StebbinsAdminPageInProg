import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import UpdateStatusField from './UpdateStatusField';

import '../pageCSS/Home.css'
 
const Home = () => {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
              navigate("/")
            }
          });
         
    }, [])

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <div className='mainContainer'>
            <nav>
                <img src={ require('../assets/bat_horizontalSCCRLarger.png') }
                    className='logoImg'
                />
                {<UpdateStatusField/>}
                <div>
        			<button onClick={handleLogout}
                        className='buttonLogout'
                    >
                        Logout
                    </button>
        		</div>
            </nav>
        </div>
    )
}
 
export default Home;