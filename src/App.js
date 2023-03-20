import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react , { useState } from 'react';
import Alert from './components/Alert';

// import About from './components/About';


import './App.css';




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{

   setAlert({
    msg : message,
    type : type
   })
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ","succeed")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'black';
      showAlert("Light mode has been enabled ","succeed")
    }
  }
 
  return (
   <> 
 
<Navbar title = "textUtils" mode= {mode} toggle = {toggleMode} aboutTextUtils = "About us"/>
<Alert alert = {alert}/> 
<div className="container my-3" >
  <TextForm heading = "Enter text below to analyze" showAlert= {showAlert} mode= {mode} />
  {/* <About/> */}
</div>


   </>
  );
}

export default App;
