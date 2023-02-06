import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () =>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClrClick = () =>{
    console.log("Clear was clicked");
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) =>{
    console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = () =>{

    console.log("Copy")
    var text = document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);

  }

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>



    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>

    </>
  )
}
