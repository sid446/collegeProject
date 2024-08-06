import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import Flogin from './Component/Flogin';
import Login from './Component/Login';
import Nav from './Component/Nav';
import ErrorPage from './Component/ErrorPage'; // Import the ErrorPage component
import ErrorBoundary from './Component/ErrorBoundary'; // Import the ErrorBoundary component
import Home from './Component/Home';
import Infor from './Component/Infor';
import { InertiaPlugin } from 'gsap/all';
import StudentProfile from './Component/StudentProfile';
import Attendance from './Component/Attendance';

function App() {
  // Create the router object with defined routes and error handling
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Nav />
          <Home />
 
        </>
      ),
    },
    {
      path:'/logined',
      element:(
        <>
      <Nav />
      <div className='d-flex py-3 px-3 gap-2'>
      <Infor />
      <StudentProfile />
      </div>
      
      </>)


    }
    ,
    {
      path:"/attendance",
      element:( <>
        <Nav />
        <div className='container-fluid py-3 px-3 d-flex gap-2' >
        <Infor />
        <Attendance/>
        </div>
        
        </>)
    }
    ,
    {
      path: '/login',
      element: (
        <>
          <Nav />
          <Login />
        </>
      ),
    },
    {
      path: '/flogin',
      element: (
        <>
          <Nav />
          <Flogin />
        </>
      ),
    },
    {
      path: '*', // Catch-all route for undefined paths
      element: <ErrorPage />,
    },
  ]);

  return (
    <ErrorBoundary>
      <style>
        {`
          /* Global scrollbar styles */
          ::-webkit-scrollbar {
            width: 8px; /* Width of the scrollbar */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #888; /* Color of the scroll thumb */
            border-radius: 4px; /* Rounded corners for the scroll thumb */
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Darker color when hovering */
          }

          /* Ensure this styling applies to all scrollable elements */
          body {
            overflow-y: scroll;
          }
        `}
      </style>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
