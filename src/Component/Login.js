import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { back, google, apple, jaype, bggg, background } from '../utils';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "88.5vh", backgroundColor: "#595E77" }}>
      <div className='d-flex rounded shadow mb-5' style={{ height: "70vh", width: "50vw", backgroundColor: "#22284A" }}>
        <div className="p-3 fw-bold" style={{ width: "40%", height: "100%", color: "white" }}>
          <h3>Student Login</h3>
          <div className='py-4'>
            <form className='d-flex flex-column'>
              <div className="form-group mb-3">
                <label className='fw-bold mb-2' htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  style={{ width: "100%" }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-2">
                <label className='fw-bold mb-2' htmlFor="exampleInputPassword1">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  style={{ width: "100%" }}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex flex-row justify-content-between">
                <button
                  style={{ width: "20%", color: "black", borderColor: "white" }}
                  className="rounded border my-2"
                  variant="outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
                <Link
                  to="/logined"
                  style={{ width: "25%", height: "35px", color: "white" }}
                  className="btn btn-primary py-0 rounded border-0 my-2"
                >
                  Submit
                </Link>
              </div>
            </form>
            <div className='d-flex align-items-center flex-column'>
              <h7 className='fw-lighter text-secondary' style={{ color: "white" }}>Are You a Faculty Member?</h7>
              <Link
                type="button"
                style={{ height: "30px", width: "8vw", color: "white", borderColor: "white" }}
                className="btn btn-outline-primary p-0"
                to="/flogin"
              >
                Faculty Login
              </Link>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center' style={{ width: "60%", height: "100%" }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${jaype})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
