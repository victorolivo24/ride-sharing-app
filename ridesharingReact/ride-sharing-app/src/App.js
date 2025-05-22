import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Rider from "./components/Rider";
import Driver from "./components/Driver";
import RoutesList from "./components/RoutesList";
import DriverRoutes from "./components/DriverRoutes";
import MyRides from "./components/MyRides";
import SignIn from "./components/SignIn";

function App() {
  const ruId = localStorage.getItem("ruId");

  // ✅ Redirect to /signin if no RUID and not already on signin page
  if (!ruId && window.location.pathname !== "/signin") {
    window.location.href = "/signin";
    return null; // important to stop rendering
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route exact path="/rider" component={Rider} />
        <Route exact path="/driver" component={Driver} />
        <Route exact path="/routes" component={RoutesList} />
        <Route exact path="/driver-routes" component={DriverRoutes} />
        <Route exact path="/my-rides" component={MyRides} />
      </Switch>
    </Router>
  );
}

export default App;
