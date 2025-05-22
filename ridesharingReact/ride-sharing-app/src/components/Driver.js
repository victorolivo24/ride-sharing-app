import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
function Driver() {
  const [name, setName] = useState("");
  const ruId = localStorage.getItem("ruId");
  const [carModel, setCarModel] = useState("");
  const [maxRiders, setMaxRiders] = useState(1);
  const [routes, setRoutes] = useState([{ fromCampus: "", toCampus: "", time: "" }]);
  const [message, setMessage] = useState("");
  const campuses = ["Busch", "Livingston", "College Ave", "Cook/Douglas"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const route of routes) {
      const driver = {
        name,
        ruId: parseInt(ruId), // ✅ Convert to number
        vehicle: carModel,
        maxRiders: parseInt(maxRiders),
      };
      

      const routeData = {
        driver,
        fromCampus: route.fromCampus,
        toCampus: route.toCampus,
        time: route.time,
        maxRiders: parseInt(maxRiders),
        riders: [],
      };

      console.log("DEBUG driver object:", driver);
      console.log("DEBUG routeData:", routeData);

      const response = await fetch('http://localhost:8080/api/rides/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routeData),
      });

      if (response.ok) {
        console.log("Route created successfully");
        setMessage("Ride added, awaiting riders.");
      } else {
        console.error('Error creating route');
      }
    }

    setName("");
    setCarModel("");
    setMaxRiders(1);
    setRoutes([{ fromCampus: "", toCampus: "", time: "" }]);
  };

  const handleRouteChange = (index, field, value) => {
    const newRoutes = [...routes];
    newRoutes[index][field] = value;
    setRoutes(newRoutes);
  };

  const handleAddRoute = () => {
    setRoutes([...routes, { fromCampus: "", toCampus: "", time: "" }]);
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Driver Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

       
        <label>Car Make and Model:</label>
        <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} required />

        <label>Max Riders:</label>
        <input
          type="number"
          value={maxRiders}
          onChange={(e) => setMaxRiders(e.target.value)}
          min="1"
          required
        />

        <h3>Routes</h3>
        {routes.map((route, index) => (
          <div key={index}>
            <label>From Campus:</label>
            <select
              value={route.fromCampus}
              onChange={(e) => handleRouteChange(index, 'fromCampus', e.target.value)}
              required
            >
              <option value="">Select campus</option>
              {campuses.map((campus, i) => (
                <option key={i} value={campus}>{campus}</option>
              ))}
            </select>

            <label>To Campus:</label>
            <select
              value={route.toCampus}
              onChange={(e) => handleRouteChange(index, 'toCampus', e.target.value)}
              required
            >
              <option value="">Select campus</option>
              {campuses.map((campus, i) => (
                <option key={i} value={campus}>{campus}</option>
              ))}
            </select>

            <label>Time:</label>
            <input
              type="time"
              value={route.time}
              onChange={(e) => handleRouteChange(index, 'time', e.target.value)}
              required
            />
            
          </div>
        
        ))}

        <button type="button" onClick={handleAddRoute}>Add Another Route</button>
        <button type="submit">Submit Routes</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <Link to="/">Back to Home</Link>
      <Link to="/driver-routes">View My Posted Routes</Link>
    </div>
    </div>
  );
}

export default Driver;
