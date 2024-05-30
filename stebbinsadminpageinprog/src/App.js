import './App.css';

import React from 'react';
import Home from './page/Home';
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
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
