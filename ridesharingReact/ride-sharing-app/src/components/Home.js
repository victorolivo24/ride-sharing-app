import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import SignOutButton from './SignOutButton';

function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <SignOutButton />
      <h1>Welcome to the RideSharing App</h1>
      <p>Are you a rider or a driver?</p>
      <div>
        <Link to="/rider">
          <button>Rider</button>
        </Link>
        <Link to="/driver">
          <button>Driver</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;

