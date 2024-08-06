import React, { useState } from 'react'
import { arrowRight, arrowLef,prof,logout} from '../utils'
import { Link } from 'react-router-dom';




function Infor() {
  const [activeIndex, setActiveIndex] = useState(null);
  

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    
  };

  return (
    <>
      <div className='container-fluid p-0  d-flex flex-row' style={{minWidth: '180px',maxWidth: '180px'}}>
        
        <div className=" d-flex p-2 flex-column justify-content-between align-items-center rounded-4" style={{ width: '', minWidth: '180px', maxWidth: '180px', height: "85vh",backgroundColor:"#22284A" }}>




          <div>
          <div className='bg-white d-flex flex-column justify-content-center align-items-center rounded-4 bg-opacity-25 ' style={{width:"150px",height:"150px"}} >
        <div className='rounded-circle bg-black my-1 d-flex justify-content-center align-items-center ' style={{width:"100px",height:"100px"}}>
          <Link to="/logined"><img className='rounded-circle' style={{width:"100px",height:"100px"}} src={prof}></img></Link>

          

        </div>
        <h6 className='text-white'>Sidhant Singh</h6>
        </div>

        <div className='py-3'>

          <Link to="/attendance"
            className='my-2 d-flex justify-content-between align-items-center  p-1 px-3 rounded'
            onClick={() => handleClick(1)}
            style={{ textDecoration: 'none',backgroundColor: activeIndex === 1? '#0d6efd' : '#595E77' }}
          >
            <span  style={{color: 'white' }} >My Attendance</span>
            
          </Link>
          <a
            className='my-2 d-flex justify-content-between align-items-center  p-1 px-3 rounded'
            onClick={() => handleClick(2)}
            style={{ textDecoration: 'none',backgroundColor: activeIndex === 2 ? '#0d6efd' : '#595E77' }}
          >
            <span className='fs-6'  style={{color: 'white' }}>Feedback</span>
           
          </a>
          </div>
          </div>


          
          <a
            className='my-2 d-flex justify-content-between align-items-center itme px-2 py-1 rounded'
            onClick={() => handleClick(3)}
            style={{ textDecoration: 'none',backgroundColor: activeIndex === 3 ? '#0d6efd' : '#595E77',width:"100px" }}
          >
            <span className='fs-6 px-1 '  style={{color: 'white' }}>Logout</span> 
            <img style={{width:"13px",height:"15x"}} src={logout}></img>
           
          </a>

          
        </div>
        
      </div>
    </>
  );
}

export default Infor;
