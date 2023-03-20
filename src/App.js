import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';


import './App.css';



function App() {
 
  return (
   <> 
 
<Navbar title = "textUtils" aboutTextUtils = "about us"/>
<div className="container my-3" >
  {/* <TextForm heading = "Enter text below to analyze"/> */}
  <About/>
</div>

{/* <Navbar/> */}
   </>
  );
}

export default App;
