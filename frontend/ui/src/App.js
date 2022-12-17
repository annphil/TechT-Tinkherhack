import * as React from 'react';

import './App.css';


import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <>
    <div className="center">
    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt='logo' className="pic" /><Router>
    
    <h4>To use this app you must be<br></br> logged in to twitter</h4>  
      <div>
       
       

        <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
          <button>Login</button>
        </a>
      </div>
      
    </Router></div></>
  );
}
