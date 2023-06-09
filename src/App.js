import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react , { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import About from './components/About';


import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{

   setAlert({
    msg : message,
    type : type
   })
   setTimeout(() => {
    setAlert(null);
    
   }, 1500);
  }

  const removeClass =  () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')

  }
  const toggleMode = (cls) =>{
    removeClass();
    document.body.classList.add('bg-'+cls);
     
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ","succeed")
      document.title = 'TextUtils -Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'black';
      showAlert("Light mode has been enabled ","succeed")
      document.title = 'TextUtils - Light Mode'
    }
  }
 
  return (
   <> 
   <Router>
 
   <Navbar title = "textUtils" aboutTextUtils='about'  mode= {mode} toggle = {toggleMode} />
<Alert alert = {alert}/> 
<div className="container my-3" >
<Routes>

          <Route exact path="/about" element = {<About mode= {mode} />}>
           
           </Route>
          
        
          
          <Route exact path="/" 
          element  = {<TextForm heading = "Enter text below to analyze" showAlert= {showAlert} mode= {mode} />}>
          </Route>
        </Routes>

 
 
</div>
 {/* <About/> */}
 </Router> 

 

   </>
  );
}

export default App;
