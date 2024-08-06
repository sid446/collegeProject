import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { back, google, apple, jaype, background } from '../utils';

function Flogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: "88.5vh", backgroundColor: "#595E77" }}>
        <div
          className='d-flex rounded shadow mb-5'
          style={{
            height: "70vh",
            width: "50vw",
            backgroundColor: "#22284A",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-3 fw-bold" style={{ width: "40%", height: "100%", color: "white" }}>
            <h3>Faculty Login</h3>

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
                    style={{ width: "20%" }}
                    className="rounded border my-2"
                    variant="outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  <button
                    type="submit"
                    style={{ width: "25%", height: "35px" }}
                    className="btn btn-primary py-0 rounded border-0 my-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className='d-flex align-items-center flex-column'>
                <h7 className='fw-lighter text-secondary mx-1' style={{ color: "white" }}>Are You a Student?</h7>
                <Link
                  type="button"
                  style={{ height: "30px", width: "8vw" }}
                  className="btn btn-outline-primary p-0 my-1 mx-2"
                  to="/login"
                >
                  Student Login
                </Link>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center' style={{ width: "60%", height: "100%" }}>
            <div
              className="rounded"
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${jaype})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flogin;
