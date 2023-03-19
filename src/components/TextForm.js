import React , {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter your text')
  return (
    <div>
   
<div className="mb-3">
<h1>{props.heading}</h1>
  <label htmlFor= "exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control"  value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"> </textarea>
  <div className="container my-3"></div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
</div>
      
    </div>
  )
}