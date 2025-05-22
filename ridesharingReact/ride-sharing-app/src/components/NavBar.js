import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import rutgersLogo from '../assets/Rutgers_Scarlet_Knights_logo.svg.png';

function NavBar() {
  return (
    <div>
      {/* Rutgers header with logo */}
      <div style={{
        backgroundColor: "#cc0033",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>Commut-ED</h1>
        <img
          src={rutgersLogo}
          alt="Rutgers Logo"
          style={{ height: "40px" }}
        />
      </div>

      {/* Navigation links and user info */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f5f5f5',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc'
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/">Home</Link>
          <Link to="/rider">Rider</Link>
          <Link to="/driver">Driver</Link>
          <Link to="/my-rides">My Rides</Link>
          <Link to="/driver-routes">Driver Routes</Link>
        </div>
        <div>
          <span style={{ marginRight: "10px" }}>
            RUID: {localStorage.getItem("ruId")}
          </span>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
