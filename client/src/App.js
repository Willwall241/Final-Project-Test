import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ClientForm from "./pages/ClientForm";
import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Client/:id" component={ClientForm} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
