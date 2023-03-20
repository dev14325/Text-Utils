import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react , { useState } from 'react';

// import About from './components/About';


import './App.css';




function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'black';
    }
  }
 
  return (
   <> 
 
<Navbar title = "textUtils" mode= {mode} toggle = {toggleMode} aboutTextUtils = "About us"/>
<div className="container my-3" >
  <TextForm heading = "Enter text below to analyze" mode= {mode} />
  {/* <About/> */}
</div>

<Navbar/>
   </>
  );
}

export default App;
