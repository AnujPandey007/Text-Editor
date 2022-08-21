import React,{useState} from 'react';


export default function TextFrom(props) {

  const [text, setText] = useState("Enter text here...");

  const changeToUppercase= ()=>{
    let message = text.toUpperCase();
    setText(message);
  }

  const changeToLowercase=()=>{
    let message = text.toLowerCase();
    setText(message);
  }

  const handleChange=(event)=>{
    let message = event.target.value;
    setText(message);
  }

  const speak = () => {
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
  }

  const saveToStorage = (e)=>{
    localStorage.setItem("Text",text);
    props.setAlert("Saved Text", "success");
  }

  const getFromStorage = (e)=>{
    let message =localStorage.getItem("Text");
    setText(message); 
  }

  const copyText=()=>{
    navigator.clipboard.writeText(text);
    props.setAlert("Text Copied", "success");
  }

  const clearText=()=>{
    setText("");
  }

  return (
    <>
    <div className='container my-3'>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea className={`form-control bg-${props.mode===true? "dark" : "light"} text-${props.mode===true? "light" : "dark"}`} id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-success mx-2 my-2" type="submit" onClick={saveToStorage}>Save Text</button>
        <button className="btn btn-success mx-2 my-2" type="submit" onClick={getFromStorage}>Get Text</button>
        <button className="btn btn-secondary mx-2 my-2" type="submit" onClick={copyText}>Copy Text</button>
        <button className="btn btn-warning mx-2 my-2" type="submit" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-2 my-2" type="submit" onClick={changeToUppercase}>Change To Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" type="submit" onClick={changeToLowercase}>Change To Lowercase</button>
        <button className="btn btn-danger mx-2 my-2" type="submit" onClick={clearText}>Clear Text</button>
        
    </div>
    <div className='container my-3'>
        <h1>Text Details</h1>
        <p>
            Words: {text.split(/\s+/).filter((e)=>{return e.length!=0}).length}, Charachters: {text.length}
        </p>
    </div>
    </>
    
  )

  
}
