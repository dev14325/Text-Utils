import React, { useState } from 'react'

export default function About() {
    const [myStyle , setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'

    })
    const [buttonTxt,setButtonTxt] = useState('Enable dark mode');

    // const process = () =>{
    //     if(myStyle.color==='black'){
    //       setMyStyle({
    //         color : 'white',
    //         backgroundColor : 'black',
    //         border : '1px solid white'
    //       })
    //       setButtonTxt('Enable light mode')
    //     }
    //     else{
    //     setMyStyle({
    //         color : 'black',
    //         backgroundColor : 'white'
    
    //     })
    //     setButtonTxt('Enable dark mode');
    //     }

    // }
  return (
    <div>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Purpose</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Describe the purpose of the website and the text utility tool. For example, you could say that TextUtils is a website that provides a suite of tools to help users manipulate and process text in various ways
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Features</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Highlight the key features of the tool. Mention the different functionalities the tool provides, such as text editing, formatting, and analysis.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Target Audience</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Specify the target audience for the website and the tool. Who would benefit from using TextUtils? Is it geared towards writers, students, professionals, or anyone who works with text on a regular basis?


      </div>
    </div>
  </div>
 
</div>
    </div>
  )
}
