import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    
  
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutTextUtils}</a>
        </li>
        
      </ul>
      
    </div>
  </div>
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>


</nav>

   
  )
}

Navbar.propTypes ={
    title : PropTypes.string.isRequired,
    aboutTextUtils :  PropTypes.string.isRequired,
    
}

// Navbar.defaultProps= {
//     title :  'kuch bhi',
//     aboutTextUtils : 'about'

// }