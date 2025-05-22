import React, { useState } from 'react';

function RateDriver({ driverRUID }) {
  const [stars, setStars] = useState(5);
  const [message, setMessage] = useState("");

  const submitRating = async () => {
    const response = await fetch("http://localhost:8080/api/rides/rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ driverRUID: parseInt(driverRUID), stars: parseInt(stars) })
    });

    if (response.ok) {
      setMessage("Thanks for rating!");
    } else {
      setMessage("Failed to submit rating.");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <label>Rate your driver:</label><br />
      <select value={stars} onChange={(e) => setStars(e.target.value)}>
        {[1, 2, 3, 4, 5].map(n => (
          <option key={n} value={n}>{n} Star{n > 1 && "s"}</option>
        ))}
      </select>
      <button onClick={submitRating}>Submit Rating</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RateDriver;
