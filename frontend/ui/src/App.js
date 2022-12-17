import './App.css';


import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <>
   <div className="begn">  
    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt='logo' className="pic" /><Router>
    <div className="center">
    <h4>To use this app you must be&nbsp;</h4><br></br><h4> logged in to twitter</h4> 
    </div> 
      <div>
       
       
        <div className="center2">
        <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
          <button className="class2">Login</button>
        </a>
        </div>
      </div>
      
    </Router>
    </div></>
    
  );
}
