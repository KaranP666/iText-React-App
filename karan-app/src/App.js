import './App.css';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';


function App() {
  const [Mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [Alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode=()=>{
    if(Mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
     <Navbar title="iTexts" Mode={Mode} togglemode={togglemode}/>
     <Alerts Alert={Alert} />
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About Mode={Mode}/>
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter text to analyze below!" Mode={Mode}/>
          </Route>
      </Switch>
      </div>
     </Router>
     
  
  </>
  );
}

export default App;
