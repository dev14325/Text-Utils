import React , {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

  
  const handleLoClick = ()=>{
        console.log("LoweCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{
        console.log("clear was clicked")
        let newText = '';
        setText(newText)
    }

    const handlerevClick = (event) =>{
        let splitString = text.split("");
        let revArray = splitString.reverse();
        let joinString = revArray.join("");
        setText(joinString);
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}



    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText] = useState('')
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white' : '#042743'}}>
   
<h1 >{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey' : 'white',color : props.mode==='dark'?'white' : '#042743'}} id="exampleFormControlTextarea1" rows="8"> </textarea>
 </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handlerevClick}>Reverse the Text</button>
  <button className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download </button>

      
    </div>

    <div className="container my-3" style={{color : props.mode==='dark'?'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length}Minutes taken to read the text</p>
        <h2>Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
