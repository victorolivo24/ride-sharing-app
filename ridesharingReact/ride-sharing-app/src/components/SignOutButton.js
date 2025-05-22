// src/components/SignOutButton.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function SignOutButton() {
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("ruId");
    history.push("/signin");
  };

  return (
    <button onClick={handleSignOut} style={{ float: "right", marginTop: "10px" }}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
