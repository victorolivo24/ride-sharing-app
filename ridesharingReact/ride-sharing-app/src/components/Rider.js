import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

function Rider() {
  const [name, setName] = useState("");
  const ruId = localStorage.getItem("ruId"); // auto-filled from login
  const [fromCampus, setFromCampus] = useState("");
  const [toCampus, setToCampus] = useState("");
  const [time, setTime] = useState("");
  const [routes, setRoutes] = useState([]);
  const campuses = ["Busch", "Livingston", "College Ave", "Cook/Douglas"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/rides/search?fromCampus=${fromCampus}&toCampus=${toCampus}`);
    if (response.ok) {
      const data = await response.json();
      setRoutes(Object.values(data));
    } else {
      console.error('Error fetching routes');
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Rider Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>From Campus:</label>
        <select value={fromCampus} onChange={(e) => setFromCampus(e.target.value)} required>
          <option value="">Select campus</option>
          {campuses.map((campus, i) => (
            <option key={i} value={campus}>{campus}</option>
          ))}
        </select>

        <label>To Campus:</label>
        <select value={toCampus} onChange={(e) => setToCampus(e.target.value)} required>
          <option value="">Select campus</option>
          {campuses.map((campus, i) => (
            <option key={i} value={campus}>{campus}</option>
          ))}
        </select>

        <label>Class Start Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <button type="submit">Find Routes</button>
      </form>

      <h3>Available Routes</h3>
      {routes.length > 0 ? (
        <RoutesList routes={routes} riderName={name} ruId={ruId} />
      ) : (
        <p>No routes available</p>
      )}

    <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
      <Link to="/">Back to Home</Link>
      <Link to="/my-rides">View My Upcoming Rides</Link>
    </div>

    </div>
    </div>
  );
}

export default Rider;
