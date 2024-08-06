import React from 'react'
import { logo } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react';


function Nav() {
  const [activeIndex, setActiveIndex] = useState(null);
  

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    
  };
    
    
  return (
    <nav className="navbar navbar-light  "style={{backgroundColor:"#22284A"}}>
        <div className='w-100 d-flex justify-content-between'>
    <div className="container-fluid mx-3 ">
      <a className="navbar-brand " href="#">
        <img src={logo} alt="" width="60" height="60" className="mx-4"/>
      </a>
    </div>
    <div className='d-flex my-3 '>
      
      
        <Link name="" id="1" className="btn text-white "  onClick={() => handleClick(1)}  style={{backgroundColor: activeIndex === 1? '#0d6efd' : '#595E77' }} to="/login" role="button">Login</Link>
        <Link name="" id="2" className="btn  mx-4 text-white"  onClick={() => handleClick(2)} style={{backgroundColor: activeIndex === 2? '#0d6efd' : '#595E77' }} to="/" role="button">Home</Link>
        
    </div>
    </div>
  </nav>
  )
}
export default Nav