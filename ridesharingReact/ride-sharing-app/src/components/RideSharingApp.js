import React, { useState, useEffect } from 'react';
import axios from 'axios';

const campuses = ['Busch', 'College Ave', 'Livingston', 'Cook/Doug'];

function RideSharingApp() {
  const [fromCampus, setFromCampus] = useState('');
  const [toCampus, setToCampus] = useState('');
  const [driverName, setDriverName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [rides, setRides] = useState([]);

  // Fetch available rides from backend
  useEffect(() => {
    axios.get('/api/rides')
      .then((response) => setRides(response.data))
      .catch((error) => console.error('Error fetching rides:', error));
  }, []);

  const handleSubmit = () => {
    const newRide = { fromCampus, toCampus, driverName, vehicle };
    axios.post('/api/rides', newRide)
      .then(() => {
        alert('Ride submitted successfully!');
      })
      .catch((error) => console.error('Error submitting ride:', error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Campus Ride Sharing</h1>

        <input
          type="text"
          placeholder="Driver Name"
          className="w-full mb-3 p-2 border rounded"
          value={driverName}
          onChange={(e) => setDriverName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Vehicle"
          className="w-full mb-3 p-2 border rounded"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />

        <select
          className="w-full mb-3 p-2 border rounded"
          value={fromCampus}
          onChange={(e) => setFromCampus(e.target.value)}
        >
          <option value="">Select From Campus</option>
          {campuses.map((campus) => (
            <option key={campus} value={campus}>{campus}</option>
          ))}
        </select>

        <select
          className="w-full mb-3 p-2 border rounded"
          value={toCampus}
          onChange={(e) => setToCampus(e.target.value)}
        >
          <option value="">Select To Campus</option>
          {campuses.map((campus) => (
            <option key={campus} value={campus}>{campus}</option>
          ))}
        </select>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit Ride
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Available Rides:</h2>
          {rides.map((ride, index) => (
            <div key={index} className="p-3 border rounded mb-2">
              {ride.driverName} driving from {ride.fromCampus} to {ride.toCampus} in a {ride.vehicle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RideSharingApp;
