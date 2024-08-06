import React from 'react'; //student profile information page this is connect to

function Studing() {
  // Example student information
  const studentInfo = {
    name: 'Sidhant Singh',
    enrollmentNumber: '2024ABC123',
    phoneNumber: '+1-234-567-8900',
    yearJoined: '2024',
    currentYear: '1st Year',
    course: 'Computer Science',
    fatherName: 'Rajesh Singh',
    motherName: 'Sita Singh',
    nationality: 'Indian',
    gender: 'Male',
    state: 'Uttar Pradesh'
  };

  // Inline styles for headings and results
  const headingStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#B0B0B0' // Lighter color for heading
  };

  const resultStyle = {
    display: 'block',
    marginBottom: '10px',
    color: '#FFFFFF', // White color for results
    position: 'relative',
    paddingBottom: '5px', // Space for underline
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: '8%',
    bottom: '0',
    width: '80%', // Increase the length of the underline
    height: '1px',
    backgroundColor: '#DFDFDF', // Same color as result text
    transform: 'translateX(-10%)' // Center the underline if needed
  };

  return (
    <div className="container mt-4">
      <div className="card border-0 rounded-4">
        <div className="card-body rounded-4 border-0" style={{ backgroundColor: "#595E77" }}>
          <h2 className="text-center mb-4 text-white">Student Information</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Name:</strong>
                <div style={resultStyle}>
                  {studentInfo.name}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Enrollment Number:</strong>
                <div style={resultStyle}>
                  {studentInfo.enrollmentNumber}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Phone Number:</strong>
                <div style={resultStyle}>
                  {studentInfo.phoneNumber}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Year Joined:</strong>
                <div style={resultStyle}>
                  {studentInfo.yearJoined}
                  <div style={underlineStyle}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Current Year:</strong>
                <div style={resultStyle}>
                  {studentInfo.currentYear}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Course:</strong>
                <div style={resultStyle}>
                  {studentInfo.course}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Father's Name:</strong>
                <div style={resultStyle}>
                  {studentInfo.fatherName}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Mother's Name:</strong>
                <div style={resultStyle}>
                  {studentInfo.motherName}
                  <div style={underlineStyle}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Nationality:</strong>
                <div style={resultStyle}>
                  {studentInfo.nationality}
                  <div style={underlineStyle}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 text-white">
                <strong style={headingStyle}>Gender:</strong>
                <div style={resultStyle}>
                  {studentInfo.gender}
                  <div style={underlineStyle}></div>
                </div>
              </div>
              <div className="mb-3 text-white">
                <strong style={headingStyle}>State:</strong>
                <div style={resultStyle}>
                  {studentInfo.state}
                  <div style={underlineStyle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studing;
