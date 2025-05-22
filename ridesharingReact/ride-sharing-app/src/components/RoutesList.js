import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RoutesList({ routes, riderName, ruId }) {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleRequest = async (route) => {
    const requestBody = {
      riderName: riderName,
      ruId: parseInt(ruId),
      fromCampus: route.fromCampus,
      toCampus: route.toCampus,
      time: route.time
    };

    const response = await fetch('http://localhost:8080/api/rides/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (response.ok) {
      const result = await response.text();
      console.log("Response:", result);

      if (result === "Signed up successfully") {
        setMessage("Ride accepted!");
        setTimeout(() => {
          history.push("/my-rides");
        }, 1000);
      } else {
        setMessage(result); // Route is full or not found
      }
    } else {
      setMessage("An error occurred.");
    }
  };

  return (
    <div>
     
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Available Routes</h2>
      {routes.length > 0 ? (
        <ul>
         {routes.map((route, index) => (
          <li key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <strong>From:</strong> {route.fromCampus} → <strong>{route.toCampus}</strong><br />
            <strong>Time:</strong> {route.time}<br />
            <strong>Driver:</strong> {route.driver?.name} ({route.driver?.vehicle})<br />
            <strong>Rating:</strong> ⭐ {route.driver?.averageRating?.toFixed(1) || "N/A"} / 5<br />
            <button onClick={() => handleRequest(route)}>Accept Ride</button>
          </li>
        ))}

        </ul>
      ) : (
        <p>No routes available</p>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
    </div>
  );
}

export default RoutesList;
