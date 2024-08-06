import React from 'react';
import Studing from './info/Studing';
import FalcultyInfo from './info/FalcultyInfo';

function StudentProfile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      
      {/* Left Column */}
      <div
        style={{
          backgroundColor: "#22284A",
          width: "62vw",
          height: "85vh",
          overflow: "hidden", // Hide scrollbar
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: "95%",
            height: "95%",
            overflowY: 'auto', // Enable vertical scrolling
            padding: '1rem'
          }}
        >
          <Studing />
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          backgroundColor: "#22284A",
          width: "22vw",
          height: "85vh",
          borderRadius: '8px',
          padding: '1rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden' // Hide scrollbar
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Faculty Assigned</h2>
        <div
          style={{
            width: '100%',
            height: 'calc(100% - 3rem)', // Adjust based on the heading and padding
            overflowY: 'auto', // Enable vertical scrolling
            padding: '1rem',
            boxSizing: 'border-box' // Include padding in height calculation
          }}
        >
          <FalcultyInfo />
        </div>
      </div>

    </div>
  );
}

export default StudentProfile;
