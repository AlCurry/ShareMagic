import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homes from "./pages/Homes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import css from "./css.css";
import Bookings from "./pages/Bookings";



const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route exact path="/homes" component={Homes} />
        <Route exact path="/homes/:id" component={Detail} />
        <Route exact path="/bookings" component={Bookings} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
