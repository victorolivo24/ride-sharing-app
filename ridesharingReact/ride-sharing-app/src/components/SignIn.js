// src/components/SignIn.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const [ruId, setRuId] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ruId.trim()) {
      alert("Please enter your RUID.");
      return;
    }

    localStorage.setItem("ruId", ruId); // ✅ Save RUID globally
    history.push("/"); // Redirect to home
  };

  return (
    <div>
      <h2>Welcome to Commut-ED</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your RUID:</label>
        <input
          type="text"
          value={ruId}
          onChange={(e) => setRuId(e.target.value)}
          placeholder="e.g. 12345"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
