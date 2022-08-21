import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState(false);
  const [customAlert, setCustomAlert] = useState(null);

  const setAlert=(message, type)=>{
    let alertObject = {
      message: message,
      type: type
    }
    setCustomAlert(alertObject);

    setTimeout(() => {
      setCustomAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode){
      setMode(false);
      setAlert("Dark Mode Disabled", "success");
      document.title="Janatig Text Light";
    }else{
      setMode(true);
      setAlert("Dark Mode Enabled", "success");
      document.title="Janatig Text Dark";
    }
  };

  return (
    <>
    <Router>

    <Navbar title={"Home"} title2="About" mode={mode} toggleMode = {toggleMode}/>
    <Alert customAlert={customAlert}/>

    <Routes>
      <Route path="/" element={<TextFrom heading = "Type Below" mode={mode} setAlert={setAlert}/>} ></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>


    </Router>
    </>
  );
}

export default App;
