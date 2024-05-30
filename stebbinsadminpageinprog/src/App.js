import './App.css';

import React from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 //
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
