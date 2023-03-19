import React , {useState}from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter your text')
  return (
    <div>
   
<div className="mb-3">
<h1>{props.heading}</h1>
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control"  value = {text} id="exampleFormControlTextarea1" rows="8"> </textarea>
  <div className="container my-3"></div>
  <button className="btn btn-primary">Convert to Upper Case</button>
</div>
      
    </div>
  )
}
