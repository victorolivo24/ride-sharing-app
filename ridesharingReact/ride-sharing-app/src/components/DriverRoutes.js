import React, { useState } from 'react';
import NavBar from './NavBar';

function DriverRoutes() {
  const driverId = localStorage.getItem("ruId");
  const [routes, setRoutes] = useState([]);

  const fetchDriverRoutes = async () => {
    const response = await fetch(`http://localhost:8080/api/rides/driver-routes?ruId=${driverId}`);
    if (response.ok) {
      const data = await response.json();
      setRoutes(data);
    } else {
      console.error("Failed to fetch driver routes.");
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Your Posted Routes</h2>
      <button onClick={fetchDriverRoutes}>View My Routes</button>

      {routes.length > 0 ? (
        <ul>
          {routes.map((route, index) => (
            <li key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
              <strong>From:</strong> {route.fromCampus}<br />
              <strong>To:</strong> {route.toCampus}<br />
              <strong>Time:</strong> {route.time}<br />
              <strong>Vehicle:</strong> {route.driver?.vehicle}<br />
              <strong>Riders ({route.riders.length} / {route.maxRiders}):</strong>
              <ul>
                {route.riders.map((rider, i) => (
                  <li key={i}>{rider.name} (RUID: {rider.ruId})</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No routes found.</p>
      )}
    </div>
    </div>
  );
}

export default DriverRoutes;
