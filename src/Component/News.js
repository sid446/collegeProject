import React, { useState, useEffect } from 'react';//news or update on the home page



function News() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static data to use directly
  const staticData = [
    {
      "id": 1,
      "news": "That must be the tenth time I've been arrested for selling deep-fried cigars."
    },
    {
      "id": 2,
      "news": "The underground bunker was filled with chips and candy."
    },
    {
      "id": 3,
      "news": "There have been days when I wished to be separated from my body, but today wasn’t one of those days."
    },
    {
      "id": 4,
      "news": "There have been days when I wished to be separated from my body, but today wasn’t one of those days."
    }
  ];

  useEffect(() => {
    // Simulate data fetching with a timeout
    const fetchData = async () => {
      try {
        // Simulating a network delay
        setTimeout(() => {
          setUsers(staticData);
          setLoading(false);
        }, 1000); // Simulate a delay of 1 second
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<> 
    
    <div className='container'>
      <h5>News :</h5>
      {users.map((user) => (
        <div key={user.id} className="user">
          <div className='border  rounded my-2 pt-3 bg-white'>
            <ul>
          <li className=''>{user.news || 'No news available'}</li>
          </ul>
          </div>
          
        </div>
      ))}
    </div>
    
    </>
  );
}

export default News;
