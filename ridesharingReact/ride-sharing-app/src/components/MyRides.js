import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import RateDriver from './RateDriver';

function MyRides() {
  const [myRides, setMyRides] = useState([]);
  const ruId = localStorage.getItem("ruId"); // ✅ At top of function

  const fetchMyRides = async () => {
    const response = await fetch(`http://localhost:8080/api/rides/upcoming?ruId=${ruId}`);
    if (response.ok) {
      const data = await response.json();
      setMyRides(data);
    } else {
      console.error("Error fetching upcoming rides.");
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>My Upcoming Rides</h2>

      <button onClick={fetchMyRides}>View Rides</button>

      {myRides.length > 0 ? (
        <ul>
          {myRides.map((route, index) => (
            <li key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
              <strong>From:</strong> {route.fromCampus} → <strong>{route.toCampus}</strong><br />
              <strong>Time:</strong> {route.time}<br />
              <strong>Driver:</strong> {route.driver?.name} ({route.driver?.vehicle})<br />
              <RateDriver driverRUID={route.driver?.ruId} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No rides to show.</p>
      )}

      <Link to="/">Back to Home</Link>
    </div>
    </div>
  );
}

export default MyRides;
