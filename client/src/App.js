import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homes from "./pages/Homes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import css from "./css.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route exact path="/homes" component={Homes} />
        <Route exact path="/homes/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
