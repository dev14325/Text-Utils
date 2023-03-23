import React , {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","succeed")
    }

  
  const handleLoClick = ()=>{
        console.log("LoweCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LpperCase","succeed")
    }
    const handleclearClick = ()=>{
        console.log("clear was clicked")
        let newText = '';
        setText(newText)
        props.showAlert("Text is Cleared","succeed")
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
  
  <textarea className="form-control"  value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'rgb(89 90 167)' : 'white',color : props.mode==='dark'?'white' : '#042743'}} id="exampleFormControlTextarea1" rows="8"> </textarea>
 </div>
  <button disabled = {text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear</button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlerevClick}>Reverse the Text</button>
  <button disabled = {text.length===0} className='btn btn-primary mx-2 my-1' onClick={downloadTxtFile}>Download </button>

      
    </div>

    <div className="container my-3" style={{color : props.mode==='dark'?'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes taken to read the text</p>
        <h2>Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
