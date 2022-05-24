import React,{useState} from 'react'


function TextForm(props) {
    const handleuperClick=()=>{
        // console.log('upper case was clicked' + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handlelowClick=()=>{
        // console.log('upper case was clicked' + text)
        let newText1=text.toLowerCase();
        setText(newText1)
        props.showAlert("Converted to lower Case","success")
    }
    
    const handlecleartext=()=>{
        // console.log('upper case was clicked' + text)
        let newText='';
        setText(newText)
        props.showAlert("text cleared","success")
        
    }
    const handleChange=(event)=>{
        // console.log('handleChange case was clicked')
        setText(event.target.value)
     
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copped","success")
    }
    const handleExtraSpases=()=>{
        let newText4 = text.split(/[ ]+/);
        setText(newText4.join(" "))
        props.showAlert("Extra Space REMOVED","success")
    }
    
const[text,setText] = useState('');
  return (
      <>
    <div className="container" style={{color:props.mode=="dark"?'white':'#042743'}}>
  <div className="mb-3">
    <h1 htmlFor="My text" className="form-label">{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode=="dark"?'gray':'white',color:props.mode=="dark"?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleuperClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handlecleartext}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={ handleCopy}>Copy text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpases }>Remove Spaces</button>
  </div>
  <div className="container my-3" style={{color:props.mode=="dark"?'white':'#042743'}}>
      <h3>Your Text Summery</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minuts required to read </p>
      <h2>Privew</h2>
      <p>{text.length>0?text:"Enter Something to edit"}</p>
    </div>
  </>
  )
}

export default TextForm